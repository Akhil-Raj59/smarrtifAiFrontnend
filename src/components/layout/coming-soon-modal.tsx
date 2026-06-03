import { useAppDispatch, useAppSelector } from "@/store";
import { closeComingSoonModal } from "@/store/slices/uiSlice";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Sparkles, Hourglass, ArrowRight } from "lucide-react";

export function ComingSoonModal() {
  const dispatch = useAppDispatch();
  const { isComingSoonOpen, comingSoonFeature } = useAppSelector((state) => state.ui);

  const handleClose = () => {
    dispatch(closeComingSoonModal());
  };

  return (
    <Dialog open={isComingSoonOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md rounded-3xl p-6 bg-white border border-gray-100 shadow-2xl flex flex-col items-center text-center animate-fade-in">
        {/* Animated Icon Container */}
        <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-red-100 text-[var(--brand-orange)] mb-4 shadow-inner">
          <Hourglass className="h-8 w-8 animate-spin" style={{ animationDuration: '3s' }} />
          <Sparkles className="absolute -top-1 -right-1 h-5 w-5 text-amber-500 animate-pulse" />
        </div>

        <DialogHeader className="flex flex-col items-center">
          <DialogTitle className="text-2xl font-black text-gray-900 tracking-tight">
            Feature Coming Soon!
          </DialogTitle>
          <span className="mt-1.5 px-3 py-1 bg-orange-50 text-[var(--brand-orange)] text-[10px] font-extrabold uppercase rounded-full tracking-wider border border-orange-100 shadow-2xs">
            {comingSoonFeature || "Interactive Module"}
          </span>
          <DialogDescription className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
            We are polishing the final details of this experience to bring you a world-class, production-grade AI learning tool. Thank you for your patience!
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="w-full mt-6">
          <button
            onClick={handleClose}
            className="w-full py-3 px-4 rounded-xl text-white font-bold bg-gradient-to-r from-orange-400 to-rose-500 hover:opacity-95 hover:shadow-md transition-all text-xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            Acknowledge
            <ArrowRight className="h-4 w-4" />
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
