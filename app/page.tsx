import { Github, Linkedin, Mail, MapPin, Code, Zap, Users, Award } from "lucide-react"

export default function BentoPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-indigo-950 p-2 sm:p-4 lg:p-6">
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col gap-3 sm:gap-4 lg:grid lg:grid-cols-12 lg:grid-rows-8 lg:gap-4 lg:h-screen">
        {/* Profile Card */}
        <div className="lg:col-span-3 lg:row-span-4 bg-gradient-to-br from-black-900/30 to-indigo-900/30 backdrop-blur-xl border border-black rounded-2xl sm:rounded-3xl p-2 flex flex-col items-center justify-center text-center shadow-2xl shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 ">
        <img
          src="/profile1.png"
          alt="Palak Ramani"
          
        />
</div>

        {/* Main Project Showcase */}
        <div className="lg:col-span-6 lg:row-span-4 bg-gradient-to-r from-slate-900/40 to-blue-900/40 backdrop-blur-xl border border-blue-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col justify-center shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 glow-blue">
          <div className="text-xs sm:text-sm text-blue-300 mb-2 tracking-wider truncate">
            Hi,
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4 leading-tight">
            I'm Palak
          </h2>
          <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-3">
            CSE undergrad who is debugging her life to get a better life quality ;)
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 sm:px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-xs sm:text-sm border border-blue-400/20">
              Next.js
            </span>
            <span className="px-2 sm:px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-xs sm:text-sm border border-blue-400/20">
              TypeScript
            </span>
            <span className="px-2 sm:px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-xs sm:text-sm border border-blue-400/20">
              Stripe
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="lg:col-span-3 lg:row-span-2 bg-gradient-to-br from-slate-900/60 to-indigo-900/40 backdrop-blur-xl border border-slate-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl shadow-slate-500/10 hover:shadow-slate-500/20 transition-all duration-300 glow-slate">
          <div className="text-xs sm:text-sm text-slate-300 mb-2 uppercase tracking-wider truncate">Experience</div>
          <div className="text-2xl sm:text-3xl font-bold text-white mb-1 truncate">5+ Years</div>
          <div className="text-slate-300 text-xs sm:text-sm line-clamp-2">Building digital experiences</div>
        </div>

        {/* Skills Grid */}
        <div className="lg:col-span-3 lg:row-span-4 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-xl border border-emerald-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all duration-300 glow-emerald">
          <div className="text-xs sm:text-sm text-emerald-300 mb-3 sm:mb-4 uppercase tracking-wider truncate">
            Tech Stack
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="bg-emerald-500/20 rounded-xl p-2 sm:p-3 text-center border border-emerald-400/20 hover:bg-emerald-500/30 transition-colors">
              <Code className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-300 mx-auto mb-1 sm:mb-2" />
              <div className="text-white text-xs sm:text-sm font-medium truncate">React</div>
            </div>
            <div className="bg-emerald-500/20 rounded-xl p-2 sm:p-3 text-center border border-emerald-400/20 hover:bg-emerald-500/30 transition-colors">
              <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-300 mx-auto mb-1 sm:mb-2" />
              <div className="text-white text-xs sm:text-sm font-medium truncate">Node.js</div>
            </div>
            <div className="bg-emerald-500/20 rounded-xl p-2 sm:p-3 text-center border border-emerald-400/20 hover:bg-emerald-500/30 transition-colors">
              <Users className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-300 mx-auto mb-1 sm:mb-2" />
              <div className="text-white text-xs sm:text-sm font-medium truncate">MongoDB</div>
            </div>
            <div className="bg-emerald-500/20 rounded-xl p-2 sm:p-3 text-center border border-emerald-400/20 hover:bg-emerald-500/30 transition-colors">
              <Award className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-300 mx-auto mb-1 sm:mb-2" />
              <div className="text-white text-xs sm:text-sm font-medium truncate">AWS</div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-3 lg:row-span-2 bg-gradient-to-br from-slate-900/60 to-indigo-900/40 backdrop-blur-xl border border-slate-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-slate-500/10 hover:shadow-slate-500/20 transition-all duration-300 glow-slate">
          <div className="text-xs sm:text-sm text-slate-300 mb-2 sm:mb-3 uppercase tracking-wider truncate">
            Get in Touch
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:ramanipalak4105@gmail.com"
              className="flex items-center text-slate-200 hover:text-white transition-colors group"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0 group-hover:text-indigo-400" />
              <span className="text-xs sm:text-sm truncate">ramanipalak4105@gmail.com</span>
            </a>
            <a href="#" className="flex items-center text-slate-200 hover:text-white transition-colors group">
              <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0 group-hover:text-indigo-400" />
              <span className="text-xs sm:text-sm truncate">github.com/palakxcode</span>
            </a>
          </div>
        </div>

        {/* Recent Work */}
        <div className="lg:col-span-4 lg:row-span-2 bg-gradient-to-r from-indigo-900/40 to-indigo-900/40 backdrop-blur-xl border border-indigo-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 glow-indigo">
          <div className="text-xs sm:text-sm text-indigo-300 mb-2 uppercase tracking-wider truncate">Recent Work</div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 truncate">Mobile Banking App</h3>
          <p className="text-indigo-100 text-xs sm:text-sm line-clamp-3">
            Designed and developed a secure mobile banking application with biometric authentication.
          </p>
        </div>

        {/* Achievements */}
        <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-xl border border-yellow-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center shadow-2xl shadow-yellow-500/10 hover:shadow-yellow-500/20 transition-all duration-300 glow-yellow">
          <Award className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 mx-auto mb-2" />
          <div className="text-xl sm:text-2xl font-bold text-white truncate">15+</div>
          <div className="text-yellow-200 text-xs sm:text-sm truncate">Projects Completed</div>
        </div>

        {/* Availability Status */}
        <div className="lg:col-span-3 lg:row-span-2 bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-xl border border-green-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 flex items-center justify-center shadow-2xl shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300 glow-green">
          <div className="text-center">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mx-auto mb-2 animate-pulse shadow-lg shadow-green-400/50"></div>
            <div className="text-white font-medium text-sm sm:text-base truncate">Available for Work</div>
            <div className="text-green-200 text-xs sm:text-sm truncate">Open to new opportunities</div>
          </div>
        </div>

        {/* Social Links */}
        <div className="lg:col-span-3 lg:row-span-2 bg-gradient-to-br from-slate-900/60 to-indigo-900/40 backdrop-blur-xl border border-slate-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl shadow-slate-500/10 hover:shadow-slate-500/20 transition-all duration-300 glow-slate">
          <div className="text-xs sm:text-sm text-slate-300 mb-2 sm:mb-3 uppercase tracking-wider truncate">
            Connect
          </div>
          <div className="flex gap-2 sm:gap-3">
            <a
              href="#"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-slate-700/50 transition-colors border border-slate-600/30 hover:border-indigo-500/50"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 hover:text-indigo-400" />
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-slate-700/50 transition-colors border border-slate-600/30 hover:border-indigo-500/50"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 hover:text-indigo-400" />
            </a>
            <a
              href="#"
              className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-slate-700/50 transition-colors border border-slate-600/30 hover:border-indigo-500/50"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-300 hover:text-indigo-400" />
            </a>
          </div>
        </div>

        {/* Current Focus */}
        <div className="lg:col-span-6 lg:row-span-2 bg-gradient-to-r from-indigo-900/40 to-indigo-900/40 backdrop-blur-xl border border-indigo-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 glow-indigo">
          <div className="text-xs sm:text-sm text-indigo-300 mb-2 uppercase tracking-wider truncate">
            Currently Learning
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 truncate">AI & Machine Learning</h3>
          <p className="text-indigo-100 text-xs sm:text-sm line-clamp-2">
            Exploring the intersection of web development and artificial intelligence to build smarter applications.
          </p>
        </div>
      </div>
    </div>
  )
}
