import { auth } from "@/auth";
import LoginForm  from "./LoginView"


export default async function Home() {
  const session = await auth();
  const user = session?.user;
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {user && (
          <div>hello {user.name}</div>
        )}
        {!user && (
          <LoginForm />
        )}
      </div>
    </div>
  );
}
