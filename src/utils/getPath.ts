const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function getPath(path = "/") {
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith("#")) return path;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!base) return normalizedPath;
  if (normalizedPath === "/") return `${base}/`;

  return `${base}${normalizedPath}`;
}
