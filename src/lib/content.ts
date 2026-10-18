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

export interface ProjectVersion {
  label: string;
  badge?: string;
  tagline?: string;
  description: string;
  highlights: string[];
  tech: string[];
  statusLabel?: string;
  screenshots?: ProjectScreenshot[];
}

export type ProjectPlacement = "lead" | "pair" | "now" | "more";

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
  placement: ProjectPlacement;
  pitch?: string;
  media?: ProjectMedia;
  screenshots?: ProjectScreenshot[];
  documents?: ProjectDocument[];
  versions?: ProjectVersion[];
}

export const projects: Project[] = [
  {
    id: "nexora",
    index: "03",
    title: "Nexora",
    subtitle: "Full-stack SaaS replacing paper-based dental lab workflows",
    pitch:
      "A web platform for dental labs. Clinics send orders with STL files; the lab handles production, 3D printing through the Formlabs API, shipping and invoicing in one place.",
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
    status: "complete",
    statusLabel: "Complete - learning project, private repo",
    year: "Feb - May 2026",
    placement: "pair",
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
    title: "Dental Aligner Generator",
    subtitle:
      "Two approaches to one problem - a naive C++ offset that failed, a Python SDF pipeline that solved it",
    pitch:
      "Turns an intraoral scan into a print-ready aligner mesh. The first version, in C++, broke on concave geometry between the teeth. The Python rewrite builds the shell from a signed distance field, so it can't self-intersect.",
    description:
      "An end-to-end tool that turns an intraoral STL scan into a print-ready orthodontic aligner mesh for direct-print SLA. The first version went into C++ and it failed - but the problem was the algorithm, not the language. Naive surface offsetting self-intersects in concave regions between the teeth and fills the embrasures (interdental gaps). I rewrote it in Python around a signed distance field, where geometry cannot self-intersect by construction and interdental gaps are bridged naturally by morphological closing. Both versions are preserved here side by side - the C++ prototype as an engineering record, the Python pipeline as the current working build.",
    highlights: [
      "End-to-end pipeline from intraoral STL scan to print-ready aligner mesh, with auto-generated print supports",
      "Two iterations preserved: legacy C++ + PyTorch attempt; working Python SDF rewrite that supersedes it",
      "Core engineering insight: failures of geometry are usually algorithmic, not language-level",
    ],
    tech: [
      "Python 3.10+",
      "NumPy / SciPy",
      "trimesh",
      "scikit-image",
      "PySide6",
      "C++17 (legacy)",
      "PyTorch (legacy)",
    ],
    wow: "Diagnosed a C++ failure as algorithmic rather than language-level - rewrote the offset around a signed distance field, where self-intersection becomes structurally impossible.",
    status: "complete",
    statusLabel: "Complete - learning project",
    year: "Jan - Jun 2026",
    placement: "pair",
    media: {
      ctaLabel: "View both versions",
      href: "/projects/dental-cad",
      kind: "screenshots",
    },
    versions: [
      {
        label: "C++ Legacy",
        badge: "Superseded",
        tagline: "First attempt - C++17 generator + PyTorch tooth segmentation",
        description:
          "Original architecture: a C++ module procedurally generating dental overlay meshes from segmented tooth models, plus a PyTorch network trained to segment teeth from raw scans. The C++ aligner generation hit a wall - naive surface offsetting self-intersects in concave regions between the teeth and fills the embrasures. After multiple attempts at patching the result, I diagnosed the issue as algorithmic - the wrong approach to the offset problem entirely. Preserved here as an engineering record and as the lesson that drove the Python rewrite.",
        highlights: [
          "Modern C++17 - custom geometry algorithms, STL file processing",
          "Procedural aligner mesh generation, ~80% complete before the algorithmic limits became clear",
          "PyTorch segmentation model trained on dental mesh data, with progressive noise reduction",
          "Target pipeline: raw 3D scan -> segmented teeth -> generated aligner",
          "Engineering record of where naive vertex-normal offsetting fails: self-intersections and embrasure-fill",
        ],
        tech: ["C++17", "STL processing", "Python", "PyTorch", "NumPy", "CMake"],
        statusLabel: "Superseded by Python rewrite",
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
            caption: "Clean teeth model - the input the C++ aligner generator worked on",
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
        label: "Python Pipeline",
        badge: "Current",
        tagline: "Working: Python SDF pipeline with auto-generated print supports",
        description:
          "End-to-end Python tool: STL intraoral scan -> manual adhesion-surface selection -> SDF/voxel pipeline -> aligner mesh + research-driven print supports -> print-ready multi-solid STL. The pipeline is built around a signed distance field instead of vertex-normal offsetting, which makes self-intersection structurally impossible and lets morphological closing bridge embrasures naturally. Manual selection (with geodesic shortest-path + live-wire snap to the gingival margin) was chosen deliberately over ML segmentation - simplicity, determinism, and clinician control over the result.",
        highlights: [
          "SDF / voxel pipeline: voxelize -> morphological closing -> Euclidean Distance Transform -> field assembly -> marching cubes -> Taubin smoothing",
          "Owner-based proximity trim - each voxel belongs to the aligner only if its nearest surface is part of the selection, giving a natural gingival cut without tuning a radius",
          "Hard-min wall + smooth-min only on the cut edges - exact thickness with rounded trim edge",
          "EDT instead of per-voxel KDTree queries - one stage cut from ~116 s to ~2 s",
          "Interactive selection - geodesic shortest-path Dijkstra + live-wire snap to the gingival margin via per-edge dihedral curvature",
          "Research-driven print supports on the rim (never on the fit surface) - separates raft contact area from raft thickness for ~40% less resin without losing adhesion",
          "Watertight + manifold multi-solid STL straight to PreForm - no boolean-union failure modes",
        ],
        tech: [
          "Python 3.10+",
          "NumPy",
          "SciPy",
          "scikit-image",
          "trimesh",
          "manifold3d",
          "PySide6",
          "PyVista / VTK",
        ],
        statusLabel: "Working pipeline",
        screenshots: [],
      },
    ],
  },
  {
    id: "satellite-sim",
    index: "06",
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
    status: "complete",
    statusLabel: "Complete",
    year: "2025",
    placement: "more",
    screenshots: [
      {
        src: "/projects/satellite-sim/mission_control_panel.png",
        caption: "Mission Control panel - live telemetry from the simulated onboard computer",
      },
    ],
  },
  {
    id: "ortho-planning",
    index: "04",
    title: "Orthodontic Planning Tool",
    subtitle: "A pipeline of tools to help orthodontists plan aligner treatment",
    description:
      "What I'm mostly working on now, to learn and to dig deeper into the field. It starts with cephalometric analysis - an AI model that places the landmarks and adapts to how a given orthodontist prefers to place them - and runs through to designing attachments for aligner treatment.",
    highlights: [],
    tech: ["Python", "PyTorch", "NumPy", "3D geometry"],
    wow: "",
    status: "in-progress",
    statusLabel: "In progress",
    year: "2026 - present",
    placement: "now",
  },
  {
    id: "whatsapp-shift-tracker",
    index: "01",
    title: "WhatsApp Shift Tracker",
    subtitle:
      "Time tracking for a Belgian cleaning company with about 40 staff - employees clock in and out over WhatsApp",
    description:
      "Built to the owner's requirements. Staff send START or STOP on WhatsApp, so there is no new app to learn; the owner gets an admin panel with timelines, corrections and Excel reports. It runs on my VPS and is in its first tests with the client, with full rollout planned for December 2026.",
    highlights: [
      "Clock in and out by WhatsApp message - nothing to install or learn for the staff",
      "Admin panel with timelines, manual corrections and Excel reports; every change is audited",
      "Append-only event log enforced by PostgreSQL triggers, designed for 5-year labour-law record retention",
      "One Docker image on a VPS, with separate processes for the webhook, panel, scheduler and migrations",
      "2FA, CSRF and CSP protection; 213 automated tests",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "HTMX", "Docker Compose", "WhatsApp Business API"],
    wow: "",
    status: "active",
    statusLabel: "Client testing · full rollout Dec 2026",
    year: "2026 - present",
    placement: "lead",
  },
  {
    id: "rocketsim",
    index: "05",
    title: "RocketSim",
    subtitle:
      "6-DoF rocket landing simulator with thrust-vector control and a neural landing controller trained with PPO",
    description:
      "Early-stage project. Variable-mass rocket dynamics with swappable MuJoCo and Bullet backends, and a landing controller trained with reinforcement learning under randomized wind, sensor noise, actuator delay and mass.",
    highlights: [],
    tech: ["Python", "PyTorch", "MuJoCo", "PyBullet", "Gymnasium", "Stable-Baselines3"],
    wow: "",
    status: "in-progress",
    statusLabel: "Early stage",
    year: "2026 - present",
    placement: "more",
  },
  {
    id: "rocket-test-stand",
    index: "07",
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
    placement: "more",
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
    index: "08",
    title: "Homelab - Design & Cost Estimate",
    subtitle:
      "Network architecture, hardware shortlist, and cost estimate for a self-hosted private cloud / surveillance / Smart Home stack",
    description:
      "Currently a planning project, not a finished system. The design stage is done: full network topology with VLAN segmentation, structured-cabling plan, bill of materials, and cost estimate. The target architecture: a Proxmox VE hypervisor on a 20W mini-PC running isolated services for AI video analytics (Frigate + Google Coral TPU), private cloud (Nextcloud), Smart Home (Home Assistant integrated with existing Fibaro hardware), DNS-level ad-blocking (AdGuard), and zero-port-forward remote access (Tailscale / WireGuard). All data stays on-premise.",
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
    status: "complete",
    statusLabel: "Design complete",
    year: "2026",
    placement: "more",
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
];

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  team?: string;
  start: string;
  end: string;
  duration?: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  tech: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "relu",
    role: "Software and ML Engineer Intern",
    company: "Relu BV",
    companyUrl: "https://relu.ai",
    location: "Leuven, Belgium",
    team: "AI & Software Engineering team",
    start: "Jul 2026",
    end: "Sep 2026",
    summary:
      "Production ML for dental and orthodontic imaging. I retrained their 3D models through several iterations, built new models and algorithms into the pipeline, and fixed what was holding it back - in the same system their paying customers rely on.",
    bullets: [
      "Retrained a production 3D segmentation model used by paying customers: data pipeline, architecture changes, cloud GPU training and evaluation against the existing baseline.",
      "Worked out why one architecture variant would not learn: the target depended on the whole input, but patch-based training only ever sees part of it. Reframed the target so it could be learned locally, and the model converged.",
      "Built a landmark-prediction module on a voxelised geometric representation, including its data pipeline, evaluation scripts and integration into the existing pipeline.",
      "Fixed bugs in the preprocessing and training infrastructure, including stale cached data being silently reused and hardcoded paths.",
    ],
    tech: [
      "Python",
      "PyTorch",
      "ONNX Runtime",
      "NumPy",
      "SciPy",
      "Docker",
      "Git",
      "Linux",
      "Cloud GPU training",
    ],
  },
];

