"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, Locale } from "@/i18n/config";

function switchPath(pathname: string, target: Locale) {
  const parts = pathname.split("/");
  // Ensure leading slash => parts[0] === ""
  if (locales.includes(parts[1] as Locale)) {
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  }
  return `/${target}${pathname}`;
}

export default function LocaleSwitcher() {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-2 rounded border bg-white/90 px-2 py-1 shadow-sm">
      {locales.map((lc) => (
        <Link
          key={lc}
          href={switchPath(pathname, lc as Locale)}
          className="text-xs font-medium hover:underline"
          prefetch={false}
        >
          {lc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}