'use client'
import { addProduct } from "@/actions/productActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AddProduct() {
    return (
        <div className="col-span-9 flex items-center">
            <div className="grow max-w-xs mx-auto flex flex-col gap-2">
                <h1 className="font-bold mt-4 text-center">Add Product</h1>
            <form
                action={async (data:FormData) => {
                    console.log(data.get('productId'));
                  await addProduct(data.get('productId') as string);
                }}
            >
                <label className="text-sm" htmlFor="productId">Product ID</label>
                <Input className="bg-white" 
                id="productId"
                name="productId"
                placeholder="Enter product ID, example: B081F1Z9Z7"/>
                <div className="flex justify-center mt-4">
                    <Button type="submit">Add product</Button>
                </div>
            </form>
            </div> 
        </div>
    );
};