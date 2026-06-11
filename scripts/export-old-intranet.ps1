# Exporta todo o conteudo da intranet antiga (WordPress) via REST API
# Saida: ..\..\inspiracao\Intranet-Old (pasta localizada dinamicamente)
$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$apiBase = "https://intranet-old.aeb.gov.br/wp-json/wp/v2"
$siteBase = "https://intranet-old.aeb.gov.br"

# Localiza a pasta de saida sem usar acentos no codigo-fonte
$intranetRoot = (Resolve-Path (Join-Path $PSScriptRoot "..\..\..")).Path
$inspDir = Get-ChildItem $intranetRoot -Directory | Where-Object { $_.Name -like "inspira*" } | Select-Object -First 1
if (-not $inspDir) { throw "Pasta de inspiracao nao encontrada em $intranetRoot" }
$out = Join-Path $inspDir.FullName "Intranet-Old"

$jsonDir   = Join-Path $out "json"
$postsDir  = Join-Path $out "posts-md"
$pagesDir  = Join-Path $out "pages-md"
$imgDir    = Join-Path $out "images"
foreach ($d in @($out, $jsonDir, $postsDir, $pagesDir, $imgDir, (Join-Path $imgDir "featured"), (Join-Path $imgDir "site-assets"))) {
    New-Item -ItemType Directory -Force -Path $d | Out-Null
}

Add-Type -AssemblyName System.Web.Extensions
function ConvertFrom-JsonBig { param([string]$Text)
    $ser = New-Object System.Web.Script.Serialization.JavaScriptSerializer
    $ser.MaxJsonLength = [int]::MaxValue
    $ser.RecursionLimit = 100
    return $ser.DeserializeObject($Text)
}

function Get-AllItems {
    param([string]$Type, [string]$Fields)
    $all = New-Object System.Collections.ArrayList
    $rawPages = New-Object System.Collections.ArrayList
    $page = 1
    while ($true) {
        $url = "$apiBase/$($Type)?per_page=100&page=$page"
        if ($Fields) { $url = $url + "&_fields=$Fields" }
        $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 120
        $text = [System.Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray())
        # Remove lixo injetado por plugins antes do JSON (ex.: <div id='cptapagination-content'>)
        $start = $text.IndexOfAny([char[]]@('[', '{'))
        if ($start -gt 0) { $text = $text.Substring($start) }
        $batch = ConvertFrom-JsonBig $text
        if (-not $batch -or $batch.Count -eq 0) { break }
        [void]$all.AddRange(@($batch))
        [void]$rawPages.Add($text.Trim().TrimStart('[').TrimEnd(']'))
        $totalPages = 1
        if ($r.Headers["X-WP-TotalPages"]) { $totalPages = [int]$r.Headers["X-WP-TotalPages"] }
        Write-Host ("{0}: pagina {1}/{2} - acumulado {3}" -f $Type, $page, $totalPages, $all.Count)
        if ($page -ge $totalPages) { break }
        $page++
        Start-Sleep -Milliseconds 200
    }
    return @{ Items = $all; RawPages = $rawPages }
}

function Save-Json { param($Result, [string]$Name)
    $path = Join-Path $jsonDir $Name
    $combined = "[" + (($Result.RawPages | Where-Object { $_ }) -join ",") + "]"
    [System.IO.File]::WriteAllText($path, $combined, [System.Text.UTF8Encoding]::new($false))
    Write-Host ("Salvo: {0} ({1} itens)" -f $Name, $Result.Items.Count)
}

function Convert-HtmlToMd { param([string]$Html)
    if (-not $Html) { return "" }
    $t = $Html
    $t = [regex]::Replace($t, '<img[^>]*src="([^"]+)"[^>]*>', '![]($1)')
    $t = [regex]::Replace($t, '<a[^>]*href="([^"]+)"[^>]*>(.*?)</a>', '[$2]($1)')
    $t = [regex]::Replace($t, '<br\s*/?>', "`n")
    $t = [regex]::Replace($t, '</p>\s*', "`n`n")
    $t = [regex]::Replace($t, '<li[^>]*>', '- ')
    $t = [regex]::Replace($t, '</li>', "`n")
    $t = [regex]::Replace($t, '<h([1-6])[^>]*>', { param($m) ("#" * [int]$m.Groups[1].Value) + " " })
    $t = [regex]::Replace($t, '</h[1-6]>', "`n`n")
    $t = [regex]::Replace($t, '<[^>]+>', '')
    $t = [System.Net.WebUtility]::HtmlDecode($t)
    $t = [regex]::Replace($t, "(`r?`n){3,}", "`n`n")
    return $t.Trim()
}

function Get-SafeName { param([string]$Name)
    $n = $Name -replace '[\\/:*?"<>|]', '-'
    if ($n.Length -gt 120) { $n = $n.Substring(0, 120) }
    return $n
}

# ---------- 1. Exporta JSON ----------
$catResult = Get-AllItems -Type "categories" -Fields "id,name,slug,count,parent"
Save-Json $catResult "categories.json"
$categories = $catResult.Items

$pagesResult = Get-AllItems -Type "pages" -Fields "id,date,modified,slug,title,content,link,parent,menu_order"
Save-Json $pagesResult "pages.json"
$pages = $pagesResult.Items

