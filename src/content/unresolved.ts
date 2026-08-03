/**
 * Unresolved content dependencies from the approved source brief.
 * These tokens are NOT rendered anywhere in the publication. They are recorded
 * here so the missing inputs stay visible and can be filled in later.
 */
export const UNRESOLVED_CONTENT = {
  section11WhyUs: [
    { name: "Dave", title: "[Title TBD]", bio: "[Bio placeholder]" },
    { name: "Chantal", title: "[Title TBD]", bio: "[Bio placeholder]" },
    { name: "David Brody", title: "[Title TBD]", bio: "[Bio placeholder]" },
    { name: "Bobbie", title: "[Title TBD]", bio: "[Bio placeholder]" },
  ],
  section15Closing: ["[DIS Contact Info]", "[Confidential Notice]"],
} as const;
