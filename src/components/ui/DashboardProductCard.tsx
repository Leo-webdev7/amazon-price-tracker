import { Product } from "../../../generated/prisma";
import LineChart from "../LineChart";
import { Card } from "./card";

export default function DashBoardProductCard ({product}:{product:Product}) {
    return (
        <Card className="py-4 m-4 mb-0 px-4 overflow-hidden">
                    <div className="flex gap-4">
                        <div className="w-48">
                            <img src={product.img} alt="" />
                        </div>
                        <div className="relative grow -mb-0 flex items-end">
                            <div className="absolute w-full top-0">
                                <h3 className="font-bold">{product.title}</h3>
                            <h4>{product.price.toFixed(2)}$</h4>
                            <h5 className="text-xs text-red-400">
                                added {new Date(product.createdAt).toLocaleString()}
                            </h5>
                            </div>
                            <div className="grow -ml-2 -mr-7">
                                <LineChart />
                            </div>
                        </div>
                    </div>
            </Card>
    )
}