$postsResult = Get-AllItems -Type "posts" -Fields "id,date,modified,slug,title,content,excerpt,link,categories,featured_media"
Save-Json $postsResult "posts.json"
$posts = $postsResult.Items

$mediaResult = Get-AllItems -Type "media" -Fields "id,date,slug,title,mime_type,source_url,alt_text,media_details"
Save-Json $mediaResult "media.json"
$media = $mediaResult.Items

# ---------- 2. Converte para Markdown ----------
$catMap = @{}
foreach ($c in $categories) { $catMap[[int]$c.id] = $c.name }

foreach ($p in $posts) {
    $year = $p.date.Substring(0,4)
    $yDir = Join-Path $postsDir $year
    New-Item -ItemType Directory -Force -Path $yDir | Out-Null
    $title = [System.Net.WebUtility]::HtmlDecode($p.title.rendered)
    $cats = @()
    foreach ($cid in $p.categories) { if ($catMap.ContainsKey([int]$cid)) { $cats += $catMap[[int]$cid] } }
    $body = Convert-HtmlToMd $p.content.rendered
    $md = "---`ntitulo: `"$($title -replace '"','''')`"`ndata: $($p.date)`ncategorias: $($cats -join ', ')`nlink_original: $($p.link)`nfeatured_media: $($p.featured_media)`n---`n`n# $title`n`n$body`n"
    $fname = Get-SafeName ("{0}_{1}.md" -f $p.date.Substring(0,10), $p.slug)
    $md | Out-File -FilePath (Join-Path $yDir $fname) -Encoding utf8
}
Write-Host ("Posts convertidos: {0}" -f $posts.Count)

foreach ($pg in $pages) {
    $title = [System.Net.WebUtility]::HtmlDecode($pg.title.rendered)
    $body = Convert-HtmlToMd $pg.content.rendered
    $md = "---`ntitulo: `"$($title -replace '"','''')`"`ndata: $($pg.date)`nlink_original: $($pg.link)`nparent: $($pg.parent)`n---`n`n# $title`n`n$body`n"
    $fname = Get-SafeName ("{0}.md" -f $pg.slug)
    $md | Out-File -FilePath (Join-Path $pagesDir $fname) -Encoding utf8
}
Write-Host ("Paginas convertidas: {0}" -f $pages.Count)

# ---------- 3. Baixa imagens ----------
$mediaMap = @{}
foreach ($m in $media) { $mediaMap[[int]$m.id] = $m }

function Get-DownloadUrl { param($MediaItem)
    # Prefere medium_large para economizar espaco; cai para source_url
    try {
        $ml = $MediaItem.media_details.sizes.medium_large.source_url
        if ($ml) { return $ml }
    } catch {}
    return $MediaItem.source_url
}

$featuredIds = $posts | ForEach-Object { [int]$_.featured_media } | Where-Object { $_ -gt 0 } | Select-Object -Unique
Write-Host ("Imagens destacadas a baixar: {0}" -f $featuredIds.Count)
$ok = 0; $fail = 0
foreach ($fid in $featuredIds) {
    if (-not $mediaMap.ContainsKey($fid)) { continue }
    $m = $mediaMap[$fid]
    if ($m.mime_type -notlike "image/*") { continue }
    $url = Get-DownloadUrl $m
    if (-not $url) { continue }
    $leaf = Get-SafeName ([System.IO.Path]::GetFileName(([uri]$url).LocalPath))
    $dest = Join-Path (Join-Path $imgDir "featured") ("{0}_{1}" -f $fid, $leaf)
    if (Test-Path $dest) { $ok++; continue }
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -UseBasicParsing -TimeoutSec 60
        $ok++
    } catch { $fail++ }
    Start-Sleep -Milliseconds 100
}
Write-Host ("Imagens destacadas: {0} ok, {1} falhas" -f $ok, $fail)

# Assets da home (logos, icones)
$homeResp = Invoke-WebRequest -Uri $siteBase -UseBasicParsing
$homeHtml = [System.Text.Encoding]::UTF8.GetString($homeResp.RawContentStream.ToArray())
$homeHtml | Out-File -FilePath (Join-Path $out "homepage-snapshot.html") -Encoding utf8
$assetUrls = [regex]::Matches($homeHtml, 'https?://intranet-old\.aeb\.gov\.br[^"''\s\)]+?\.(?:png|jpe?g|gif|svg|webp)') | ForEach-Object { $_.Value } | Select-Object -Unique
$ok2 = 0; $fail2 = 0
foreach ($u in $assetUrls) {
    $leaf = Get-SafeName ([System.IO.Path]::GetFileName(([uri]$u).LocalPath))
    $dest = Join-Path (Join-Path $imgDir "site-assets") $leaf
    if (Test-Path $dest) { $ok2++; continue }
    try {
        Invoke-WebRequest -Uri $u -OutFile $dest -UseBasicParsing -TimeoutSec 60
        $ok2++
    } catch { $fail2++ }
}
Write-Host ("Assets da home: {0} ok, {1} falhas" -f $ok2, $fail2)

Write-Host "EXPORTACAO CONCLUIDA em $out"
