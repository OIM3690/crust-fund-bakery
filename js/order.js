// Pre-orders for Crust Fund Bakery: sign in, add a pre-order, list your own.
import { supabase } from "./supabase.js";

const message = document.querySelector("#message");

// Show the signed-in or signed-out part of the page, then the customer's orders.
async function refresh() {
  const { data } = await supabase.auth.getSession();
  const session = data.session;
  document.querySelector("#signed-out").hidden = Boolean(session);
  document.querySelector("#signed-in").hidden = !session;
  if (session) {
    document.querySelector("#who").textContent = session.user.email;
    await loadOrders();
  }
}

async function loadOrders() {
  const { data, error } = await supabase
    .from("bakery_preorders")
    .select("item, quantity, pickup_date")
    .order("pickup_date");
  const list = document.querySelector("#orders");
  list.replaceChildren();
  if (error) {
    message.textContent = `Could not load your pre-orders: ${error.message}`;
    return;
  }
  if (data.length === 0) {
    list.innerHTML = "<li>No pre-orders yet.</li>";
    return;
  }
  for (const order of data) {
    const li = document.createElement("li");
    li.textContent = `${order.quantity} × ${order.item}, pickup ${order.pickup_date}`;
    list.append(li);
  }
}

document.querySelector("#auth-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  message.textContent = error ? error.message : "";
  await refresh();
});

document.querySelector("#sign-up").addEventListener("click", async () => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const { error } = await supabase.auth.signUp({ email, password });
  message.textContent = error ? error.message : "Account created. You are signed in.";
  await refresh();
});

document.querySelector("#sign-out").addEventListener("click", async () => {
  await supabase.auth.signOut();
  message.textContent = "";
  await refresh();
});

document.querySelector("#order-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  // No user_id here: the table fills it in from the signed-in customer.
  const { error } = await supabase.from("bakery_preorders").insert({
    item: document.querySelector("#item").value,
    quantity: Number(document.querySelector("#quantity").value),
    pickup_date: document.querySelector("#pickup-date").value
  });
  message.textContent = error ? `Could not pre-order: ${error.message}` : "Pre-order saved.";
  await loadOrders();
});

document.querySelector("#suggest-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const out = document.querySelector("#suggestion");
  out.textContent = "Thinking…";
  const response = await fetch("/api/suggest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ occasion: document.querySelector("#occasion").value })
  });
  // Only the vercel.app site runs the function; anywhere else this request fails.
  if (!response.ok) {
    out.textContent = "Suggestions are not available right now.";
    return;
  }
  const data = await response.json();
  const reply = data.output?.find(item => item.type === "message");
  out.textContent = reply ? reply.content[0].text : "No suggestion this time. Please try again.";
});

refresh();
