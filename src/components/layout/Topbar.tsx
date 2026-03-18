"use client";

import { Search, Plus, Bell, Settings } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-16 border-b border-border-subtle bg-[rgba(10,10,20,0.8)] backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-10 w-full text-sm">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <button className="w-full flex items-center justify-between bg-transparent hover:bg-bg-surface border border-border-subtle rounded-md px-3 py-1.5 text-text-muted transition-colors">
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4" />
            <span>Search spaces, tasks, agents...</span>
          </div>
          <kbd className="hidden sm:inline-block px-2 text-xs rounded bg-bg-surface-active text-text-secondary font-mono">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 bg-brand-magenta hover:brightness-110 text-white px-3 py-1.5 rounded-md font-medium transition-all" style={{ boxShadow: '0 0 15px rgba(233,30,140,0.2)' }}>
          <Plus className="w-4 h-4" />
          <span>Task</span>
        </button>
        <button className="flex items-center space-x-1 bg-transparent hover:bg-bg-surface text-text-primary border border-border-subtle px-3 py-1.5 rounded-md font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span>Doc</span>
        </button>

        <div className="h-6 w-px bg-border-divider mx-2"></div>

        <button className="text-text-secondary hover:text-text-primary transition-colors">
          <Bell className="w-5 h-5" />
        </button>

        <button className="relative ml-2">
          <img
            src="https://api.dicebear.com/9.x/avataaars/svg?seed=Ronen"
            alt="User Avatar"
            className="w-8 h-8 rounded-full border border-border-subtle bg-bg-surface-active"
          />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-brand-green border-2 border-bg-base" style={{ boxShadow: '0 0 6px rgba(0,229,204,0.6)' }}></div>
        </button>
      </div>
    </header>
  );
}
