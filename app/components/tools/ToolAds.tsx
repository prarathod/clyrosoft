// Server component — ad placement zones for Google AdSense and future networks.
//
// STRATEGY:
//   Zone 1 "banner-top"    — Leaderboard (728×90 desktop / 320×50 mobile).
//                            Placed BELOW the hero and BEFORE the tool.
//                            Google allows ads above content if content is still accessible.
//                            DO NOT place above the fold before the tool on mobile.
//
//   Zone 2 "in-content"    — Rectangle (336×280 or responsive).
//                            Placed BETWEEN the tool result and the FAQ/content sections.
//                            Highest CTR position — user has finished the task.
//
//   Zone 3 "banner-bottom" — Leaderboard — placed before the footer.
//                            Lowest CTR but easy passive income.
//
// SEO SAFETY:
//   - Never block content with ads (Google penalises mobile interstitials).
//   - Ads must not be the first thing a mobile user sees.
//   - Do not place more than 3 ad units per page initially.
//
// ACTIVATION:
//   1. Get AdSense approval (requires real content — not Lorem Ipsum).
//   2. Create ad units in AdSense dashboard.
//   3. Replace the <ins> placeholders below with your actual data-ad-slot values.
//   4. Remove the `disabled` prop from the zones you want active.

type AdZone = "banner-top" | "in-content" | "banner-bottom";

type Props = {
  zone: AdZone;
  /** Set to false to activate. Leave true while waiting for AdSense approval. */
  disabled?: boolean;
};

// Your AdSense publisher ID — replace with your own after approval
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-XXXXXXXXXX";

const adSlots: Record<AdZone, string> = {
  "banner-top": "1234567890",    // Replace with your actual ad slot IDs
  "in-content": "0987654321",
  "banner-bottom": "1122334455",
};

const adSizes: Record<AdZone, string> = {
  "banner-top": "min-h-[50px] sm:min-h-[90px]",
  "in-content": "min-h-[250px] sm:min-h-[280px]",
  "banner-bottom": "min-h-[50px] sm:min-h-[90px]",
};

export default function ToolAds({ zone, disabled = true }: Props) {
  // During development or before AdSense approval: render nothing.
  // This keeps the page layout clean and avoids CLS.
  if (disabled) return null;

  return (
    <div
      className={`w-full flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden my-4 ${adSizes[zone]}`}
      aria-label="Advertisement"
    >
      {/*
        Replace this <ins> tag with your actual AdSense auto-ad code after approval.
        The data-ad-slot must match the slot you created in AdSense dashboard.
      */}
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={adSlots[zone]}
        data-ad-format={zone === "in-content" ? "rectangle" : "horizontal"}
        data-full-width-responsive="true"
      />
      {/*
        You need to call (adsbygoogle = window.adsbygoogle || []).push({})
        after the ins tag. Add this to your root layout once AdSense is approved:

        <Script
          id="adsense"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      */}
    </div>
  );
}
