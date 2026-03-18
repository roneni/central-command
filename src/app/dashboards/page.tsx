"use client";

import { LayoutDashboard, BarChart2, TrendingUp, TrendingDown, Users, Bot, Activity, MoreVertical, Settings } from "lucide-react";

export default function DashboardsPage() {
  const cards = [
    { title: "Active Tasks", value: "24", trend: "+12%", type: "positive", icon: LayoutDashboard },
    { title: "Agent Operations", value: "1,248", trend: "+5.4%", type: "positive", icon: Bot },
    { title: "Global Site Uptime", value: "99.8%", trend: "-0.1%", type: "negative", icon: Activity },
    { title: "Resolved by Agents", value: "85", trend: "+24%", type: "positive", icon: Users },
  ];

  return (
    <div className="h-full flex flex-col bg-bg-base overflow-y-auto">
      {/* Header */}
      <div className="border-b border-border-subtle px-8 py-5 flex items-center justify-between bg-bg-base z-10 sticky top-0">
        <div className="flex items-center space-x-4">
          <LayoutDashboard className="w-6 h-6 text-brand-green" />
          <h1 className="text-2xl font-extrabold tracking-tight text-text-primary">Executive Dashboard</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-1.5 bg-transparent hover:bg-bg-surface border border-border-subtle text-text-primary px-4 py-2 rounded-md font-medium transition-colors text-sm">
            <Settings className="w-4 h-4" />
            <span>Customize widgets</span>
          </button>
        </div>
      </div>

      <div className="p-8 max-w-7xl mx-auto w-full space-y-8">

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="bg-bg-surface border border-border-card hover:border-border-card-hover rounded-xl p-5 transition-all duration-200 group" style={{ boxShadow: 'none' }} onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,229,204,0.1)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-bg-surface-active rounded-lg border border-border-subtle text-text-secondary group-hover:text-brand-cyan transition-colors">
                  <card.icon className="w-5 h-5" />
                </div>
                <button className="text-text-muted hover:text-text-primary">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <h3 className="text-sm font-medium text-text-muted mb-1">{card.title}</h3>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold text-text-primary">{card.value}</div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${card.type === 'positive' ? 'text-brand-green' : 'text-brand-magenta'}`}>
                  {card.type === 'positive' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span>{card.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main Chart Area */}
          <div className="lg:col-span-2 bg-bg-surface border border-border-card rounded-xl p-6 min-h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-semibold text-text-primary flex items-center space-x-2">
                <BarChart2 className="w-5 h-5 text-brand-cyan" />
                <span>Agent Activity Over Time</span>
              </h2>
              <select className="bg-transparent border border-border-subtle text-text-secondary text-sm rounded-md px-3 py-1 outline-none focus:border-brand-cyan">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>This Year</option>
              </select>
            </div>

            <div className="flex-1 flex items-end space-x-2 sm:space-x-4">
              {/* Mock Bar Chart */}
              {[40, 60, 30, 80, 50, 90, 70].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group">
                  <div className="w-full relative flex items-end justify-center rounded-t-md overflow-hidden bg-bg-surface-active/30" style={{ height: '300px' }}>
                    <div
                      className="absolute bottom-0 w-3/4 bg-brand-cyan/20 border-t-2 border-brand-cyan transition-all duration-1000 group-hover:bg-brand-cyan/40"
                      style={{ height: `${height}%` }}
                    ></div>
                    {/* Tooltip on hover */}
                    <div className="absolute opacity-0 group-hover:opacity-100 -top-8 bg-bg-surface-active text-text-primary text-xs py-1 px-2 rounded transition-opacity z-10 whitespace-nowrap">
                      {height * 12} Operations
                    </div>
                  </div>
                  <div className="text-xs text-text-muted mt-3 uppercase tracking-wider">Day {i + 1}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Widgets */}
          <div className="space-y-6">

            {/* Task Priority Distribution */}
            <div className="bg-bg-surface border border-border-card rounded-xl p-6">
              <h2 className="text-lg font-semibold text-text-primary mb-6">Task Priority</h2>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-magenta font-medium">Urgent</span>
                    <span className="text-text-secondary">15%</span>
                  </div>
                  <div className="w-full bg-bg-surface-active rounded-full h-2 overflow-hidden">
                    <div className="bg-brand-magenta h-full rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-yellow font-medium">High</span>
                    <span className="text-text-secondary">35%</span>
                  </div>
                  <div className="w-full bg-bg-surface-active rounded-full h-2 overflow-hidden">
                    <div className="bg-brand-yellow h-full rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-cyan font-medium">Normal</span>
                    <span className="text-text-secondary">40%</span>
                  </div>
                  <div className="w-full bg-bg-surface-active rounded-full h-2 overflow-hidden">
                    <div className="bg-brand-cyan h-full rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted font-medium">Low</span>
                    <span className="text-text-secondary">10%</span>
                  </div>
                  <div className="w-full bg-bg-surface-active rounded-full h-2 overflow-hidden">
                    <div className="bg-bg-surface-active h-full rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Distribution */}
            <div className="bg-bg-surface border border-border-card rounded-xl p-6">
              <h2 className="text-lg font-semibold text-text-primary mb-6">Active Agents by Space</h2>
              <div className="space-y-3">
                {[
                  { name: "AIA Agency", count: 4, color: "text-brand-magenta" },
                  { name: "Tools & Products", count: 2, color: "text-brand-cyan" },
                  { name: "Psychedelic Universe", count: 1, color: "text-brand-green" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-bg-surface rounded-lg border border-border-subtle">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded bg-bg-surface-active flex items-center justify-center ${item.color}`}>
                        <Bot className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-text-primary">{item.name}</span>
                    </div>
                    <span className="text-lg font-bold text-text-primary">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
