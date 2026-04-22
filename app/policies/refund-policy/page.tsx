"use client";

import Link from "next/link";
import { PageHero } from "../../sections/shared/PageHero";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/site-content";
import { siteImages } from "@/lib/site-images";

const sections = [
  {
    title: "Warranty Coverage",
    content: "We warranty parts and labor for 12 months or 12,000 miles, whichever occurs first, unless a different written term is provided for a specific service. If a covered part fails because of defective materials or workmanship during the covered period, we will review the claim and, if appropriate, correct the issue under the stated warranty terms.",
  },
  {
    title: "Refund Process",
    content: "If you believe a service does not meet expectations, contact us within 30 days of the service date with your receipt and a brief description of the issue. We will review the work history, assess whether a refund, correction, or re-performance is appropriate, and communicate the result as soon as practical. Approved refunds are returned to the original payment method when possible.",
  },
  {
    title: "Exclusions",
    content: "Diagnostic fees are generally non-refundable because they cover technician time, test equipment, and vehicle review. Warranty coverage does not apply to damage caused by accidents, misuse, unauthorized modifications, neglect, ordinary wear and tear, or customer-supplied parts. Consumables and outside components are handled according to the specific job record.",
  },
  {
    title: "How to File a Claim",
    content: `To file a claim, contact ${siteContent.contact.email} or call ${siteContent.contact.phoneDisplay} with the invoice, the service date, and a description of the issue. We may request photographs, a reinspection, or additional context before making a final decision. Claims are reviewed in the order received and prioritized by impact and safety.`,
  },
  {
    title: "Contact",
    content: `For warranty or refund questions, reach out by email, phone, or in person at ${siteContent.contact.fullAddress}. We are available ${siteContent.hours.weekdayLabel} during ${siteContent.hours.weekdayHours}.`,
  },
];

const coverageSnapshot = [
  { title: "What is usually covered", text: "Parts and labor that fail under the stated warranty term because of installation or material issues." },
  { title: "What requires review", text: "Potential partial refunds, rework requests, or claims tied to multiple services or mixed parts." },
  { title: "What is not covered", text: "Diagnostics, wear items, misuse, unauthorized changes, and customer-supplied components." },
];

const claimChecklist = [
  "Keep the invoice and service date handy.",
  "Write a short description of the concern or failure.",
  "Include photos or error messages if they are available.",
  "Wait for the service team to confirm the next step before additional work is done.",
];

const timeline = [
  { title: "Day 0", text: "Claim received and logged with the original job record." },
  { title: "Day 1-2", text: "We review the documents, service history, and requested remedy." },
  { title: "Day 3-5", text: "If necessary, we inspect the vehicle or request extra information." },
  { title: "Resolution", text: "Approved remedies are communicated and, where applicable, processed back to the original payment method." },
];

export default function RefundPolicyPage() {
  return (
    <div className="bg-[#040404]">
      <PageHero
        label="Legal"
        title="Refund"
        titleAccent="Policy"
        description="This policy explains the warranty window, exclusions, filing requirements, and the general claim resolution path."
        breadcrumb="Refund Policy"
        imageSrc={siteImages.policies.refund}
        imageAlt="Refund policy and warranty documentation"
        imageCaption="Claims are reviewed against the invoice, work record, and the stated warranty terms"
      />

      <section className="relative pb-20 lg:pb-28 overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ef4444]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coverageSnapshot.map((item) => (
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
                <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Claim <span className="text-gradient-primary">checklist</span></h2>
                <ul className="space-y-4">
                  {claimChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-4 text-[15px] text-white/50 leading-relaxed group">
                      <span className="w-2 h-2 rounded-full bg-[#ef4444] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="group-hover:text-white/70 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card rounded-[2.5rem] p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Resolution <span className="text-gradient-primary">timeline</span></h2>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={item.title} className="grid grid-cols-[80px_1fr] gap-6 items-start group">
                      <div className="rounded-2xl bg-gradient-to-br from-[#ef4444] to-[#b91c1c] px-3 py-3 text-center text-white shadow-lg border border-white/10 group-hover:-translate-y-1 transition-transform">
                        <p className="text-[10px] font-black uppercase tracking-widest">{item.title}</p>
                      </div>
                      <p className="text-[15px] text-white/50 leading-relaxed pt-1 group-hover:text-white/70 transition-colors">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-8 items-start">
              <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-[2.5rem] p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">Policy <span className="text-gradient-primary">sections</span></h2>
                <div className="space-y-5">
                  {sections.map((s, i) => (
                    <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] p-6 transition-colors">
                      <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                      <p className="text-[14px] text-white/50 leading-relaxed">{s.content}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card rounded-[2.5rem] p-8 md:p-10 border-[#ef4444]/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#ef4444]/5 group-hover:bg-[#ef4444]/10 transition-colors" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Claim <span className="text-gradient-primary">review</span></h2>
                  <p className="text-[15px] text-white/50 leading-relaxed mb-8">
                    If you need help with a claim, contact the service team using the direct channels below. Please include the invoice number and the date of service.
                  </p>
                  <div className="flex flex-col gap-4">
                    <Link href={siteContent.contact.emailHref} className="w-full bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-4 rounded-full font-bold text-[15px] transition-all flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:-translate-y-1">
                      Email claims team
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
