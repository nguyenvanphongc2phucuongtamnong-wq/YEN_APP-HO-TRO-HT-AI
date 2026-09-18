import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, RefreshCw, Trash2, HelpCircle } from 'lucide-react';
import { playSound } from '../../utils/audio';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

const PRESET_QUESTIONS = [
  'Giải thích định luật Ohm và cách tính mạch nối tiếp/song song',
  'Làm sao phân biệt ảnh thật và ảnh ảo qua thấu kính hội tụ?',
  'Tại sao máy biến áp chỉ hoạt động với dòng xoay chiều mà không chạy với pin DC?',
  'Giải thích hiện tượng phản xạ toàn phần và điều kiện xảy ra',
  'Mẹo làm bài tập định luật Joule - Lenz không bị nhầm đơn vị',
];

interface AITutorViewProps {
  initialPrompt?: string;
}

export const AITutorView: React.FC<AITutorViewProps> = ({ initialPrompt }) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('vatly9_ai_chat');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return [
      {
        id: 'welcome_1',
        sender: 'ai',
        text: 'Xin chào em! Thầy là Trợ lý AI Gia sư Vật Lý 9 (KNTT). Thầy có thể giúp em giải thích mọi hiện tượng vật lý, hướng dẫn giải các bài tập khó, tóm tắt lý thuyết hay gợi ý các phương pháp ghi nhớ công thức. Em đang thắc mắc vấn đề gì nào?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];
  });

  const [inputVal, setInputVal] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('vatly9_ai_chat', JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle initial prompt if passed from question explanation
  useEffect(() => {
    if (initialPrompt && initialPrompt.trim()) {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query || isLoading) return;

    const userMsg: Message = {
      id: 'usr_' + Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsLoading(true);
    playSound('click');

    try {
      // Call /api/chat endpoint
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const reply = data.reply || 'Thầy xin lỗi, hiện tại hệ thống đang bận. Em thử gửi lại câu hỏi nhé!';

      const aiMsg: Message = {
        id: 'ai_' + Date.now(),
        sender: 'ai',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      playSound('correct');
    } catch (err) {
      // Fallback local educational response if backend offline
      const fallbackMsg: Message = {
        id: 'ai_' + Date.now(),
        sender: 'ai',
        text: `Thầy đã nhận được câu hỏi: "${query}". \n\nĐể giải bài này, em hãy nhớ lại các nguyên lý cốt lõi trong chương trình Vật Lý 9:\n1. Nắm chắc đại lượng và đơn vị đo chuẩn (SI).\n2. Viết công thức gốc rồi biến đổi đại số tìm ẩn số cần tính.\n3. Đối chiếu điều kiện thực tế (ví dụ: công suất không âm, hiệu suất < 100%).\n\n(Lưu ý: Nếu cần trợ giúp trực tiếp từ mô hình Gemini trực tuyến, hãy đảm bảo server backend đang hoạt động nhé!)`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    const resetList: Message[] = [
      {
        id: 'welcome_init',
        sender: 'ai',
        text: 'Đã làm mới cuộc trò chuyện. Em hãy đặt câu hỏi Vật Lý mới nhé!',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];
    setMessages(resetList);
    localStorage.setItem('vatly9_ai_chat', JSON.stringify(resetList));
    playSound('reset');
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-140px)] min-h-[550px] flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Tutor Header */}
      <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-sm font-bold text-slate-800">Thầy Giáo AI - Gia Sư Vật Lý 9</h2>
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            </div>
            <p className="text-xs text-slate-500">
              Sẵn sàng giải đáp lý thuyết, phương pháp giải bài tập SGK & SBT KNTT 24/7
            </p>
          </div>
        </div>

        <button
          onClick={handleClearChat}
          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-slate-100 rounded-xl transition-colors"
          title="Xóa lịch sử chat"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Preset Pills */}
      <div className="px-4 py-2 bg-slate-50/80 border-b border-slate-100 overflow-x-auto flex gap-2 no-scrollbar">
        {PRESET_QUESTIONS.map((pq, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(pq)}
            className="text-[11px] px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300 font-medium whitespace-nowrap transition-colors shadow-2xs"
          >
            {pq}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => {
          const isAI = msg.sender === 'ai';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 max-w-[85%] ${
                isAI ? 'mr-auto' : 'ml-auto flex-row-reverse'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                  isAI ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-white'
                }`}
              >
                {isAI ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>

              <div
                className={`p-3.5 rounded-2xl text-xs md:text-sm leading-relaxed whitespace-pre-wrap ${
                  isAI
                    ? 'bg-slate-100 text-slate-800 rounded-tl-xs shadow-2xs'
                    : 'bg-indigo-600 text-white rounded-tr-xs shadow-xs'
                }`}
              >
                {msg.text}
                <div
                  className={`text-[10px] mt-1.5 text-right font-medium opacity-60 ${
                    isAI ? 'text-slate-500' : 'text-indigo-200'
                  }`}
                >
                  {msg.time}
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-indigo-600 bg-indigo-50 p-3 rounded-2xl w-fit animate-pulse">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>Thầy giáo AI đang suy nghĩ và biên soạn câu trả lời...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="p-3 border-t border-slate-100 bg-white flex items-center gap-2"
      >
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Nhập câu hỏi hoặc bài tập Vật Lý cần thầy giải đáp..."
          className="flex-1 px-4 py-2.5 text-xs md:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
        />
        <button
          type="submit"
          disabled={!inputVal.trim() || isLoading}
          className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-colors shadow-xs"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
