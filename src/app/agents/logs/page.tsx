"use client";

import { Activity, Search, Filter, AlertTriangle, CheckCircle2, Clock, XCircle } from "lucide-react";

export default function AgentLogs() {
  const logs = [
    { id: "L0921", timestamp: "Today, 10:26 AM", agent: "Doctor Agent", action: "File Edit: src/app/page.tsx", status: "success", duration: "1.2s", tokens: "4.2K" },
    { id: "L0920", timestamp: "Today, 10:20 AM", agent: "Task Triage Auto-Pilot", action: "Create Subtask: Review Analytics", status: "success", duration: "0.4s", tokens: "850" },
    { id: "L0919", timestamp: "Today, 09:45 AM", agent: "Design Super Agent", action: "Generate Image: Hero Banner", status: "warning", duration: "14.5s", tokens: "6.1K" },
    { id: "L0918", timestamp: "Yesterday, 11:30 PM", agent: "Personal Career Assistant", action: "Deploy to Vercel", status: "error", duration: "45.0s", tokens: "2.1K" },
    { id: "L0917", timestamp: "Yesterday, 11:15 PM", agent: "Doctor Agent", action: "Git Commit: Fixed API routing", status: "success", duration: "3.2s", tokens: "3.5K" },
    { id: "L0916", timestamp: "Yesterday, 08:00 AM", agent: "Task Auto-Creator", action: "Sync clickup dashboard", status: "success", duration: "2.1s", tokens: "1.2K" },
  ];

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'success': return <CheckCircle2 className="w-4 h-4 text-brand-green" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-brand-yellow" />;
      case 'error': return <XCircle className="w-4 h-4 text-brand-red" />;
      default: return <Clock className="w-4 h-4 text-text-muted" />;
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center space-x-2">
            <Activity className="w-6 h-6 text-brand-purple" />
            <span>Agent Audit Logs</span>
          </h1>
          <p className="text-sm text-text-secondary mt-1">Detailed history of all autonomous actions taken by your agents.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-bg-surface p-4 rounded-xl border border-bg-surface-hover">
        <div className="relative w-full sm:w-96 flex space-x-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search logs by agent or action..." 
              className="w-full bg-bg-base border border-bg-surface-hover rounded-md pl-9 pr-4 py-2 text-sm text-text-primary focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <select className="bg-bg-base border border-bg-surface-hover text-text-secondary text-sm rounded-md px-3 py-2 outline-none w-full sm:w-auto">
            <option>All Agents</option>
            <option>Doctor Agent</option>
            <option>Task Auto-Creator</option>
          </select>
          <button className="flex items-center justify-center space-x-2 bg-bg-base border border-bg-surface-hover rounded-md px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="bg-bg-surface border border-bg-surface-hover rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-xs text-text-muted uppercase bg-bg-base/50 border-b border-bg-surface-hover">
              <tr>
                <th className="px-6 py-4">ID / Time</th>
                <th className="px-6 py-4">Agent</th>
                <th className="px-6 py-4">Action Taken</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4 text-right">Tokens Used</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-bg-surface-hover">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-bg-surface-hover transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-mono text-xs text-brand-purple mb-0.5">{log.id}</div>
                    <div className="text-xs text-text-muted">{log.timestamp}</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-text-primary">{log.agent}</td>
                  <td className="px-6 py-4 text-text-secondary">{log.action}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(log.status)}
                      <span className="capitalize text-text-secondary">{log.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-text-muted">{log.duration}</td>
                  <td className="px-6 py-4 text-right font-mono text-xs text-brand-cyan">{log.tokens}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="flex justify-between items-center text-xs text-text-muted px-2">
        <span>Showing 6 of 1,248 logs</span>
        <div className="flex space-x-1">
          <button className="px-2 py-1 rounded bg-bg-surface hover:bg-bg-surface-hover border border-bg-surface-hover transition-colors disabled:opacity-50" disabled>Previous</button>
          <button className="px-2 py-1 rounded bg-bg-surface hover:bg-bg-surface-hover border border-bg-surface-hover transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
}
