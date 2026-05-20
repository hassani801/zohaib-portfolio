import { DiamondBadgeIcon } from "./icons";
import { CRTText } from "./CRTText";

export function SectionBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand px-5 py-2">
      <DiamondBadgeIcon />
      <CRTText text={label} className="text-brand" />
    </div>
  );
}
