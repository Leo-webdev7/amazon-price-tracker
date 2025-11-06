/* 'use server';

export async function addProduct(productId: string) {
    const response = await fetch("https://api.axesso.de/amz/amazon-lookup-product", {
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
      "Authorization": "bcab693c17834e7fb2bb739491562814"
    },
  })
  .catch(error => console.log(error));
  if (response) {
    const data = await response.json();
    console.log(data);
  }
  return true;
} */


'use server';
import { auth } from "@/auth";
import { prisma } from "../lib/db";

/* import { PrismaClient } from '../../generated/prisma';  */
/* const prisma = new PrismaClient(); // <-- instantiate the client */

export async function addProduct(asin: string) {
  try {
    const session = await auth();
    const user = session?.user;
    if (!user) {
      return false;
    }


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
    console.log(data);

    // Map API response to your Prisma schema
    const product = {
      userEmail: user.email,
      amazonId: data.asin || asin,
      title: data.productTitle || "",
      img: data.imageUrlList?.[0] || "",
      price: parseFloat(data.price) || 0,
      reviewsCount: data.countReview || 0,
      reviewsAverageRating: parseFloat(data.productRating?.split(" ")[0]) || 0,
    };

    const saved = await prisma.product.create({ data: product }); // <-- use prisma instance
    return saved;

  } catch (error) {
    console.log("Fetch error:", error);
    return null;
  }
}

