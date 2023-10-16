import Link from 'next/link'

export default function Home() {
  return (
    <main className='h-screen flex items-center justify-center flex-col gap-4'>
      <h1 className='text-center text-4xl'>Welcome to DevDreams</h1>
      <Link className='dd_link' href="/job-board/jobs">To Jobs</Link>
    </main>
  )
}
