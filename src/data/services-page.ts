export type ServicePageCard = {
  title: string;
  description: string;
  headerImage: string;
  headerImageAlt: string;
  features: string[];
  techIcons: string[];
};

const cardOneIcons = [
  "/images/services/servicescardoneiconone.svg",
  "/images/services/servicescardoneicontwo.svg",
  "/images/services/servicescardoneiconthree.svg",
  "/images/services/servicescardoneiconfour.svg",
  "/images/services/servicescardoneiconfive.svg",
  "/images/services/servicescardoneiconsix.svg",
  "/images/services/servicescardoneiconseven.svg",
  "/images/services/servicescardoneiconeight.svg",
  "/images/services/servicescardoneiconnine.svg",
  "/images/services/servicescardoneiconten.svg",
  "/images/services/servicescardoneiconeleven.svg",
];

const cardThreeIcons = [
  "/images/services/servicescardthreeiconone.svg",
  "/images/services/servicescardthreeicontwo.svg",
  "/images/services/servicescardthreeiconthree.svg",
  "/images/services/servicescardthreeiconfour.svg",
  "/images/services/servicescardthreeiconfive.svg",
  "/images/services/servicescardthreeiconsix.svg",
  "/images/services/servicescardthreeiconseven.svg",
  "/images/services/servicescardthreeiconeight.svg",
  "/images/services/servicescardthreeiconnine.svg",
  "/images/services/servicescardthreeiconten.svg",
  "/images/services/servicescardthreeiconeleven.svg",
];

const cardFourIcons = [
  "/images/services/servicescardfouriconone.svg",
  "/images/services/servicescardfouricontwo.svg",
  "/images/services/servicescardfouriconthree.svg",
  "/images/services/servicescardfouriconfour.svg",
  "/images/services/servicescardfouriconfive.svg",
  "/images/services/servicescardfouriconsix.svg",
  "/images/services/servicescardfouriconseven.svg",
];

export const servicesPageCards: ServicePageCard[] = [
  {
    title: "UI/UX & Product Design.",
    headerImage: "/images/services/uiux_bg.jpg",
    headerImageAlt: "UI UX product design",
    description:
      "We design intuitive, user-centered digital experiences that keep people engaged. From research and wireframes to high-fidelity prototypes, every interaction is crafted with purpose to solve real user problems and drive business results.",
    features: [
      "Research-Driven Decisions",
      "Scalable Systems",
      "Strategic UX Thinking",
      "Data-Informed Design",
      "UI/UX Design",
      "Usability Design",
    ],
    techIcons: cardOneIcons,
  },
  {
    title: "Web & Mobile App Design",
    headerImage: "/images/services/servicecardtwoimage.png",
    headerImageAlt: "web and mobile app design",
    description:
      "From pixel perfect websites to seamless mobile experiences, we build designs that work beautifully across every screen and device. Whether it's a landing page, a full web platform, or a mobile app, we deliver a clean and conversion focused design every time.",
    features: [
      "Web Design",
      "Responsive & Progressive Designs",
      "Mobile App Design",
      "Landing Pages",
    ],
    techIcons: cardOneIcons,
  },
  {
    title: "AI & ML Development",
    headerImage: "/images/services/servicescardthreeimage.png",
    headerImageAlt: "AI ML development",
    description:
      "We implement AI solutions like machine learning, NLP, and automation to drive innovation and optimize business processes.",
    features: [
      "Generative AI",
      "AI Assistants & Chatbots",
      "AI Product Development",
      "Machine Learning Solutions",
      "Natural Language Processing (NLP)",
      "Predictive Analytics",
    ],
    techIcons: cardThreeIcons,
  },
  {
    title: "Branding & E-com Design",
    headerImage: "/images/services/servicescardfourimage.png",
    headerImageAlt: "branding and ecommerce design",
    description:
      "A strong brand is the foundation of every successful business. We craft memorable brand identities from logo and typography to full visual systems. Paired with conversion optimised e-commerce design, we help businesses sell more and stand out in competitive markets.",
    features: [
      "Brand Identity",
      "Visual Identity",
      "Logo Design",
      "Woocommerce, Shopify Stores",
    ],
    techIcons: cardFourIcons,
  },
  {
    title: "SaaS & Dashboard Design",
    headerImage: "/images/services/servicescardfiveimage.png",
    headerImageAlt: "saas and dashboard design",
    description:
      "Complex data doesn't have to look complicated. We specialised in designing SaaS platforms, admin dashboards, and fintech interfaces that present data clearly and help users make decisions faster. Built for startups and enterprises across trading, healthcare and finance.",
    features: [
      "Product Design",
      "Admin Panels",
      "Dashboard UI",
      "B2B SaaS",
    ],
    techIcons: cardOneIcons,
  },
];
