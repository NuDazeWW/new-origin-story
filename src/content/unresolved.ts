/**
 * Unresolved content dependencies from the approved source brief.
 * These tokens are NOT rendered anywhere in the publication. They are recorded
 * here so the missing inputs stay visible and can be filled in later.
 */
export const UNRESOLVED_CONTENT = {
  /**
   * Section 11 council members are NAMED in the approved brief. What is
   * unresolved is only their titles and biographies.
   */
  section11WhyUs: [
    { name: "Dave", unresolved: ["title", "bio"] },
    { name: "Chantal", unresolved: ["title", "bio"] },
    { name: "David Brody", unresolved: ["title", "bio"] },
    { name: "Bobbie", unresolved: ["title", "bio"] },
  ],
  section15Closing: ["[DIS Contact Info]", "[Confidential Notice]"],
} as const;
