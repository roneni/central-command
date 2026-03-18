import { Sparkles } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-bg-base flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 mb-4">
            <Sparkles className="w-8 h-8 text-brand-cyan" />
          </div>
          <h1 className="text-3xl font-bold text-text-primary">Mission Control</h1>
          <p className="text-text-secondary mt-2">I Remove The NoiZe.</p>
        </div>

        <div className="bg-bg-surface border border-bg-surface-hover rounded-2xl p-8 shadow-xl">
          <h2 className="text-xl font-semibold text-text-primary mb-6">Secured Access Only</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Commander Email</label>
              <input 
                type="email" 
                placeholder="ronen@aiaagency.ai"
                className="w-full bg-bg-base border border-bg-surface-hover rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-brand-cyan transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">Master Password</label>
              <input 
                type="password" 
                placeholder="••••••••••••"
                className="w-full bg-bg-base border border-bg-surface-hover rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-brand-cyan transition-colors"
              />
            </div>
            
            <button 
              type="button"
              className="w-full bg-brand-cyan hover:bg-[#3dbdf0] text-bg-base font-bold py-3 px-4 rounded-lg mt-6 flex items-center justify-center transition-colors"
            >
              Initiate Override
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-bg-surface-hover text-center">
            <p className="text-xs text-text-muted">
              Unauthorized access attempts are logged and tracked by Sentinel Security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
