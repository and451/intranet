import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  return NextResponse.json({
    authenticated: !!session,
    user: session?.user ?? null,
    hasAccessToken: !!session?.accessToken,
    accessTokenPrefix: session?.accessToken ? session.accessToken.slice(0, 20) + "..." : null,
  });
}
