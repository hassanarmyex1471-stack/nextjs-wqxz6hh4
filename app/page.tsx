export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white flex flex-col justify-between p-6 sm:p-12 font-sans">
      <header className="max-w-6xl w-full mx-auto flex justify-between items-center border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-bold tracking-wide text-lg text-slate-200">PORTFOLIO</span>
        </div>
        <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full font-medium">
          Capstone Submission
        </span>
      </header>

      <section className="max-w-4xl w-full mx-auto my-auto py-12 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-blue-400">
          Full-Stack Web & AI Application
        </h1>
        <p className="text-slate-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Production-ready Next.js deployment featuring responsive layout, modern architecture, and optimized workflow.
        </p>

        <div className="pt-6 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/30"
          >
            Explore Projects
          </a>
          <a
            href="https://github.com/hassanarmyex1471-stack/nextjs-wqxz6hh4"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition-all"
          >
            Source Code
          </a>
        </div>
      </section>

      <footer className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-800/80 pt-6 text-sm text-slate-400">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Framework</p>
          <p className="text-slate-200 font-medium mt-1">Next.js & React</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Styling</p>
          <p className="text-slate-200 font-medium mt-1">Tailwind CSS</p>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Deployment</p>
          <p className="text-slate-200 font-medium mt-1">Vercel Edge Platform</p>
        </div>
      </footer>
    </main>
  );
}
