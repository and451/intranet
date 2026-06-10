import { auth } from "@/auth";
import { NextResponse } from "next/server";

const GRAPH_BASE = "https://graph.microsoft.com/v1.0";

export async function GET() {
  const session = await auth();
  if (!session?.accessToken) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  try {
    // Primeiro: buscar chats do usuário
    const chatsRes = await fetch(
      `${GRAPH_BASE}/me/chats?$top=10`,
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );

    if (!chatsRes.ok) {
      const error = await chatsRes.text();
      return NextResponse.json(
        { error: "Erro na API do Graph (chats)", details: error },
        { status: chatsRes.status }
      );
    }

    const chatsData = await chatsRes.json();

    // Para cada chat, buscar últimas mensagens com menções
    const mensagens: unknown[] = [];
    if (chatsData.value) {
      for (const chat of chatsData.value.slice(0, 3)) {
        const msgRes = await fetch(
          `${GRAPH_BASE}/me/chats/${chat.id}/messages?$top=5`,
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );
        if (msgRes.ok) {
          const msgData = await msgRes.json();
          mensagens.push(...(msgData.value || []));
        }
      }
    }

    return NextResponse.json({ chats: chatsData.value, mensagens });
  } catch (err) {
    return NextResponse.json(
      { error: "Falha ao buscar Teams", details: String(err) },
      { status: 500 }
    );
  }
}
