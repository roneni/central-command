/**
 * =============================================================================
 * Google Analytics Data API v1 — Mock Endpoint
 * =============================================================================
 *
 * HOW TO WIRE TO THE REAL GOOGLE ANALYTICS DATA API v1:
 *
 * 1. Create a Google Cloud project and enable the "Google Analytics Data API".
 * 2. Create a service account (or use OAuth2) and download the JSON key file.
 * 3. Grant the service account "Viewer" access on each GA4 property.
 * 4. Install the SDK:  npm install @google-analytics/data
 * 5. Use the BetaAnalyticsDataClient to call `runReport`:
 *
 *    import { BetaAnalyticsDataClient } from "@google-analytics/data";
 *
 *    const client = new BetaAnalyticsDataClient({
 *      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
 *    });
 *
 *    const [response] = await client.runReport({
 *      property: `properties/${propertyId}`,
 *      dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
 *      dimensions: [{ name: "date" }],
 *      metrics: [
 *        { name: "sessions" },
 *        { name: "totalUsers" },
 *        { name: "screenPageViews" },
 *        { name: "bounceRate" },
 *        { name: "averageSessionDuration" },
 *      ],
 *    });
 *
 * 6. Auth headers (if using REST instead of SDK):
 *    Authorization: Bearer <access_token>
 *    Endpoint: POST https://analyticsdata.googleapis.com/v1beta/properties/{propertyId}:runReport
 *
 * 7. Store credentials in env vars:
 *    GOOGLE_SERVICE_ACCOUNT_KEY=<JSON string of service account key>
 *
 * =============================================================================
 */

import { NextResponse } from "next/server";
import type { AnalyticsResponse, DateRange } from "@/lib/google/types";

// TODO: Replace mock with real API call

/**
 * GET /api/google/analytics?propertyId=123456789&dateRange=7d
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const propertyId = searchParams.get("propertyId");
    const dateRange = (searchParams.get("dateRange") || "7d") as DateRange;

    if (!propertyId) {
      return NextResponse.json(
        { error: "Missing required query param: propertyId" },
        { status: 400 },
      );
    }

    if (!["7d", "30d", "90d"].includes(dateRange)) {
      return NextResponse.json(
        { error: "dateRange must be one of: 7d, 30d, 90d" },
        { status: 400 },
      );
    }

    const data = generateMockAnalytics(dateRange);

    return NextResponse.json(data);
  } catch (error) {
    console.error("[analytics] Failed to fetch analytics data:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics data" },
      { status: 500 },
    );
  }
}

// ---------------------------------------------------------------------------
// Mock data generator
// ---------------------------------------------------------------------------

function generateMockAnalytics(dateRange: DateRange): AnalyticsResponse {
  const multiplier = dateRange === "90d" ? 12 : dateRange === "30d" ? 4 : 1;
  const days = dateRange === "90d" ? 90 : dateRange === "30d" ? 30 : 7;

  // Generate daily data points for the selected range
  const dailyData = Array.from({ length: days }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - 1 - i));
    const dayOfWeek = date.getDay();
    // Weekend traffic is ~60% higher for a music/festival site
    const weekendBoost = dayOfWeek === 0 || dayOfWeek === 6 ? 1.6 : 1;
    const baseSessions = Math.round((320 + Math.random() * 180) * weekendBoost);
    const baseUsers = Math.round(baseSessions * (0.72 + Math.random() * 0.1));

    return {
      date: date.toISOString().slice(0, 10),
      sessions: baseSessions,
      users: baseUsers,
    };
  });

  const totalSessions = dailyData.reduce((sum, d) => sum + d.sessions, 0);
  const totalUsers = dailyData.reduce((sum, d) => sum + d.users, 0);

  return {
    sessions: totalSessions,
    users: totalUsers,
    pageviews: Math.round(totalSessions * 2.4),
    bounceRate: 42.7,
    avgSessionDuration: 187, // ~3 min 7 sec — music site, people linger
    changePercent: {
      sessions: 12.3,
      users: 8.7,
      pageviews: 15.1,
    },
    dailyData,
    topPages: [
      { path: "/", views: Math.round(1820 * multiplier) },
      { path: "/festivals", views: Math.round(1340 * multiplier) },
      { path: "/mixes/forest-frequencies-vol-3", views: Math.round(890 * multiplier) },
      { path: "/artists/astrix", views: Math.round(620 * multiplier) },
      { path: "/events/boom-festival-2026", views: Math.round(510 * multiplier) },
    ],
    topCountries: [
      { country: "Israel", sessions: Math.round(980 * multiplier) },
      { country: "Brazil", sessions: Math.round(640 * multiplier) },
      { country: "Germany", sessions: Math.round(420 * multiplier) },
      { country: "United States", sessions: Math.round(380 * multiplier) },
      { country: "Portugal", sessions: Math.round(310 * multiplier) },
    ],
  };
}
