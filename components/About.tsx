import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6">会社概要</h2>
      <ul className="space-y-2">
        <li>設立年：2000年1月</li>
        <li>資本金：1000万円</li>
        <li>従業員数：5人</li>
        <li>取引先：国内有名ベッドメーカー、資材卸メーカー、国内商社、アパレルメーカー</li>
        <li>
          業務内容：寝装寝具製造用資材、アパレル資材、バッグ資材、特殊繊維生地、
          広巾織物製造販売（ジャガード織・ドビー織）
        </li>
      </ul>
      <div className="mt-6">
        <Button variant="secondary">お問い合わせ</Button>
      </div>
    </section>
  );
}