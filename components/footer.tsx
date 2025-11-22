export function Footer() {
  return (
    <footer className="bg-black border-t border-[#D6B85A]/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <img 
            src="/logo.png" 
            alt="Claire Creates Moments" 
            className="w-[280px] md:w-[300px] h-auto mx-auto"
          />

          <p className="text-white/70 text-base italic max-w-2xl mx-auto">
            Where every moment becomes a memory, creating timeless ceremonies that reflect your story
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-white/50 pt-4 flex-wrap">
            <a href="mailto:info@ccmoments.co.uk" className="hover:text-[#FFB3C6] transition-colors">
              info@ccmoments.co.uk
            </a>
            <span>•</span>
            <span>www.ccmoments.co.uk</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-white/40 pt-6 flex-wrap">
            <a href="#privacy" className="hover:text-[#FFB3C6] transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#terms" className="hover:text-[#FFB3C6] transition-colors">
              Terms of Service
            </a>
          </div>

          <p className="text-white/40 text-xs pt-4">
            © {new Date().getFullYear()} Claire Creates Moments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
