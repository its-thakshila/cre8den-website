/**
 * Dynamically scan the /public/images directory at build time.
 * Vite's import.meta.glob collects all these file paths into a dictionary.
 * We extract the keys (the paths) and strip the '/public' prefix so they
 * resolve correctly as absolute URLs in the browser.
 */
const allImages = import.meta.glob('/public/images/**/*.{png,jpg,jpeg,webp,avif}');
const allImagePaths = Object.keys(allImages).map(path => path.replace('/public', ''));

/**
 * Get all images residing in a specific folder.
 * Example: getImagesForFolder('/images/products/acrylic-photo')
 * 
 * If the folder is empty or doesn't exist, you can optionally provide fallback images.
 */
export function getImagesForFolder(folderPath: string, fallbacks: string[] = []): string[] {
  // Ensure the folder path always starts with a slash
  const normalizedFolder = folderPath.startsWith('/') ? folderPath : `/${folderPath}`;
  
  const matches = allImagePaths.filter(path => path.startsWith(normalizedFolder));
  
  if (matches.length === 0) {
    return fallbacks;
  }
  
  return matches;
}

/**
 * Get the first image found in a folder, useful for grid thumbnails.
 * If no images exist in the folder, falls back to the provided URL.
 */
export function getFirstImageForFolder(folderPath: string, fallbackUrl: string): string {
  const images = getImagesForFolder(folderPath);
  return images.length > 0 ? images[0] : fallbackUrl;
}
