export async function scrapeProduct(asin: string) {
  const url = `http://api.axesso.de/amz/amazon-lookup-product?url=https://www.amazon.com/dp/${asin}?psc=1`;
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "axesso-api-key": "bcab693c17834e7fb2bb739491562814",
    },
  });

  if (!res.ok) {
    console.log("API error", res.status);
    return null;
  }

  const data = await res.json();

  return {
    amazonId: data.asin || asin,
    title: data.productTitle || "",
    img: data.imageUrlList?.[0] || "",
    price: Math.round(parseFloat(data.price) * 100) || 0,
    reviewsCount: data.countReview || 0,
    reviewsAverageRating: parseFloat(data.productRating?.split(" ")[0]) || 0,
  };
}