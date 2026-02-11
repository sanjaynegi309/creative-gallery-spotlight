import { Availability } from "@/data/artists";

const config: Record<Availability, { label: string; dotClass: string }> = {
  available: { label: "Available", dotClass: "bg-green-500" },
  sold: { label: "Sold", dotClass: "bg-muted-foreground/50" },
  on_hold: { label: "On Hold", dotClass: "bg-yellow-500" },
};

const AvailabilityBadge = ({ status }: { status: Availability }) => {
  const { label, dotClass } = config[status];
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground">
      <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
      {label}
    </span>
  );
};

export default AvailabilityBadge;
