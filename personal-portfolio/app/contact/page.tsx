import Link from 'next/link'
export default function ContactPage() {
    return (
        <div>
            <header className = "flex flex-col items-top p-4 bg-gray-800 text-white ml-4 mr-4 mt-4 rounded-xl border-2 border-gray-700">
                <div className = "flex items-center justify-between">
                    <div className = "flex items-center gap-8">
                        <Link href="/About" className="hover:text-gray-300">About Me</Link>
                        <a href="#experiences" className="hover:text-gray-300">Experiences</a>
                        <Link href="/contact" className="hover:text-gray-300  bg-gray-700 px-2 py-1 rounded">Contact Me</Link>
                    </div>
                <div className="w-8 h-8 bg-white rounded-full" aria-hidden="true" />
                </div>
            </header>
        </div>
    )
}