export const resume = {
  href: "/personal/Antoni_Pietraszewski_CV.pdf",
  fileName: "Antoni_Pietraszewski_CV.pdf",
};

export interface SkillGroup {
  category: string;
  items: Array<{ name: string; level: "core" | "working" | "growing" }>;
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: "core" },
      { name: "Java", level: "core" },
      { name: "TypeScript", level: "core" },
      { name: "C++17", level: "working" },
      { name: "SQL", level: "working" },
      { name: "Rust", level: "growing" },
    ],
  },
  {
    category: "ML & Scientific Python",
    items: [
      { name: "PyTorch", level: "core" },
      { name: "NumPy", level: "core" },
      { name: "SciPy", level: "working" },
      { name: "ONNX Runtime", level: "working" },
      { name: "3D mesh / voxel", level: "working" },
      { name: "Cloud GPU training", level: "working" },
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
    category: "Infra & Tooling",
    items: [
      { name: "PostgreSQL", level: "working" },
      { name: "Docker", level: "working" },
      { name: "Linux", level: "working" },
      { name: "Git", level: "core" },
      { name: "Proxmox VE", level: "growing" },
      { name: "Tailscale / WireGuard", level: "growing" },
      { name: "Multi-agent AI coding", level: "working" },
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
    category: "Embedded",
    items: [
      { name: "FreeRTOS", level: "growing" },
      { name: "POSIX threading", level: "working" },
      { name: "Edge AI (Coral TPU)", level: "growing" },
    ],
  },
];

export const contact = {
  email: "pietracha10@icloud.com",
  github: "https://github.com/AntttPe",
  linkedin: "https://www.linkedin.com/in/antoni-pietraszewski/",
  location: "Kraków, Poland",
};

export const meta = {
  name: "Antek Pietraszewski",
  role: "ICT Engineering Student · Systems Builder",
  school: "AGH University of Science and Technology",
  program: "ICT Engineering (Teleinformatyka), BSc - graduating February 2028",
  focus: "Production ML pipelines, networks, embedded, systems programming",
  longTerm: "Software at the intersection of critical infrastructure - aerospace, medical, telecom",
};

export const aboutIntro =
  "Fifth-semester ICT student at AGH Kraków, graduating in February 2028. In summer 2026 I interned at Relu BV in Leuven, Belgium, working on production ML for 3D medical imaging, mostly in Python.";

export interface AboutSection {
  label: string;
  body: string;
}

export const aboutSections: AboutSection[] = [
  {
    label: "Learning",
    body: "ICT Engineering (Teleinformatyka) at AGH Kraków, 5th of 7 semesters. Working through the Cisco CCNA track alongside.",
  },
  {
    label: "Work",
    body: "Relu BV, summer 2026 - working on production ML pipelines for dental imaging: retraining models, building new ones, and fixing the infrastructure around them.",
  },
  {
    label: "Building",
    body: "For a real client: a shift-tracking system for a Belgian cleaning company with about 40 staff, built around the owner's requirements - staff clock in and out over WhatsApp. First tests with the client are running now, full rollout in December. On my own time: an orthodontic planning tool, which grew out of two finished learning projects - Nexora and the Dental Aligner Generator.",
  },
  {
    label: "Direction",
    body: "Systems that have to keep working - production ML, backend, networking, embedded.",
  },
  {
    label: "Off-screen",
    body: "Endurance sport - a few triathlons, including a full-distance one (3.8 km swim, 180 km bike, 42 km run). Tennis and padel too - I love both, and they're a lot of fun to play.",
  },
];

export const aboutPhoto = {
  enabled: true,
  src: "/personal/me-triathlon.jpg",
  alt: "Antek after finishing a full-distance triathlon, holding the medal",
  caption: "full-distance triathlon finish",
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
  { label: "Graduating", value: "Feb 2028" },
  { label: "Last internship", value: "Relu '26" },
  { label: "Languages", value: "EN B2 · PL native" },
];
