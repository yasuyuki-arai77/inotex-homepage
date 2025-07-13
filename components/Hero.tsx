import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="text-center py-24 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: 'url("/bg-fiber.jpg")' }}
    >
      <img src="/logo.png" alt="INOTEX JAPAN ロゴ" className="mx-auto w-32 h-auto mb-6 bg-white p-2 rounded" />
      <h1 className="text-4xl font-bold mb-2 drop-shadow-md">INOTEX JAPAN</h1>
      <p className="text-lg mb-6 drop-shadow">室内装飾・裏装・資材・繊維製造販売</p>
      <Button variant="secondary">会社概要を見る</Button>
    </section>

  );
}
