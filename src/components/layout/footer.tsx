import { Link } from "react-router-dom"
import { Mail, Phone, Linkedin, Twitter, Facebook, MapPin } from "lucide-react";
import { useAppDispatch } from "@/store";
import { openComingSoonModal } from "@/store/slices/uiSlice";

export function Footer() {
  const dispatch = useAppDispatch();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">SMARRTIF</span>
              <span className="text-lg font-bold bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] bg-clip-text text-transparent">
                AI
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering non-technical professionals to transition into AI technology roles through structured learning roadmaps.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/corporate-training" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  Corporate Training
                </Link>
              </li>
              <li>
                <button
                  onClick={() => dispatch(openComingSoonModal("Take Assessment"))}
                  className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm text-left cursor-pointer bg-transparent border-none p-0"
                >
                  Free Assessment
                </button>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  Webinars
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/programs#ai-agents" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link to="/programs#prompt-engineering" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  Prompt Engineering
                </Link>
              </li>
              <li>
                <Link to="/programs#llms" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  Large Language Models
                </Link>
              </li>
              <li>
                <Link to="/programs#ai-ml" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  AI/ML
                </Link>
              </li>
              <li>
                <Link to="/programs#data-analytics" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/programs#generative-ai" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                  Generative AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@smarrtifai.com" className="hover:text-[var(--brand-orange)] transition-colors">
                  info@smarrtifai.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-[var(--brand-orange)] transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 SMARRTIF AI (OPC) PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--brand-orange)] transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}