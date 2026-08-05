/**
 * Temporary static publication review mode. Preserve all motion definitions.
 * Set to false after static compositions are approved.
 *
 * When STATIC_REVIEW_MODE is true every animated element renders in its final
 * resolved state on the first frame: opacity, transforms, path draws, staggers
 * and parallax all resolve immediately. Nothing is hidden, translated offscreen
 * or scaled down. No motion definition is removed — only its entrance is skipped.
 *
 * prefers-reduced-motion handling is intentionally kept separate: static review
 * mode is an internal review tool, not an accessibility substitute.
 */
export const STATIC_REVIEW_MODE = false;
