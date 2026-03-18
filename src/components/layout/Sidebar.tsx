"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Calendar,
  Brain,
  Bot,
  FileText,
  LayoutDashboard,
  Target,
  FolderOpen,
  Hash,
  MessageSquare
} from "lucide-react";
import clsx from "clsx";

export function Sidebar() {
  const [spacesOpen, setSpacesOpen] = useState(true);

  const mainNav = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Planner", icon: Calendar, href: "/planner" },
    { name: "AI Brain", icon: Brain, href: "/brain" },
    { name: "Agents", icon: Bot, href: "/agents" },
    { name: "Docs", icon: FileText, href: "/docs" },
    { name: "Dashboards", icon: LayoutDashboard, href: "/dashboards" },
    { name: "Goals", icon: Target, href: "/goals" },
  ];

  const spaces = [
    { name: "Psychedelic Universe", icon: FolderOpen },
    { name: "Identity Site", icon: FolderOpen },
    { name: "AIA Agency", icon: FolderOpen },
    { name: "Tools & Products", icon: FolderOpen },
    { name: "AI Agent Army", icon: FolderOpen },
    { name: "Competitions & Growth", icon: FolderOpen },
  ];

  const channels = [
    { name: "General" },
    { name: "Updates" }
  ];

  const agents = [
    { name: "Doctor Agent Progress Orchestrator" },
    { name: "Personal Career Assistant" },
    { name: "Task Triage Auto-Pilot" },
    { name: "Task Auto-Creator" }
  ];

  return (
    <aside className="w-64 bg-bg-sidebar h-screen flex flex-col border-r border-border-subtle text-sm overflow-y-auto">
      {/* Brand & Workspace */}
      <div className="p-4 flex items-center space-x-2 border-b border-border-subtle sticky top-0 bg-bg-sidebar z-10">
        <div className="w-8 h-8 rounded bg-brand-cyan flex items-center justify-center text-bg-base font-bold">
          R
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-text-primary">Ronen Katz</span>
          <span className="text-xs text-text-muted">I Remove The NoiZe.</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="py-4 px-2 space-y-1">
        {mainNav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center space-x-3 px-3 py-2 rounded-md text-text-secondary hover:bg-[rgba(255,255,255,0.05)] hover:text-text-primary transition-colors border-l-2 border-transparent hover:border-brand-cyan"
          >
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      <div className="px-5 mb-2 text-[10px] font-semibold text-text-muted uppercase tracking-widest mt-4">
        Spaces
      </div>
      <div className="px-2 space-y-1">
        {spaces.map((space) => (
          <div key={space.name}>
            <button className="w-full flex items-center space-x-2 px-3 py-1.5 rounded-md text-text-secondary hover:bg-[rgba(255,255,255,0.05)] transition-colors text-left">
              <ChevronRight className="w-3 h-3 text-text-muted" />
              <space.icon className="w-4 h-4 text-brand-cyan/60" />
              <span className="truncate">{space.name}</span>
            </button>
          </div>
        ))}
      </div>

      <div className="px-5 mb-2 text-[10px] font-semibold text-text-muted uppercase tracking-widest mt-6">
        Channels
      </div>
      <div className="px-2 space-y-1">
        {channels.map((chan) => (
          <button key={chan.name} className="w-full flex items-center space-x-2 px-3 py-1.5 rounded-md text-text-secondary hover:bg-[rgba(255,255,255,0.05)] transition-colors text-left">
            <Hash className="w-4 h-4 text-text-muted" />
            <span className="truncate">{chan.name}</span>
          </button>
        ))}
      </div>

      <div className="px-5 mb-2 text-[10px] font-semibold text-text-muted uppercase tracking-widest mt-6">
        Direct Messages
      </div>
      <div className="px-2 space-y-1 pb-4">
        {agents.map((agent) => (
          <button key={agent.name} className="w-full flex items-center space-x-2 px-3 py-1.5 rounded-md text-text-secondary hover:bg-[rgba(255,255,255,0.05)] transition-colors text-left">
            <div className="relative">
              <div className="w-5 h-5 rounded-full bg-bg-surface-active flex items-center justify-center">
                <Bot className="w-3 h-3 text-brand-cyan" />
              </div>
              <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-brand-green border border-bg-sidebar" style={{ boxShadow: '0 0 6px rgba(0,229,204,0.6)' }}></div>
            </div>
            <span className="truncate text-text-secondary">{agent.name}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
