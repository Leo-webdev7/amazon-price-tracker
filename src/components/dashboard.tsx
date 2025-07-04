import {Card} from "@/components/ui/card";
import LineChart from "./LineChart";



export default function Dashboard () {
    return(
        <div>
            <h1 className="font-bold mb-2">Dashboard</h1>
            <div className="grid grid-cols-3 *:col-span-1 gap-4 m-4">
                <Card className="bg-gray-300 py-4">
                    <div className="flex justify-between pl-4 pr-0">
                    <div>
                        Price<br />
                        <span className="font-bold">
                            29,99
                        </span>
                    </div>
                    <div className="grow">
                        <LineChart />
                    </div>
                    </div>
                </Card>
                <Card className="bg-gray-300">
                    2
                </Card>
                <Card className="bg-gray-300">
                    3
                </Card>
            </div>
        </div>
    );
}