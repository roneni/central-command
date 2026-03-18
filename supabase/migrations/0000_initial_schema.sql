-- Initial Schema for Mission Control
-- Setup tables for users, spaces, folders, lists, tasks, agents, and sites.

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users
CREATE TABLE public.users (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Spaces
CREATE TABLE public.spaces (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  owner_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  color TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Folders
CREATE TABLE public.folders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  space_id UUID REFERENCES public.spaces(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lists
CREATE TABLE public.lists (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  folder_id UUID REFERENCES public.folders(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agents
CREATE TABLE public.agents (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  system_prompt TEXT NOT NULL,
  model TEXT DEFAULT 'claude-3-5-sonnet',
  type TEXT DEFAULT 'Autopilot',
  status TEXT DEFAULT 'offline',
  avatar_color TEXT DEFAULT 'bg-brand-cyan',
  workspace_id UUID REFERENCES public.spaces(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agent Skills (Capabilities)
CREATE TABLE public.agent_skills (
  agent_id UUID REFERENCES public.agents(id) ON DELETE CASCADE,
  skill_name TEXT NOT NULL,
  PRIMARY KEY (agent_id, skill_name)
);

-- Tasks
CREATE TABLE public.tasks (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  list_id UUID REFERENCES public.lists(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'TODO',
  priority TEXT DEFAULT 'Normal',
  assignee_user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
  assignee_agent_id UUID REFERENCES public.agents(id) ON DELETE SET NULL,
  due_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sites
CREATE TABLE public.sites (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  status TEXT DEFAULT 'online',
  uptime_percentage NUMERIC DEFAULT 100.0,
  last_check_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ssl_status TEXT,
  space_id UUID REFERENCES public.spaces(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agent Messages (DMs)
CREATE TABLE public.agent_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  agent_id UUID REFERENCES public.agents(id) ON DELETE CASCADE,
  sender_type TEXT CHECK (sender_type IN ('user', 'agent')),
  content TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Agent Audit Logs
CREATE TABLE public.agent_logs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  agent_id UUID REFERENCES public.agents(id) ON DELETE CASCADE,
  action_type TEXT NOT NULL,
  status TEXT DEFAULT 'success',
  duration_ms INTEGER,
  tokens_used INTEGER,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Docs
CREATE TABLE public.docs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  space_id UUID REFERENCES public.spaces(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  parent_id UUID REFERENCES public.docs(id) ON DELETE CASCADE,
  is_folder BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.spaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.docs ENABLE ROW LEVEL SECURITY;
