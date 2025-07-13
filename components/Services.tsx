import { Card, CardContent } from "@/components/ui/card";

export function Services() {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">サービス内容</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">室内装飾繊維製品</h3>
            <p className="text-sm text-gray-600">
              カーテン・壁材などに使用される高品質な繊維製品を提供しています。
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">裏装・資材供給</h3>
            <p className="text-sm text-gray-600">
              建築・内装分野向けに安定供給する裏装資材を幅広く扱っています。
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-2">OEM・受託生産</h3>
            <p className="text-sm text-gray-600">
              小ロットから大量生産まで、柔軟な生産体制でOEM対応いたします。
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
