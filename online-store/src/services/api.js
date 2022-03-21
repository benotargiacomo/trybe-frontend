async function apiFetch(fetchURL) {
  const apiMercado = await fetch(fetchURL);
  const response = await apiMercado.json();
  return response;
}

export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  return apiFetch(URL);
}

export async function getProductsFromCategoryAndQuery(...args) {
  const queryURL = `https://api.mercadolibre.com/sites/MLB/search?q=${args[0]}`;
  const categoryQueryURL = `https://api.mercadolibre.com/sites/MLB/search?category=${args[1]}&q=${args[0]}`;

  if (args.length === 2) return apiFetch(categoryQueryURL);

  return apiFetch(queryURL);
}
