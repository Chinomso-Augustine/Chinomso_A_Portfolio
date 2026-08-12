const assets = import.meta.glob(
  [
    "./assets/**/*.{png,jpg,jpeg,gif,webp,svg,avif}",
    "./assets/**/*.{PNG,JPG,JPEG,GIF,WEBP,SVG,AVIF}",
  ],
  {
  eager: true,
  query: "?url",
  import: "default",
  }
);

export const assetUrl = (...pathSegments) => {
  const path = `./assets/${pathSegments.join("/")}`;
  const url = assets[path];

  if (!url) {
    throw new Error(`Asset not found: ${path}`);
  }

  return url;
};
