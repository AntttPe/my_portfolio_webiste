export type ProjectStatus = "production" | "active" | "complete" | "in-progress";

export interface ProjectMedia {
  ctaLabel: string;
  href: string;
  external?: boolean;
  kind?: "demo" | "screenshots" | "documentation" | "external";
}

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  fullTech?: string[];
  wow: string;
  status: ProjectStatus;
  statusLabel: string;
  repo?: string;
  href?: string;
  year: string;
  media?: ProjectMedia;
}

export const projects: Project[] = [
  {
    id: "nexora",
    index: "01",
    title: "Nexora",
    subtitle: "Full-stack SaaS replacing paper-based dental lab workflows",
    description:
      "A web platform connecting dental clinics with prosthetic laboratories. Dentists submit digital orders with STL files, labs manage production, print queues, shipments, and invoicing — all in one system. **Formlabs PreForm API integration** bridges digital design and physical manufacturing: STL files sent to physical 3D printers, with print status polled in real time.",
    highlights: [
      "Spring Boot 3.5 / Java 21 — 15 REST controllers, 22 JPA entities, 20 Flyway migrations",
      "Real-time updates via WebSocket / STOMP — live 3D printer status, order progress",
      "Formlabs PreForm API integration — sends STL files to printers, polls status every 10s",
      "JWT auth + RBAC across three roles (CLIENT, LAB_TECH, ADMIN)",
      "Multi-tenant architecture with partner relationships and custom pricing",
      "Automatic invoice generation with price-locking on status change",
    ],
    tech: ["Java 21", "Spring Boot 3.5", "PostgreSQL", "React", "Docker"],
    fullTech: [
      "Java 21",
      "Spring Boot 3.5",
      "Hibernate",
      "PostgreSQL",
      "Flyway",
      "WebSocket / STOMP",
      "React 19",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Zod",
      "shadcn/ui",
      "Docker Compose",
    ],
    wow: "A dentist uploads an STL file and Nexora manages everything through to 3D printing and delivery.",
    status: "production",
    statusLabel: "Production — private repo",
    year: "2024 — 2026",
    media: {
      ctaLabel: "View usage demo",
      href: "/projects/nexora",
      kind: "demo",
    },
  },
  {
    id: "dental-cad",
    index: "02",
    title: "Dental CAD & AI Segmentation",
    subtitle: "C++ aligner generator + PyTorch tooth segmentation model",
    description:
      "Two interconnected components aimed at an end-to-end pipeline from raw 3D scan to generated aligner geometry. A C++ module procedurally generates dental overlay meshes from tooth models. A PyTorch neural network is being trained to segment teeth from 3D scans and feed clean geometry into the generator.",
    highlights: [
      "Modern C++17 — custom geometry algorithms, STL file processing",
      "Procedural aligner mesh generation written from scratch (~80% complete)",
      "PyTorch segmentation model trained on dental mesh data",
      "End-to-end target: raw 3D scan → segmented teeth → generated aligner",
      "Replacing workflows that commercial orthodontic CAD tools charge thousands for",
    ],
    tech: [
      "C++17",
      "STL processing",
      "Python",
      "PyTorch",
      "NumPy",
      "CMake",
    ],
    wow: "Writing the kind of software that orthodontic CAD tools sell for thousands of dollars — from scratch, in C++.",
    status: "active",
    statusLabel: "Active development — private repo",
    year: "2025 — present",
    media: {
      ctaLabel: "View screenshots",
      href: "/projects/dental-cad",
      kind: "screenshots",
    },
  },
  {
    id: "satellite-sim",
    index: "03",
    title: "Satellite Simulator",
    subtitle:
      "Multi-layer LEO satellite simulator — onboard computer in C++ / FreeRTOS, FastAPI bridge, and a planned Mission Control dashboard",
    description:
      "A satellite simulation system modeled on real onboard-computer architecture, running on a Low Earth Orbit profile. The embedded layer in C++17 + FreeRTOS (POSIX port) emulates a hard real-time flight computer. A Python / FastAPI bridge exposes the live state over REST + WebSocket for an upcoming Mission Control dashboard.",
    highlights: [
      "FreeRTOS scheduler managing 6 concurrent tasks at differing priorities",
      "SensorTask — generates IMU (gyro, accel) + temperature with realistic Gaussian noise every 100 ms",
      "OrbitTask — real-time satellite position (lat / lon / alt) using Kepler's laws; 95-min orbital period, 7,588 m/s at 550 km altitude",
      "LaserTask — optical-link simulation with atmospheric attenuation, scintillation, and Bit Error Rate calculation",
      "WatchdogTask (priority 3) — supervises system liveness via binary semaphore",
      "Inter-task communication via separated FreeRTOS queues, one per recipient",
      "Python / FastAPI bridge (in progress) — TCP socket receives C++ telemetry, exposes REST + WebSocket; async broadcast to multiple WebSocket clients simultaneously",
      "Planned: React Mission Control dashboard with live telemetry charts and 3D orbit visualization",
    ],
    tech: [
      "C++17",
      "FreeRTOS (POSIX port)",
      "CMake",
      "Python 3.13",
      "FastAPI",
      "TCP/IP",
    ],
    fullTech: [
      "C++17",
      "FreeRTOS (POSIX port)",
      "CMake",
      "Python 3.13",
      "FastAPI",
      "Pydantic",
      "asyncio",
      "POSIX sockets",
      "TCP/IP",
    ],
    wow: "A real RTOS kernel — the same technology that runs on actual CubeSats — handling sensor fusion, orbital mechanics, optical-link physics and watchdog supervision, all built from scratch.",
    status: "in-progress",
    statusLabel: "C++ layer complete — Python bridge in progress",
    year: "2025 — present",
    media: {
      ctaLabel: "View screenshots",
      href: "/projects/satellite-sim",
      kind: "screenshots",
    },
  },
  {
    id: "homelab",
    index: "04",
    title: "Homelab",
    subtitle:
      "Private digital ecosystem — on-prem AI surveillance, cloud, and Smart Home hub on a 20W mini-PC",
    description:
      "A self-hosted alternative to the Google Drive / Nest Cam / Alexa subscription stack — designed end-to-end on paper, with assembly scheduled for June 2026. So far: full network plan (VLAN segmentation, structured cabling), bill of materials, and cost estimate ready. The architecture: bare-metal Proxmox VE hypervisor running isolated services for AI video analytics (Frigate + Google Coral TPU), private cloud (Nextcloud), Smart Home (Home Assistant integrated with existing Fibaro hardware), DNS-level ad-blocking (AdGuard) and zero-port-forward remote access (Tailscale / WireGuard). All data stays on-premise — nothing leaves the LAN.",
    highlights: [
      "Proxmox VE bare-metal hypervisor — every service runs as an isolated LXC / KVM, zero-downtime updates",
      "Frigate NVR + Google Coral USB TPU — 4 TOPS local inference at ~2W, real-time human/vehicle classification across all cameras, no cloud round-trip",
      "Camera network isolated on VLAN 10 (802.1Q) — compromised IP cam cannot reach domestic devices",
      "Beelink N100 mini-PC, 16GB RAM, 6–20W idle — 24/7 ops at ~15–30 PLN/month electricity",
      "TerraMaster D4-320 over USB-C 10 Gbps — WD Purple 4TB for video, IronWolf 6TB for NAS / backups",
      "Tailscale mesh (WireGuard) for remote access — no port forwarding, no exposed router",
      "Scrutiny S.M.A.R.T. monitoring — predictive disk-failure alerts before data loss",
      "Outdoor Cat 5e PE cabling with downward-sloped wall penetrations and weather-sealed openings",
    ],
    tech: [
      "Proxmox VE",
      "Frigate NVR",
      "Google Coral TPU",
      "Home Assistant",
      "Nextcloud",
      "AdGuard Home",
      "Tailscale / WireGuard",
      "TP-Link 802.1Q VLAN",
      "PoE",
      "Linux / LXC",
      "Docker",
    ],
    wow: "An on-prem replacement for the entire subscription stack — surveillance, cloud, and home automation — running on a 20W mini-PC and a USB-stick AI accelerator.",
    status: "in-progress",
    statusLabel: "Planning · build in June 2026",
    year: "2026 — present",
    media: {
      ctaLabel: "View documentation",
      href: "/projects/homelab",
      kind: "documentation",
    },
  },
  {
    id: "web",
    index: "05",
    title: "Web Work",
    subtitle: "Production frontend, when a project calls for one",
    description:
      "Frontend is a tool I reach for happily — but the work I want to be doing sits a few layers below the UI: backend, embedded, networks. Listed here for context.",
    highlights: [
      "apmdental.pl — production site for a dental practice, built and deployed solo on Next.js / Vercel",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    wow: "",
    status: "complete",
    statusLabel: "Live in production",
    year: "2025",
    media: {
      ctaLabel: "Visit apmdental.pl",
      href: "https://www.apmdental.pl",
      external: true,
      kind: "external",
    },
  },
];

export interface SkillGroup {
  category: string;
  items: Array<{ name: string; level: "core" | "working" | "growing" }>;
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "Java", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "C++17", level: "working" },
      { name: "Python", level: "working" },
      { name: "SQL", level: "working" },
      { name: "Rust", level: "growing" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", level: "core" },
      { name: "Hibernate / JPA", level: "core" },
      { name: "JWT / RBAC", level: "core" },
      { name: "WebSocket / STOMP", level: "working" },
      { name: "FastAPI", level: "working" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React 19", level: "core" },
      { name: "Next.js", level: "core" },
      { name: "TanStack Query", level: "working" },
      { name: "Zustand", level: "working" },
      { name: "Tailwind CSS", level: "core" },
    ],
  },
  {
    category: "Infra & Self-hosting",
    items: [
      { name: "PostgreSQL", level: "working" },
      { name: "Docker", level: "working" },
      { name: "Proxmox VE", level: "growing" },
      { name: "Linux", level: "working" },
      { name: "Tailscale / WireGuard", level: "growing" },
      { name: "Git", level: "core" },
    ],
  },
  {
    category: "Networking",
    items: [
      { name: "Cisco CCNA (3/3)", level: "growing" },
      { name: "Routing protocols", level: "working" },
      { name: "VLANs / 802.1Q", level: "working" },
      { name: "Subnetting", level: "working" },
      { name: "PoE / structured cabling", level: "working" },
    ],
  },
  {
    category: "Embedded & ML",
    items: [
      { name: "FreeRTOS", level: "growing" },
      { name: "POSIX threading", level: "working" },
      { name: "PyTorch", level: "growing" },
      { name: "Edge AI (Coral TPU)", level: "growing" },
      { name: "STL / geometry", level: "working" },
    ],
  },
];

