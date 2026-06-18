export const CLINIC = {
  title: "Newcomb, New Mexico Clinic",
  date: "July 17, 2026",
  location: "Newcomb High School",
  formUrl: "https://forms.gle/LKxndsm4QF3TutuL9",
  flyerSrc: "/homepage images/newcomb_camp.png",
  flyerAlt:
    "Pitching clinic flyer: Newcomb, New Mexico, July 17, 2026 at Newcomb High School. Beginner session 5–6pm, intermediate/advanced 6–7pm. $25 per session. Grades 6th–12th.",
  steps: [
    "Fill out the form to attend",
    "Watch for a confirmation email",
  ],
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#clinic", label: "Clinic" },
  { href: "#services", label: "What I offer" },
  { href: "#waitlist", label: "Waitlist" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

/** Google Apps Script Web App URL (or other form endpoint). POST fields: email, name, phone. */
export function getWaitlistFormAction() {
  return process.env.NEXT_PUBLIC_WAITLIST_FORM_ACTION?.trim() || "";
}
