import type { SiteConfig } from "./types";

/**
 * Registry of Ronen's sites and their Google property IDs.
 *
 * analyticsPropertyId — the GA4 property ID (numeric string, e.g. "123456789").
 *   Find it in GA4 Admin > Property > Property Details.
 *   Set to "PENDING" until the real ID is configured.
 *
 * searchConsoleUrl — the site identifier used by the Search Console API.
 *   For domain properties use "sc-domain:example.com".
 *   For URL-prefix properties use the full URL "https://example.com/".
 */
export const SITES: SiteConfig[] = [
  {
    name: "Psychedelic Universe",
    domain: "psychedelic-universe.com",
    analyticsPropertyId: "PENDING",
    searchConsoleUrl: "sc-domain:psychedelic-universe.com",
  },
  {
    name: "ronenkatz.dev",
    domain: "ronenkatz.dev",
    analyticsPropertyId: "PENDING",
    searchConsoleUrl: "sc-domain:ronenkatz.dev",
  },
  {
    name: "AIA Agency",
    domain: "aiaagency.ai",
    analyticsPropertyId: "PENDING",
    searchConsoleUrl: "sc-domain:aiaagency.ai",
  },
  {
    name: "HarmonySet",
    domain: "harmonyset.com",
    analyticsPropertyId: "PENDING",
    searchConsoleUrl: "sc-domain:harmonyset.com",
  },
];

/**
 * Helper — look up a site config by domain.
 */
export function getSiteByDomain(domain: string): SiteConfig | undefined {
  return SITES.find((s) => s.domain === domain);
}
