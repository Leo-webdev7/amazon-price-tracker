import{ListIcon, CirclePlusIcon, BellDotIcon} from "lucide-react"
import Link from "next/link";

export default function Sidebar () {
    return ( 
        <aside 
            style={{minHeight:`calc(100vh - 80px)`}}
            className="bg-white rounded-2xl p-4 h-full">
            <h2 className="uppercase text-gray-600 text-sm font-extrabold mb-2">Navigation</h2>
            <nav className="flex flex-col gap-2 *:flex *:gap-1 *:items-center">
                <Link href={'/electronics'}>
                    <ListIcon className="h-5"/>
                    All products
                </Link>
                <Link href={'/electronics'}>
                    <CirclePlusIcon className="h-5"/>
                    Add product
                </Link>
                <Link href={'/electronics'}>
                    <BellDotIcon className="h-5"/>
                    Notifications
                </Link>
            </nav>
        </aside>
    );
}