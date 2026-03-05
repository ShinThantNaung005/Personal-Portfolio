
export default function ContactPage() {
    return (
        <div className="relative z-10 min-h-screen ml-20">
            <div className="flex flex-col md:flex-row gap-16 ml-10 mr-10 mt-20">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-6">Let&apos;s Get in Touch</h1>
                    <p className="text-lg text-gray-300 mb-10">🟢 Currently Available for:
                    <ul>
                        <li>Freelance work</li>
                        <li>Collaboration</li>
                        <li>Web development projects</li>
                    </ul>
                    </p>
                    <a href="https://www.facebook.com/shin.thant.517084" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center gap-2 hover:translate-x-1 hover:text-blue-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35C.596 0 0 .593 0 1.326v21.348C0 23.406.596 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.406 24 22.674V1.326C24 .593 23.404 0 22.675 0z"/>
                        </svg>
                        <span>Facebook: Shin Thant</span>
                    </a>
                    <a href="https://github.com/ShinThantNaung" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center gap-2 mt-10 hover:translate-x-1 hover:text-blue-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.088-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.296-1.23 3.296-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.623-5.476 5.921.43.372.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        <span>Github: ShinThantNaung</span>
                    </a>
                    <a href="mailto:shinthantnaung112@gmail.com" aria-label="Email" className="flex items-center gap-2 mt-10 hover:translate-x-1 hover:text-blue-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 hover:text-red-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12.713l11.985-9.713H.015L12 12.713zm0 2.574L.015 5.29v13.42h23.97V5.29L12 15.287z"/>
                        </svg>
                        <span>Email: shinthantnaung112@gmail.com</span>
                    </a>
                    <a href="https://t.me/Lord_Thant" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="flex items-center gap-2 mt-10 hover:translate-x-1 hover:text-blue-400 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                        <span>Telegram: Shine Thant</span>
                    </a>
                </div>
                <div className="flex-1 bg-white/30 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-6">
                    <form action="mailto:shinthantnaung112@gmail.com" method="post" encType="text/plain" className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="fullName" className="font-semibold block mb-2 text-gray-900 dark:text-white">Full Name</label>
                            <input placeholder = "Enter your full name" type="text" id="fullName" name="fullName" className="pl-5 border border-gray-400 dark:border-white-600 p-2 rounded-2xl w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white" required/>
                            <label htmlFor="email" className="font-semibold block mb-2 mt-4 text-gray-900 dark:text-white">Email</label>
                            <input placeholder = "Enter your email" type="email" id="email" name="email" className="pl-5 border border-gray-400 dark:border-white-600 p-2 rounded-2xl w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white" required/>
                            <label htmlFor="message" className="font-semibold block mb-2 mt-4 text-gray-900 dark:text-white">Message</label>
                            <textarea placeholder = "Enter your message" id="message" name="message" rows={5} className="pl-5 border border-gray-400 dark:border-white-600 p-2 rounded-2xl w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white" required></textarea>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white p-2 rounded-2xl hover:bg-blue-700">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
