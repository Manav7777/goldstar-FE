import { notFound } from "next/navigation";
import { loadComponent } from "@/utils/dynamicComponent";
import "./LocationDetail.css";
import { Metadata } from "next";
import { use } from "react";

// Force dynamic rendering
export const dynamic = "force-dynamic";

// Types
interface PageProps {
  params: { locationSlug: string };
}

// Load location JSON file
async function loadLocationData(slug: string) {
  try {
    const location = await import(`@/data/${slug}.json`);
    return location.default;
  } catch {
    return null;
  }
}

// Metadata generation
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {

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

// Page component
export default async function LocationDetail({ params }: PageProps) {
  const { locationSlug } = params;
  const location = await loadLocationData(locationSlug);
  if (!location) return notFound();

  const components = await Promise.all(
    location.components.map(async (item: any, idx: number) => {
      const DynamicComponent = await loadComponent(item.key);
      if (!DynamicComponent) return null;

      const props = { ...item.props };
      return <DynamicComponent key={idx} {...props} />;
    })
  );

  return <main>{components}</main>;
}
