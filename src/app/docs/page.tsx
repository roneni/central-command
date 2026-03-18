"use client";

import { FileText, Folder, MoreVertical, Plus, Share, ChevronRight, Hash, Clock, History } from "lucide-react";
import { useState } from "react";

export default function DocsPage() {
  const [activeDoc, setActiveDoc] = useState("AI Architecture Guidelines");

  const sidebarItems = [
    { type: "folder", name: "AIA Agency Projects", open: true, items: [
      { type: "file", name: "Client Onboarding Flow" },
      { type: "file", name: "Doctor Agent Prompts" },
    ]},
    { type: "folder", name: "Personal Knowledge Base", open: true, items: [
      { type: "file", name: "AI Architecture Guidelines", active: true },
      { type: "file", name: "2024 Goals & Vision" },
      { type: "file", name: "Agent Deployment Checklist" },
    ]},
    { type: "folder", name: "Meeting Notes", open: false, items: [] },
  ];

  return (
    <div className="h-full flex bg-bg-base overflow-hidden">
      
      {/* Docs Sidebar */}
      <div className="w-64 border-r border-bg-surface-hover bg-bg-surface flex flex-col h-full shrink-0">
        <div className="p-4 border-b border-bg-surface-hover flex justify-between items-center sticky top-0 bg-bg-surface z-10">
          <h2 className="font-semibold text-text-primary flex items-center space-x-2">
            <FileText className="w-4 h-4 text-brand-cyan" />
            <span>Documents</span>
          </h2>
          <button className="p-1 text-text-secondary hover:text-text-primary bg-bg-base border border-bg-surface-hover rounded transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {sidebarItems.map((folder, i) => (
            <div key={i} className="space-y-0.5">
              <button className="w-full flex items-center space-x-2 px-2 py-1.5 rounded-md hover:bg-bg-surface-hover transition-colors text-text-secondary group text-left">
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${folder.open ? 'rotate-90 text-brand-purple' : 'text-text-muted'}`} />
                <Folder className={`w-4 h-4 ${folder.open ? 'text-brand-purple' : 'text-text-muted'}`} />
                <span className="text-sm font-medium truncate flex-1">{folder.name}</span>
              </button>
              
              {folder.open && folder.items.map((file, j) => (
                <button key={j} onClick={() => setActiveDoc(file.name)} className={`w-full flex items-center space-x-2 pl-8 pr-2 py-1.5 rounded-md transition-colors text-left ${file.active || activeDoc === file.name ? 'bg-brand-cyan/10 text-brand-cyan' : 'hover:bg-bg-surface-hover text-text-muted hover:text-text-secondary'}`}>
                  <FileText className="w-3.5 h-3.5" />
                  <span className="text-sm truncate">{file.name}</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-bg-base relative">
        {/* Editor Topbar */}
        <div className="h-14 border-b border-bg-surface-hover flex items-center justify-between px-6 shrink-0 sticky top-0 bg-bg-base/90 backdrop-blur z-10">
          <div className="flex items-center space-x-2 text-sm text-text-muted">
            <span className="hover:text-text-primary cursor-pointer transition-colors">Personal Knowledge Base</span>
            <span className="text-bg-surface-active">/</span>
            <span className="text-text-primary font-medium">{activeDoc}</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs text-text-muted hidden sm:inline-block flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>Saved 2 mins ago</span>
            </span>
            <button className="flex items-center space-x-1.5 bg-bg-surface border border-bg-surface-hover hover:border-bg-surface-active text-text-secondary hover:text-text-primary transition-colors px-3 py-1.5 rounded-md text-sm font-medium">
              <History className="w-4 h-4" />
              <span className="hidden sm:inline">History</span>
            </button>
            <button className="flex items-center space-x-1.5 bg-brand-cyan hover:bg-[#3dbdf0] text-bg-base px-3 py-1.5 rounded-md font-medium transition-colors text-sm">
              <Share className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="p-1.5 text-text-muted hover:text-text-primary transition-colors">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Editor Content */}
        <div className="flex-1 overflow-y-auto w-full">
          <div className="max-w-3xl mx-auto py-12 px-8 sm:px-12 lg:px-16">
            <div className="group relative">
              <h1 className="text-4xl font-bold text-text-primary mb-6 outline-none empty:before:content-['Doc_Title...'] empty:before:text-text-muted cursor-text">
                {activeDoc}
              </h1>
              <div className="absolute -left-8 top-2 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
                <button className="p-1 text-text-muted hover:text-text-primary rounded hover:bg-bg-surface">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-6 text-text-secondary leading-relaxed outline-none min-h-[500px]">
              <p>This document outlines the core architecture principles for all AI agents built inside the AIA ecosystem. These principles ensure consistency, reliability, and security across all deployments.</p>
              
              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">1. Core Principles</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Autonomy with Boundaries:</strong> Agents must have clear fallback mechanisms when encountering unknown scenarios. Every critical action must be logged and, where required, await human approval.</li>
                <li><strong>Context Isolation:</strong> An agent operating in the <em>Tools & Products</em> space should not access data from the <em>Psychedelic Universe</em> space unless explicitly granted cross-workspace permissions.</li>
                <li><strong>Token Efficiency:</strong> System prompts must be compressed. Leverage LangChain's document loaders only for necessary context rather than stuffing the prompt window.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">2. The "Doctor Agent" Pattern</h2>
              <p>The Doctor Agent acts as the primary orchestrator. It does not execute tasks itself; rather, it delegates them to specialized Autopilot agents.</p>
              
              <div className="bg-bg-surface border border-bg-surface-hover rounded-lg p-4 font-mono text-sm text-brand-purple my-4">
                <div className="flex items-center space-x-2 mb-2 text-text-muted border-b border-bg-surface-hover pb-2">
                  <Hash className="w-4 h-4" />
                  <span>Agent Delegation Routine</span>
                </div>
                <code>{`function delegateTask(task, context) {
  const agent = agentRegistry.findBestMatch(task.requirements);
  if (!agent) {
    return escalateToHuman(task);
  }
  return agent.execute({
    context,
    constraints: task.constraints,
    deadline: task.deadline
  });
}`}</code>
              </div>

              <blockquote className="border-l-4 border-brand-cyan pl-4 italic bg-brand-cyan/5 py-2 pr-4 rounded-r-lg">
                "We Remove The NoiZe by ensuring agents only speak when they have resolved an issue or require specific unblocking." - RK
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
