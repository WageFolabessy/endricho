import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale } from "@/i18n/config";
import RichText from "../components/RichText";
import JsonLd from "@/components/JsonLd";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const siteUrl = process.env.SITE_URL ?? "https://efolabessy.app";
  const pageUrl = `${siteUrl}/${lang}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: t.common.name,
          jobTitle: t.common.role,
          url: pageUrl,
          image: `${siteUrl}/images/photo.JPG`,
          sameAs: [
            "https://efolabessy.app/",
            "https://github.com/WageFolabessy",
            "https://linkedin.com/in/endricho-folabessy/",
            "https://instagram.com/endrichofolabessy/",
          ],
        }}
      />
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/images/photo.JPG"
                alt={t.common.photoAlt}
                width={128}
                height={128}
                priority
                className="rounded-full object-cover w-32 h-32 ring-2 ring-blue-600 shadow-sm"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {t.common.name}
            </h1>
            <p className="text-xl text-blue-600 mb-6">{t.common.role}</p>

            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-4">
              <a
                href="mailto:richofolabessy@gmail.com"
                className="hover:text-blue-600 transition-colors"
                title={t.common.emailLabel}
              >
                richofolabessy@gmail.com
              </a>
              <a
                href="tel:+6285845214967"
                className="hover:text-blue-600 transition-colors"
                title={t.common.phoneLabel}
              >
                +6285845214967
              </a>
              <a
                href="https://maps.google.com/?q=Pontianak, Kalimantan Barat, Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                title={t.common.locationLabel}
              >
                Pontianak, Kalimantan Barat, Indonesia
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href="https://efolabessy.app/"
                className="text-green-600 hover:text-green-800 transition-colors"
              >
                {t.common.portfolio}
              </a>
              <a
                href="https://github.com/WageFolabessy"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {t.common.github}
              </a>
              <a
                href="https://linkedin.com/in/endricho-folabessy/"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {t.common.linkedin}
              </a>
              <a
                href="https://instagram.com/endrichofolabessy/"
                className="text-pink-600 hover:text-pink-800 transition-colors"
              >
                {t.common.instagram}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Professional Summary */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              {t.home.summaryTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed">{t.home.summary}</p>
          </section>

          {/* Technical Skills */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              {t.home.skillsTitle}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {t.home.programmingLanguagesLabel}
                </h3>
                <p className="text-gray-700">{t.home.programmingLanguages}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {t.home.frameworkLabel}
                </h3>
                <p className="text-gray-700">{t.home.frameworks}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {t.home.databaseToolsLabel}
                </h3>
                <p className="text-gray-700">{t.home.databaseTools}</p>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              {t.home.workExpTitle}
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t.home.jobTitle}
                  </h3>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded mt-1 sm:mt-0">
                    {t.home.dates}
                  </span>
                </div>
                <p className="text-blue-600 font-medium mb-4">
                  {t.home.company}
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <RichText html={t.home.bullet1} />
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <RichText html={t.home.bullet2} />
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <RichText html={t.home.bullet3} />
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              {t.home.educationTitle}
            </h2>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {t.home.degree}
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                {t.home.institution}
              </p>
              <p className="text-gray-600">{t.home.focus}</p>
              <p className="text-gray-700 mt-2">
                <span className="font-medium">{t.home.gpaLabel}</span>{" "}
                {t.home.gpaValue}
              </p>
            </div>
          </section>

          {/* Print CV Section */}
          <section className="bg-blue-600 rounded-lg p-6 text-white text-center">
            <h3 className="text-lg font-semibold mb-4">
              {t.home.printSectionTitle}
            </h3>
            <div className="mt-3">
              <Link
                href={`/${lang}/print`}
                target="_blank"
                className="inline-block bg-transparent border border-white/70 text-white px-6 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                🖨️ {t.common.printFromBrowser}
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-4">{t.common.rights}</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://efolabessy.app/"
              className="hover:text-green-400 transition-colors"
            >
              {t.common.portfolio}
            </a>
            <a
              href="https://github.com/WageFolabessy"
              className="hover:text-gray-400 transition-colors"
            >
              {t.common.github}
            </a>
            <a
              href="https://linkedin.com/in/endricho-folabessy/"
              className="hover:text-blue-400 transition-colors"
            >
              {t.common.linkedin}
            </a>
            <a
              href="https://instagram.com/endrichofolabessy/"
              className="hover:text-red-400 transition-colors"
            >
              {t.common.instagram}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export const dynamic = "error";
export const revalidate = false;