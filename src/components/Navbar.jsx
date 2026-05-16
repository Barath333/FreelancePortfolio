function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Barath<span className="text-blue-500">.</span></h1>
        <ul className="flex gap-8 text-sm text-gray-400">
          <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar