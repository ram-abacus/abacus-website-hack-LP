"use client";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
      <div className="container py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <img src="abacusdesk-logo.svg" alt="Main Logo" width={40} height={40} className="md:w-[50px] md:h-[50px]" />
          <span className="font-semibold text-sm md:text-base">Abacus Desk</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#risky-signs" className="hover:opacity-80">Signs</a>
          <a href="#how-we-fix" className="hover:opacity-80">How We Fix</a>
          <a href="#pricing" className="hover:opacity-80">Pricing</a>
          <a href="#faqs" className="hover:opacity-80">FAQs</a>
        </nav>
        
        <a href="#contact" className="hidden md:block btn btn-brand">Get Instant Help</a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container py-4 flex flex-col gap-3 text-sm">
            <a href="#risky-signs" className="py-2 hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>Signs</a>
            <a href="#how-we-fix" className="py-2 hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>How We Fix</a>
            <a href="#pricing" className="py-2 hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="#faqs" className="py-2 hover:opacity-80" onClick={() => setMobileMenuOpen(false)}>FAQs</a>
            <a href="#contact" className="btn btn-brand w-full text-center mt-2" onClick={() => setMobileMenuOpen(false)}>Get Instant Help</a>
          </nav>
        </div>
      )}
    </header>
  );
}