export default function ContactPage() {
    return (
        <div className="relative z-10 min-h-screen">
            <div className="flex flex-col md:flex-row gap-16 ml-10 mr-10 mt-20">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-6">Let&apos;s Get in Touch</h1>
                    <p>Or just manually reach out to shinthantnaung112@gmail.com</p>
                </div>
                <div className="flex-1 bg-white/30 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-6">
                    <form action="mailto:shinthantnaung112@gmail.com" method="post" encType="text/plain" className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="fullName" className="font-semibold block mb-2 text-gray-900 dark:text-white transition-colors duration-500">Full Name</label>
                            <input placeholder="Enter your full name" type="text" id="fullName" name="fullName" className="pl-5 border border-gray-400 dark:border-gray-600 p-2 rounded-2xl w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-500" required />
                            <label htmlFor="email" className="font-semibold block mb-2 mt-4 text-gray-900 dark:text-white transition-colors duration-500">Email</label>
                            <input placeholder="Enter your email" type="email" id="email" name="email" className="pl-5 border border-gray-400 dark:border-gray-600 p-2 rounded-2xl w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-500" required />
                            <label htmlFor="message" className="font-semibold block mb-2 mt-4 text-gray-900 dark:text-white transition-colors duration-500">Message</label>
                            <textarea placeholder="Enter your message" id="message" name="message" rows={5} className="pl-5 border border-gray-400 dark:border-gray-600 p-2 rounded-2xl w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-500" required></textarea>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white p-2 rounded-2xl hover:bg-blue-700">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
