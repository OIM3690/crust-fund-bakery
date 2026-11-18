// The connection to the bakery's Supabase project, shared by every page that
// needs it. The publishable key is meant to be public: what keeps one customer
// from reading another's pre-orders is Row Level Security on the table.
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/+esm";

export const supabase = createClient(
  "https://zsjjzmkhevepdjnwndch.supabase.co",
  "sb_publishable_4Q1KO2S9NP7FmOQcYCPYHg_5ubPx8yX"
);
