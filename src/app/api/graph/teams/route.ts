import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.accessToken) {
    return NextResponse.json({ error: "Nao autenticado" }, { status: 401 });
  }

  try {
    const res = await fetch(
      "https://graph.microsoft.com/v1.0/me/chats?$top=5",
      {
        headers: { Authorization: `Bearer ${session.accessToken}` },
      }
    );

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err }, { status: res.status });
    }

    const chats = await res.json();
    const mensagens: unknown[] = [];

    for (const chat of chats.value?.slice(0, 3) || []) {
      const msgRes = await fetch(
        `https://graph.microsoft.com/v1.0/me/chats/${chat.id}/messages?$top=2`,
        {
          headers: { Authorization: `Bearer ${session.accessToken}` },
        }
      );
      if (msgRes.ok) {
        const msgs = await msgRes.json();
        mensagens.push(...(msgs.value || []));
      }
    }

    return NextResponse.json({ mensagens: mensagens.slice(0, 5) });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
