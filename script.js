// Aniket Gavate — Unboxed Minimalist Portfolio Controller

const projects = [
  {
    id: 'agentic-chatbot',
    name: 'Agentic Chatbot',
    category: 'ai',
    categoryLabel: 'AI',
    description: 'Autonomous multi-agent chatbot built with LangGraph featuring dynamic tool routing, RAG retrieval, thread memory persistence, token streaming, and human-in-the-loop (HITL) approval.',
    stack: ['Python', 'LangGraph', 'LangChain', 'RAG', 'ChromaDB'],
    githubUrl: 'https://github.com/aniket0929/agentic-chatbot',
    demoUrl: null
  },
  {
    id: 'quizo',
    name: 'Quizo AI',
    category: 'ai',
    categoryLabel: 'AI',
    description: 'AI-powered quiz generation platform transforming topics into structured, timed assessments with instant evaluation.',
    stack: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/aniket0929/Quizo',
    demoUrl: 'https://quizo-steel.vercel.app'
  },
  {
    id: 'agentguard',
    name: 'AgentGuard',
    category: 'ai',
    categoryLabel: 'AI',
    description: 'Oversight skill for <a href="https://openclaw.ai/" target="_blank" rel="noopener noreferrer">OpenClaw</a> that intercepts sensitive actions, scores risk in real time, and sends instant Telegram alerts with one-tap Approve or Deny buttons — before the action executes.',
    stack: ['JavaScript', 'Node.js', 'OpenClaw', 'Telegram Bot API', 'AI Safety'],
    githubUrl: 'https://github.com/aniket0929/agentguard-skill',
    demoUrl: null
  },
  {
    id: 'kanso',
    name: 'Kanso Operations',
    category: 'fullstack',
    categoryLabel: 'Fullstack',
    description: 'Unified operations platform for service and clinical practices. Replaces fragmented tooling with a calm, streamlined dashboard for intake, booking, and communications.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com/aniket0929/kanso',
    demoUrl: 'https://kanso-8obp.vercel.app'
  },
  {
    id: 'digiboard',
    name: 'DigiBoard',
    category: 'fullstack',
    categoryLabel: 'Fullstack',
    description: 'Real-time collaborative whiteboard with multiplayer cursor presence, infinite canvas, vector shapes, sticky notes, and organization spaces.',
    stack: ['Next.js 19', 'Liveblocks', 'Convex', 'Clerk', 'Tailwind CSS'],
    githubUrl: 'https://github.com/aniket0929/digi-board',
    demoUrl: 'https://digi-board-beta.vercel.app'
  },
  {
    id: 'remembr',
    name: 'Remembr',
    category: 'frontend',
    categoryLabel: 'Frontend',
    description: 'Smart bookmark manager with Google OAuth authentication, tag organization, rapid search filtering, and cross-tab real-time database synchronization.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/aniket0929/remembr',
    demoUrl: 'https://remembr-rho.vercel.app'
  },
  {
    id: 'blitzz-reader',
    name: 'Blitzz Reader',
    category: 'frontend',
    categoryLabel: 'Frontend',
    description: 'Speed-reading application designed to induce flow state using Rapid Serial Visual Presentation (RSVP) and smooth horizontal guided text streaming.',
    stack: ['Next.js', 'JavaScript', 'Web Animations', 'CSS3'],
    githubUrl: 'https://github.com/aniket0929/blitzz-reader',
    demoUrl: 'https://blitzz-reader.vercel.app'
  },
  {
    id: 'udcpr-guide',
    name: 'UDCPR Visual Guide',
    category: 'frontend',
    categoryLabel: 'Design & Code',
    description: 'Interactive educational reference and visual regulation guide for Maharashtra’s Unified Development Control and Promotion Regulations (UDCPR-2020).',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'SVG Architecture'],
    githubUrl: 'https://github.com/aniket0929/maharashtra-udcpr-visual-guide-by-plotaxis',
    demoUrl: 'https://maharashtra-udcpr-visual-guide-by-p.vercel.app'
  },
  {
    id: 'architecture-landing',
    name: 'Architecture Firm Landing',
    category: 'frontend',
    categoryLabel: 'Frontend',
    description: 'Animated architectural studio landing page featuring fluid layout transitions, typography pairings, and responsive structure.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    githubUrl: 'https://github.com/aniket0929/architechture-firm-landing-page-design-',
    demoUrl: 'https://architechturefirm.netlify.app/'
  },
  {
    id: 'wrizer',
    name: 'Wrizer Notes',
    category: 'frontend',
    categoryLabel: 'Desktop',
    description: 'Distraction-free desktop markdown note-taking environment crafted with Electron, supporting local file persistence, math rendering, and live preview.',
    stack: ['Electron.js', 'TypeScript', 'Markdown AST', 'CSS'],
    githubUrl: 'https://github.com/aniket0929/Wrizer',
    demoUrl: null
  },
  {
    id: 'oshi-chat',
    name: 'Oshi Chat',
    category: 'backend',
    categoryLabel: 'Backend',
    description: 'Real-time WebSocket chat platform with user authentication, instant messaging channels, online indicators, and persistent MongoDB history.',
    stack: ['Node.js', 'Express', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/aniket0929/Oshi-chatapp',
    demoUrl: 'https://oshi-chatapp.onrender.com/login'
  },
  {
    id: 'threadbox',
    name: 'ThreadBox',
    category: 'fullstack',
    categoryLabel: 'Fullstack',
    description: 'Next.js blogging and article curation platform featuring dynamic route generation, markdown rendering, and responsive typography.',
    stack: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/aniket0929/ThreadBox',
    demoUrl: null
  }
];

