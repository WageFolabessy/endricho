import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/images/photo.JPG"
                alt="Foto Endricho"
                width={128}
                height={128}
                priority
                className="rounded-full object-cover w-32 h-32 ring-2 ring-blue-600 shadow-sm"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Endricho</h1>
            <p className="text-xl text-blue-600 mb-6">Full-Stack Developer</p>

            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-4">
              <a
                href="mailto:richofolabessy@gmail.com"
                className="hover:text-blue-600 transition-colors"
                title="Email"
              >
                richofolabessy@gmail.com
              </a>
              <a
                href="tel:+6285845214967"
                className="hover:text-blue-600 transition-colors"
                title="Telepon"
              >
                +6285845214967
              </a>
              <a
                href="https://maps.google.com/?q=Pontianak, Kalimantan Barat, Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                title="Lokasi"
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
                Portfolio
              </a>
              <a
                href="https://github.com/WageFolabessy"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/endricho-folabessy/"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/endrichofolabessy/"
                className="text-pink-600 hover:text-pink-800 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Single Column Layout */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Professional Summary */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              Ringkasan Profesional
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Lulusan Teknik Informatika yang berfokus pada pengembangan
              full-stack dengan keahlian dalam membangun dan menerapkan aplikasi
              web yang kompleks menggunakan Laravel dan React. Berpengalaman
              dalam merancang arsitektur end-to-end, mulai dari pembuatan
              RESTful API dengan integrasi pembayaran (Midtrans) dan pencarian
              optimal (Elasticsearch), hingga membangun antarmuka pengguna yang
              interaktif dan responsif. Bersemangat untuk menerapkan
              keterampilan pemecahan masalah dan rekayasa perangkat lunak untuk
              menciptakan solusi yang efisien dan berdampak.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              Keahlian Teknis
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Bahasa Pemrograman:
                </h3>
                <p className="text-gray-700">PHP, JavaScript, TypeScript</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Framework:</h3>
                <p className="text-gray-700">Laravel, Next.js</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Database & Tools:
                </h3>
                <p className="text-gray-700">MySQL, Git, GitHub</p>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              Pengalaman Kerja
            </h2>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Asisten Laboratorium Komputer
                  </h3>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded mt-1 sm:mt-0">
                    September 2021 - Agustus 2025
                  </span>
                </div>
                <p className="text-blue-600 font-medium mb-4">
                  STMIK Pontianak
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>
                      <strong>Mentorship & Dukungan Teknis:</strong> Secara
                      proaktif membimbing dan memberikan dukungan teknis kepada
                      lebih dari <strong>50 mahasiswa</strong> dalam tugas
                      pemrograman mereka, memperjelas konsep-konsep
                      dalam PHP, Laravel, dan JavaScript untuk meningkatkan
                      pemahaman dan penyelesaian tugas mereka.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>
                      <strong>Pemecahan Masalah:</strong>{" "}
                      Mengidentifikasi dan memecahkan berbagai masalah coding
                      dan bug yang dihadapi mahasiswa, yang secara efektif
                      mengurangi waktu pengerjaan dan meningkatkan kualitas kode
                      pada proyek-proyek akademik.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">•</span>
                    <span>
                      <strong>Manajemen Operasional Laboratorium:</strong>{" "}
                      Bertanggung jawab atas pengelolaan teknis dan operasional
                      laboratorium, memastikan semua perangkat lunak dan
                      perangkat keras berfungsi optimal untuk mendukung
                      lingkungan belajar yang produktif dan bebas hambatan bagi{" "}
                      <strong>ratusan mahasiswa</strong>.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
              Pendidikan
            </h2>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Sarjana Komputer
              </h3>
              <p className="text-blue-600 font-medium mb-2">STMIK Pontianak</p>
              <p className="text-gray-600">
                Fokus pada pengembangan aplikasi web dan
                sistem informasi
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-medium">IPK:</span> 3.41
              </p>
            </div>
          </section>

          {/* Download CV Section */}
          <section className="bg-blue-600 rounded-lg p-6 text-white text-center">
            <h3 className="text-lg font-semibold mb-4">Cetak CV</h3>
            <div className="mt-3">
              <a
                href="/print"
                target="_blank"
                className="inline-block bg-transparent border border-white/70 text-white px-6 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                🖨️ Cetak dari Browser
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-4">© 2025 Endricho. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://efolabessy.app/"
              className="hover:text-green-400 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="https://github.com/WageFolabessy"
              className="hover:text-gray-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/endricho-folabessy/"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/endrichofolabessy/"
              className="hover:text-red-400 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
