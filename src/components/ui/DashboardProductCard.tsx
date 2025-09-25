import LineChart from "../LineChart";
import { Card } from "./card";

export default function DashBoardProductCard () {
    return (
        <Card className="py-4 m-4 mb-0 px-4 overflow-hidden">
                    <div className="flex gap-4">
                        <div className="w-48">
                            <img src="https://m.media-amazon.com/images/I/711LjkDxOGL._AC_SY695_.jpg" alt="" />
                        </div>
                        <div className="relative grow -mb-0 flex items-end">
                            <div className="absolute w-full top-0">
                                <h3 className="font-bold">Rolex Submariner Black Dial Oystersteel 40mm Men&apos;s Watch 114060</h3>
                            <h4>$12,750.00</h4>
                            <h5 className="text-xs text-red-400">
                                4 hours ago
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
