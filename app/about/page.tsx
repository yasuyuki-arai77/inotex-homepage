export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold border-b-4 border-[#888] inline-block pb-1 mb-6">会社概要</h1>

      <div className="space-y-4 text-lg leading-relaxed">
        <p>
          株式会社イノテックス・ジャパンは、寝装寝具製造用資材やアパレル資材、バッグ資材などの製造・販売を手がけるメーカーです。
        </p>

        <p>
          特殊織維生地や広巾織物製造販売（ジャガード織・ドビー織）など、多様なニーズに対応し、高品質な製品を提供しています。
        </p>

        <table className="w-full mt-8text-sm">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-2 bg-gray-100 w-1/3 border-b-2 border-blue-500">会社名</th>
              <td className="p-2 border-b border-gray-300">株式会社イノテックス・ジャパン</td>
            </tr>
            <tr className="border-b">
              <th className="text-left p-2 bg-gray-100 w-1/3 border-b-2 border-blue-500">設立</th>
              <td className="p-2 border-b border-gray-300">2000年1月</td>
            </tr>
            <tr className="border-b">
              <th className="text-left p-2 bg-gray-100 w-1/3 border-b-2 border-blue-500">資本金</th>
              <td className="p-2 border-b border-gray-300">1,000万円</td>
            </tr>
            <tr className="border-b">
              <th className="text-left p-2 bg-gray-100 w-1/3 border-b-2 border-blue-500">従業員数</th>
              <td className="p-2 border-b border-gray-300">5人</td>
            </tr>
            <tr className="border-b">
              <th className="text-left p-2 bg-gray-100 w-1/3 border-b-2 border-blue-500">取引先</th>
              <td className="p-2 border-b border-gray-300">
                国内有名ベッドメーカー、資材卸メーカー、国内商社、アパレルメーカー
              </td>
            </tr>
            <tr>
              <th className="text-left p-2 bg-gray-100 w-1/3 border-b-2 border-blue-500">事業内容</th>
              <td className="p-2 border-b border-gray-300">
                寝装寝具製造用資材、アパレル資材、バッグ資材、特殊織維生地、広巾織物製造販売（ジャガード織・ドビー織）
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
