// utils/loadLocationData.ts
export async function loadLocationData(slug: string) {
  try {
    const location = await import(`../data/${slug}.json`);
    return location.default;
  } catch {
    return null;
  }
}
