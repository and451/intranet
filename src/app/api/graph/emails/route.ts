import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (!session?.accessToken) {
    return NextResponse.json({ error: "Nao autenticado" }, { status: 401 });
  }

  try {
    const res = await fetch(
      "https://graph.microsoft.com/v1.0/me/messages?$top=10&$select=subject,sender,receivedDateTime,bodyPreview,isRead&$filter=isRead eq false",
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
