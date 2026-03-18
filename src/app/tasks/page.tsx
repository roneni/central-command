"use client";

import { CheckSquare, LayoutList, KanbanSquare, SlidersHorizontal, Plus, Search, MoreHorizontal, MessageSquare, Paperclip, MoreVertical, Flag } from "lucide-react";
import { useState } from "react";

export default function TasksPage() {
  const [view, setView] = useState<'kanban' | 'list'>('kanban');

  const columns = [
    { id: "todo", title: "TO DO", color: "bg-text-muted" },
    { id: "in-progress", title: "IN PROGRESS", color: "bg-brand-purple" },
    { id: "review", title: "IN REVIEW", color: "bg-brand-yellow" },
    { id: "done", title: "COMPLETE", color: "bg-brand-green" }
  ];

  const tasks = [
    {
      id: "T-101",
      title: "Review AIA Agency Landing Page",
      space: "AIA Agency",
      priority: "High",
      column: "in-progress",
      comments: 3,
      attachments: 1,
      assignee: "RK"
    },
    {
      id: "T-102",
      title: "Deploy Design Super Agent V2",
      space: "Tools & Products",
      priority: "Urgent",
      column: "todo",
      comments: 5,
      attachments: 0,
      assignee: "🤖"
    },
    {
      id: "T-103",
      title: "Upload Psychedelic Universe Mix",
      space: "Psychedelic Universe",
      priority: "Normal",
      column: "todo",
      comments: 0,
      attachments: 2,
      assignee: "RK"
    },
    {
      id: "T-104",
      title: "Draft Berkeley AgentX Preso",
      space: "Competitions & Growth",
      priority: "High",
      column: "review",
      comments: 12,
      attachments: 4,
      assignee: "RK"
    },
    {
      id: "T-105",
      title: "Fix Sentinel Security Auth Bug",
      space: "Tools & Products",
      priority: "Urgent",
      column: "done",
      comments: 8,
      attachments: 1,
      assignee: "🤖"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'Urgent': return 'text-brand-red';
      case 'High': return 'text-brand-yellow';
      case 'Normal': return 'text-brand-cyan';
      default: return 'text-text-muted';
    }
  };

  return (
    <div className="h-full flex flex-col bg-bg-base overflow-hidden">
      {/* Header */}
      <div className="border-b border-bg-surface-hover px-8 py-5 flex items-center justify-between bg-bg-base z-10 sticky top-0">
        <div className="flex items-center space-x-4">
          <CheckSquare className="w-6 h-6 text-brand-purple" />
          <h1 className="text-2xl font-bold text-text-primary">Everything</h1>
          
          <div className="h-6 w-px bg-bg-surface-hover mx-2"></div>
          
          <div className="flex bg-bg-surface rounded-lg p-1 border border-bg-surface-hover">
            <button 
              onClick={() => setView('kanban')}
              className={`p-1.5 rounded-md flex items-center space-x-2 transition-colors ${view === 'kanban' ? 'bg-bg-surface-active text-text-primary shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
            >
              <KanbanSquare className="w-4 h-4" />
              <span className="text-xs font-semibold px-1">Board</span>
            </button>
            <button 
              onClick={() => setView('list')}
              className={`p-1.5 rounded-md flex items-center space-x-2 transition-colors ${view === 'list' ? 'bg-bg-surface-active text-text-primary shadow-sm' : 'text-text-secondary hover:text-text-primary'}`}
            >
              <LayoutList className="w-4 h-4" />
              <span className="text-xs font-semibold px-1">List</span>
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="Search tasks..." 
              className="w-full bg-bg-surface border border-bg-surface-hover rounded-md pl-9 pr-4 py-2 text-sm text-text-primary focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple"
            />
          </div>
          <button className="flex items-center space-x-1.5 bg-bg-surface border border-bg-surface-hover hover:border-bg-surface-active text-text-secondary hover:text-text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-1.5 bg-brand-cyan hover:bg-[#3dbdf0] text-bg-base px-4 py-2 rounded-md font-medium transition-colors text-sm">
            <Plus className="w-4 h-4" />
            <span>New Task</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto overflow-y-auto p-8">
        {view === 'kanban' ? (
          <div className="flex h-full space-x-6 pb-8 min-w-max">
            {columns.map(col => (
              <div key={col.id} className="flex flex-col w-80 shrink-0">
                <div className="flex items-center justify-between mb-4 px-1">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${col.color}`}></div>
                    <span className="text-xs font-bold text-text-secondary tracking-widest">{col.title}</span>
                    <span className="text-xs text-text-muted bg-bg-surface px-1.5 py-0.5 rounded-full border border-bg-surface-hover">
                      {tasks.filter(t => t.column === col.id).length}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button className="p-1 text-text-muted hover:text-text-primary rounded hover:bg-bg-surface transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-text-muted hover:text-text-primary rounded hover:bg-bg-surface transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  {tasks.filter(t => t.column === col.id).map(task => (
                    <div key={task.id} className="bg-bg-surface border border-bg-surface-hover hover:border-bg-surface-active rounded-lg p-4 shadow-sm cursor-grab group">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-mono text-text-muted">{task.id}</span>
                        <button className="opacity-0 group-hover:opacity-100 p-0.5 text-text-muted hover:text-text-primary transition-opacity">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <h3 className="text-sm font-semibold text-text-primary leading-snug mb-3">
                        {task.title}
                      </h3>
                      
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-text-secondary bg-bg-base px-2 py-1 rounded border border-bg-surface-hover truncate max-w-[120px]">
                          {task.space}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Flag className={`w-3.5 h-3.5 ${getPriorityColor(task.priority)}`} />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-bg-surface-hover/50">
                        <div className="flex items-center space-x-3 text-text-muted">
                          {(task.comments > 0 || task.attachments > 0) && (
                            <div className="flex space-x-2">
                              {task.comments > 0 && (
                                <div className="flex items-center space-x-1">
                                  <MessageSquare className="w-3.5 h-3.5" />
                                  <span className="text-xs">{task.comments}</span>
                                </div>
                              )}
                              {task.attachments > 0 && (
                                <div className="flex items-center space-x-1">
                                  <Paperclip className="w-3 h-3" />
                                  <span className="text-xs">{task.attachments}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        
                        <div className="w-6 h-6 rounded-full bg-bg-surface-active border border-bg-surface-hover flex items-center justify-center text-[10px] font-bold text-text-primary">
                          {task.assignee}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Empty state for column */}
                  {tasks.filter(t => t.column === col.id).length === 0 && (
                    <div className="border-2 border-dashed border-bg-surface-hover rounded-lg h-24 flex items-center justify-center">
                      <span className="text-sm text-text-muted font-medium">Drop tasks here</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-bg-surface border border-bg-surface-hover rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left whitespace-nowrap text-sm">
              <thead className="bg-bg-base/50 text-xs text-text-muted uppercase tracking-wider border-b border-bg-surface-hover">
                <tr>
                  <th className="px-6 py-4 font-semibold w-8"></th>
                  <th className="px-6 py-4 font-semibold">Task Name</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Priority</th>
                  <th className="px-6 py-4 font-semibold">Space</th>
                  <th className="px-6 py-4 font-semibold">Assignee</th>
                  <th className="px-6 py-4 font-semibold"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bg-surface-hover">
                {tasks.map(task => (
                  <tr key={task.id} className="hover:bg-bg-surface-hover transition-colors group">
                    <td className="px-6 py-4">
                      <div className="w-4 h-4 border border-text-muted rounded hover:bg-brand-cyan/20 hover:border-brand-cyan flex justify-center items-center cursor-pointer transition-colors"></div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs text-text-muted">{task.id}</span>
                        <span className="font-semibold text-text-primary">{task.title}</span>
                        {task.comments > 0 && (
                          <div className="flex items-center space-x-1 text-text-muted">
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span className="text-[10px]">{task.comments}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${columns.find(c => c.id === task.column)?.color}`}></div>
                        <span className="text-text-secondary">{columns.find(c => c.id === task.column)?.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1">
                        <Flag className={`w-3.5 h-3.5 ${getPriorityColor(task.priority)}`} />
                        <span className="text-text-secondary">{task.priority}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-text-muted">{task.space}</td>
                    <td className="px-6 py-4">
                      <div className="w-6 h-6 rounded-full bg-bg-surface-active border border-bg-surface-hover flex items-center justify-center text-[10px] font-bold text-text-primary">
                        {task.assignee}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-1.5 text-text-muted hover:text-text-primary rounded hover:bg-bg-base transition-colors opacity-0 group-hover:opacity-100">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
