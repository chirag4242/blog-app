import Posts from "./components/Posts"
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-neutral-50 font-mono">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Chirag</span>.
        </span>
      </p>
      <Posts />
    </main>
  )
}
