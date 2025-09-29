'use server';

export async function addProduct(productId: string) {
    const response = await fetch("https://scraper-api.decodo.com/v2/scrape", {
    method: "POST",
    body: JSON.stringify({
      "target": "amazon_product",
      "query": productId,
      "domain": "com",
      "parse": true,
      "autoselect_variant": false
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": ""
    },
  })
  .catch(error => console.log(error));
  if (response) {
    const data = await response.json();
    console.log(data);
  }
  return true;
}