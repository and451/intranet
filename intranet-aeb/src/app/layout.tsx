import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      <body className="min-h-full flex flex-col bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6 flex-1">
          <div className="md:w-64 flex-shrink-0">
            <Sidebar />
          </div>
          <main className="flex-1 bg-white shadow-md rounded-lg p-6">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
