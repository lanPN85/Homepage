export function extractPostSlug(url: string): string {
  const parts = url.split('/');
  const year = parts[parts.length - 2];
  const slug = parts[parts.length - 1].split(".")[0];
  return `${year}-${slug}`;
}
