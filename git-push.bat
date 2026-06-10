@echo off
chcp 65001 >nul
cd /d "C:\Users\anderson.malta\OneDrive - AGÊNCIA ESPACIAL BRASILEIRA\CascadeProjects\Intranet\intranet-main\intranet-aeb"

echo ==========================================
echo  Publicando Intranet no GitHub
echo  Repo: github.com/and451/intranet
echo ==========================================
echo.

git config user.email "252103074@aluno.unb.br"
git config user.name "and451"

git add -A
if %errorlevel% neq 0 (
    echo Erro no git add. Tentando sem README.md e CLAUDE.md...
    if exist README.md move README.md ..\README.md.bak
    if exist CLAUDE.md move CLAUDE.md ..\CLAUDE.md.bak
    git add -A
)

git commit -m "feat: Auth.js + Microsoft Graph integration"
if %errorlevel% neq 0 (
    echo Erro no commit. Verifique se ha arquivos para commitar.
    pause
    exit /b 1
)

git branch -M main

git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    git remote add origin https://github.com/and451/intranet.git
)

echo.
echo Fazendo push para GitHub...
git push -u origin main --force
echo.

if %errorlevel% equ 0 (
    echo ==========================================
    echo  SUCESSO! Codigo publicado.
    echo ==========================================
) else (
    echo ==========================================
    echo  FALHA no push.
    echo  Verifique sua conexao e credenciais GitHub.
    echo ==========================================
)

pause
