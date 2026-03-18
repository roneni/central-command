"use client";

import { Activity, AlertTriangle, CheckCircle2, Globe, Server, Clock, ChevronDown, MoreVertical, Play } from "lucide-react";

export default function SiteMonitor() {
  const sites = [
    {
      id: "S01",
      name: "Psychedelic Universe",
      url: "psychedelic-universe.com",
      status: "online",
      uptime: "99.99%",
      lastCheck: "1 min ago",
      responseTime: "120ms",
      ssl: "Valid (202 days left)"
    },
    {
      id: "S02",
      name: "Identity Site",
      url: "ronenkatz.dev",
      status: "online",
      uptime: "100%",
      lastCheck: "1 min ago",
      responseTime: "85ms",
      ssl: "Valid (305 days left)"
    },
    {
      id: "S03",
      name: "AIA Agency",
      url: "aiaagency.ai",
      status: "deploying",
      uptime: "98.5%",
      lastCheck: "Just now",
      responseTime: "N/A",
      ssl: "Provisioning"
    },
    {
      id: "S04",
      name: "HarmonySet",
      url: "harmonyset.com",
      status: "online",
      uptime: "99.8%",
      lastCheck: "5 mins ago",
      responseTime: "210ms",
      ssl: "Valid (42 days left)"
    },
    {
      id: "S05",
      name: "Universe Diffusion",
      url: "universe-diffusion.vercel.app",
      status: "error",
      uptime: "95.2%",
      lastCheck: "2 mins ago",
      responseTime: "Timeout",
      ssl: "Valid (Vercel)"
    }
  ];

  const getStatusDisplay = (status: string) => {
    switch(status) {
      case 'online': 
        return (
          <div className="flex items-center space-x-2 text-brand-green">
            <CheckCircle2 className="w-4 h-4" />
            <span className="font-medium text-sm">Online</span>
          </div>
        );
      case 'deploying': 
        return (
          <div className="flex items-center space-x-2 text-brand-yellow">
            <Clock className="w-4 h-4 animate-pulse" />
            <span className="font-medium text-sm">Deploying</span>
          </div>
        );
      case 'error': 
        return (
          <div className="flex items-center space-x-2 text-brand-red">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-medium text-sm">Offline</span>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center space-x-2">
            <Activity className="w-6 h-6 text-brand-red" />
            <span>Site Monitor</span>
          </h1>
          <p className="text-sm text-text-secondary mt-1">Real-time health tracking across your digital properties.</p>
        </div>
        
        {/* Network Metrics Snapshot */}
        <div className="flex items-center space-x-4">
          <div className="bg-bg-surface border border-bg-surface-hover rounded-lg px-4 py-2 flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
            <div>
              <div className="text-xs text-text-muted uppercase tracking-wide">Network Status</div>
              <div className="font-medium text-text-primary text-sm">4/5 Operating Normal</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-bg-surface border border-bg-surface-hover rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-bg-base/50 text-xs text-text-muted uppercase tracking-wider border-b border-bg-surface-hover">
              <tr>
                <th className="px-6 py-4 font-semibold">Property</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Avg. Uptime</th>
                <th className="px-6 py-4 font-semibold">Response</th>
                <th className="px-6 py-4 font-semibold">SSL Cert</th>
                <th className="px-6 py-4 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-bg-surface-hover">
              {sites.map((site) => (
                <tr key={site.id} className="hover:bg-bg-surface-hover transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-bg-base border border-bg-surface-hover flex items-center justify-center">
                        <Globe className="w-5 h-5 text-brand-cyan" />
                      </div>
                      <div>
                        <div className="font-medium text-text-primary text-sm">{site.name}</div>
                        <a href={`https://${site.url}`} target="_blank" className="text-xs text-text-muted hover:text-brand-cyan transition-colors flex items-center space-x-1 mt-0.5" rel="noreferrer">
                          <span>{site.url}</span>
                        </a>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    {getStatusDisplay(site.status)}
                    <div className="text-xs text-text-muted mt-1">Checked {site.lastCheck}</div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-text-primary">{site.uptime}</span>
                    </div>
                    {/* Tiny mini-sparkline mock */}
                    <div className="flex space-x-0.5 h-3 items-end mt-1">
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className={`w-1 rounded-t-sm ${i === 8 && site.status === 'error' ? 'bg-brand-red h-full' : 'bg-brand-green'} ${i % 2 === 0 ? 'h-[80%]' : 'h-full'}`}></div>
                      ))}
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-1">
                      <Server className="w-3.5 h-3.5 text-text-muted" />
                      <span className={`text-sm font-mono ${site.status === 'error' ? 'text-brand-red' : 'text-text-secondary'}`}>
                        {site.responseTime}
                      </span>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 text-sm text-text-secondary">
                    {site.ssl}
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="flex items-center space-x-1.5 bg-brand-purple/10 hover:bg-brand-purple/20 text-brand-purple border border-brand-purple/20 px-3 py-1.5 rounded-md transition-colors text-xs font-medium">
                        <Play className="w-3 h-3" />
                        <span>Send Doctor Agent</span>
                      </button>
                      <button className="p-1.5 text-text-muted hover:text-text-primary rounded hover:bg-bg-surface-active transition-colors">
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-text-muted hover:text-text-primary rounded hover:bg-bg-surface-active transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
