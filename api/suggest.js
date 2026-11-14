// Help me choose: a customer describes the occasion, and the model suggests
// what to order from this week's menu. Vercel runs this file on its server,
// so the page calls it at /api/suggest and never sees the key.

const MENU = `Classic Butter Croissant $3.50
Cinnamon Roll $4.00
Sourdough Loaf $7.00
Blueberry Muffin $3.25
Everything Bagel w/ Cream Cheese $4.50
Drip Coffee $2.50
Cold Brew $3.75`;

export default {
  async fetch(request) {
    const { occasion } = await request.json();

    const response = await fetch("https://openrouter.ai/api/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-v4.1-flash-1017",
        max_output_tokens: 400,
        reasoning: { effort: "none" },
        instructions: "You help customers of Crust Fund Bakery, a small bakery near campus, "
          + "decide what to pre-order. Suggest items from this week's menu only, with a "
          + "quantity for each and the total price. Answer in at most four short lines. "
          + "If the occasion is not about food or drink, say you can only help with orders. "
          + "Never say anything about allergens; tell the customer to ask Emily at the counter. "
          + "This week's menu:\n" + MENU,
        input: String(occasion).slice(0, 200)
      })
    });

    const data = await response.json();
    return Response.json(data, { status: response.status });
  },
};
