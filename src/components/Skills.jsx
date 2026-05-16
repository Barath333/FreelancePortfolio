import { FaReact, FaNodeJs, FaFire, FaJs } from "react-icons/fa"
import { SiTypescript, SiRedux, SiTailwindcss, SiVite, SiSwift } from "react-icons/si"

const skills = [
  { icon: <FaReact className="text-blue-400" />, name: "React Native" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
  { icon: <SiRedux className="text-purple-400" />, name: "Redux Toolkit" },
  { icon: <FaFire className="text-orange-400" />, name: "Firebase" },
  { icon: <FaNodeJs className="text-green-400" />, name: "Node.js" },
  { icon: <SiSwift className="text-orange-500" />, name: "Swift" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
  { icon: <SiVite className="text-purple-400" />, name: "Vite" },
]

function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase text-center mb-3">
          What I Work With
        </p>
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          My Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 bg-gray-800 rounded-2xl p-5 hover:bg-gray-700 transition-colors"
            >
              <span className="text-4xl">{skill.icon}</span>
              <span className="text-gray-300 text-sm font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills