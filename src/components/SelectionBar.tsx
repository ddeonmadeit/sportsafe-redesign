import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { clearSelection, toggleSelection, useSelection } from "@/lib/selection";

export function SelectionBar() {
  const selected = useSelection();
  const count = selected.length;

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed bottom-4 inset-x-0 z-[60] px-4 pointer-events-none"
        >
          <div
            className="mx-auto max-w-3xl rounded-2xl shadow-2xl flex items-center gap-3 p-3 pointer-events-auto"
            style={{
              background: "#020a18",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#e9eef0",
            }}
          >
            <div className="flex -space-x-2 pl-1 shrink-0">
              {selected.slice(0, 4).map((s) => (
                <div
                  key={s.id}
                  className="h-10 w-10 rounded-lg overflow-hidden ring-2"
                  style={{ background: "#fff", borderColor: "#020a18" }}
                  title={s.name}
                >
                  <img src={s.img} alt={s.name} className="h-full w-full object-contain" />
                </div>
              ))}
              {count > 4 && (
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  +{count - 4}
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold tracking-tight truncate">
                {count} mouthguard{count === 1 ? "" : "s"} selected
              </p>
              <p className="text-[11px] opacity-70 truncate">
                Tap any guard to deselect
              </p>
            </div>

            <button
              onClick={() => clearSelection()}
              className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-white/10 transition-colors shrink-0"
              aria-label="Clear selection"
            >
              <X className="h-4 w-4" />
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center rounded-full px-5 py-2.5 text-[12px] font-bold tracking-[0.18em] uppercase shrink-0"
              style={{ background: "#1ea4d6", color: "#ffffff" }}
            >
              Inquire
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function SelectableCard({
  item,
  children,
}: {
  item: { id: string; name: string; img: string };
  children: React.ReactNode;
}) {
  const selected = useSelection();
  const active = selected.some((s) => s.id === item.id);

  return (
    <button
      type="button"
      onClick={() => toggleSelection(item)}
      aria-pressed={active}
      className="group relative w-full text-left rounded-2xl transition-all duration-200"
      style={{
        outline: active ? "2px solid #1ea4d6" : "2px solid transparent",
        outlineOffset: 4,
      }}
    >
      {children}
      <span
        className="absolute top-2 right-2 h-6 w-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-all"
        style={{
          background: active ? "#1ea4d6" : "rgba(12,20,22,0.08)",
          color: active ? "#ffffff" : "transparent",
          transform: active ? "scale(1)" : "scale(0.85)",
          opacity: active ? 1 : 0,
        }}
        aria-hidden
      >
        ✓
      </span>
    </button>
  );
}
