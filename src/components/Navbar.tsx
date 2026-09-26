"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { brandLogo } from "@/data/gallery";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#overview", label: "Tổng Quan" },
  { href: "#not-franchise", label: "So Sánh" },
  { href: "#performance", label: "Case Study" },
  { href: "#revenue-chart", label: "Hiệu Suất" },
  { href: "#investment-calc", label: "Tài Chính" },
  { href: "#gallery", label: "Hình Ảnh" },
  { href: "#capabilities", label: "Giải Pháp" },
  { href: "#journey", label: "Quy Trình" },
  { href: "#contact", label: "Liên Hệ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-2xl"
          : "bg-neutral-950/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo Section */}
          <Link href="#overview" className="flex items-center gap-3 group shrink-0">
            <div className="h-10 w-auto min-w-[36px] rounded-lg overflow-hidden border border-amber-500/40 bg-neutral-900/90 flex-shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105 p-0.5 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brandLogo.src}
                alt={brandLogo.alt}
                className="h-full w-auto object-contain rounded-sm"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = "none";
                }}
              />
            </div>
            <div>
              <span className="block font-serif text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors whitespace-nowrap">
                SETUP F&B <span className="text-amber-400 font-sans font-light text-[10px] sm:text-xs uppercase px-1.5 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 ml-1">Tư Vấn & Đồng Hành</span>
              </span>
              <span className="block text-[10px] text-neutral-400 font-mono tracking-wider uppercase whitespace-nowrap">
                {brandLogo.title} • Vận Hành Thực Chiến
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 text-xs font-semibold uppercase tracking-wider text-neutral-300 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 relative whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white focus:outline-none shrink-0"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-neutral-300 hover:text-amber-400 py-1.5 border-b border-neutral-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}


