import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          YMYO-Bets
        </Link>
        <div>
          <Link href="/sports" className="mr-4 hover:underline">
            Sports
          </Link>
          {session ? (
            <>
              <Link href="/dashboard" className="mr-4 hover:underline">
                Dashboard
              </Link>
              <button onClick={() => signOut()} className="hover:underline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="mr-4 hover:underline">
                Login
              </Link>
              <Link href="/register" className="hover:underline">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
