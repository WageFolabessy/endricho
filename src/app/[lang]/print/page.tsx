import Image from "next/image";
import AutoPrint from "@/components/AutoPrint";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale } from "@/i18n/config";
import RichText from "../../components/RichText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default async function PrintCVPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const t = await getDictionary(params.lang);

  return (
    <div className="min-h-screen bg-white text-black">
      <AutoPrint />
      <main className="max-w-4xl mx-auto px-5 py-6 text-[13px] leading-snug">
        {/* Header */}
        <header className="text-center mb-6" style={{ breakInside: "avoid" }}>
          <div className="relative w-20 h-20 mx-auto mb-3">
            <Image
              src="/images/photo.JPG"
              alt={t.common.photoAlt}
              width={80}
              height={80}
              className="rounded-full object-cover w-20 h-20"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold mb-0.5">{t.common.name}</h1>
          <p className="text-[12.5px] text-gray-700">{t.common.role}</p>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 justify-center text-[12.5px] text-gray-700">
            <a href="mailto:richofolabessy@gmail.com" title="Email" className="underline">
              richofolabessy@gmail.com
            </a>
            <span className="text-gray-400">|</span>
            <a href="tel:+6285845214967" title="Telepon" className="underline">
              +62 858-4521-4967
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://maps.google.com/?q=Pontianak, Kalimantan Barat, Indonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              title={t.common.locationLabel}
            >
              Pontianak, Kalimantan Barat, Indonesia
            </a>
          </div>
          <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 justify-center text-[12.5px] text-gray-700">
            <a
              href="https://efolabessy.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
              title="Portfolio"
            >
              {t.common.portfolio}
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://github.com/WageFolabessy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 underline"
              title="GitHub"
            >
              {t.common.github}
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://linkedin.com/in/endricho-folabessy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
              title="LinkedIn"
            >
              {t.common.linkedin}
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://instagram.com/endrichofolabessy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 underline"
              title="Instagram"
            >
              {t.common.instagram}
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-4" style={{ breakInside: "avoid" }}>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
            {t.home.summaryTitle}
          </h2>
          <p className="text-gray-800 leading-snug">{t.home.summary}</p>
        </section>

        {/* Skills */}
        <section className="mb-4" style={{ breakInside: "avoid" }}>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
            {t.home.skillsTitle}
          </h2>
          <div className="space-y-0.5 text-gray-800">
            <p>
              <span className="font-semibold">{t.home.programmingLanguagesLabel}</span>{" "}
              {t.home.programmingLanguages}
            </p>
            <p>
              <span className="font-semibold">{t.home.databaseToolsLabel}</span>{" "}
              {t.home.databaseTools}
            </p>
            <p>
              <span className="font-semibold">{t.home.frameworkLabel}</span>{" "}
              {t.home.frameworks}
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-4" style={{ breakInside: "avoid" }}>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
            {t.home.workExpTitle}
          </h2>
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">{t.home.jobTitle} — {t.home.company}</h3>
              <span className="text-sm text-gray-700">{t.home.dates}</span>
            </div>
            <ul className="list-disc pl-5 mt-1.5 space-y-0.5 text-gray-800">
              <li><RichText html={t.home.bullet1} /></li>
              <li><RichText html={t.home.bullet2} /></li>
              <li><RichText html={t.home.bullet3} /></li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-2" style={{ breakInside: "avoid" }}>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
            {t.home.educationTitle}
          </h2>
          <div>
            <h3 className="text-lg font-semibold">
              {t.home.degree} — {t.home.institution}
            </h3>
            <p className="text-gray-800">{t.home.focus}</p>
            <p className="text-gray-800 mt-1">
              <span className="font-semibold">{t.home.gpaLabel}</span> {t.home.gpaValue}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export const dynamic = "error";
export const revalidate = false;