import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini SDK
let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: Date.now() });
});

// AI Tutor endpoint
const tutorHandler = async (req: express.Request, res: express.Response) => {
  try {
    const { message, history, context } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Missing message" });
    }

    const ai = getAIClient();
    if (!ai) {
      // Graceful educational fallback response when API key is not configured
      return res.json({
        reply: "Chào em! Thầy/Cô AI Tutor Vật lý 9 đây. Hiện tại hệ thống đang chạy ở chế độ offline cơ bản. Để kích hoạt đầy đủ trí tuệ nhân tạo Gemini, vui lòng cấu hình GEMINI_API_KEY trong phần Settings. Tuy nhiên, em có thể tra cứu lý thuyết ở mục 'Bài học', làm 340 câu hỏi trắc nghiệm có giải thích chi tiết và thực hành 5 phòng Lab ảo ngay nhé!",
        isFallback: true
      });
    }

    const systemInstruction = `Bạn là "AI Tutor Vật Lý 9" - Trợ lý gia sư thông minh, tận tâm và thân thiện, chuyên hỗ trợ học sinh THCS lớp 9 học tập môn Khoa học tự nhiên 9 (Phân môn Vật lí) theo bộ sách "Kết nối tri thức với cuộc sống".

Quy tắc sư phạm cốt lõi:
1. KHÔNG đưa ngay đáp án trực tiếp cho học sinh nếu họ hỏi một câu hỏi trắc nghiệm hay bài tập.
2. Hãy GỢI Ý từng bước: nhắc lại hiện tượng, công thức liên quan (ví dụ: Wđ = 1/2 m v^2, Wt = mgh, Định luật Ohm I = U/R, Định luật khúc xạ n1 sin(i) = n2 sin(r)...), hướng dẫn học sinh suy luận để tự tìm ra đáp án.
3. Giải thích tại sao một phương án là sai nếu học sinh chọn nhầm.
4. Sử dụng ngôn ngữ tiếng Việt trong sáng, gần gũi, khích lệ, dùng các danh xưng như "thầy/cô và em" hoặc "chúng mình".
5. Bám sát 17 bài học chuẩn SGK KNTT Lớp 9.
${context ? `\nNgữ cảnh câu hỏi/bài học hiện tại của học sinh: ${JSON.stringify(context)}` : ""}`;

    const formattedContents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      for (const h of history) {
        if (h.role && h.text) {
          formattedContents.push({
            role: h.role === "assistant" ? "model" : "user",
            parts: [{ text: h.text }]
          });
        }
      }
    }

    formattedContents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Thầy chưa rõ ý em lắm, em có thể hỏi lại cụ thể hơn không?";
    return res.json({ reply, isFallback: false });
  } catch (error: any) {
    console.error("Gemini Tutor error:", error);
    return res.status(500).json({
      error: "Không thể kết nối đến AI Tutor lúc này. Vui lòng thử lại sau.",
      details: error?.message
    });
  }
};

app.post("/api/gemini/tutor", tutorHandler);
app.post("/api/chat", tutorHandler);

// Setup Vite or Static dist serving
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

start();
