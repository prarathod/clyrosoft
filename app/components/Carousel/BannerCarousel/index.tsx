import Image from "next/image";
import { ClrCarousel } from "../Basic";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const ClrBannerCarousel = () => {
  return (
    <ClrCarousel
      autoplay
      adaptiveHeight
      arrows
      dotPosition="left"
      infinite={false}
    >
      <div>
        <Image src="/clr-banner-1.png" alt="image1" width="1400" height="800" />
      </div>
      <div>
        <Image src="/clr-banner-2.png" alt="image1" width="1400" height="800" />
      </div>
      <div>
        <Image src="/clr-banner-3.png" alt="image1" width="1400" height="800" />
      </div>
      <div>
        <Image src="/clr-banner-4.png" alt="image1" width="1400" height="800" />
      </div>
    </ClrCarousel>
  );
};
