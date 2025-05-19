import Link from "next/link";
import { signOut} from "@/auth";
import { ChartNoAxesCombinedIcon, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { User } from "next-auth";
import { Input } from "@/components/ui/input";




export default async function Header({user}:{user:User}) {
    if (!user) return '';
    return (
        <header className="flex justify-between items-center">
              <Link href="" className="flex gap-1 items-center">
              <ChartNoAxesCombinedIcon />
                  AmazonPriceTracker
              </Link>
              <div className="flex gap-4 items-center">
                <div className="flex bg-gray-50 rounded-md items-center relative">
                    <SearchIcon className="absolute left-2 pointer-events-none text-gray-600" />
                    <Input placeholder="Search..." className=" hadow-none border-0 bg-gray-50 gap-4 pl-8"/>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src={user.image || undefined} />
                      <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <form action={async () => {
                          'use server';
                          await signOut();
                        }}>
                          <button className="py-0">
                            Logout
                          </button>
                        </form>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>
    );
}