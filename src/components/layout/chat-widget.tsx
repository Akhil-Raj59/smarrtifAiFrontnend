import { MessageCircle } from "lucide-react";
import { useAppDispatch } from "@/store";
import { openComingSoonModal } from "@/store/slices/uiSlice";

export function ChatWidget() {
  const dispatch = useAppDispatch();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ask Chat Button */}
      <button
        onClick={() => dispatch(openComingSoonModal("AI Chatbot Assistant"))}
        className="w-14 h-14 rounded-full bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-hover)] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Ask Chat"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
