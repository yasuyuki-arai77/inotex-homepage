export function Contact() {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">お問い合わせ</h2>
      <div className="text-center text-gray-700 space-y-2">
        <p>代表取締役：猪越 悠介</p>
        <p>〒326-0844 栃木県足利市鹿島町562</p>
        <p>TEL: 0284-65-3011</p>
        <p>FAX: 0284-62-7955</p>
        <p>Email: <a className="text-blue-600 underline" href="mailto:inotex-japan@orion.ocn.ne.jp">inotex-japan@orion.ocn.ne.jp</a></p>
        <iframe
          className="mx-auto mt-4 rounded"
          src="https://www.google.com/maps?q=栃木県足利市鹿島町562&output=embed"
          width="300"
          height="200"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
