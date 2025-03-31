const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

export function getImageUrl(path, size = "w500") {
  return path ? `${IMAGE_BASE_URL}${size}${path}` : null;
}
