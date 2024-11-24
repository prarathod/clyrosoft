import Image from "next/image";
import { ClrCarousel } from "../Basic";

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
