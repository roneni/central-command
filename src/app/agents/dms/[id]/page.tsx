import { Send, Bot, FileText, CheckCircle2, XCircle, Play, MoreVertical, Mic } from "lucide-react";
import Link from "next/link";

export default function AgentDM({ params }: { params: { id: string } }) {
  // In a real app we'd fetch agent data and messages using the ID
  const agent = {
    id: params.id,
    name: "Doctor Agent Progress Orchestrator",
    status: "online",
    avatarBg: "bg-brand-purple",
  };

  const messages = [
    {
      id: 1,
      sender: "agent",
      timestamp: "10:23 AM",
      content: "I've reviewed the AIA Agency repository. The landing page copy needs your approval before I deploy.",
      cards: [
        {
          type: "action",
          title: "AIA Landing Page V2",
          subtitle: "Ready for review",
          status: "pending_approval"
        }
      ]
    },
    {
      id: 2,
      sender: "user",
      timestamp: "10:25 AM",
      content: "Can you regenerate the hero section to focus more on 'removing the noise'?",
    },
    {
      id: 3,
      sender: "agent",
      timestamp: "10:26 AM",
      content: "Done. I updated the hero section copy. Here's a preview of the changes.",
      code: `export default function Hero() {
  return (
    <section>
      <h1>We Remove The NoiZe.</h1>
      <p>Your AI Agent Army is ready to deploy.</p>
    </section>
  );
}`
    }
  ];

  return (
    <div className="h-full flex flex-col bg-bg-base">

      {/* Header */}
      <div className="border-b border-border-subtle px-6 py-4 bg-bg-sidebar flex items-center justify-between z-10 sticky top-0">
        <div className="flex items-center space-x-4">
          <Link href="/agents" className="text-text-muted hover:text-text-primary hidden sm:block">
            &larr; Registry
          </Link>
          <div className="flex items-center space-x-3">
            <div className={`relative w-10 h-10 rounded-xl ${agent.avatarBg} bg-opacity-20 flex items-center justify-center`}>
              <Bot className={`w-5 h-5 ${agent.avatarBg.replace('bg-', 'text-')}`} />
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-bg-sidebar ${agent.status === 'online' ? 'bg-brand-green' : 'bg-text-muted'}`} style={agent.status === 'online' ? { boxShadow: '0 0 6px rgba(0,229,204,0.6)' } : undefined}></div>
            </div>
            <div>
              <h1 className="text-base font-bold text-text-primary">{agent.name}</h1>
              <p className="text-xs text-text-muted">Super Agent - AIA Agency</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-2 text-text-muted hover:text-text-primary transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="text-center text-xs text-text-muted mb-8">
          Chat started today at 10:00 AM
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-xs font-semibold text-text-primary opacity-80">
                {msg.sender === 'user' ? 'Ronen' : agent.name}
              </span>
              <span className="text-[10px] text-text-muted">{msg.timestamp}</span>
            </div>

            <div className={`max-w-[80%] rounded-2xl px-5 py-3 text-sm ${
              msg.sender === 'user'
              ? 'bg-brand-cyan text-bg-base rounded-tr-sm'
              : 'bg-bg-surface border border-border-card text-text-primary rounded-tl-sm'
            }`}>
              {msg.content}
            </div>

            {/* Action Cards */}
            {msg.cards && (
              <div className="mt-2 max-w-[80%] space-y-2">
                {msg.cards.map((card, i) => (
                  <div key={i} className="bg-bg-surface border border-border-card rounded-xl p-4 w-72">
                    <div className="flex items-start space-x-3">
                      <div className="pt-0.5">
                        <FileText className="w-5 h-5 text-brand-magenta" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary text-sm">{card.title}</h4>
                        <p className="text-xs text-text-secondary mt-0.5">{card.subtitle}</p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <button className="flex items-center justify-center space-x-1.5 bg-brand-green/10 text-brand-green px-3 py-1.5 rounded-md text-xs font-medium hover:bg-brand-green/20 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Approve</span>
                      </button>
                      <button className="flex items-center justify-center space-x-1.5 bg-transparent border border-border-subtle text-text-secondary px-3 py-1.5 rounded-md text-xs font-medium hover:text-brand-magenta hover:border-brand-magenta/30 transition-colors">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Reject</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Code Blocks */}
            {msg.code && (
              <div className="mt-2 max-w-full lg:max-w-[80%] bg-[#0d0d1a] border border-border-card rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-bg-surface-active select-none">
                  <span className="text-xs font-mono text-brand-cyan">page.tsx</span>
                  <div className="flex space-x-2">
                    <button className="text-[10px] text-text-secondary hover:text-text-primary font-medium tracking-wide uppercase px-2 py-1 rounded hover:bg-bg-surface-hover transition-colors">
                      Copy
                    </button>
                    <button className="text-[10px] text-brand-cyan hover:brightness-110 font-medium tracking-wide flex items-center space-x-1 px-2 py-1 rounded hover:bg-brand-cyan/10 transition-colors">
                      <Play className="w-3 h-3" />
                      <span>Run</span>
                    </button>
                  </div>
                </div>
                <pre className="p-4 text-sm font-mono text-text-secondary overflow-x-auto whitespace-pre-wrap">
                  {msg.code}
                </pre>
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        <div className="flex items-start space-x-2 mt-4">
          <div className="w-8 h-8 rounded-lg bg-bg-surface border border-border-subtle flex items-center justify-center">
            <span className="flex space-x-1">
              <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Input Box */}
      <div className="p-4 border-t border-border-subtle bg-bg-base">
        <div className="max-w-4xl mx-auto relative group flex items-end bg-bg-surface border border-border-card rounded-xl focus-within:border-brand-cyan focus-within:ring-1 focus-within:ring-brand-cyan transition-all overflow-hidden">
          <textarea
            placeholder="Give Doctor Agent instructions..."
            className="w-full bg-transparent text-text-primary px-4 py-3 min-h-[50px] max-h-32 resize-none focus:outline-none scrollbar-hide text-sm"
            rows={1}
          />
          <div className="flex items-center space-x-1 px-2 py-2 shrink-0">
            <button className="p-2 text-text-muted hover:text-text-primary transition-colors cursor-pointer rounded-lg hover:bg-bg-surface-active">
              <Mic className="w-5 h-5" />
            </button>
            <button className="p-2 bg-brand-cyan text-bg-base rounded-lg hover:brightness-110 transition-all">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
