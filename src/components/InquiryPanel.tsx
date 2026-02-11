import { useState } from "react";
import { X } from "lucide-react";
import { Painting } from "@/data/artists";
import { useToast } from "@/hooks/use-toast";

interface InquiryPanelProps {
  open: boolean;
  onClose: () => void;
  painting?: Painting | null;
  artistName?: string;
  mode?: "inquiry" | "commission";
}

const InquiryPanel = ({ open, onClose, painting, artistName, mode = "inquiry" }: InquiryPanelProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const defaultMessage = mode === "commission"
    ? `I'd like to discuss a commission with ${artistName || "your studio"}.`
    : painting
      ? `I'm interested in "${painting.title}" by ${artistName}.`
      : "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inquiry Sent", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[300] bg-background/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[301] w-full max-w-md bg-card border-l border-border transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="font-display text-lg text-foreground">
            {mode === "commission" ? "Request Commission" : "Inquire"}
          </h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {painting && mode === "inquiry" && (
          <div className="flex items-center gap-4 p-6 border-b border-border">
            <img src={painting.image} alt={painting.title} className="w-16 h-16 object-cover rounded-sm" />
            <div>
              <p className="font-display text-sm text-foreground">{painting.title}</p>
              <p className="text-xs text-muted-foreground font-body">{artistName} · {painting.year}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
          <div>
            <label className="text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block font-body">Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary font-body"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block font-body">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary font-body"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block font-body">Phone <span className="normal-case">(optional)</span></label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary font-body"
              placeholder="+1 234 567 890"
            />
          </div>
          <div>
            <label className="text-xs tracking-wider uppercase text-muted-foreground mb-1.5 block font-body">Message</label>
            <textarea
              required
              rows={4}
              value={form.message || defaultMessage}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary font-body resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-body hover:bg-primary/90 transition-colors duration-300 rounded-sm mt-2"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </>
  );
};

export default InquiryPanel;
