import { useState } from "react"


import appLock1 from "../assets/app-lock/AppLock1.jpeg"
import appLock2 from "../assets/app-lock/AppLock2.jpeg"
import appLock3 from "../assets/app-lock/AppLock3.jpeg"


import expense1 from "../assets/expense-tracker/ExpenseTracker1.jpeg"
import expense2 from "../assets/expense-tracker/ExpenseTracker2.jpeg"
import expense3 from "../assets/expense-tracker/ExpenseTracker3.jpeg"
import expense4 from "../assets/expense-tracker/ExpenseTracker4.jpeg"
import expense5 from "../assets/expense-tracker/ExpenseTracker5.jpeg"

const projects = [
  {
    title: "Money Exchange App",
    type: "Fintech Client Project",
    description:
      "A production-grade fintech app built solo from scratch. Supports currency exchange, Apple Pay integration via Swift native module, and real-time transactions. Live on iOS, Android and Huawei AppGallery.",
    tech: ["React Native", "TypeScript", "Redux Toolkit", "Swift", "Firebase"],
    stats: "200K+ Users",
    images: null,
    video: null,
  },
  {
    title: "Visa Management System",
    type: "Enterprise Client Project",
    description:
      "A multi-role web portal for managing visa applications with complex role-based workflow routing, candidate source tracking and authentication context management.",
    tech: ["React", "Vite", "Tailwind CSS", "Flowbite"],
    stats: "UAT Complete",
    images: null,
    video: null,
  },
  {
    title: "School Management App",
    type: "Enterprise Client Project",
    description:
      "A full-featured school ERP mobile app. Led frontend architecture design and mentored junior developers. Covers attendance, grades, communication and scheduling.",
    tech: ["React Native", "TypeScript", "Redux Toolkit", "Firebase"],
    stats: "Tech Lead",
    images: null,
    video: null,
  },
  {
    title: "Expense Tracker",
    type: "Personal Project",
    description:
      "A smart personal finance app with visual charts, category breakdowns, camera receipt scanning and local storage. Built with a modern React Native stack.",
    tech: ["React Native", "Zustand", "MMKV", "Firebase", "TypeScript"],
    stats: "Play Store Ready",
    images: [expense1, expense2, expense3, expense4, expense5],
  video: "https://www.youtube.com/embed/DGf4wAS8Jok",
  },
  {
    title: "App Lock",
    type: "Personal Project",
    description:
      "A security app that allows users to lock individual apps with PIN or pattern protection. Clean UI with smooth animations and settings management.",
    tech: ["React Native", "TypeScript"],
    stats: "React Native",
    images: [appLock1, appLock2, appLock3],
  video: "https://www.youtube.com/embed/u1zkwQ94fDY",
  },
]

// Fullscreen Lightbox
function Lightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-white text-3xl font-bold hover:text-gray-400 transition-colors"
      >
        x
      </button>

      {/* Prev Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-6 text-white text-4xl font-bold hover:text-blue-400 transition-colors"
        >
          ‹
        </button>
      )}

      {/* Image */}
      <img
        src={images[activeIndex]}
        alt={`Screenshot ${activeIndex + 1}`}
        className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-6 text-white text-4xl font-bold hover:text-blue-400 transition-colors"
        >
          ›
        </button>
      )}

      {/* Counter */}
      <p className="absolute bottom-6 text-gray-400 text-sm">
        {activeIndex + 1} / {images.length}
      </p>
    </div>
  )
}

function ProjectCard({ project }) {
  const [showVideo, setShowVideo] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % project.images.length)

  return (
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-colors">

      {/* Header */}
      <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
        <div>
          <span className="text-blue-500 text-xs font-semibold tracking-widest uppercase">
            {project.type}
          </span>
          <h3 className="text-2xl font-bold text-white mt-1">
            {project.title}
          </h3>
        </div>
        <span className="bg-blue-600/20 text-blue-400 text-sm font-semibold px-4 py-1 rounded-full">
          {project.stats}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-400 mb-5 leading-relaxed">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t, i) => (
          <span key={i} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>

      {/* Screenshots */}
      {project.images && (
        <>
          <p className="text-gray-500 text-xs mb-3">Tap any screenshot to view fullscreen</p>
          <div className="flex gap-3 overflow-x-auto pb-3 mb-5">
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                onClick={() => openLightbox(i)}
                className="h-72 w-auto rounded-xl object-cover flex-shrink-0 border border-gray-700 shadow-lg cursor-pointer hover:border-blue-500 hover:scale-105 transition-all duration-200"
              />
            ))}
          </div>
        </>
      )}

    {project.video && (
  <div className="mt-2">
    {!showVideo ? (
      <button
        onClick={() => setShowVideo(true)}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
      >
        <span>▶</span> Watch Demo Video
      </button>
    ) : (
      <div className="flex flex-col items-center gap-4">
        <iframe
          src={project.video}
          title="Demo Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full max-w-sm h-96 rounded-xl border border-gray-700 shadow-lg"
        />
        <button
          onClick={() => setShowVideo(false)}
          className="text-gray-400 hover:text-white text-sm transition-colors"
        >
          Hide Video
        </button>
      </div>
    )}
  </div>
)}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="bg-gray-950 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase text-center mb-3">
          What I've Built
        </p>
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Projects
        </h2>
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects