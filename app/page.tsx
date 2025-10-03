"use client";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import MauticForm from "@/components/ContactForm";

export default function Page() {
  return (
    <div>
      <TopBar />
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: 'radial-gradient(1000px 400px at 0% 0%, rgba(239,155,17,0.15), transparent), radial-gradient(800px 300px at 100% 30%, rgba(239,155,17,0.12), transparent)'}} />
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              WordPress Site Hacked?
              <span className="block mt-2">We’ll Fix It <span style={{ color: '#ef9b11' }}>Fast & Securely</span>.</span>
            </h1>
            <p className="mt-5 text-lg subtle">
              Malware cleanup, blacklist removal, hardening & ongoing monitoring — handled by certified experts at Abacus Desk. Most recoveries completed within 24–48 hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-brand">Fix My Site Now</a>
              <a href="#pricing" className="btn btn-outline-brand">See Plans & Pricing</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
              <span>✅ 10‑minute avg. initial response</span>
              <span>🔒 NDA on request</span>
              <span>🛡️ 30‑day clean‑site warranty</span>
            </div>
          </div>
          <div className="relative">
            <div className="card">
              <h3 className="text-xl font-bold mb-3">Free Instant Health Check</h3>
              <p className="text-sm text-neutral-600 mb-4">Enter your site and we’ll run a quick scan & action plan.</p>
              <MauticForm />
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y bg-white">
        <div className="container py-8 grid md:grid-cols-4 gap-6 text-center">
          {[
            ["1,200+","WordPress incidents resolved"],
            ["97%","Sites restored within 48 hrs"],
            ["4.8/5","Avg. client rating"],
            ["24×7","Emergency response"],
          ].map(([num,txt])=> (
            <div key={num}>
              <p className="text-3xl font-extrabold" style={{ color: '#ef9b11' }}>{num}</p>
              <p className="text-sm text-neutral-600">{txt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Risky signs */}
      <section id="risky-signs" className="container py-16">
        <h2 className="heading">Common Signs Your WordPress is Compromised</h2>
        <p className="mt-3 subtle">If you notice any of these, act immediately to prevent data loss and SEO damage.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            ['Random redirects / pop‑ups', 'Users are redirected to spam or adult sites.'],
            ['Search warnings', 'Google marks your site as "Deceptive" or "Harmful".'],
            ['Defaced pages', 'Homepage replaced, strange content uploaded.'],
            ['Unknown admins', 'New users with admin roles you did not create.'],
            ['Email blacklisting', 'Contact forms sending spam or emails bouncing.'],
            ['Server overload', 'High CPU usage, slow or down frequently.'],
          ].map(([t,d]) => (
            <div key={t} className="card">
              <p className="font-semibold">{t}</p>
              <p className="text-sm text-neutral-600 mt-1">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RTB */}
      <section className="bg-neutral-900 text-white">
        <div className="container py-16">
          <h2 className="heading">Why Choose Abacus Desk</h2>
          <p className="mt-3 opacity-80">Clear reasons to believe we’re the right partner when time and trust matter.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              ['Expert incident responders', 'Seasoned WordPress engineers with security certifications handle your case end‑to‑end.'],
              ['Root‑cause cleanup', 'We remove malware, backdoors, cron jobs, rogue users, and fix database infections — not just surface symptoms.'],
              ['Hardening & WAF', 'Firewall, brute‑force protection, 2FA, least‑privilege roles, secure configs and auto‑patching.'],
              ['Blacklist removal', 'We help with Google Safe Browsing & host blacklists once the site is clean.'],
              ['Backups & restore plan', 'Versioned offsite backups and tested rollback procedures.'],
              ['Warranty & monitoring', '30‑day clean‑site warranty and optional 24/7 monitoring & updates.'],
            ].map(([t,d]) => (
              <div key={t} className="rounded-2xl p-5 border border-neutral-800 bg-neutral-800/60">
                <p className="font-semibold" style={{ color: '#ef9b11' }}>{t}</p>
                <p className="text-sm opacity-80 mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we fix */}
      <section id="how-we-fix" className="container py-16">
        <h2 className="heading">Our 6‑Step Recovery Process</h2>
        <p className="mt-3 subtle">Fast, systematic, and verifiable cleanup with hardening.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            ['Triage & snapshot', 'Secure access, snapshot the environment, preserve logs.'],
            ['Deep scan', 'Codebase + DB signature & heuristic scans; identify backdoors.'],
            ['Malware removal', 'Clean core, themes, plugins; remove rogue cron/jobs & users.'],
            ['Patch & harden', 'Update components, disable unused/abandoned plugins, enforce 2FA.'],
            ['Restore & QA', 'Restore clean content, verify UX, speed, forms, and emails.'],
            ['Monitor & report', '24–48h observation, share RCA & prevention checklist.'],
          ].map(([t,d], i) => (
            <div key={t} className="card">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-white" style={{ backgroundColor: '#ef9b11' }}>{i+1}</div>
              <p className="font-semibold">{t}</p>
              <p className="text-sm text-neutral-600 mt-1">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 card">
          <p className="text-sm"><span className="font-semibold" style={{ color: '#ef9b11' }}>We secure what matters:</span> admin accounts, file permissions, wp‑config, XML‑RPC, REST endpoints, uploads directory, salts & keys, SMTP, and backups.</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-neutral-50">
        <div className="container py-16">
          <h2 className="heading text-center">Transparent, Outcome‑Based Pricing</h2>
          <p className="mt-3 subtle text-center">One‑time cleanup with a 30‑day warranty, or go fully managed for peace of mind.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="card flex flex-col">
              <h3 className="text-xl font-bold">Essential DeepScan</h3>
              <p className="text-sm text-neutral-600">For single incidents</p>
              <p className="mt-4 text-4xl font-extrabold" style={{ color: '#ef9b11' }}>₹9,999</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>• Full malware removal</li>
                <li>• Core/theme/plugin updates</li>
                <li>• 30‑day warranty</li>
                <li>• RCA report</li>
              </ul>
              <a href="#contact" className="mt-6 btn btn-brand text-center">Start Cleanup</a>
            </div>

            <div className="card flex flex-col border-2" style={{ borderColor: '#ef9b11' }}>
              <div className="text-xs font-semibold uppercase tracking-wider self-start px-2 py-1 rounded-md mb-2" style={{ backgroundColor: '#ef9b11', color: 'white' }}>Most Popular</div>
              <h3 className="text-xl font-bold">Priority Fixing</h3>
              <p className="text-sm text-neutral-600">Fast‑track + hardening</p>
              <p className="mt-4 text-4xl font-extrabold" style={{ color: '#ef9b11' }}>₹14,999</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>• Everything in Essential</li>
                <li>• 12‑hour response SLA</li>
                <li>• Security hardening + WAF</li>
                <li>• 60‑day monitoring</li>
              </ul>
              <a href="#contact" className="mt-6 btn btn-brand text-center">Get Priority Help</a>
            </div>

            <div className="card flex flex-col">
              <h3 className="text-xl font-bold">Enterprise Website</h3>
              <p className="text-sm text-neutral-600">Prevention & support</p>
              <a href="#contact" className="mt-4 text-4xl font-extrabold" style={{ color: '#ef9b11' }}>Get Quote</a>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li>• Continuous updates</li>
                <li>• Daily backups & Uptime</li>
                <li>• Malware firewall (WAF)</li>
                <li>• Monthly security report</li>
              </ul>
              <a href="#contact" className="mt-6 btn btn-brand text-center">Talk to Security Team</a>
            </div>
          </div>

          <p className="mt-6 text-xs text-center text-neutral-500">Custom SLAs, multi‑site discounts, and agency partnerships available on request.</p>
        </div>
      </section>

      {/* Testimonial & Trust */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 card">
            <h3 className="text-xl font-bold">What Our Clients Say</h3>
            <p className="mt-3 text-neutral-700">“Our WordPress was redirecting visitors and blacklisted within hours. Abacus Desk restored it the same day, cleaned everything thoroughly and set up monitoring. Zero issues since.”</p>
            <p className="mt-2 text-sm text-neutral-600">— Marketing Head, D2C Brand</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold">Security Promise</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>• Confidential handling (NDA)</li>
              <li>• Principle of least privilege</li>
              <li>• Log‑based root cause analysis</li>
              <li>• Post‑cleanup warranty</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Urgency */}
      <section className="container">
        <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(90deg, #ef9b11, #ffb84a)' }}>
          <div className="px-6 md:px-10 py-10 text-white grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold">Don’t let hackers damage your brand & SEO.</h3>
              <p className="mt-2 opacity-90">Every hour matters — start the cleanup now.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#contact" className="bg-white text-neutral-900 px-5 py-3 rounded-2xl font-semibold">Start Emergency Cleanup</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="container py-16">
        <h2 className="heading">FAQs</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            ['How fast can you start?', 'We begin triage as soon as we receive access details — typically within minutes.'],
            ['Will my site go offline?', 'We work on a secure copy and schedule changes to minimize downtime.'],
            ['Do you guarantee removal?', 'Yes. If malware reappears within the warranty period, we remediate at no extra cost.'],
            ['What access do you need?', 'Usually WP admin, hosting/cPanel/SSH, and SFTP. We’ll guide you step‑by‑step.'],
            ['Can you help with Google warnings?', 'Once clean, we assist with blacklist review and search console reconsideration.'],
            ['Do you support WooCommerce?', 'Absolutely. We handle complex stores, custom themes, and high‑traffic sites.'],
          ].map(([q,a]) => (
            <div key={q} className="card">
              <p className="font-semibold">{q}</p>
              <p className="text-sm text-neutral-600 mt-1">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-neutral-100 border-t">
        <div className="container py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="heading">Speak to a Security Engineer</h2>
            <p className="mt-3 subtle">Share a few details and we’ll get you back online safely. Prefer WhatsApp? Mention your number.</p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li>• India‑first team, global clients</li>
              <li>• Emergency bridge on Google Meet/Zoom</li>
              <li>• Transparent playbooks & reporting</li>
            </ul>
          </div>
          <div className="card">
            <MauticForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white">
        <div className="container py-10 grid md:grid-cols-4 gap-8">
          <div>
            <img src="abacusdesk-logo.svg" alt="Main Logo" width={50} height={50} className="mb-3" />
            {/* <div className="w-10 h-10 rounded-xl mb-3" style={{ backgroundColor: '#ef9b11' }}></div> */}
            <p className="text-sm opacity-80">Abacus Desk — Web & Security engineering for ambitious brands.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Services</p>
            <ul className="text-sm opacity-80 space-y-1">
              <li>WordPress Incident Response</li>
              <li>Managed WordPress Care</li>
              <li>Performance Optimization</li>
              <li>Cloud & DevOps</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Resources</p>
            <ul className="text-sm opacity-80 space-y-1">
              <li>Security Playbooks</li>
              <li>Backup & DR Checklist</li>
              <li>Hardening Guide</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Contact</p>
            <ul className="text-sm opacity-80 space-y-1">
              <li>support@abacusdesk.com</li>
              <li>+91‑XXXXXXXXXX</li>
              <li>Gurugram • Delhi NCR</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container py-4 text-xs opacity-70 flex items-center justify-between">
            <p>© {new Date().getFullYear()} Abacus Desk IT Solutions Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-100 opacity-80">Privacy</a>
              <a href="#" className="hover:opacity-100 opacity-80">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
