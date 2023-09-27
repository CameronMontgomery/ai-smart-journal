import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className=" w-full max-w-[650px] mx-auto">
        <h1 className="text-6xl mb-4">The best journal app, period.</h1>
        <p className="text-2xl text-white/60 mb-4">
          A modern journal to help you remember the thoughts, feelings, and
          events that shape your life. Utilize the power of A.I. to get insights
          into your life, track trends, and improve your well-being.
        </p>
        <div className="flex justify-end mr-24">
          <Link href="/signup">
            <button className="bg-blue-600 px-4 py-2 rounded">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
