'use client';
import { Product } from "../../../generated/prisma";
import LineChart from "../LineChart";
import { Card } from "./card";
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addDefaultLocale(en);
import TimeAgo from 'javascript-time-ago';

export default function DashBoardProductCard ({product}:{product:Product}) {
    return (
        <Card className="py-4 m-4 mb-0 px-4 overflow-hidden">
                    <div className="flex gap-4">
                        <div className="w-48 h-48 flex justify-center items-center">
                            <img src={product.img} className="max-h-48 w-auto" alt="" />
                        </div>
                        <div className="relative grow -mb-0 flex items-end">
                            <div className="absolute w-full top-0">
                                <h3 className="font-bold">{product.title}</h3>
                            <h4>{product.price/100}$</h4>
                            <h5 className="text-xs text-red-400">
                                {/* added {new Date(product.createdAt).toLocaleString()} */}
                                <ReactTimeAgo date={product.updatedAt} locale="en-US"/>
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
