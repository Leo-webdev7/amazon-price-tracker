import { auth } from "@/auth";
import LoginForm  from "./LoginView";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Dashboard from "@/components/dashboard";


export default async function Home() {
  const session = await auth();
  const user = session?.user;
  return (
    <div>
        {user && (
          <div className="p-4 h-screen">
            <Header user={user}/>
            <div className="mt-4 grid grid-cols-12 gap-4">
              <div className="col-span-3">
              <Sidebar/>
              </div>
              <div className="col-span-9 bg-#dedede rounded-2xl">
                <Dashboard />
              </div>
            </div>
          </div>
        )}
        {!user && (
          <LoginForm />
        )}
    </div>
  );
}
