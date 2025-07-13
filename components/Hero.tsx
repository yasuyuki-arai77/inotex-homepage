import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="text-center py-16">
      <img src="/logo.png" alt="INOTEX JAPAN ロゴ" className="mx-auto w-32 h-auto mb-4" />
      <h1 className="text-4xl font-bold mb-2">INOTEX JAPAN</h1>
      <p className="text-lg text-gray-600 mb-6">室内装飾・裏装・資材・繊維製造販売</p>
      <Button>会社概要を見る</Button>
    </section>
  );
}
