import {Card} from "@/components/ui/card"
import LineChart from "@/components/LineChart";

export default function DashboardTopCard ({
    title = 'Price',
    value = '29.99'
}) {
    return (
        <Card className="bg-gray-300 pt-4 pb-0">
                    <div className="flex justify-between p-0 pr-0 relative">
                    <div className="absolute top-4 left-8">
                        {title}<br />
                        <span className="font-bold">
                            {value}
                        </span>
                    </div>
                    <div className="grow  -mb-0 h-70 overflow-hidden rounded-b-2xl">
                        <div className="-mx-3">
                        <LineChart />
                        </div>
                    </div>
            </div>
        </Card>
    );
}