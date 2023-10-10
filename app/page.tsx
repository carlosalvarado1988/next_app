import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="font-bold text-3xl">
        Hello <span>{session?.user!.name || "World"}</span>
      </h1>
    </div>
  );
}
