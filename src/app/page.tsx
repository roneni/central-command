"use client";

import { Calendar, Play, CheckCircle2, Clock, AlertCircle, BarChart3, Search, Megaphone } from "lucide-react";
import { GoogleServiceCard } from "@/components/google/GoogleServiceCard";

// TODO: Replace with real Google API data
const analyticsStats = [
  { label: "Sessions", value: "2.4K" },
  { label: "Users", value: "1.8K" },
  { label: "vs last week", value: "+12.5%", highlight: "text-brand-green" },
];

// TODO: Replace with real Google API data
const searchConsoleStats = [
  { label: "Impressions", value: "18.2K" },
  { label: "Clicks", value: "1.2K" },
  { label: "CTR", value: "6.6%", highlight: "text-brand-green" },
  { label: "Avg Position", value: "14.3" },
];

// TODO: Replace with real Google API data
const adsStats = [
  { label: "Campaigns", value: "--" },
  { label: "Spend", value: "--" },
  { label: "Conversions", value: "--" },
];

const analyticsSparkline = [30, 45, 38, 60, 55, 70, 65, 80, 72, 90, 85, 95];
const searchConsoleSparkline = [20, 35, 50, 42, 65, 58, 75, 80, 70, 88, 82, 92];

export default function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Greeting */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-text-primary">Good evening, Ronen</h1>
          <p className="text-text-muted mt-1 text-sm">Here is what&apos;s happening across your universe today.</p>
        </div>
        <button className="bg-brand-magenta hover:brightness-110 text-white px-4 py-2 rounded-md font-medium transition-all flex items-center space-x-2" style={{ boxShadow: '0 0 20px rgba(233,30,140,0.2)' }}>
          <Play className="w-4 h-4" />
          <span>Launch Doctor Agent</span>
        </button>
      </div>

      {/* Google Workspace Row */}
      <section>
        <h2 className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-3">
          Google Workspace
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GoogleServiceCard
            title="Google Analytics"
            icon={BarChart3}
            stats={analyticsStats}
            accentColor="#00e5cc"
            accentClass="text-brand-cyan"
            lastSynced="5m ago"
            enabled={true}
            sparkline={analyticsSparkline}
            onClick={() => {}}
          />
          <GoogleServiceCard
            title="Search Console"
            icon={Search}
            stats={searchConsoleStats}
            accentColor="#31C48D"
            accentClass="text-brand-green"
            lastSynced="5m ago"
            enabled={true}
            sparkline={searchConsoleSparkline}
            onClick={() => {}}
          />
          <GoogleServiceCard
            title="Google Ads"
            icon={Megaphone}
            stats={adsStats}
            accentColor="#6b7280"
            accentClass="text-text-muted"
            lastSynced=""
            enabled={false}
          />
        </div>
      </section>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recents & My Work (2 cols) */}
        <div className="lg:col-span-2 space-y-6">

          {/* My Work */}
          <section className="bg-bg-surface border border-border-card rounded-xl p-6 transition-all duration-200 hover:border-border-card-hover" style={{ boxShadow: 'none' }}>
            <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-brand-green" />
              <span>My Work</span>
            </h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-bg-surface border border-border-card rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-brand-cyan">12</div>
                <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">Today</div>
              </div>
              <div className="bg-bg-surface border border-border-card rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-brand-red">3</div>
                <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">Overdue</div>
              </div>
              <div className="bg-bg-surface border border-border-card rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-brand-yellow">8</div>
                <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">Next</div>
              </div>
              <div className="bg-bg-surface border border-border-card rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-text-primary">24</div>
                <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">Unscheduled</div>
              </div>
            </div>

            <div className="space-y-2">
              {[
                { title: "Review AIA Agency Landing Page", space: "AIA Agency", status: "In Progress", priority: "High" },
                { title: "Deploy Design Super Agent V2", space: "Tools & Products", status: "To Do", priority: "Urgent" },
                { title: "Upload Psychedelic Universe Mix", space: "Psychedelic Universe", status: "To Do", priority: "Normal" },
              ].map((task, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-bg-surface-hover border border-transparent hover:border-border-subtle transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded border border-text-muted flex items-center justify-center"></div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">{task.title}</div>
                      <div className="text-xs text-text-muted mt-0.5">{task.space}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-xs">
                    <span className="px-2 py-1 rounded-full bg-bg-surface border border-border-subtle text-text-secondary">{task.status}</span>
                    <span className={`px-2 py-1 rounded-full border ${
                      task.priority === 'Urgent' ? 'bg-brand-magenta/10 text-brand-magenta border-brand-magenta/20' :
                      task.priority === 'High' ? 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow/20' :
                      'bg-bg-surface-active text-text-muted border-border-subtle'
                    }`}>{task.priority}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Assigned to Me Table */}
          <section className="bg-bg-surface border border-border-card rounded-xl p-6 transition-all duration-200 hover:border-border-card-hover">
            <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Clock className="w-5 h-5 text-brand-cyan" />
              <span>Assigned & Delegated</span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-text-muted uppercase bg-bg-surface-active/50">
                  <tr>
                    <th className="px-4 py-2 rounded-tl-lg rounded-bl-lg">Task</th>
                    <th className="px-4 py-2">Assignee</th>
                    <th className="px-4 py-2">Due Date</th>
                    <th className="px-4 py-2 rounded-tr-lg rounded-br-lg text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-divider">
                  {[
                    { title: "Generate Q3 Content Calendar", assignee: "Task Auto-Creator", date: "Today", status: "Working" },
                    { title: "Analyze HarmonySet usage stats", assignee: "Doctor Agent", date: "Tomorrow", status: "Pending" },
                  ].map((task, i) => (
                    <tr key={i} className="hover:bg-bg-surface-hover transition-colors">
                      <td className="px-4 py-3 font-medium text-text-primary">{task.title}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 rounded bg-bg-surface-active flex items-center justify-center">🤖</div>
                          <span className="text-text-secondary">{task.assignee}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-text-muted">{task.date}</td>
                      <td className="px-4 py-3 text-right">
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${task.status === 'Working' ? 'bg-brand-cyan animate-pulse' : 'bg-brand-yellow'}`}></span>
                        <span className="text-text-secondary">{task.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sidebar Widgets (1 col) */}
        <div className="space-y-6">

          {/* Agenda / Calendar */}
          <section className="bg-bg-surface border border-border-card rounded-xl p-6 transition-all duration-200 hover:border-border-card-hover">
            <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-brand-magenta" />
              <span>Agenda</span>
            </h2>
            <div className="space-y-4">
              <div className="relative pl-4 border-l-2 border-brand-cyan">
                <div className="absolute w-2 h-2 bg-brand-cyan rounded-full -left-[5px] top-1.5" style={{ boxShadow: '0 0 8px rgba(0,229,204,0.5)' }}></div>
                <div className="text-xs text-brand-cyan font-semibold mb-0.5">10:00 AM</div>
                <div className="text-sm font-medium text-text-primary">AI Agent Sync</div>
                <div className="text-xs text-text-muted">Reviewing Doctor Agent Logs</div>
              </div>
              <div className="relative pl-4 border-l-2 border-brand-yellow">
                <div className="absolute w-2 h-2 bg-brand-yellow rounded-full -left-[5px] top-1.5"></div>
                <div className="text-xs text-brand-yellow font-semibold mb-0.5">2:00 PM</div>
                <div className="text-sm font-medium text-text-primary">Berkeley AgentX Prep</div>
                <div className="text-xs text-text-muted">Drafting presentation structures</div>
              </div>
            </div>
          </section>

          {/* Quick Stats / Sites */}
          <section className="bg-bg-surface border border-border-card rounded-xl p-6 transition-all duration-200 hover:border-border-card-hover">
            <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-brand-red" />
              <span>Live System Status</span>
            </h2>
            <div className="space-y-3">
              {[
                { name: "Psychedelic Universe", status: "Operational", color: "bg-brand-green" },
                { name: "HarmonySet", status: "Operational", color: "bg-brand-green" },
                { name: "AIA Agency", status: "Deploying...", color: "bg-brand-yellow animate-pulse" },
                { name: "Agent Registry DB", status: "Operational", color: "bg-brand-green" },
              ].map((sys, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">{sys.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-text-muted">{sys.status}</span>
                    <div className={`w-2 h-2 rounded-full ${sys.color}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
