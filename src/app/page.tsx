import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"
import Link from "next/link"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      {session ? (
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Welcome, {session.user?.name} 👋</h1>
          <p className="text-gray-600">You're signed in as {session.user?.email}</p>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">You're not signed in</h1>
          <Link
            href="/signin"
            className="text-blue-500 underline text-lg"
          >
            Sign in here
          </Link>
        </div>
      )}
    </main>
  )
}
