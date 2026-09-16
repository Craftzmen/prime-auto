import { PhoneCall } from "lucide-react"
import { siteContent } from "@/lib/site-content"

export function CallNowBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[500] border-t border-white/10 bg-[#080808]/95 px-4 py-3 shadow-[0_-12px_40px_rgba(0,0,0,0.5)] backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Call now"
    >
      <a
        href={siteContent.contact.phoneHref}
        title={`Call ${siteContent.contact.phoneDisplay}`}
        className="flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#ef4444] px-6 text-lg font-black uppercase tracking-wide text-white shadow-[0_0_24px_rgba(239,68,68,0.35)] transition active:scale-[0.98] hover:bg-[#dc2626] sm:text-xl"
      >
        <PhoneCall className="size-6 shrink-0" aria-hidden />
        <span>Call Now</span>
        <span className="hidden font-bold normal-case tracking-normal sm:inline">
          · {siteContent.contact.phoneDisplay}
        </span>
      </a>
    </div>
  )
}
