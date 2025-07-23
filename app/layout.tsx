import "../styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_JP } from 'next/font/google'

const noto = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '700'] })
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INOTEX JAPAN | 室内装飾・繊維資材メーカー",
  description: "株式会社イノテックス・ジャパンの公式サイト。室内装飾資材、裏装、アパレル・バッグ用繊維資材などの製造販売を行っています。",
  icons: {
    icon: "/favicon.ico", // public 配下に配置
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={noto.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}