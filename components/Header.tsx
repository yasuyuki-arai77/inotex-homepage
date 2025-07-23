// components/Header.tsx
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md">
      {/* ロゴ部分 */}
      <div className="text-2xl font-bold text-gray-800">
        <Link href="/">
          <img src="/logo.png" alt="ロゴ" className="h-10" />
        </Link>
      </div>

      {/* ナビゲーション */}
      <nav className="flex space-x-6 text-gray-700 font-medium text-sm">
        <Link href="/">ホーム</Link>
        <Link href="/about">会社概要</Link>
        <Link href="/services">サービス</Link>
        <Link href="/contact">お問い合わせ</Link>
      </nav>
    </header>
  );
}
