"use client";

import { Lock, ArrowRight, type LucideIcon } from "lucide-react";

export interface GoogleServiceStat {
  label: string;
  value: string;
  /** Optional highlight color class, e.g. "text-brand-green" */
  highlight?: string;
}

export interface GoogleServiceCardProps {
  title: string;
  icon: LucideIcon;
  stats: GoogleServiceStat[];
  /** Tailwind color value for the accent, e.g. "#4285F4" */
  accentColor: string;
  /** Tailwind text color class for accent, e.g. "text-blue-400" */
  accentClass: string;
  lastSynced: string;
  enabled: boolean;
  /** Optional CSS-only mini bar chart data (heights 0-100) */
  sparkline?: number[];
  onClick?: () => void;
}

export function GoogleServiceCard({
  title,
  icon: Icon,
  stats,
  accentColor,
  accentClass,
  lastSynced,
  enabled,
  sparkline,
  onClick,
}: GoogleServiceCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!enabled}
      className={`
        group relative w-full text-left rounded-xl p-5
        bg-bg-surface border border-border-card
        transition-all duration-200
        ${enabled
          ? "hover:-translate-y-0.5 hover:border-border-card-hover cursor-pointer"
          : "opacity-50 cursor-not-allowed border-border-divider"
        }
      `}
      style={enabled ? {
        boxShadow: undefined,
      } : undefined}
      onMouseEnter={(e) => {
        if (enabled) {
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${accentColor}20, 0 0 10px ${accentColor}10`;
        }
      }}
      onMouseLeave={(e) => {
        if (enabled) {
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        }
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${accentColor}18` }}
          >
            <Icon className="w-5 h-5" style={{ color: accentColor }} />
          </div>
          <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
        </div>
        {!enabled && <Lock className="w-4 h-4 text-text-muted" />}
      </div>

      {/* Stats */}
      {enabled ? (
        <div className="space-y-2 mb-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-baseline justify-between">
              <span className="text-xs text-text-muted">{stat.label}</span>
              <span
                className={`text-sm font-semibold ${stat.highlight || "text-text-primary"}`}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-6 mb-4">
          <span className="text-sm text-text-muted font-medium">
            Coming Soon
          </span>
        </div>
      )}

      {/* Sparkline (CSS-only bar chart) */}
      {enabled && sparkline && sparkline.length > 0 && (
        <div className="flex items-end gap-[3px] h-8 mb-4">
          {sparkline.map((value, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm transition-all duration-200 group-hover:opacity-90"
              style={{
                height: `${Math.max(value, 5)}%`,
                backgroundColor: `${accentColor}60`,
              }}
            />
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-border-divider">
        <span className="text-[11px] text-text-muted">
          {enabled ? `Last synced: ${lastSynced}` : "Not connected"}
        </span>
        {enabled && (
          <span
            className={`text-xs font-medium ${accentClass} opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1`}
          >
            View Details <ArrowRight className="w-3 h-3" />
          </span>
        )}
      </div>
    </button>
  );
}