export const contact = {
  email: "antek.pietraszewski@example.com",
  github: "https://github.com/antekpietraszewski",
  linkedin: "https://linkedin.com/in/antek-pietraszewski",
  location: "Kraków, Poland",
};

export const meta = {
  name: "Antek Pietraszewski",
  role: "ICT Engineering Student · Systems Builder",
  school: "AGH University of Science and Technology",
  program: "Teleinformatyka (ICT) — 4th semester, BSc",
  focus: "Networks, embedded, systems programming",
  longTerm: "Software at the intersection of critical infrastructure — aerospace, medical, telecom",
};

export const aboutIntro =
  "Fourth-semester ICT student at AGH Kraków. Building systems that have to hold up under pressure — both ends of the stack, both for clients and for myself.";

export interface AboutSection {
  label: string;
  body: string;
}

export const aboutSections: AboutSection[] = [
  {
    label: "Learning",
    body: "ICT Engineering (Teleinformatyka) at AGH Kraków, 4th semester. CCNA in progress.",
  },
  {
    label: "Building",
    body: "Nexora and Dental CAD on my own time — full-stack systems with real users behind them. Occasional production websites when someone asks for one.",
  },
  {
    label: "Direction",
    body: "Reliable, secure systems — networking, embedded, systems programming. Picking up Rust next, for the same reasons.",
  },
  {
    label: "Off-screen",
    body: "Physical training and endurance racing — competed in a few triathlons, including a full Ironman finish.",
  },
];

export const aboutPhoto = {
  // Flip to true after dropping the photo at public/me-triathlon.jpg
  enabled: false,
  src: "/me-triathlon.jpg",
  alt: "Antek at the finish line of an Ironman triathlon, holding the medal",
  caption: "ironman finish",
};

export interface AboutStat {
  label: string;
  value: string;
}

export const aboutStats: AboutStat[] = [
  { label: "Studies", value: "4th sem" },
  { label: "CCNA", value: "2/3 done" },
  { label: "Ironman", value: "1× finish" },
];
