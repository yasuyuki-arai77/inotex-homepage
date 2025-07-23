import Link from "next/link";

export function Header() {
  return (
    
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center sticky top-0 z-50">
<p className="text-brand">テストテキスト</p>
<h1 className="text-blue-500 text-3xl font-bold underline">
  Tailwind効いてる？
</h1>
      <Link href="/">
        <img src="/logo.png" alt="ロゴ" className="h-10" />
      </Link>
      <nav className="flex space-x-6 text-gray-700 font-medium text-sm">
        <Link href="/about">会社概要</Link>
        <Link href="/services">サービス</Link>
        <Link href="/contact">お問い合わせ</Link>
      </nav>
    </header>
  );
}
