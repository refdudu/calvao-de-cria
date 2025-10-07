import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppProviders } from "../components/providers";

// Configuração da fonte Roboto como padrão do projeto
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Calvão de Cria",
  description: "Loja online de produtos Calvão de Cria",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body className={`${roboto.variable} antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
