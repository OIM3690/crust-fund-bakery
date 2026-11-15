-- The pre-orders table and its rules (PRD section 11). Run it once in the
-- Supabase SQL Editor. A customer reads and adds only their own pre-orders;
-- a signed-out visitor gets nothing.

create table public.bakery_preorders (
  id          bigint generated always as identity primary key,
  user_id     uuid not null default auth.uid() references auth.users (id) on delete cascade,
  item        text not null check (char_length(item) between 1 and 60),
  quantity    int  not null check (quantity between 1 and 24),
  pickup_date date not null,
  created_at  timestamptz not null default now()
);

alter table public.bakery_preorders enable row level security;

-- Signed-out visitors get nothing, not even an empty result: the anon role has
-- no privilege on the table at all. Signed-in customers read and add rows, and
-- RLS narrows both to their own.
revoke all on public.bakery_preorders from anon;
revoke all on public.bakery_preorders from authenticated;
grant select, insert on public.bakery_preorders to authenticated;

create policy "Customers see their own pre-orders"
  on public.bakery_preorders for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Customers add pre-orders for themselves"
  on public.bakery_preorders for insert
  to authenticated
  with check ((select auth.uid()) = user_id);