const sideQuests = [
  {
    id: 'cipher-craft',
    name: 'CipherCraft',
    categoryLabel: 'Playground',
    description: 'Interactive cryptographic playground to encode, decode, and visualize classical & modern ciphers with customizable keys in real time.',
    stack: ['TypeScript', 'React', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/aniket0929/CipherCraft',
    demoUrl: 'https://cipher-craft.vercel.app'
  },
  {
    id: 'pixel-cutter',
    name: 'Pixel Cutter',
    categoryLabel: 'Tool',
    description: 'Client-side image processing utility to slice panoramic photos and graphics into multi-slide grids for social media carousels with zero server uploads.',
    stack: ['TypeScript', 'HTML5 Canvas', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/aniket0929/pixel-cutter',
    demoUrl: 'https://pixel-cutter.vercel.app'
  },
  {
    id: 'markd',
    name: 'markd',
    categoryLabel: 'Extension',
    description: 'Minimalist Chrome extension to highlight, save, and organize text excerpts from any web page.',
    stack: ['JavaScript', 'Chrome Extension API', 'Web Storage'],
    githubUrl: 'https://github.com/aniket0929/markd',
    demoUrl: 'https://markd-chi.vercel.app'
  }
];

function renderProjects(filter = 'all') {
  const container = document.getElementById('projectsList');
  if (!container) return;

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <article class="project-entry">
      <div class="project-line-top">
        <div class="project-identity">
          <h3 class="project-name">${p.name}</h3>
          <span class="project-category">${p.categoryLabel}</span>
        </div>
        <div class="project-links">
          ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="link-action">Live <span class="arrow">↗</span></a>` : ''}
          ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="link-action">Code <span class="arrow">↗</span></a>` : ''}
        </div>
      </div>
      <p class="project-description">${p.description}</p>
      <div class="project-stack">${p.stack.join(' · ')}</div>
    </article>
  `).join('');
}

function renderSideQuests() {
  const container = document.getElementById('sideQuestsList');
  if (!container) return;

  container.innerHTML = sideQuests.map(p => `
    <article class="project-entry">
      <div class="project-line-top">
        <div class="project-identity">
          <h3 class="project-name">${p.name}</h3>
          <span class="project-category">${p.categoryLabel}</span>
        </div>
        <div class="project-links">
          ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="link-action">Live <span class="arrow">↗</span></a>` : ''}
          ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="link-action">Code <span class="arrow">↗</span></a>` : ''}
        </div>
      </div>
      <p class="project-description">${p.description}</p>
      <div class="project-stack">${p.stack.join(' · ')}</div>
    </article>
  `).join('');
}

function setFilter(category, buttonEl) {
  document.querySelectorAll('.filter-link').forEach(btn => btn.classList.remove('active'));
  if (buttonEl) {
    buttonEl.classList.add('active');
  }
  renderProjects(category);
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  renderSideQuests();
});
