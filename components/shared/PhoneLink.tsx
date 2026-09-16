import Link from "next/link"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { siteContent } from "@/lib/site-content"

type PhoneLinkProps = {
  href?: string
  title?: string
  className?: string
  children: ReactNode
}

export function PhoneLink({ href, title, className, children }: PhoneLinkProps) {
  const tel = href ?? siteContent.contact.phoneHref
  return (
    <Link
      href={tel}
      title={title ?? `Call ${siteContent.contact.phoneDisplay}`}
      className={cn(
        "inline-flex min-h-11 w-full items-center justify-center gap-2 transition active:opacity-90",
        className
      )}
    >
      {children}
    </Link>
  )
}
