export function getResourceUrl(resource) {
  const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : '';

  return `${baseUrl}/api/${resource}`;
}
