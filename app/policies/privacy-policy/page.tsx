"use client";

import Link from "next/link";
import { PageHero } from "../../sections/shared/PageHero";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/site-content";
import { siteImages } from "@/lib/site-images";

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information that you provide directly through contact forms, finance inquiries, service requests, phone calls, and in-person visits. That may include your name, contact details, vehicle details, service history, appointment preferences, and financing-related information where relevant. We limit collection to data needed for estimating, diagnosing, scheduling, completing, and documenting the requested work.",
  },
  {
    title: "How We Use Your Information",
    content: "Customer information is used to identify the vehicle, prepare estimates, coordinate appointments, process payments, support financing workflows, and communicate work status or follow-up recommendations. We may also use aggregated or de-identified data for internal reporting, service planning, and operational improvement, provided it cannot reasonably be used to identify you.",
  },
  {
    title: "Data Protection",
    content: "We use administrative, technical, and physical safeguards designed to reduce unauthorized access, alteration, disclosure, or destruction of data. Payment processing is handled through third-party payment processors that are expected to maintain their own security controls. Access to customer records is limited to personnel who need the information to perform business functions such as scheduling, estimating, servicing, or accounting.",
  },
  {
    title: "Third-Party Sharing",
    content: "We do not sell personal information. Limited data may be shared with vendors, parts suppliers, payment processors, lenders, or service providers only when necessary to deliver the requested service or complete the transaction. Where required, we expect those parties to use the information only for the approved purpose and to protect it with appropriate safeguards.",
  },
  {
    title: "Your Rights",
    content: "Depending on your location and the applicable law, you may have rights to access, correct, delete, or restrict the use of your personal data, and to opt out of certain communications. If you want to exercise a right or ask about a record, contact us using the details below and we will review the request in accordance with applicable law.",
  },
  {
    title: "Contact Us",
    content: `If you have questions about this policy or how your information is handled, contact ${siteContent.contact.email} or visit our Brooklyn location at ${siteContent.contact.fullAddress}.`,
  },
];

const lifecycle = [
  { step: "Collect", text: "Data enters through forms, calls, finance requests, and direct service conversations." },
  { step: "Store", text: "Records are kept only as long as needed for service, accounting, legal, or operational reasons." },
  { step: "Use", text: "The information is used to communicate, schedule, estimate, service, and support the transaction." },
  { step: "Retain or delete", text: "When the retention period ends, records are deleted or de-identified where practical." },
];

const rights = [
  { title: "Access a record", text: "Ask for the information we have connected to your service or finance request." },
  { title: "Correct details", text: "Update inaccurate contact or vehicle information so service records remain reliable." },
  { title: "Request deletion", text: "Where allowed by law, ask us to remove data we no longer need to retain." },
  { title: "Limit contact", text: "Tell us if you want to reduce marketing or nonessential outreach." },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#040404]">
      <PageHero
        label="Legal"
        title="Privacy"
        titleAccent="Policy"
        description="This policy explains what we collect, how we use it, how we protect it, and the choices you may have over your information."
        breadcrumb="Privacy Policy"
        imageSrc={siteImages.policies.privacy}
        imageAlt="Privacy and policy documentation"
        imageCaption="Service records are handled with minimal collection and purpose-specific use"
      />

      <section className="relative pb-20 lg:pb-28 overflow-hidden z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Collection limited to purpose", text: "We only request data that supports a specific service, finance, or communication need." },
                { title: "Retention based on necessity", text: "Records are kept only while they remain relevant for service, accounting, or legal obligations." },
                { title: "Access is role-based", text: "Only the personnel who need the information for their job function can view it." },
              ].map((item) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-[2rem] p-7 group relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 h-1 bg-[#ef4444] w-0 group-hover:w-full transition-all duration-500 ease-out" />
                  <h2 className="text-[11px] font-bold text-[#ef4444] uppercase tracking-[0.2em] mb-3">{item.title}</h2>
                  <p className="text-[15px] text-white/50 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8">
              <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444]/5 blur-[40px] pointer-events-none" />
                <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Data <span className="text-gradient-primary">lifecycle</span></h2>
                <div className="space-y-6">
                  {lifecycle.map((item, index) => (
                    <div key={item.step} className="grid grid-cols-[64px_1fr] gap-6 items-start group">
                      <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#ef4444] to-[#b91c1c] flex flex-col items-center justify-center text-white shadow-lg border border-white/10 group-hover:-translate-y-1 transition-transform">
                        <p className="text-xs font-black uppercase tracking-widest">{index + 1}</p>
                        <p className="text-[9px] font-bold opacity-70 uppercase tracking-tighter mt-0.5">{item.step}</p>
                      </div>
                      <p className="text-[15px] text-white/50 leading-relaxed pt-1 group-hover:text-white/70 transition-colors">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card rounded-[2.5rem] p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Policy <span className="text-gradient-primary">sections</span></h2>
                <div className="space-y-5">
                  {sections.map((s, i) => (
                    <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] p-6 transition-colors">
                      <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#ef4444]">{s.title}</h3>
                      <p className="text-[14px] text-white/50 leading-relaxed">{s.content}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 items-start">
              <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-[2.5rem] p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Rights <span className="text-gradient-primary">quick-actions</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {rights.map((item) => (
                    <div key={item.title} className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-[#ef4444]/30 transition-colors">
                      <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card rounded-[2.5rem] p-8 md:p-10 border-[#ef4444]/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#ef4444]/5 group-hover:bg-[#ef4444]/10 transition-colors" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Contact <span className="text-gradient-primary">channels</span></h2>
                  <p className="text-[15px] text-white/50 leading-relaxed mb-8">
                    If you want to ask a question about the data we hold, use the direct contact details below so the request reaches the right team.
                  </p>
                  <div className="flex flex-col gap-4">
                    <Link href={siteContent.contact.emailHref} className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:-translate-y-1">
                      Email privacy team
                    </Link>
                    <a href={siteContent.contact.phoneHref} className="w-full border border-white/10 glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all flex items-center justify-center hover:-translate-y-1">
                      Call {siteContent.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <p className="text-[11px] font-bold text-white/20 uppercase tracking-[0.3em] text-center mt-12">Last updated: April 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}
