export function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">会社概要</h2>
      <dl className="text-gray-700 space-y-2">
        <div>
          <dt className="font-semibold">会社名</dt>
          <dd>株式会社イノテックス・ジャパン</dd>
        </div>
        <div>
          <dt className="font-semibold">代表者</dt>
          <dd>猪越 悠介</dd>
        </div>
        <div>
          <dt className="font-semibold">所在地</dt>
          <dd>〒326-0844 栃木県足利市鹿島町562</dd>
        </div>
        <div>
          <dt className="font-semibold">事業内容</dt>
          <dd>室内装飾・裏装・資材・繊維製造販売</dd>
        </div>
      </dl>
    </section>
  );
}
