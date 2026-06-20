import { SiteConfig, Skill, Testimonial, NavItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "John Doe",
  title: "John Doe · Full-Stack Engineer",
  description: "Full-stack engineer specializing in building scalable web applications with modern technologies.",
  url: "https://johndoe.com",
  ogImage: "https://johndoe.com/og.png",
  links: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    email: "hello@johndoe.com",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SKILLS: Skill[] = [
  { name: "React", level: 95, category: "Frontend", color: "#61DAFB" },
  { name: "Next.js", level: 92, category: "Frontend", color: "#000000" },
  { name: "TypeScript", level: 90, category: "Language", color: "#3178C6" },
  { name: "Node.js", level: 88, category: "Backend", color: "#339933" },
  { name: "Python", level: 85, category: "Language", color: "#3776AB" },
  { name: "PostgreSQL", level: 82, category: "Database", color: "#4169E1" },
  { name: "Docker", level: 78, category: "DevOps", color: "#2496ED" },
  { name: "GraphQL", level: 75, category: "API", color: "#E10098" },
  { name: "AWS", level: 72, category: "Cloud", color: "#FF9900" },
  { name: "Redis", level: 70, category: "Database", color: "#DC382D" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Alice Johnson",
    role: "CTO",
    company: "TechCorp",
    avatar: "/images/avatar1.jpg",
    content: "John is an exceptional engineer. His ability to architect complex systems while maintaining clean, readable code is rare to find.",
  },
  {
    id: "2",
    name: "Bob Smith",
    role: "Engineering Manager",
    company: "StartupXYZ",
    avatar: "/images/avatar2.jpg",
    content: "Working with John was a game-changer for our team. He brought deep technical expertise and a product-minded approach.",
  },
  {
    id: "3",
    name: "Carol Davis",
    role: "Founder",
    company: "DevStudio",
    avatar: "/images/avatar3.jpg",
    content: "John delivered our platform ahead of schedule with exceptional quality. His communication and technical skills are top-notch.",
  },
];
