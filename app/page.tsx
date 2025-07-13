export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <header className="border-b mb-6 pb-4">
        <img src="/logo.png" alt="INOTEX JAPAN ロゴ" className="w-32 h-auto mb-2" />
        <h1 className="text-3xl font-bold">INOTEX JAPAN</h1>
        <p className="text-sm">室内装飾・裏装・資材・繊維製造販売</p>
      </header>


      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">会社概要</h2>
        <p>株式会社イノテックス・ジャパンは、栃木県足利市に拠点を置く繊維業の企業です。室内装飾や資材などの製造・販売を行っています。</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">事業内容</h2>
        <ul className="list-disc list-inside">
          <li>室内装飾用の繊維製品の製造・販売</li>
          <li>裏装・資材の提供</li>
          <li>OEM製造・受託生産</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">お問い合わせ</h2>
        <p className="mb-2">代表取締役：猪越 悠介</p>
        <p>〒326-0844 栃木県足利市鹿島町562</p>
        <p>TEL: 0284-65-3011 / FAX: 0284-62-7955</p>
        <p>Email: inotex-japan@orion.ocn.ne.jp</p>
        <p>携帯: 090-2625-2315</p>
      </section>
    </main>
  );
}
