/**
 * =============================================================================
 * Google Search Console API — Mock Endpoint
 * =============================================================================
 *
 * HOW TO WIRE TO THE REAL GOOGLE SEARCH CONSOLE API:
 *
 * 1. Enable the "Google Search Console API" in your Google Cloud project.
 * 2. Use the same service account (or OAuth2 credentials) as Google Analytics.
 * 3. Add the service account email as an "Owner" or "Full" user in Search Console
 *    for each property (Settings > Users and permissions).
 * 4. Install the SDK:  npm install googleapis
 * 5. Call the Search Analytics query method:
 *
 *    import { google } from "googleapis";
 *
 *    const auth = new google.auth.GoogleAuth({
 *      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
 *      scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
 *    });
 *
 *    const searchconsole = google.searchconsole({ version: "v1", auth });
 *
 *    const response = await searchconsole.searchanalytics.query({
 *      siteUrl: "sc-domain:psychedelic-universe.com",
 *      requestBody: {
 *        startDate: "2026-03-11",
 *        endDate: "2026-03-18",
 *        dimensions: ["query"],
 *        rowLimit: 10,
 *      },
 *    });
 *
 * 6. Auth headers (if using REST):
 *    Authorization: Bearer <access_token>
 *    POST https://www.googleapis.com/webmasters/v3/sites/{siteUrl}/searchAnalytics/query
 *
 * 7. Store credentials in env vars:
 *    GOOGLE_SERVICE_ACCOUNT_KEY=<JSON string of service account key>
 *
 * =============================================================================
 */

import { NextResponse } from "next/server";
import type { SearchConsoleResponse, DateRange } from "@/lib/google/types";

// TODO: Replace mock with real API call

/**
 * GET /api/google/search-console?siteUrl=sc-domain:psychedelic-universe.com&dateRange=7d
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const siteUrl = searchParams.get("siteUrl");
    const dateRange = (searchParams.get("dateRange") || "7d") as DateRange;

    if (!siteUrl) {
      return NextResponse.json(
        { error: "Missing required query param: siteUrl" },
        { status: 400 },
      );
    }

    if (!["7d", "30d", "90d"].includes(dateRange)) {
      return NextResponse.json(
        { error: "dateRange must be one of: 7d, 30d, 90d" },
        { status: 400 },
      );
    }

    const data = generateMockSearchConsole(dateRange);

    return NextResponse.json(data);
  } catch (error) {
    console.error("[search-console] Failed to fetch search console data:", error);
    return NextResponse.json(
      { error: "Failed to fetch search console data" },
      { status: 500 },
    );
  }
}

// ---------------------------------------------------------------------------
// Mock data generator
// ---------------------------------------------------------------------------

function generateMockSearchConsole(dateRange: DateRange): SearchConsoleResponse {
  const multiplier = dateRange === "90d" ? 12 : dateRange === "30d" ? 4 : 1;
  const days = dateRange === "90d" ? 90 : dateRange === "30d" ? 30 : 7;

  // Generate daily data points
  const dailyData = Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - 1 - i));
    const dayOfWeek = date.getDay();
    const weekendBoost = dayOfWeek === 0 || dayOfWeek === 6 ? 1.4 : 1;
    const baseImpressions = Math.round((4200 + Math.random() * 1800) * weekendBoost);
    const baseClicks = Math.round(baseImpressions * (0.032 + Math.random() * 0.012));

    return {
      date: date.toISOString().slice(0, 10),
      impressions: baseImpressions,
      clicks: baseClicks,
    };
  });

  const totalImpressions = dailyData.reduce((sum, d) => sum + d.impressions, 0);
  const totalClicks = dailyData.reduce((sum, d) => sum + d.clicks, 0);
  const ctr = Number(((totalClicks / totalImpressions) * 100).toFixed(1));

  return {
    impressions: totalImpressions,
    clicks: totalClicks,
    ctr,
    avgPosition: 14.2,
    changePercent: {
      impressions: 18.4,
      clicks: 22.1,
    },
    dailyData,
    topQueries: [
      { query: "psytrance festivals 2026", impressions: Math.round(3200 * multiplier), clicks: Math.round(280 * multiplier), position: 4.2 },
      { query: "psychedelic trance music", impressions: Math.round(2800 * multiplier), clicks: Math.round(190 * multiplier), position: 7.8 },
      { query: "boom festival lineup", impressions: Math.round(2100 * multiplier), clicks: Math.round(310 * multiplier), position: 3.1 },
      { query: "goa trance mixes", impressions: Math.round(1900 * multiplier), clicks: Math.round(145 * multiplier), position: 9.4 },
      { query: "psychedelic universe", impressions: Math.round(1700 * multiplier), clicks: Math.round(820 * multiplier), position: 1.3 },
      { query: "forest psytrance", impressions: Math.round(1400 * multiplier), clicks: Math.round(95 * multiplier), position: 12.6 },
      { query: "astrix new album 2026", impressions: Math.round(1200 * multiplier), clicks: Math.round(170 * multiplier), position: 5.5 },
      { query: "ozora festival tickets", impressions: Math.round(1100 * multiplier), clicks: Math.round(88 * multiplier), position: 11.2 },
      { query: "darkpsy artists", impressions: Math.round(980 * multiplier), clicks: Math.round(62 * multiplier), position: 15.3 },
      { query: "hitech psytrance playlist", impressions: Math.round(870 * multiplier), clicks: Math.round(71 * multiplier), position: 8.7 },
    ],
    topPages: [
      { page: "/festivals", impressions: Math.round(8400 * multiplier), clicks: Math.round(720 * multiplier) },
      { page: "/", impressions: Math.round(6200 * multiplier), clicks: Math.round(1240 * multiplier) },
      { page: "/mixes/forest-frequencies-vol-3", impressions: Math.round(3100 * multiplier), clicks: Math.round(210 * multiplier) },
      { page: "/artists/astrix", impressions: Math.round(2400 * multiplier), clicks: Math.round(340 * multiplier) },
      { page: "/events/boom-festival-2026", impressions: Math.round(1800 * multiplier), clicks: Math.round(290 * multiplier) },
    ],
  };
}
