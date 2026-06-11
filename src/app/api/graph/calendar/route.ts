import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.accessToken) {
    return NextResponse.json({ error: "Nao autenticado" }, { status: 401 });
  }

  const hoje = new Date().toISOString().slice(0, 10);
  const amanha = new Date(Date.now() + 86400000).toISOString().slice(0, 10);

  try {
    const res = await fetch(
      `https://graph.microsoft.com/v1.0/me/calendarView?startDateTime=${hoje}T00:00:00Z&endDateTime=${amanha}T23:59:59Z&$select=subject,start,end,location,onlineMeeting&$top=10`,
      {
        headers: { Authorization: `Bearer ${session.accessToken}` },
      }
    );

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
