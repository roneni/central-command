"use client";

import Link from "next/link";
import { Plus, Search, Filter, MoreVertical, Bot, Zap, Play, Square, Circle } from "lucide-react";

export default function AgentRegistry() {
  const agents = [
    {
      id: "1",
      name: "Doctor Agent Progress Orchestrator",
      type: "Super Agent",
      status: "online",
      lastActive: "2 mins ago",
      workspace: "AIA Agency",
      currentTask: "Reviewing agent deployment logs",
      skills: 39,
      avatarBg: "bg-brand-purple",
    },
    {
      id: "2",
      name: "Personal Career Assistant",
      type: "Autopilot",
      status: "online",
      lastActive: "Just now",
      workspace: "Identity Site",
      currentTask: "Drafting LinkedIn post",
      skills: 12,
      avatarBg: "bg-brand-cyan",
    },
    {
      id: "3",
      name: "Task Triage Auto-Pilot",
      type: "Autopilot",
      status: "offline",
      lastActive: "1 hour ago",
      workspace: "All Spaces",
      currentTask: "Idle",
      skills: 8,
      avatarBg: "bg-text-muted",
    },
    {
      id: "4",
      name: "Design Super Agent",
      type: "Super Agent",
      status: "online",
      lastActive: "5 mins ago",
      workspace: "Tools & Products",
      currentTask: "Generating UI mockups for Sentinel",
      skills: 39,
      avatarBg: "bg-brand-green",
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center space-x-2">
            <Bot className="w-6 h-6 text-brand-cyan" />
            <span>Agent Registry</span>
          </h1>
          <p className="text-sm text-text-secondary mt-1">Manage your AI workforce across all workspaces.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Link 
            href="/agents/builder"
            className="bg-brand-cyan hover:bg-[#3dbdf0] text-bg-base px-4 py-2 rounded-md font-medium transition-colors flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Create Agent</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-bg-surface p-4 rounded-xl border border-bg-surface-hover">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
          <input 
            type="text" 
            placeholder="Search agents..." 
            className="w-full bg-bg-base border border-bg-surface-hover rounded-md pl-9 pr-4 py-2 text-sm text-text-primary focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
          />
        </div>
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <button className="flex items-center justify-center space-x-2 bg-bg-base border border-bg-surface-hover rounded-md px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors w-full sm:w-auto">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {agents.map((agent) => (
          <div key={agent.id} className="bg-bg-surface border border-bg-surface-hover rounded-xl p-5 hover:border-bg-surface-active transition-all group flex flex-col h-full relative overflow-hidden">
            {/* Top absolute glow effect */}
            <div className={`absolute top-0 left-0 right-0 h-1 opacity-50 group-hover:opacity-100 transition-opacity ${agent.avatarBg}`}></div>
            
            <div className="flex justify-between items-start mb-4">
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${agent.avatarBg} bg-opacity-20`}>
                  <Bot className={`w-6 h-6 ${agent.avatarBg.replace('bg-', 'text-')}`} />
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-bg-surface ${agent.status === 'online' ? 'bg-brand-green' : 'bg-text-muted'}`}></div>
              </div>
              <button className="text-text-muted hover:text-text-primary p-1">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
            
            <div className="mb-4 flex-1">
              <h3 className="font-semibold text-text-primary text-lg leading-tight truncate">{agent.name}</h3>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-bg-surface-active text-text-secondary">
                  {agent.type}
                </span>
                <span className="text-xs text-text-muted flex items-center space-x-1">
                  <Zap className="w-3 h-3" />
                  <span>{agent.skills} skills</span>
                </span>
              </div>
            </div>
            
            <div className="space-y-3 mb-5 text-sm">
              <div className="flex justify-between">
                <span className="text-text-muted">Workspace</span>
                <span className="text-text-secondary font-medium">{agent.workspace}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Last Active</span>
                <span className="text-text-secondary">{agent.lastActive}</span>
              </div>
              <div className="bg-bg-base p-2.5 rounded-lg border border-bg-surface-hover mt-2">
                <div className="text-xs text-text-muted mb-1">Current Task</div>
                <div className="text-sm text-text-primary truncate">{agent.currentTask}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-auto">
              <Link href={`/agents/dms/${agent.id}`} className="flex items-center justify-center space-x-1 bg-bg-surface-hover hover:bg-bg-surface-active text-text-primary px-3 py-2 rounded-lg transition-colors text-sm font-medium">
                <span>Chat</span>
              </Link>
              <button className="flex items-center justify-center space-x-1 bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/20 px-3 py-2 rounded-lg transition-colors text-sm font-medium">
                {agent.status === 'online' ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{agent.status === 'online' ? 'Stop' : 'Start'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
