// src/components/Hero.tsx
export const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white bg-cover bg-center bg-[url('/images/hero.jpg')]">
      <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          室内装飾・繊維資材のトータルサポート
        </h1>
        <p className="text-lg md:text-xl mb-6">
          INOTEX JAPANは空間と衣を彩る素材を届けます
        </p>
        <a
          href="/contact"
          className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition"
        >
          お問い合わせはこちら
        </a>
      </div>
    </section>
  );
};
