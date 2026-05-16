function Hero() {
  return (
   <section id="hero" className="min-h-[80vh] flex items-center justify-center bg-gray-950 px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Available for Freelance Work
        </div>
        <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-4">
          React Native and Full Stack Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm <span className="text-blue-500">Barath</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I build high-performance mobile apps and websites for startups and businesses worldwide.
          React Native, React, TypeScript,JavaScript — iOS, Android, Huawei and Web.
          2+ years of experience shipping production apps with 200K+ users.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            View My Work
          </a>
          
          <a
            href="#skills"
            className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            My Skills
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero