import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">お問い合わせ</h2>
      <div className="text-center space-y-2 text-gray-700">
        <p>代表取締役：猪越 悠介</p>
        <p>〒326-0844 栃木県足利市鹿島町562</p>
        <p>TEL: 0284-65-3011</p>
        <p>FAX: 0284-62-7955</p>
        <p>Email: inotex-japan@orion.ocn.ne.jp</p>
        <Button variant="outline">メールで連絡する</Button>
      </div>
    </section>
  );
}
