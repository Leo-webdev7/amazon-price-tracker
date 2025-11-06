import { auth } from "@/auth";
import DashboardTopCard from "./DashboardTopCard";
import DashBoardProductCard from "./ui/DashboardProductCard";
import { prisma } from "@/lib/db";
/* import LineChart from "./LineChart";
import { Card } from "./ui/card"; */




export default async function Dashboard () {
    const session = await auth();
    const user = session?.user;
    if (!user || !user.email) {
        return null;
    }
    const products = await prisma.product.findMany({
        where: {
            userEmail: user.email
        }
    })
    return(
        <div>
            <h1 className="font-bold m-4">Dashboard</h1>
            <div className="grid grid-cols-3 *:col-span-1 gap-4 m-4">
                <DashboardTopCard title="Price" value="$29.99" />
                <DashboardTopCard title="Reviews" value="4.8" />
                <DashboardTopCard title="Rank" value="352" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                {products.map(product => (
                    <DashBoardProductCard key={product.id} product = {product} /> 
                ))}
            </div>
        </div>
    );
}