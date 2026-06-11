import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";

export const metadata: Metadata = {
  title: "INTRAEB — Intranet da AEB",
  description: "Intranet da Agencia Espacial Brasileira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full bg-[#F5F5F5]">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
