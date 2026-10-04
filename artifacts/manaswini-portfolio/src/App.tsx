import { useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Menu, X, MapPin, Mail, Github, Linkedin, GraduationCap, Sparkles } from 'lucide-react';

const linkedin = 'https://www.linkedin.com/in/manaswini-anand-m-1726a7311';
const github = 'https://github.com/21manaswini4-spec';
const email = 'manurupa2006@gmail.com';

const projects = [
  { slug: 'agrowise-ai', category: 'AgriTech · AI', title: 'AgroWise AI', subtitle: 'Smarter support for everyday farming.', description: 'A frontend-focused agricultural assistance app designed to help farmers make better decisions. It brings crop information, AI-assisted recommendations, agricultural data visualizations, and a responsive farmer-oriented experience into one place.', details: 'Crop information · AI recommendations · data visualization', tags: ['React', 'TypeScript', 'Vite', 'AgTech', 'Responsive UI'], image: '/images/projects/agrowise-ai.png', imageAlt: 'AgroWise AI diagram showing agricultural assistance, crop information, recommendations, data visualization, and a farmer dashboard', imageLayout: 'banner', imageFit: 'contain' },
  { slug: 'risk-informed-validation', category: 'Software quality', title: 'Risk-informed validation', subtitle: 'Quality signals, made useful.', description: 'A validation framework for Java Maven projects that turns test and code-quality signals into class-level risk priorities. A FastAPI service feeds a React dashboard, with the workflow containerized in Docker.', details: 'JUnit / Surefire · JaCoCo · PMD · SpotBugs · CK Metrics', tags: ['Java', 'Python', 'FastAPI', 'React', 'Docker'], image: '/images/projects/risk-informed-validation.png', imageAlt: 'Risk meter showing low, medium, and high validation levels', imageLayout: 'standard', imageFit: 'cover' },
  { slug: 'naari', category: 'E-commerce', title: 'Naari', subtitle: 'A considered online jewelry storefront.', description: 'A responsive, brand-focused store for browsing earrings, necklaces, and bracelets. Product discovery, category browsing and filtering, product details and pricing, cart management, and an order flow shape a clear shopping experience.', details: 'Catalog · filters · product details · cart · order flow', tags: ['React', 'TypeScript', 'E-commerce', 'Responsive UI'], image: '/images/projects/naari-jewelry-store-hq.png', imageAlt: 'Naari jewelry store illustration showing product discovery, categories, product details, cart, and ordering', imageLayout: 'landscape', imageFit: 'contain' },
  { slug: 'detech', category: 'Web safety', title: 'Detech', subtitle: 'A closer look at suspicious links.', description: 'A web link analyzer that classifies phishing risk with TF-IDF features and Naive Bayes, then looks beyond the URL—using YOLOv8 and OCR to inspect screenshots and extract page text.', details: 'URL classification · screenshot inspection · OCR', tags: ['Python', 'FastAPI', 'TF-IDF', 'Naive Bayes', 'YOLOv8'], image: '/images/projects/detech-link-analyzer.png', imageAlt: 'Detech link analyzer app artwork', imageLayout: 'square', imageFit: 'contain' },
  { slug: 'neurovision-ai', category: 'Computer vision', title: 'NeuroVision AI', subtitle: 'Exploring signals in retinal images.', description: 'An AI-assisted exploration of retinal fundus images for Alzheimer’s risk estimation. CNNs and transfer learning with ResNet and VGG16 meet an OpenCV preprocessing pipeline and probability-based outputs.', details: 'Research-minded prototype · not a diagnostic tool', tags: ['TensorFlow', 'Keras', 'CNN', 'ResNet', 'OpenCV'], image: '/images/projects/neurovision-ai.png', imageAlt: 'Close-up eye with digital vision-analysis overlays', imageLayout: 'standard', imageFit: 'cover' },
];

