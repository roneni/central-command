"use client";

import { Search, Plus, Bell, Settings } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-16 border-b border-bg-surface-hover bg-bg-base flex items-center justify-between px-6 sticky top-0 z-10 w-full text-sm">
      {/* Search Bar - ⌘K */}
      <div className="flex-1 max-w-md">
        <button className="w-full flex items-center justify-between bg-bg-surface hover:bg-bg-surface-hover border border-bg-surface-hover rounded-md px-3 py-1.5 text-text-muted transition-colors">
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
        <button className="flex items-center space-x-1 bg-brand-cyan hover:bg-[#3dbdf0] text-bg-base px-3 py-1.5 rounded-md font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span>Task</span>
        </button>
        <button className="flex items-center space-x-1 bg-bg-surface hover:bg-bg-surface-hover text-text-primary border border-bg-surface-hover px-3 py-1.5 rounded-md font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span>Doc</span>
        </button>
        
        <div className="h-6 w-px bg-bg-surface-hover mx-2"></div>
        
        <button className="text-text-secondary hover:text-text-primary transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        
        <button className="relative ml-2">
          <img 
            src="https://api.dicebear.com/9.x/avataaars/svg?seed=Ronen" 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full border border-bg-surface-hover bg-bg-surface-active"
          />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-brand-green border-2 border-bg-base"></div>
        </button>
      </div>
    </header>
  );
}
