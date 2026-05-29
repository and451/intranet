import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "INTRAEB — Intranet da AEB",
  description: "Intranet da Agência Espacial Brasileira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex bg-[#f0f0eb]">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-full ml-0 md:ml-64">
          <Header />
          <main className="flex-1 p-6 md:p-8">
            <div className="max-w-6xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
