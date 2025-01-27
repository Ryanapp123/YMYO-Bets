import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to YMYO-Bets</h1>
      <p className="text-xl mb-8">Your Money, Your Odds - Peer-to-Peer Sports Betting</p>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Place Your Bets</h2>
          <p className="mb-4">Propose or accept bets on your favorite sports and teams.</p>
          <Link href="/sports" className="text-blue-600 hover:underline">
            Browse Sports &rarr;
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Manage Your Bets</h2>
          <p className="mb-4">Track your active bets and betting history.</p>
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            View Dashboard &rarr;
          </Link>
        </div>
      </div>
      <Link
        href="/register"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started Now
      </Link>
    </div>
  )
}
