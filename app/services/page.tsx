import { TwoColumnSection } from "@/components/TwoColumnSection";

export default function ServicesPage() {
  return (
    <>
      <TwoColumnSection
        imageSrc="/interior-textile.jpg"
        title="室内装飾・資材提供"
        text="カーテン、壁材などに使用される室内装飾繊維資材を国内メーカー・商社に提供。用途に応じた素材選定や加工相談も承ります。"
      />
      <TwoColumnSection
        imageSrc="/jacquard-weave.jpg"
        title="特殊織物（ジャカード・ドビー織）"
        text="自社工場にて広幅織物の生産が可能。ジャカード織やドビー織など、デザイン性と耐久性を兼ね備えた生地を提供しています。"
        reverse
      />
      <TwoColumnSection
        imageSrc="/apparel-materials.jpg"
        title="アパレル・バッグ用資材"
        text="衣料・バッグ向けに、強度・風合い・色味など用途に合わせた資材を提供。OEM・ODMも柔軟に対応いたします。"
      />
    </>
  );
}
