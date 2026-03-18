"use client";

import { useState } from "react";
import { Send, Sparkles, Bot, Search, BrainCircuit, Mic } from "lucide-react";

export default function BrainPage() {
  const [input, setInput] = useState("");

  const suggestedActions = [
    { title: "Create Agent", icon: Bot, color: "text-brand-magenta", bg: "bg-brand-magenta/10" },
    { title: "Generate Report", icon: BrainCircuit, color: "text-brand-cyan", bg: "bg-brand-cyan/10" },
    { title: "Search All Sites", icon: Search, color: "text-brand-green", bg: "bg-brand-green/10" },
  ];

  return (
    <div className="flex flex-col h-full bg-bg-base">
      {/* Top Header */}
      <div className="border-b border-border-subtle px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 flex items-center justify-center">
            <BrainCircuit className="w-5 h-5 text-brand-cyan" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-text-primary">AI Brain</h1>
            <p className="text-xs text-text-muted">Master control for your entire universe</p>
          </div>
        </div>
        <div>
          <select className="bg-transparent border border-border-subtle text-text-secondary text-sm rounded-md px-3 py-1.5 outline-none focus:border-brand-cyan">
            <option>Claude 3.5 Sonnet</option>
            <option>GPT-4o</option>
            <option>Gemini 1.5 Pro</option>
          </select>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 flex flex-col items-center justify-center">
        {/* Placeholder for empty state */}
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="inline-block p-4 rounded-full bg-bg-surface border border-border-card mb-4" style={{ boxShadow: '0 0 30px rgba(0,229,204,0.1)' }}>
            <Sparkles className="w-8 h-8 text-brand-cyan" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary">How can I assist you, Ronen?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {suggestedActions.map((action, i) => (
              <button key={i} className="flex flex-col items-center justify-center p-6 bg-bg-surface hover:bg-bg-surface-hover border border-border-card hover:border-border-card-hover rounded-xl transition-all duration-200 group">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${action.bg}`}>
                  <action.icon className={`w-5 h-5 ${action.color}`} />
                </div>
                <span className="text-sm font-medium text-text-primary group-hover:text-brand-cyan transition-colors">{action.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-border-subtle bg-bg-base shrink-0">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Bot className="w-5 h-5 text-text-muted" />
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask, create, search, @ to mention..."
            className="w-full bg-bg-surface border border-border-card text-text-primary rounded-xl pl-12 pr-24 py-4 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
          />
          <div className="absolute inset-y-0 right-2 flex items-center space-x-1">
            <button className="p-2 text-text-muted hover:text-text-primary transition-colors">
              <Mic className="w-5 h-5" />
            </button>
            <button className={`p-2 rounded-lg transition-colors ${input ? 'bg-brand-cyan text-bg-base' : 'bg-bg-surface-active text-text-muted'}`}>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
        <p className="text-center text-xs text-text-muted mt-3">
          AI Brain has deep access to all Spaces, Tasks, and Agents.
        </p>
      </div>
    </div>
  );
}
