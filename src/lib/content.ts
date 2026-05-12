export type ProjectStatus = "production" | "active" | "complete" | "in-progress";

export interface ProjectMedia {
  ctaLabel: string;
  href: string;
  external?: boolean;
  kind?: "demo" | "screenshots" | "documentation" | "external";
}

export interface ProjectScreenshot {
  src: string;
  caption: string;
  type?: "image" | "video";
  poster?: string;
}

export interface ProjectDocument {
  title: string;
  href: string;
  pages?: number;
  lang?: string;
  description?: string;
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
  screenshots?: ProjectScreenshot[];
  documents?: ProjectDocument[];
}

export const projects: Project[] = [
  {
    id: "nexora",
    index: "01",
    title: "Nexora",
    subtitle: "Full-stack SaaS replacing paper-based dental lab workflows",
    description:
      "A web platform connecting dental clinics with prosthetic laboratories. Dentists submit digital orders with STL files, labs manage production, print queues, shipments, and invoicing - all in one system. **Formlabs PreForm API integration** bridges digital design and physical manufacturing: STL files sent to physical 3D printers, with print status polled in real time.",
    highlights: [
      "Spring Boot 3.5 / Java 21 - 15 REST controllers, 22 JPA entities, 20 Flyway migrations",
      "Real-time updates via WebSocket / STOMP - live 3D printer status, order progress",
      "Formlabs PreForm API integration - sends STL files to printers, polls status every 10s",
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
    statusLabel: "Production - private repo",
    year: "2024 - 2026",
    media: {
      ctaLabel: "View usage demo",
      href: "/projects/nexora",
      kind: "demo",
    },
    screenshots: [
      {
        src: "/projects/nexora/technikdashboard.png",
        caption: "Lab technician dashboard - daily overview of orders and production state",
      },
      {
        src: "/projects/nexora/panel_technika_dodawanie_zlecenia.png",
        caption: "New order - submission flow on the lab side",
      },
      {
        src: "/projects/nexora/panel_druku_3D.png",
        caption: "3D print panel - queue and live job status",
      },
      {
        src: "/projects/nexora/panel_druku_przygotowana_nakladka_przezformlabs_API.png",
        caption: "Aligner overlay prepared and sent to the printer via the Formlabs API",
      },
      {
        src: "/projects/nexora/panel_przesylek.png",
        caption: "Shipments - outbound deliveries to clinics",
      },
      {
        src: "/projects/nexora/panel_faktur.png",
        caption: "Invoices - auto-generated with price locking on status change",
      },
    ],
  },
  {
    id: "dental-cad",
    index: "02",
    title: "Dental CAD & AI Segmentation",
    subtitle: "C++ aligner generator + PyTorch tooth segmentation model",
    description:
      "Two interconnected components aimed at an end-to-end pipeline from raw 3D scan to generated aligner geometry. A C++ module procedurally generates dental overlay meshes from tooth models. A PyTorch neural network is being trained to segment teeth from 3D scans and feed clean geometry into the generator.",
    highlights: [
      "Modern C++17 - custom geometry algorithms, STL file processing",
      "Procedural aligner mesh generation (~80% complete)",
      "PyTorch segmentation model trained on dental mesh data",
      "Target pipeline: raw 3D scan → segmented teeth → generated aligner",
    ],
    tech: [
      "C++17",
      "STL processing",
      "Python",
      "PyTorch",
      "NumPy",
      "CMake",
    ],
    wow: "End-to-end pipeline from raw 3D scan to printable aligner - tooth segmentation in PyTorch, mesh generation in modern C++.",
    status: "active",
    statusLabel: "Active development - private repo",
    year: "2025 - present",
    media: {
      ctaLabel: "View screenshots",
      href: "/projects/dental-cad",
      kind: "screenshots",
    },
    screenshots: [
      {
        src: "/projects/dental-cad/01-first-segmentation-attempts.jpg",
        caption: "First segmentation attempts on raw 3D dental scans",
      },
      {
        src: "/projects/dental-cad/02-noisy-segmentation-output.jpg",
        caption: "Early output - heavy noise, indistinct tooth boundaries",
      },
      {
        src: "/projects/dental-cad/03-noise-reduction-iterations.jpg",
        caption: "Iterating on the segmentation pipeline - progressive noise reduction",
      },
      {
        src: "/projects/dental-cad/04-segmented-teeth.jpg",
        caption: "Segmentation output - individual teeth identified and color-coded",
      },
      {
        src: "/projects/dental-cad/05-clean-teeth-model.jpg",
        caption: "Clean teeth model - segmentation output processed for use by the C++ aligner generator",
      },
      {
        src: "/projects/dental-cad/06-first-voxel-aligner.jpg",
        caption: "First voxel-based aligner geometry - early generation attempt",
      },
      {
        src: "/projects/dental-cad/07-contact-surface-algorithm.jpg",
        caption: "Algorithm for computing the aligner-tooth contact surface",
      },
      {
        src: "/projects/dental-cad/08-failed-aligner-closure.jpg",
        caption: "Failure mode - broken surface closure on the generated aligner",
      },
      {
        src: "/projects/dental-cad/09-cross-section-clearance-check.jpg",
        caption: "Cross-section analysis - verifying the aligner does not intersect or sit too close to the teeth",
      },
      {
        src: "/projects/dental-cad/10-successful-aligner.jpg",
        caption: "Successful aligner over teeth - anatomically correct fit from outside",
      },
    ],
  },
  {
    id: "satellite-sim",
    index: "03",
    title: "Satellite Simulator",
    subtitle:
      "Multi-layer LEO satellite simulator - onboard computer in C++ / FreeRTOS, FastAPI bridge, and a planned Mission Control dashboard",
    description:
      "A satellite simulation system modeled on real onboard-computer architecture, running on a Low Earth Orbit profile. The embedded layer in C++17 + FreeRTOS (POSIX port) emulates a hard real-time flight computer. A Python / FastAPI bridge exposes the live state over REST + WebSocket for an upcoming Mission Control dashboard.",
    highlights: [
      "FreeRTOS scheduler managing 6 concurrent tasks at differing priorities",
      "SensorTask - generates IMU (gyro, accel) + temperature with realistic Gaussian noise every 100 ms",
      "OrbitTask - real-time satellite position (lat / lon / alt) using Kepler's laws; 95-min orbital period, 7,588 m/s at 550 km altitude",
      "LaserTask - optical-link simulation with atmospheric attenuation, scintillation, and Bit Error Rate calculation",
      "WatchdogTask (priority 3) - supervises system liveness via binary semaphore",
      "Inter-task communication via separated FreeRTOS queues, one per recipient",
      "Python / FastAPI bridge (in progress) - TCP socket receives C++ telemetry, exposes REST + WebSocket; async broadcast to multiple WebSocket clients simultaneously",
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
    wow: "A real RTOS kernel - the same technology that runs on actual CubeSats - handling sensor fusion, orbital mechanics, optical-link physics and watchdog supervision, all built from scratch.",
    status: "in-progress",
    statusLabel: "C++ layer complete - Python bridge in progress",
    year: "2025 - present",
    media: {
      ctaLabel: "View screenshots",
      href: "/projects/satellite-sim",
      kind: "screenshots",
    },
    screenshots: [
      {
        src: "/projects/satellite-sim/mission_control_panel.png",
        caption: "Mission Control panel - live telemetry from the simulated onboard computer",
      },
    ],
  },
  {
    id: "rocket-test-stand",
    index: "04",
    title: "Rocket Engine Test Stand",
    subtitle:
      "Physical thrust measurement rig for model rocket motors - Teensy 4.1, 10 kg load cell, automated electric ignition, post-burn flight modeling",
    description:
      "A static thrust test stand built to characterize home-built model rocket engines before flight. The motor is bolted into a holder mounted on a 10 kg load cell; an HX711 amplifier feeds the strain-gauge signal into a Teensy 4.1, which samples and logs thrust against time during burn. Ignition is electric - a heating wire through a high-voltage relay, triggered remotely from an Arduino Uno. Post-test, the recorded F(t) curve is fed into a simple flight model to predict peak velocity and maximum altitude as a function of initial vehicle mass.",
    highlights: [
      "10 kg single-point load cell with HX711 24-bit amplifier (SparkFun_HX711 library)",
      "Teensy 4.1 (Cortex-M7 @ 600 MHz) as primary logger - built-in SD card for in-burn data writes",
      "Arduino Uno as ignition controller - heating wire driven through a high-voltage relay, remote-triggered for safety",
      "Engine geometry modeled in Fusion 360 - convergent-divergent nozzle tuned for maximum thrust without overpressure failure",
      "Sample rate bottlenecked by HX711 (~80 Hz max) - adequate for ~1–2 s burns, identified as the next upgrade target",
      "Post-burn analysis: F(t) curve → rocket equation → predicted peak velocity and apogee vs. initial vehicle mass",
    ],
    tech: [
      "Arduino C++",
      "Teensy 4.1",
      "HX711",
      "SparkFun_HX711",
      "Fusion 360",
      "SD logging",
      "Python (analysis)",
    ],
    wow: "Built and fired a full thrust-characterization rig - load cell, ignition control, on-board logging, and post-burn flight modeling, all from scratch.",
    status: "complete",
    statusLabel: "Static test campaign complete",
    year: "2025",
    media: {
      ctaLabel: "View test footage & data",
      href: "/projects/rocket-test-stand",
      kind: "screenshots",
    },
    screenshots: [
      {
        src: "/projects/rocket-test-stand/01-load-cell-rig.jpg",
        caption: "Thrust rig - 10 kg load cell with motor holder",
      },
      {
        src: "/projects/rocket-test-stand/02-acquisition-stack.jpg",
        caption: "Acquisition stack - Teensy 4.1 (primary logger, built-in SD) + Arduino Uno (ignition control) + external SD module",
      },
      {
        src: "/projects/rocket-test-stand/03-motor-cross-section.jpg",
        caption: "Motor design - cross-section in Fusion 360, convergent-divergent nozzle profile",
      },
      {
        src: "/projects/rocket-test-stand/06-test-fire.mp4",
        caption: "Test 4 - full burn captured on the stand",
        type: "video",
        poster: "/projects/rocket-test-stand/06-test-fire-poster.jpg",
      },
      {
        src: "/projects/rocket-test-stand/04-thrust-curve.jpg",
        caption: "Test 4 thrust curve - F(t) sampled at ~80 Hz via HX711, logged to SD on Teensy",
      },
      {
        src: "/projects/rocket-test-stand/05-flight-simulations.jpg",
        caption: "Post-test flight model - predicted peak velocity and maximum altitude as a function of initial vehicle mass, derived from the measured thrust curve",
      },
    ],
  },
  {
    id: "homelab",
    index: "05",
    title: "Homelab - Design & Cost Estimate",
    subtitle:
      "Network architecture, hardware shortlist, and cost estimate for a self-hosted private cloud / surveillance / Smart Home stack - physical build planned for summer 2026",
    description:
      "Currently a planning project, not a finished system. The design stage is done: full network topology with VLAN segmentation, structured-cabling plan, bill of materials, and cost estimate. Physical assembly is scheduled for summer break 2026 - built incrementally in free time alongside studies. The target architecture: a Proxmox VE hypervisor on a 20W mini-PC running isolated services for AI video analytics (Frigate + Google Coral TPU), private cloud (Nextcloud), Smart Home (Home Assistant integrated with existing Fibaro hardware), DNS-level ad-blocking (AdGuard), and zero-port-forward remote access (Tailscale / WireGuard). All data stays on-premise.",
    highlights: [
      "Proxmox VE bare-metal hypervisor - every service runs as an isolated LXC / KVM, zero-downtime updates",
      "Frigate NVR + Google Coral USB TPU - 4 TOPS local inference at ~2W, real-time human/vehicle classification across all cameras, no cloud round-trip",
      "Camera network isolated on VLAN 10 (802.1Q) - compromised IP cam cannot reach domestic devices",
      "Beelink N100 mini-PC, 16GB RAM, 6–20W idle - 24/7 ops at ~15–30 PLN/month electricity",
      "TerraMaster D4-320 over USB-C 10 Gbps - WD Purple 4TB for video, IronWolf 6TB for NAS / backups",
      "Tailscale mesh (WireGuard) for remote access - no port forwarding, no exposed router",
      "Scrutiny S.M.A.R.T. monitoring - predictive disk-failure alerts before data loss",
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
    wow: "Designed end-to-end before any hardware is bought - topology, segmentation, hardware shortlist, and cost estimate locked in.",
    status: "in-progress",
    statusLabel: "Planning stage · physical build summer 2026",
    year: "2026 - planning",
    media: {
      ctaLabel: "View design & cost estimate",
      href: "/projects/homelab",
      kind: "documentation",
    },
    documents: [
      {
        title: "Oferta Techniczna - Prywatny Ekosystem Cyfrowy i Inteligentny Monitoring AI",
        href: "/projects/homelab/homelab-oferta-techniczna.pdf",
        pages: 7,
        lang: "Polish",
        description:
          "Full technical proposal: network topology, VLAN segmentation, hardware shortlist, bill of materials, and cost estimate.",
      },
    ],
  },
  {
    id: "web",
    index: "06",
    title: "Web Work",
    subtitle: "Production frontend, when a project calls for one",
    description:
      "Frontend is a tool I reach for happily - but the work I want to be doing sits a few layers below the UI: backend, embedded, networks. Listed here for context.",
    highlights: [
      "apmdental.pl - production site for a dental practice, built and deployed solo on Next.js / Vercel",
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
      { name: "Cisco CCNA (2/3 done)", level: "growing" },
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
  email: "pietracha10@icloud.com",
  github: "https://github.com/AntttPe",
  linkedin: "",
  location: "Kraków, Poland",
};

export const meta = {
  name: "Antek Pietraszewski",
  role: "ICT Engineering Student · Systems Builder",
  school: "AGH University of Science and Technology",
  program: "Teleinformatyka (ICT) - 4th semester, BSc",
  focus: "Networks, embedded, systems programming",
  longTerm: "Software at the intersection of critical infrastructure - aerospace, medical, telecom",
};

export const aboutIntro =
  "Fourth-semester ICT student at AGH Kraków. Building systems that have to hold up under pressure - both ends of the stack, both for clients and for myself.";

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
    body: "Nexora and Dental CAD on my own time - full-stack systems with real users behind them. Occasional production websites when someone asks for one.",
  },
  {
    label: "Direction",
    body: "Reliable, secure systems - networking, embedded, systems programming. Picking up Rust next, for the same reasons.",
  },
  {
    label: "Off-screen",
    body: "Physical training and endurance racing - competed in a few triathlons, including a full Ironman finish.",
  },
];

export const aboutPhoto = {
  enabled: true,
  src: "/personal/me-triathlon.jpg",
  alt: "Antek at the finish line of an Ironman triathlon, holding the medal",
  caption: "ironman finish",
};

export interface Credential {
  title: string;
  issuer: string;
  year: string;
  href: string;
}

export const credentials: Credential[] = [
  {
    title: "CCNA: Switching, Routing & Wireless Essentials",
    issuer: "Cisco Networking Academy · Instytut Telekomunikacji AGH",
    year: "2026",
    href: "/personal/ccna-srwe.pdf",
  },
];

export interface AboutStat {
  label: string;
  value: string;
}

export const aboutStats: AboutStat[] = [
  { label: "Studies", value: "4th sem" },
  { label: "CCNA", value: "2/3 done" },
  { label: "Languages", value: "EN B2 · PL native" },
];
