import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-lg font-semibold text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-2 text-sm text-gray-400 max-w-md">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Projects", "Blog", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon size={18} />
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon size={18} />
              </a>
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon size={18} />
              </a>
              <a href={`mailto:${siteConfig.links.email}`} className="text-gray-400 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
