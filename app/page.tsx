// src/app/page.tsx
import { Hero } from "@/components/Hero";
import { TwoColumnSection } from "@/components/TwoColumnSection";

export default function Home() {
  return (
    <>
      <Hero /> {}

      <TwoColumnSection
        imageSrc="/images/sample.png"
        title="INOTEXのこだわり"
        text="私たちは高品質な繊維製品を国内外に提供しています。熟練の技術と最新の設備で多様なニーズにお応えします。"
      />

      <TwoColumnSection
        imageSrc="./sample2.jpg"
        title="安心の実績"
        text="創業から〇〇年、多くのお客様に信頼されてきた実績があります。"
        reverse
      />
    </>
  );
}