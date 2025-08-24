// components/locations/LocationDetailClient.tsx (Client Component)
"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import LocationTopSection from "@/components/locations/LocationTopSection";
import LocationServiceSections from "@/components/locations/LocationServiceSection";
import WhyChooseUs from "@/components/locations/LocationWhyChoose";
import LocationMovingSteps from "@/components/locations/LocationMovingSteps";
import SatisfactionSection from "@/components/locations/SatisfactionSection";
import Faqs from "@/components/Faqs/Faqs";

export default function LocationDetailClient({ location }: { location: any }) {
  const [seoData, setSeoData] = useState(location.seo);

  useEffect(() => {
    // Update SEO data when the location changes
    setSeoData(location.seo);
  }, [location]);

  // Render dynamic components based on location
  const components = location.components.map((item: any, idx: number) => {
    switch (item.key) {
      case "LocationTopSection":
        return <LocationTopSection key={idx} {...item.props} />;
      case "LocationServiceSections":
        return <LocationServiceSections key={idx} {...item.props} />;
      case "WhyChooseUs":
        return <WhyChooseUs key={idx} {...item.props} />;
      case "LocationMovingSteps":
        return <LocationMovingSteps key={idx} {...item.props} />;
      case "SatisfactionSection":
        return <SatisfactionSection key={idx} />;
      case "Faqs":
        return <Faqs key={idx} {...item.props} />;
      default:
        return null;
    }
  });

  // Extract SEO data from the location
  const { seo } = seoData;

  return (
    <main>
      <Head>
        <title>{seo?.title || `${location.cityName} | GoldStar Movers`}</title>
        <meta name="description" content={seo?.description || `${location.cityName} Moving Company`} />
        <meta name="keywords" content={seo?.keywords?.join(", ") || `${location.cityName} movers, moving company`} />
        <meta property="og:title" content={seo?.openGraph?.title || `${location.cityName} Moving Service`} />
        <meta property="og:description" content={seo?.openGraph?.description || `Affordable moving services in ${location.cityName}`} />
        <meta property="og:image" content={seo?.openGraph?.image || "https://example.com/default-image.jpg"} />
        <meta property="og:url" content={seo?.openGraph?.url || `http://localhost:3000/locations/${location.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo?.openGraph?.title || `${location.cityName} Movers`} />
        <meta name="twitter:description" content={seo?.openGraph?.description || `Reliable moving services in ${location.cityName}`} />
        <meta name="twitter:image" content={seo?.openGraph?.image || "https://example.com/default-image.jpg"} />
      </Head>

      {/* Dynamically render components */}
      {components}
    </main>
  );
}
