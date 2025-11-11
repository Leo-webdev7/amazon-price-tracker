import { prisma } from "@/lib/db";
import { scrapeProduct } from "@/lib/productScraper";
import { isToday } from "date-fns";

export async function GET() {
  try {
    const products = await prisma.product.findMany();

    for (const product of products) {
      // Find the latest history entry for this product
      const latestHistoryDbData = await prisma.productDataHistory.findFirst({
        where: { amazonId: product.amazonId },
        orderBy: { createdAt: "desc" },
      });

      // Skip if today's data already exists
      if (latestHistoryDbData && isToday(latestHistoryDbData.createdAt)) {
        continue;
      }

      // Scrape new product data
      const newProductData = await scrapeProduct(product.amazonId);

      // Insert new data into history
      if (newProductData) {
        await prisma.productDataHistory.create({
          data: {
            amazonId: product.amazonId,
            title: newProductData.title,
            img: newProductData.img,
            price: newProductData.price,
            reviewsCount: newProductData.reviewsCount,
            reviewsAverageRating: newProductData.reviewsAverageRating,
            createdAt: new Date(),
          },
        });
      }
    }

    return new Response("Product data updated successfully", { status: 200 });
  } catch (error) {
    console.error("Error updating product data:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
