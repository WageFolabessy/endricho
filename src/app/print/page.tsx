"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function PrintCVPage() {
  useEffect(() => {
    const t = setTimeout(() => window.print(), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="max-w-4xl mx-auto px-5 py-6 text-[13px] leading-snug">
        {/* Header */}
        <header className="text-center mb-6" style={{ breakInside: "avoid" }}>
          <div className="relative w-20 h-20 mx-auto mb-3">
            <Image
              src="/images/photo.JPG"
              alt="Foto Endricho"
              width={80}
              height={80}
              className="rounded-full object-cover w-20 h-20"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold mb-0.5">Endricho</h1>
          <p className="text-[12.5px] text-gray-700">Full-Stack Developer</p>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 justify-center text-[12.5px] text-gray-700">
            <a
              href="mailto:richofolabessy@gmail.com"
              title="Email"
              className="underline"
            >
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
              title="Lokasi"
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
              Portofolio
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://github.com/WageFolabessy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 underline"
              title="GitHub"
            >
              Github
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://linkedin.com/in/endricho-folabessy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
              title="LinkedIn"
            >
              Linkedin
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://instagram.com/endrichofolabessy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 underline"
              title="LinkedIn"
            >
              Instagram
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-4" style={{ breakInside: "avoid" }}>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
            Ringkasan Profesional
          </h2>
          <p className="text-gray-800 leading-snug">
            Lulusan Teknik Informatika yang berfokus pada pengembangan
            full-stack dengan keahlian dalam membangun dan menerapkan aplikasi
            web yang kompleks menggunakan Laravel dan React. Berpengalaman dalam
            merancang arsitektur end-to-end, mulai dari pembuatan RESTful API
            dengan integrasi pembayaran (Midtrans) dan pencarian optimal
            (Elasticsearch), hingga membangun antarmuka pengguna yang interaktif
            dan responsif. Bersemangat untuk menerapkan keterampilan pemecahan
            masalah dan rekayasa perangkat lunak untuk menciptakan solusi yang
            efisien dan berdampak.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-4" style={{ breakInside: "avoid" }}>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
            Keahlian Teknis
          </h2>
          <div className="space-y-0.5 text-gray-800">
            <p>
              <span className="font-semibold">Bahasa Pemrograman:</span> PHP,
              JavaScript, TypeScript
            </p>
            <p>
              <span className="font-semibold">Framework:</span> Laravel, Next.js
            </p>
            <p>
              <span className="font-semibold">Database & Tools:</span> MySQL,
              Git, GitHub
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-4" style={{ breakInside: "avoid" }}>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
            Pengalaman Kerja
          </h2>
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold">
                Asisten Laboratorium Komputer — STMIK Pontianak
              </h3>
              <span className="text-sm text-gray-700">
                September 2021 - Agustus 2025
              </span>
            </div>
            <ul className="list-disc pl-5 mt-1.5 space-y-0.5 text-gray-800">
              <li>
                Mentorship & Dukungan Teknis: Membimbing dan memberikan dukungan
                teknis kepada lebih dari 50 mahasiswa dalam tugas pemrograman
                (PHP, Laravel, JavaScript), meningkatkan pemahaman dan
                keberhasilan penyelesaian tugas.
              </li>
              <li>
                Troubleshooting: Mengidentifikasi serta memperbaiki berbagai
                masalah coding dan bug, yang berdampak pada berkurangnya waktu
                pengerjaan dan peningkatan kualitas kode pada proyek akademik.
              </li>
              <li>
                Manajemen Operasional: Mengelola aspek teknis-operasional
                laboratorium untuk memastikan software dan hardware berfungsi
                optimal, mendukung lingkungan belajar produktif bagi ratusan
                mahasiswa.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-2" style={{ breakInside: "avoid" }}>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
            Pendidikan
          </h2>
          <div>
            <h3 className="text-lg font-semibold">
              Sarjana Komputer — STMIK Pontianak
            </h3>
            <p className="text-gray-800">
              Fokus pada pengembangan aplikasi web dan sistem informasi
            </p>
            <p className="text-gray-800 mt-1">
              <span className="font-semibold">IPK:</span> 3.41
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
