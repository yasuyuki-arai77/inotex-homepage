import { TwoColumnSection } from "@/components/TwoColumnSection";

export default function AboutPage() {
  return (
    <>
      <TwoColumnSection
        imageSrc="/about.jpg"
        title="会社概要"
        text="2000年創業の繊維専門メーカー。資材・裏装などを国内大手に提供。"
      />
      <TwoColumnSection
        imageSrc="/factory.jpg"
        title="技術力と対応力"
        text="ジャガード織やドビー織などの広幅織物に対応。OEM・小ロットもOK。"
        reverse
      />
    </>
  );
}
