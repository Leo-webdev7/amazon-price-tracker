import { auth } from "@/auth";
import LoginForm  from "./LoginView";
import Header from "@/components/header";


export default async function Home() {
  const session = await auth();
  const user = session?.user;
  return (
    <div>
        {user && (
          <div className="p-4">
            <Header user={user}/>
          </div>
        )}
        {!user && (
          <LoginForm />
        )}
    </div>
  );
}
