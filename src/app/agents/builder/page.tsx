"use client";

import { useState } from "react";
import { ChevronRight, CheckCircle2, ChevronLeft, Save, Bot, Database, Zap, Settings, ShieldAlert, Cpu } from "lucide-react";

export default function AgentBuilder() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: "Identity", icon: Bot },
    { id: 2, title: "Capability", icon: Zap },
    { id: 3, title: "Knowledge", icon: Database },
    { id: 4, title: "Logic", icon: Cpu },
    { id: 5, title: "Permissions", icon: ShieldAlert },
    { id: 6, title: "Review", icon: CheckCircle2 },
  ];

  const handleNext = () => currentStep < steps.length && setCurrentStep(curr => curr + 1);
  const handlePrev = () => currentStep > 1 && setCurrentStep(curr => curr - 1);

  return (
    <div className="h-full flex flex-col bg-bg-base">
      <div className="border-b border-bg-surface-hover px-6 py-4 flex items-center justify-between bg-bg-surface z-10 sticky top-0">
        <div>
          <h1 className="text-lg font-bold text-text-primary">Agent Builder Wizard</h1>
          <p className="text-xs text-text-muted">Configure a new AI intelligence</p>
        </div>
        <div className="flex space-x-3">
          <button className="text-text-secondary hover:text-text-primary px-4 py-2 transition-colors text-sm font-medium">
            Cancel
          </button>
          <button className="bg-bg-surface-hover hover:bg-bg-surface-active text-text-primary px-4 py-2 border border-bg-surface-hover rounded-md transition-colors flex items-center space-x-2 text-sm font-medium">
            <Save className="w-4 h-4" />
            <span>Save Draft</span>
          </button>
          <button className="bg-brand-cyan hover:bg-[#3dbdf0] text-bg-base px-5 py-2 rounded-md font-medium transition-colors text-sm">
            Deploy Agent
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar Steps */}
        <div className="w-64 border-r border-bg-surface-hover bg-bg-surface h-full p-4 overflow-y-auto hidden md:block">
          <div className="space-y-2">
            {steps.map((step) => {
              const isActive = currentStep === step.id;
              const isPast = currentStep > step.id;
              
              return (
                <div 
                  key={step.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors cursor-pointer ${
                    isActive ? 'bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan' :
                    isPast ? 'text-text-primary' : 'text-text-muted opacity-50'
                  }`}
                  onClick={() => setCurrentStep(step.id)}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    isActive ? 'bg-brand-cyan text-bg-base' :
                    isPast ? 'bg-brand-green text-bg-base' : 'bg-bg-surface-active text-text-secondary'
                  }`}>
                    {isPast ? <CheckCircle2 className="w-4 h-4" /> : step.id}
                  </div>
                  <span className="font-medium text-sm">{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content Area */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-2xl mx-auto">
            
            {currentStep === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center space-x-2">
                  <Bot className="w-6 h-6 text-brand-purple" />
                  <span>Agent Identity</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Agent Name</label>
                    <input type="text" placeholder="e.g. Doctor Agent, SEO Optimizer..." className="w-full bg-bg-surface border border-bg-surface-hover rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-brand-cyan transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">System Prompts & Role</label>
                    <textarea rows={5} placeholder="You are an expert autonomous agent designed to..." className="w-full bg-bg-surface border border-bg-surface-hover rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-brand-cyan transition-colors resize-none"></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-4">Avatar Color</label>
                    <div className="flex space-x-4">
                      {['bg-brand-cyan', 'bg-brand-purple', 'bg-brand-green', 'bg-brand-yellow', 'bg-brand-red'].map((color) => (
                        <button key={color} className={`w-8 h-8 rounded-full ${color} ring-2 ring-offset-2 ring-offset-bg-base ring-transparent hover:ring-text-muted transition-all cursor-pointer`}></button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-brand-cyan" />
                  <span>Agent Capabilities (Skills)</span>
                </h2>
                <p className="text-sm text-text-muted mb-6">Select the tools this agent has permission to use autonomously.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Read/Write Files", "Execute CLI Commands", "Browse Web", 
                    "Search Database", "Create/Update Tasks", "Send Slack/Discord Messages",
                    "Generate Images", "Analyze Data"
                  ].map((skill, i) => (
                    <label key={i} className="flex items-center space-x-3 p-4 border border-bg-surface-hover rounded-lg bg-bg-surface cursor-pointer hover:border-bg-surface-active transition-colors">
                      <input type="checkbox" className="w-4 h-4 rounded border-bg-surface-hover text-brand-cyan focus:ring-brand-cyan/20 bg-bg-base accent-brand-cyan" />
                      <span className="text-sm font-medium text-text-primary">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep > 2 && currentStep < 6 && (
              <div className="animate-in fade-in flex flex-col items-center justify-center py-20 text-text-muted text-center space-y-4">
                <Settings className="w-12 h-12 relative animate-[spin_4s_linear_infinite] mx-auto text-brand-purple opacity-50" />
                <h3 className="text-xl font-medium text-text-primary">Step {currentStep} Configuration</h3>
                <p>Placeholder for the complex form configurations according to plan.</p>
              </div>
            )}

            {currentStep === 6 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center space-x-2">
                  <CheckCircle2 className="w-6 h-6 text-brand-green" />
                  <span>Review & Deploy</span>
                </h2>
                <div className="space-y-4">
                  <div className="bg-bg-surface border border-bg-surface-hover rounded-xl p-6">
                    <p className="text-text-muted text-sm mb-4">Please review your agent's configuration before deployment.</p>
                    <ul className="space-y-4 text-sm">
                      <li className="flex justify-between border-b border-bg-surface-hover pb-3">
                        <span className="text-text-secondary">Name</span>
                        <span className="text-text-primary font-medium">New AI Agent</span>
                      </li>
                      <li className="flex justify-between border-b border-bg-surface-hover pb-3">
                        <span className="text-text-secondary">Capabilities</span>
                        <span className="text-text-primary font-medium text-right">Read Files, Create Tasks</span>
                      </li>
                      <li className="flex justify-between border-b border-bg-surface-hover pb-3">
                        <span className="text-text-secondary">LLM Model</span>
                        <span className="text-text-primary font-medium">Claude 3.5 Sonnet</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Nav Buttons */}
            <div className="mt-12 pt-6 border-t border-bg-surface-hover flex justify-between">
              <button 
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-6 py-2 rounded-md font-medium transition-colors text-sm ${
                  currentStep === 1 
                  ? 'bg-bg-surface/50 text-text-muted cursor-not-allowed border border-transparent' 
                  : 'bg-bg-base border border-bg-surface-hover text-text-primary hover:bg-bg-surface'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              
              {currentStep < steps.length ? (
                <button 
                  onClick={handleNext}
                  className="bg-brand-cyan hover:bg-[#3dbdf0] text-bg-base px-6 py-2 rounded-md font-medium transition-colors flex items-center space-x-2 text-sm"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button 
                  className="bg-brand-green hover:bg-[#2ead7d] text-bg-base px-6 py-2 rounded-md font-medium transition-colors flex items-center space-x-2 text-sm shadow-[0_0_15px_rgba(49,196,141,0.3)]"
                >
                  <Bot className="w-4 h-4" />
                  <span>Deploy to Workspace</span>
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
