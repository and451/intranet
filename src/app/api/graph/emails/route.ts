import { auth } from "@/auth";
import { NextResponse } from "next/server";

const GRAPH_BASE = "https://graph.microsoft.com/v1.0";

export async function GET() {
  const session = await auth();
  if (!session?.accessToken) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  try {
    const res = await fetch(
      `${GRAPH_BASE}/me/messages?$filter=isRead eq false&$top=5&$select=subject,sender,receivedDateTime,bodyPreview,isRead`,
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );

    if (!res.ok) {
      const error = await res.text();
      return NextResponse.json(
        { error: "Erro na API do Graph", details: error },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Falha ao buscar e-mails", details: String(err) },
      { status: 500 }
    );
  }
}
