import DashboardTopCard from "./DashboardTopCard";
import DashBoardProductCard from "./ui/DashboardProductCard";
/* import LineChart from "./LineChart";
import { Card } from "./ui/card"; */




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
                <DashBoardProductCard />
                
            </div>
        </div>
    );
}