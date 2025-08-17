import dynamic from "next/dynamic";

// Map component keys to dynamic imports
export const componentMap: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
  LocationTopSection: () => import("@/components/locations/LocationTopSection"),
  LocationServiceSections: () => import("@/components/locations/LocationServiceSection"),
  WhyChooseUs: () => import("@/components/locations/LocationWhyChoose"),
  LocationMovingSteps: () => import("@/components/locations/LocationMovingSteps"),
  SatisfactionSection: () => import("@/components/locations/SatisfactionSection" )
  // add more components as needed
};

// Load React component dynamically by key
export async function loadComponent(key: string) {
  const loader = componentMap[key];
  if (!loader) return null;
  return dynamic(loader);
}
