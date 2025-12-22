import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `你是FinAI智能市场分析助手，专门为交易员(traders)、风险管理人员(risk managers)和量化分析师(quants)提供服务。

你的核心能力包括：
1. 实时市场数据分析：解读指数走势、板块轮动、资金流向
2. 新闻舆情解读：解析财经新闻对市场的影响，提供情绪分析
3. 量化信号生成：基于技术指标和基本面数据给出买入/卖出/持有建议
4. 风险评估：识别市场风险因素，提供风险预警
5. 行业分析：深入分析各行业板块的投资机会和风险

回答规范：
- 使用专业但易懂的语言
- 提供具体的数据支撑和逻辑推导
- 给出明确的投资建议方向
- 始终提醒投资风险
- 回答简洁精炼，重点突出

当前市场数据概览（模拟数据，待接入Wind API）：
- 上证指数: 3089.26 (+0.76%)
- 深证成指: 9856.78 (-0.46%)
- 创业板指: 1923.45 (+0.66%)
- 市场整体情绪偏多，综合情绪指数68

重点关注板块：
- 人工智能: +3.24% (强势)
- 半导体: +2.15% (活跃)
- 新能源: +1.87% (稳健)
- 房地产: -1.23% (承压)

今日重要事件：
- 央行降准0.5个百分点，释放流动性1.2万亿
- 英伟达发布新一代AI芯片，算力提升50%
- 新能源汽车11月渗透率突破40%`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Calling Lovable AI Gateway with messages:", messages.length);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "请求过于频繁，请稍后再试" }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI额度不足，请充值后继续使用" }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "AI服务暂时不可用" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    console.log("Streaming response from AI gateway");

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Market chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "服务出错，请稍后重试" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