const skillGroups = [
  { label: 'Languages', items: ['C', 'Java', 'Python', 'HTML', 'CSS'] },
  { label: 'Build with', items: ['FastAPI', 'React', 'TensorFlow / Keras', 'OpenCV', 'JUnit'] },
  { label: 'Foundations', items: ['Data structures', 'DBMS', 'Computer networks', 'Machine learning'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Vercel'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#24473c] focus:px-4 focus:py-3 focus:text-white">Skip to content</a>
      <header className="topbar">
        <div className="wrap flex h-[72px] items-center justify-between">
          <a href="#top" aria-label="Manaswini Anand, back to top" className="flex items-center gap-3 no-underline">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#24473c] text-[12px] font-semibold tracking-[-.04em] text-[#f7f3e9]">MA</span>
            <span className="text-sm font-semibold tracking-[-.02em]">Manaswini Anand</span>
          </a>
          <nav className="desktop-nav flex items-center gap-8 text-[12px] text-[#58635b]" aria-label="Main navigation">
            <a className="nav-link no-underline" href="#about">About</a>
            <a className="nav-link no-underline" href="#work">Projects</a>
            <a className="nav-link no-underline" href="#skills">Skills</a>
            <a className="nav-link no-underline" href="#education">Education</a>
            <a className="nav-link no-underline" href="#creative">Creative</a>
            <a className="rounded-full border border-[#24473c] px-4 py-2 text-[#24473c] no-underline transition hover:bg-[#24473c] hover:text-[#f7f3e9]" href="#contact">Say hello <ArrowUpRight className="ml-1 inline" size={13} /></a>
          </nav>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c9c1b2] text-[#24473c] md:hidden" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {menuOpen && <nav className="wrap grid gap-1 pb-4 md:hidden" aria-label="Mobile navigation">
          {['About', 'Projects', 'Skills', 'Education', 'Creative', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase() === 'projects' ? 'work' : item.toLowerCase()}`} className="rounded-lg px-3 py-3 text-sm text-[#24473c] no-underline hover:bg-[#e9e5d9]" onClick={closeMenu}>{item}<ArrowUpRight className="float-right" size={15} /></a>)}
        </nav>}
      </header>

      <div id="main-content">
        <section id="top" className="wrap hero-grid min-h-[690px] py-20 md:py-24">
          <div className="hero-copy">
            <p className="section-kicker stagger-in">Computer science · Bengaluru, India</p>
            <h1 className="serif stagger-in delay-1 mt-7 max-w-[700px] text-[clamp(3.4rem,7.2vw,6.8rem)] leading-[.94] text-[#24473c]">Curious by nature.<br /><span className="text-[#cf6242]">Engineer by practice.</span></h1>
            <p className="stagger-in delay-2 mt-7 max-w-[470px] text-[16px] leading-[1.8] text-[#5c665e]">I’m Manaswini — a Computer Science student who likes turning messy, real-world questions into clear, useful software.</p>
            <p className="stagger-in delay-2 mt-3 max-w-[455px] text-[14px] leading-[1.8] text-[#788078]">From full-stack tools to machine-learning experiments, I build things to understand how they work—and to make them work for someone.</p>
            <div className="stagger-in delay-3 mt-9 flex flex-wrap items-center gap-4">
              <a href="#work" className="inline-flex items-center gap-3 rounded-full bg-[#24473c] px-6 py-3.5 text-[13px] font-medium text-[#f8f5ed] no-underline transition hover:-translate-y-0.5 hover:bg-[#315a4c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9623f]">Explore my work <ArrowDownRight size={16} /></a>
            </div>
            <div className="mt-12 flex items-center gap-2 text-[11px] text-[#778078]"><MapPin size={14} className="text-[#cf6242]" /> Bengaluru, Karnataka <span className="mx-1 h-1 w-1 rounded-full bg-[#d9623f]" /> Open to learning, building & collaborating</div>
          </div>
            <div className="hero-photo stagger-in delay-2">
            <img src="/images/manaswini-anand.png" alt="Portrait of Manaswini Anand" fetchPriority="high" />
            <span className="photo-note">A LITTLE ABOUT ME — 2025</span>
            <span className="absolute -bottom-10 right-3 serif text-[19px] italic text-[#69796e]">learning in public, one project at a time</span>
          </div>
        </section>

        <section className="border-y border-[#d9d1c4] bg-[#f0ede4]">
          <div className="wrap grid grid-cols-2 gap-8 py-8 md:grid-cols-4 md:gap-5">
            {[
              ['01', 'Full-stack builds'],
              ['02', 'Applied ML projects'],
              ['08.16', 'CGPA through semester 6'],
              ['BENGALURU', 'Where I’m learning'],
            ].map(([figure, caption]) => <div key={caption} className="flex flex-col gap-1">
              <span className="mono text-[11px] tracking-[.11em] text-[#c45a3c]">{figure}</span><span className="text-[12px] text-[#526057]">{caption}</span>
            </div>)}
          </div>
        </section>

        <section id="about" className="wrap grid gap-12 py-28 md:grid-cols-[.72fr_1.28fr] md:gap-24 md:py-36">
          <div><p className="section-kicker">A little context</p><h2 className="serif mt-6 text-5xl leading-[1.02] text-[#24473c] md:text-[62px]">More than<br />the stack.</h2></div>
          <div className="max-w-[650px] pt-1">
            <p className="serif text-[26px] leading-[1.32] text-[#32473d] md:text-[34px]">I’m interested in the small decisions that make software feel <span className="text-[#cf6242]">thoughtful</span>—a useful signal, a clear interface, a system that earns trust.</p>
            <div className="mt-7 grid gap-5 text-[14px] leading-[1.85] text-[#667168] md:grid-cols-2">
              <p>At K.S. Institute of Technology, I’m building a strong foundation in computer science while learning by making. My projects move between backend systems, interfaces, and applied machine learning.</p>
              <p>I’m happiest when I can follow a question end-to-end: understand the data, shape the logic, build the tool, and make the result legible to another person.</p>
            </div>
          </div>
        </section>

        <section id="work" className="bg-[#e9e5d9] py-24 md:py-32">
          <div className="wrap">
            <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
              <div><p className="section-kicker">Selected projects</p><h2 className="serif mt-5 text-5xl leading-none text-[#24473c] md:text-[68px]">Built to explore.</h2></div>
              <p className="max-w-[325px] text-[13px] leading-[1.8] text-[#677268]">Projects across digital agriculture, e-commerce, software quality, web safety, and computer vision.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => <article className="project-card" key={project.slug} data-testid={`project-card-${project.slug}`}>
                <div className={`project-image-frame project-image-frame-${project.imageLayout} project-image-fit-${project.imageFit} mb-6`}>
                  <img src={project.image} alt={project.imageAlt} />
                </div>
                <span className="project-category">{project.category}</span>
                <h3 className="serif mt-3 text-[30px] leading-tight text-[#24473c]">{project.title}</h3>
                <p className="mt-2 text-[12px] font-semibold text-[#be5a3b]">{project.subtitle}</p>
                <p className="mt-4 min-h-[116px] text-[13px] leading-[1.8] text-[#667168]">{project.description}</p>
                <p className="mono mt-2 text-[9px] leading-[1.7] text-[#7b8279]">{project.details}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </article>)}
            </div>
            <p className="mt-14 border-t border-[#c9c1b2] pt-5 text-[11px] text-[#737a71]">Project descriptions reflect work documented in my résumé. No public project demos are listed here.</p>
          </div>
        </section>

        <section id="skills" className="wrap grid gap-14 py-24 md:grid-cols-[.7fr_1.3fr] md:gap-24 md:py-32">
          <div><p className="section-kicker">Tools & thinking</p><h2 className="serif mt-5 text-5xl leading-[1.04] text-[#24473c] md:text-[62px]">The toolkit<br />keeps growing.</h2><p className="mt-6 max-w-[270px] text-[13px] leading-[1.8] text-[#69746b]">A working set of languages, systems, and ideas I reach for while learning to build better.</p></div>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {skillGroups.map((group, index) => <div className="border-t border-[#d0c8b9] pt-4" key={group.label}>
              <div className="mb-4 flex items-center justify-between"><h3 className="text-[13px] font-semibold text-[#33483d]">{group.label}</h3><span className="mono text-[9px] text-[#bf5739]">0{index + 1}</span></div>
              <div className="flex flex-wrap gap-2">{group.items.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}</div>
            </div>)}
          </div>
        </section>

        <section id="education" className="soft-panel py-24 md:py-28">
          <div className="wrap grid gap-10 md:grid-cols-[.72fr_1.28fr] md:gap-24">
            <div><p className="section-kicker">Currently learning</p><h2 className="serif mt-5 text-5xl leading-none text-[#24473c] md:text-[61px]">Grounded<br />in the basics.</h2></div>
            <div className="border-t border-[#c9c1b2] pt-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4"><span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#24473c] text-[#f7f3e9]"><GraduationCap size={19} strokeWidth={1.5} /></span><div><h3 className="serif text-[25px] text-[#24473c]">B.E. Computer Science & Engineering</h3><p className="mt-2 text-[13px] text-[#627067]">K.S. Institute of Technology · Bengaluru</p></div></div>
                <span className="mono pt-2 text-[10px] text-[#be5a3b]">2023 — PRESENT</span>
              </div>
              <div className="ml-[56px] mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#c9c1b2] pt-5">
                <span className="serif text-[24px] text-[#24473c]">8.16 <span className="text-[13px]">/ 10</span></span><span className="text-[12px] text-[#69746b]">CGPA through semester 6</span>
              </div>
              <div className="ml-[56px] mt-8 flex items-center gap-2 text-[11px] text-[#778078]"><Sparkles size={14} className="text-[#c65334]" /> A foundation still in motion.</div>
            </div>
          </div>
        </section>

        <section id="creative" className="wrap creative-section grid gap-10 py-24 md:grid-cols-[1fr_1fr] md:items-center md:gap-20 md:py-32">
          <figure className="creative-artwork">
            <img src="/images/capture-moments.jpg" alt="Illustration of a camera with the message Capture Moments and tell your story through every shot" />
            <figcaption className="mono">CAPTURE MOMENTS · TELL YOUR STORY</figcaption>
          </figure>
          <div>
            <p className="section-kicker">Beyond the code</p>
            <h2 className="serif mt-5 text-5xl leading-[1.04] text-[#24473c] md:text-[62px]">Stories, edits,<br />community.</h2>
            <p className="mt-6 max-w-[470px] text-[14px] leading-[1.9] text-[#667168]">I’m into video editing and digital storytelling—shaping ideas into visual stories that feel clear, human, and worth remembering.</p>
            <div className="mt-8 border-t border-[#d0c8b9] pt-5">
              <p className="mono text-[10px] tracking-[.12em] text-[#bf5739]">COMMUNITY</p>
              <p className="mt-2 text-[14px] leading-[1.8] text-[#526057]">NSS member, taking part in community service and awareness activities.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="wrap py-24 md:py-32">
          <div className="contact-panel relative overflow-hidden rounded-sm px-7 py-12 md:px-16 md:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-[280px] w-[280px] rounded-full border border-[#f7f3e9]/15 md:h-[420px] md:w-[420px]"><div className="absolute inset-8 rounded-full border border-[#f7f3e9]/10" /></div>
            <div className="relative grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-end">
              <div><p className="section-kicker !text-[#efb276]">A note is a good start</p><h2 className="serif mt-6 max-w-[550px] text-[52px] leading-[.98] text-[#f7f3e9] md:text-[76px]">Let’s make<br />something useful.</h2><p className="mt-6 max-w-[360px] text-[13px] leading-[1.8] text-[#d0d9d0]">Have a thoughtful problem, a project to discuss, or just want to say hello? I’d love to hear from you.</p></div>
              <div className="grid gap-4 text-[13px]">
                <a href={`mailto:${email}`} className="say-hello inline-flex w-fit items-center gap-2 rounded-full bg-[#e8b866] px-5 py-3 text-[12px] font-semibold text-[#24473c] no-underline transition hover:-translate-y-0.5 hover:bg-[#f0c77e]"><Mail size={15} /> Say hello <ArrowUpRight size={14} /></a>
                <span className="text-[12px] text-[#d0d9d0]">{email}</span>
                <a href={linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-[#f7f3e9]/25 py-4 no-underline"><span className="flex items-center gap-3"><Linkedin size={16} /> LinkedIn</span><span className="flex items-center gap-2 text-[#d0d9d0]">Connect <ArrowUpRight size={14} /></span></a>
                <a href={github} target="_blank" rel="noreferrer" className="flex items-center justify-between border-b border-[#f7f3e9]/25 py-4 no-underline"><span className="flex items-center gap-3"><Github size={16} /> GitHub</span><span className="flex items-center gap-2 text-[#d0d9d0]">See my work <ArrowUpRight size={14} /></span></a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="wrap flex flex-col justify-between gap-4 border-t border-[#d9d1c4] py-7 text-[10px] text-[#778078] sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} Manaswini Anand</span>
        <span>Made with curiosity in Bengaluru, India.</span>
        <a href="#top" className="inline-flex items-center gap-2 text-[#536157] no-underline hover:text-[#c65334]">Back to top <ArrowDown className="rotate-180" size={13} /></a>
      </footer>
    </main>
  );
}

export default App;
