
'use server';
import { auth } from "@/auth";
import { prisma } from "../lib/db";
import { scrapeProduct } from "@/lib/productScraper";


export async function addProduct(asin: string) {
  try {
    const session = await auth();
    const user = session?.user;
    if (!user) return false;

    const productData = await scrapeProduct(asin);
    if (!productData) return null;

    const saved = await prisma.product.create({
      data: {
        ...productData,
        userEmail: user.email,
      },
    });

    return saved;
  } catch (error) {
    console.log("Fetch error:", error);
    return null;
  }
}

