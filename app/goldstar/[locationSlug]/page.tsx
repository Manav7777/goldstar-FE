import { notFound } from "next/navigation";
import { loadComponent } from "@/utils/dynamicComponent";
import "./LocationDetail.css";
import { Metadata } from "next";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { locationSlug } = params;

  const location = await loadLocationData(locationSlug);
  if (!location?.seo) return {};

  const seo = location.seo;

  return {
    title: seo.title || "",
    description: seo.description || "",
    keywords: seo.keywords || [],
    alternates: {
      canonical: seo.canonical || "",
    },
    openGraph: {
      title: seo.openGraph?.title || "",
      description: seo.openGraph?.description || "",
      images: seo.openGraph?.image ? [{ url: seo.openGraph.image }] : [],
      url: seo.canonical || "",
    },
  };
}

export default async function LocationDetail({ params }: { params: any }) {
  const { locationSlug } = params;
  const location = await loadLocationData(locationSlug);

  if (!location) return notFound();

  const components = await Promise.all(
    location.components.map(async (item: any, idx: number) => {
      const DynamicComponent = await loadComponent(item.key);
      if (!DynamicComponent) return null;
      return <DynamicComponent key={idx} {...item.props} />;
    })
  );

  return <main>{components}</main>;
}

async function loadLocationData(slug: string) {
  try {
    const location = await import(`@/data/${slug}.json`);
    return location.default;
  } catch {
    return null;
  }
}
