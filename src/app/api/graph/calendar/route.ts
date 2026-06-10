import { auth } from "@/auth";
import { NextResponse } from "next/server";

const GRAPH_BASE = "https://graph.microsoft.com/v1.0";

export async function GET() {
  const session = await auth();
  if (!session?.accessToken) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const now = new Date();
  const endOfDay = new Date(now);
  endOfDay.setHours(23, 59, 59, 999);

  try {
    const res = await fetch(
      `${GRAPH_BASE}/me/calendarview?startDateTime=${now.toISOString()}&endDateTime=${endOfDay.toISOString()}&$select=subject,start,end,location,onlineMeeting`,
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
      { error: "Falha ao buscar agenda", details: String(err) },
      { status: 500 }
    );
  }
}
