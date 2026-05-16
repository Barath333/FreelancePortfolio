function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold text-white">
          Barath<span className="text-blue-500">.</span>
        </h2>
        <p className="text-gray-400 text-sm text-center">
          React Native and Full Stack Developer — Available for Freelance Work
        </p>
        <div className="flex gap-6 mt-2">
          <a
            href="https://www.fiverr.com/buildwithbarath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Fiverr
          </a>
          
          <a
            href="https://www.upwork.com/freelancers/~01f7d5315d12ffee6c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Upwork
          </a>
          
          <a
            href="https://www.freelancer.com/u/barathe31"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Freelancer
          </a>
        </div>
        <p className="text-gray-600 text-xs mt-4">
          © 2026 Barath Erulappan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer