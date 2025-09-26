"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, Locale } from "@/i18n/config";

function switchPath(pathname: string, target: Locale) {
  const parts = pathname.split("/");
  if (locales.includes(parts[1] as Locale)) {
    parts[1] = target;
    if (parts[2]) {
      if (target === "id" && parts[2] === "portfolio") parts[2] = "portofolio";
      if (target === "en" && parts[2] === "portofolio") parts[2] = "portfolio";
    }
    let nextPath = parts.join("/") || `/${target}`;
    if (nextPath !== `/${target}` && nextPath.endsWith("/")) {
      nextPath = nextPath.replace(/\/+$/, "");
    }
    return nextPath;
  }
  let nextPath = `/${target}${pathname}`;
  if (nextPath !== `/${target}` && nextPath.endsWith("/")) {
    nextPath = nextPath.replace(/\/+$/, "");
  }
  return nextPath;
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