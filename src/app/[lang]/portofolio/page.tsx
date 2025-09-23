import Link from "next/link";
import { projects } from "@/data/projects";
import { Locale } from "@/i18n/config";

type Params = Promise<{ lang: Locale }>;

function findByIdTitle(idTitle: string) {
  const p = projects.find((p) => p.title.id === idTitle);
  if (!p) throw new Error(`Project not found: ${idTitle}`);
  return p;
}

export default async function PortfolioIDPage({ params }: { params: Params }) {
  await params; // lang is not needed here (static copy only)
  const admin = findByIdTitle("Toko Online Admin Panel");
  const user = findByIdTitle("Toko Online");
  const church = findByIdTitle("Sistem Informasi Gereja");
  const library = findByIdTitle("Sistem Informasi Perpustakaan");

  const LinkGroup = ({ demos, repos }: { demos: string[]; repos: string[] }) => (
    <div className="flex flex-wrap gap-3 text-sm">
      {demos.map((d) => (
        <a key={d} href={d} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Demo
        </a>
      ))}
      {repos.map((r) => (
        <a key={r} href={r} target="_blank" rel="noopener noreferrer" className="text-gray-800 underline">
          Repository
        </a>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Portofolio</h1>
          <p className="text-gray-900">
            Tujuan Utama: Meyakinkan perekrut dan manajer teknis bahwa saya adalah kandidat yang tepat dengan membuktikan keahlian melalui studi kasus proyek nyata. Desain minimalis, bersih, dan profesional agar fokus tetap pada substansi teknis.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* User Frontend */}
        <article className="bg-white rounded-lg p-6 shadow-sm text-gray-900">
          <h2 className="text-2xl font-semibold mb-1">{user.title.id}</h2>
          <LinkGroup demos={user.demos} repos={user.repos} />

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Deskripsi</h3>
            <p className="leading-relaxed">
              Membangun frontend e-commerce yang cepat, responsif, dan aman agar pelanggan dapat menjelajah katalog, mengelola keranjang, checkout, membayar via Midtrans, serta memantau pesanan melalui dasbor. Solusi harus terintegrasi mulus dengan backend Laravel.
            </p>
            <p className="leading-relaxed">
              Fokus pada UX mobile-first, alur pembayaran yang andal, dan proteksi halaman sensitif (checkout/dasbor) dengan manajemen sesi yang jelas.
            </p>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Tumpukan Teknologi</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>React 18 + Vite — SPA komponen, HMR cepat, build efisien.</li>
              <li>React Router DOM v7 — routing katalog/detail/keranjang/checkout/dashboard.</li>
              <li>React Context API — state global (auth/keranjang/notifikasi) tanpa kompleksitas Redux.</li>
              <li>Tailwind CSS — styling responsif dan efisien.</li>
              <li>Fetch API — wrapper sederhana untuk header/auth/error handling.</li>
              <li>Midtrans Snap — alur client-token aman, integrasi mudah.</li>
            </ul>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Tantangan & Solusi</h3>
            <h4 className="font-medium">1) Integrasi Midtrans Snap di SPA React</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dynamic script loading dengan cleanup untuk mencegah multiple injection.</li>
              <li>Token transaksi dibuat di server; frontend hanya memanggil window.snap.pay(token).</li>
              <li>Callback success/pending/error memperbarui status ke backend, menampilkan toast, mengosongkan keranjang, dan redirect.</li>
              <li>Idempotensi: order reference unik; cegah double-click via state “processing”.</li>
            </ul>
            <h4 className="font-medium">2) Proteksi Rute, Manajemen Sesi, Auto-Logout</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>PrivateRoute/GuestRoute berdasarkan AppContext.</li>
              <li>Validasi exp token pada mount/navigasi; auto-logout terarah bila invalid.</li>
              <li>Persistensi terukur (token minimal & keranjang) + sinkronisasi pasca login.</li>
              <li>UX aman: loading saat verifikasi sesi, tombol aksi dinonaktifkan saat sesi tidak valid.</li>
            </ul>
            <h3 className="text-lg font-semibold">Hasil</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pengalaman belanja cepat dan konsisten di mobile.</li>
              <li>Pembayaran Midtrans andal; callback tertangani rapi.</li>
              <li>Sesi terproteksi otomatis; kepercayaan pengguna meningkat.</li>
            </ul>
          </section>
        </article>

        {/* Admin Panel */}
        <article className="bg-white rounded-lg p-6 shadow-sm text-gray-900">
          <h2 className="text-2xl font-semibold mb-1">{admin.title.id}</h2>
          <LinkGroup demos={admin.demos} repos={admin.repos} />

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Deskripsi</h3>
            <p className="leading-relaxed">
              Membangun dashboard admin e-commerce yang cepat, responsif, dan mudah dioperasikan untuk mengelola produk, kategori, pesanan, pengiriman, pembayaran, pengguna, dan admin. Masalah utama yang dipecahkan adalah sentralisasi operasional toko dalam satu antarmuka yang aman dan efisien, terintegrasi mulus dengan backend Laravel + Sanctum untuk autentikasi dan manajemen data.
            </p>
            <p className="leading-relaxed">
              Cakupan: ringkasan metrik, CRUD produk/kategori (unggah gambar, rich text), kelola pesanan & pengiriman, monitoring pembayaran, manajemen pengguna/admin, profil admin, serta ekspor laporan penjualan ke PDF.
            </p>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Tumpukan Teknologi</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>React 18 + Vite — SPA komponen, HMR cepat, build efisien.</li>
              <li>React Router DOM — routing sisi-klien, protected routes untuk area admin.</li>
              <li>Tailwind CSS — utility-first, konsisten dan responsif.</li>
              <li>react-data-table-component — tabel siap pakai (sorting/pagination) yang fleksibel.</li>
              <li>ESLint + plugin React/Tailwind + PostCSS/Autoprefixer — kualitas kode dan kompatibilitas.</li>
            </ul>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Tantangan & Solusi</h3>
            <h4 className="font-medium">1) Autentikasi Admin + Protected Routes (Sanctum, CSRF, Expired Token)</h4>
            <p className="font-medium">Masalah:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Integrasi React (Vite) dengan Laravel Sanctum butuh kredensial, CSRF, CORS yang benar.</li>
              <li>Token kedaluwarsa membuat sesi “terlihat” aktif di UI, tetapi server menolak (401).</li>
            </ul>
            <p className="font-medium">Pendekatan & Solusi:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Konfigurasi terpusat: baseURL, header default, withCredentials (cookie/CSRF).</li>
              <li>Interceptors: request (suntik token/header), response (tangkap 401/419 untuk auto-logout dan redirect).</li>
              <li>Protected routes: wrapper memeriksa state auth (token/role) sebelum render.</li>
            </ul>
            <h3 className="text-lg font-semibold">Hasil</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Alur login/logout lebih andal dan aman.</li>
              <li>Hilangnya “sesi palsu” di UI; error operasional turun, UX meningkat.</li>
            </ul>
          </section>
        </article>

        {/* Church IS */}
        <article className="bg-white rounded-lg p-6 shadow-sm text-gray-900">
          <h2 className="text-2xl font-semibold mb-1">{church.title.id}</h2>
          <LinkGroup demos={church.demos} repos={church.repos} />

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Deskripsi</h3>
            <p className="leading-relaxed">
              Menyediakan portal gereja yang memudahkan jemaat mengakses renungan, jadwal ibadah, warta (PDF), tata ibadah (PDF), dan informasi gereja, sekaligus panel admin yang efisien saat data bertambah.
            </p>
            <p className="leading-relaxed">
              Kebutuhan khusus: aksesibilitas (Text‑to‑Speech, navigasi suara) dan chat real-time jemaat–admin dengan pembedaan alur guest vs login yang aman.
            </p>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Tumpukan Teknologi</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Laravel 12, Eloquent ORM, Multi-Guard, Storage (public), Broadcasting (Pusher), MySQL.</li>
              <li>Blade, Bootstrap 5.3, jQuery + DataTables, Summernote, SweetAlert2, Web Speech API, Vite, Laravel Echo + Pusher.</li>
            </ul>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Tantangan & Solusi</h3>
            <h4 className="font-medium">1) Chat Real-time (Guest vs Jemaat Login)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Broadcasting Laravel + Pusher (MessageSent, MessagesMarkedAsRead).</li>
              <li>Channel authorization per guard; guest akses terbatas, jemaat di private channel.</li>
              <li>Laravel Echo subscribe channel; update UI on-event; penyimpanan dibedakan (guest tidak persist).</li>
              <li>Idempoten untuk penandaan “terbaca”.</li>
            </ul>
            <h4 className="font-medium">2) Performa Tabel Admin saat Skala Data</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Server-side processing (Yajra DataTables) + validasi parameter.</li>
              <li>Eager loading untuk hindari N+1; indeks DB untuk kolom sering difilter.</li>
              <li>UX responsif dengan loading/feedback.</li>
            </ul>
            <h3 className="text-lg font-semibold">Hasil</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Aksesibilitas meningkat (TTS, voice nav).</li>
              <li>Panel admin efisien; error input berkurang.</li>
              <li>Chat real-time meningkatkan kedekatan tanpa overhead besar.</li>
            </ul>
          </section>
        </article>

        {/* Library IS */}
        <article className="bg-white rounded-lg p-6 shadow-sm text-gray-900">
          <h2 className="text-2xl font-semibold mb-1">{library.title.id}</h2>
          <LinkGroup demos={library.demos} repos={library.repos} />

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Deskripsi</h3>
            <p className="leading-relaxed">
              Digitalisasi proses perpustakaan sekolah untuk katalog, booking, peminjaman/pengembalian, dan denda—mengurangi error pencatatan manual serta mempercepat operasional.
            </p>
            <p className="leading-relaxed">
              Tujuan: visibilitas status buku bagi siswa (ketersediaan, peminjaman aktif, lewat tempo, denda) dan panel admin lengkap dengan laporan terstruktur serta ekspor Excel dan notifikasi pengingat.
            </p>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Tumpukan Teknologi</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Laravel 12 (guard multi-peran, keamanan, ORM relasional).</li>
              <li>Blade + Bootstrap 5 + Icons; Tailwind CSS 4 untuk styling granular.</li>
              <li>jQuery + Axios; Vite + laravel-vite-plugin.</li>
              <li>FCM (kreait/laravel-firebase) untuk push notification; Ekspor Excel (maatwebsite/excel).</li>
              <li>Tooling: PHPUnit, Faker, Pint, Sail, Pail.</li>
            </ul>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Tantangan & Solusi</h3>
            <h4 className="font-medium">1) Validasi multi-form eksemplar buku</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Named Error Bags per aksi/form; key dinamis (mis. <code>updateCopy_{"{"}id{"}"}</code>).
              </li>
              <li>UX jelas; perubahan satu eksemplar tidak mengganggu lainnya.</li>
            </ul>
            <h4 className="font-medium">2) Filter rentang tanggal + ekspor Excel</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Validasi start_date ≤ end_date; query whereBetween + eager loading.</li>
              <li>Ekspor via maatwebsite/excel; kolom dan format konsisten.</li>
            </ul>
            <h4 className="font-medium">3) Integrasi push notification (FCM)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Inisialisasi Firebase, izin, ambil token, simpan ke route user.fcm-token.store.</li>
              <li>Token terkait user; mekanisme refresh; kirim via Kreait server-side.</li>
            </ul>
            <h3 className="text-lg font-semibold">Hasil</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Komunikasi proaktif ke siswa tanpa polling.</li>
              <li>Peningkatan keterlibatan dan kepatuhan pengembalian buku.</li>
            </ul>
          </section>
        </article>

        <div className="text-center">
          <Link href="/id" className="text-blue-600 underline">Kembali ke Beranda</Link>
        </div>
      </main>
    </div>
  );
}

export const dynamic = "error";
export const revalidate = false;