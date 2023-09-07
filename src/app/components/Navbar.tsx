import Link from "next/link"
import {FaTwitter, FaGithub,FaLinkedinIn} from "react-icons/fa";
import {SiHashnode,SiLinktree} from "react-icons/si"

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 p-4 sticky top-0 drop-shadow-xl z-10" >
        <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
            <Link href="/" className="text-white/95 no-underline font-mono hover:text-white/70">Chirag Patil</Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-3xl lg:text-4xl">
                    <Link className="text-white/95 hover:text-white/70" href="https://github.com/chirag4242">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/95 hover:text-white/70" href="https://twitter.com/Hardwork4224">
                        <FaTwitter />
                    </Link>
                    <Link className="text-white/95 hover:text-white/70" href="https://devexplanation.hashnode.dev/">
                        <SiHashnode />
                    </Link>
                    <Link className="text-white/95 hover:text-white/70" href="https://www.biodrop.io/chirag4242">
                        <SiLinktree />
                    </Link>
                    <Link className="text-white/95 hover:text-white/70" href="https://www.linkedin.com/in/chirag42">
                        <FaLinkedinIn />
                    </Link>
                </div>
        </div>
    </nav>
  )
}
