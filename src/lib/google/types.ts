// =============================================================================
// Google API Response Types
// Used by both API routes (/api/google/analytics, /api/google/search-console)
// and frontend dashboard widgets.
// =============================================================================

// ---------------------------------------------------------------------------
// Google Analytics
// ---------------------------------------------------------------------------

export interface AnalyticsDailyDataPoint {
  date: string; // YYYY-MM-DD
  sessions: number;
  users: number;
}

export interface AnalyticsTopPage {
  path: string;
  views: number;
}

export interface AnalyticsTopCountry {
  country: string;
  sessions: number;
}

export interface AnalyticsChangePercent {
  sessions: number;
  users: number;
  pageviews: number;
}

export interface AnalyticsResponse {
  sessions: number;
  users: number;
  pageviews: number;
  bounceRate: number;
  avgSessionDuration: number; // seconds
  changePercent: AnalyticsChangePercent;
  dailyData: AnalyticsDailyDataPoint[];
  topPages: AnalyticsTopPage[];
  topCountries: AnalyticsTopCountry[];
}

// ---------------------------------------------------------------------------
// Google Search Console
// ---------------------------------------------------------------------------

export interface SearchConsoleDailyDataPoint {
  date: string; // YYYY-MM-DD
  impressions: number;
  clicks: number;
}

export interface SearchConsoleTopQuery {
  query: string;
  impressions: number;
  clicks: number;
  position: number;
}

export interface SearchConsoleTopPage {
  page: string;
  impressions: number;
  clicks: number;
}

export interface SearchConsoleChangePercent {
  impressions: number;
  clicks: number;
}

export interface SearchConsoleResponse {
  impressions: number;
  clicks: number;
  ctr: number; // 0-100 percentage
  avgPosition: number;
  changePercent: SearchConsoleChangePercent;
  dailyData: SearchConsoleDailyDataPoint[];
  topQueries: SearchConsoleTopQuery[];
  topPages: SearchConsoleTopPage[];
}

// ---------------------------------------------------------------------------
// Shared / Config
// ---------------------------------------------------------------------------

export type DateRange = "7d" | "30d" | "90d";

export interface SiteConfig {
  name: string;
  domain: string;
  analyticsPropertyId: string;
  searchConsoleUrl: string;
}
