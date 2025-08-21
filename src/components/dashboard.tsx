import DashboardTopCard from "./DashboardTopCard";
import LineChart from "./LineChart";
import { Card } from "./ui/card";




export default function Dashboard () {
    return(
        <div>
            <h1 className="font-bold m-4">Dashboard</h1>
            <div className="grid grid-cols-3 *:col-span-1 gap-4 m-4">
                <DashboardTopCard title="Price" value="$29.99" />
                <DashboardTopCard title="Reviews" value="4.8" />
                <DashboardTopCard title="Rank" value="352" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Card className="py-4 m-4 px-4">
                    <div className="flex gap-4">
                        <div className="w-48">
                            <img src="https://m.media-amazon.com/images/I/711LjkDxOGL._AC_SY695_.jpg" alt="" />
                        </div>
                        <div className="relative grow -mb-0 flex items-end">
                            <div className="absolute w-full top-0">
                                <h3 className="font-bold">Rolex Submariner Black Dial Oystersteel 40mm Men's Watch 114060</h3>
                            <h4>$12,750.00</h4>
                            <h5 className="text-xs text-red-400">
                                4 hours ago
                            </h5>
                            </div>
                            <div className="grow">
                                <LineChart />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}