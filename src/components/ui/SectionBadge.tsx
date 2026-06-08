"use client";

import { useState } from "react";
import { DiamondBadgeIcon } from "./icons";
import { CRTText } from "./CRTText";

export function SectionBadge({ label }: { label: string }) {
  const [key, setKey] = useState(0);

  return (
    <div
      onMouseEnter={() => setKey((prev) => prev + 1)}
      className="group inline-flex items-center gap-2 rounded-full border border-brand px-5 py-2 transition-all duration-300 hover:scale-[1.03] cursor-pointer overflow-hidden"
    >
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:rotate-12">
        <DiamondBadgeIcon />
      </div>

      <CRTText
        key={key}
        text={label}
        className="text-brand crt-play"
      />
    </div>
  );
}