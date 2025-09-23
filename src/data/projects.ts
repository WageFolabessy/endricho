export type Project = {
  title: { id: string; en: string };
  demos: string[];
  repos: string[];
};

export const projects: Project[] = [
  {
    title: { id: "Toko Online", en: "Online Clothing Shop (User)" },
    demos: ["https://ocs.efolabessy.app/"],
    repos: ["https://github.com/WageFolabessy/toko-online-as-denim-site-user"],
  },
  {
    title: { id: "Toko Online Admin Panel", en: "Online Clothing Shop Admin Panel" },
    demos: ["https://admin.ocs.efolabessy.app/"],
    repos: ["https://github.com/WageFolabessy/toko-online-as-denim-admin-user"],
  },
  {
    title: { id: "Sistem Informasi Gereja", en: "Church Information System" },
    demos: ["https://cis.efolabessy.app/"],
    repos: ["https://github.com/WageFolabessy/gpib_siloam_pontianak"],
  },
  {
    title: { id: "Sistem Informasi Perpustakaan", en: "Library Information System" },
    demos: ["https://lis.efolabessy.app/"],
    repos: ["https://github.com/WageFolabessy/sistem-informasi-perpustakaan"],
  },
];

// =============================================================================================
// Toko Online Admin Panel
// =============================================================================================

// 1) Judul & Pernyataan Masalah
// Tujuan proyek ini adalah membangun dashboard admin e-commerce yang cepat, responsif, dan mudah dioperasikan untuk mengelola produk, kategori, pesanan, pengiriman, pembayaran, pengguna, admin, serta membuat laporan penjualan dalam format PDF. Masalah utama yang saya pecahkan: sentralisasi operasional toko dalam satu antarmuka yang aman, ramah admin, dan efisien, sekaligus memastikan integrasi yang mulus dengan backend (Laravel + Sanctum) untuk autentikasi dan manajemen data.

// Cakupan fitur inti mencakup: ringkasan metrik di dashboard, CRUD produk/kategori (dengan upload gambar dan rich text), pengelolaan pesanan & pengiriman, monitoring pembayaran, manajemen pengguna & admin, profil admin, serta ekspor laporan ke PDF.

// 2) Tumpukan Teknologi & Alasan Pemilihan
// React 18
// Alasan: Komponen deklaratif dan ekosistem matang, memudahkan membangun UI kompleks (dashboard, form, tabel) dengan performa baik.

// Vite 
// Alasan: HMR sangat cepat dan konfigurasi minimalis, mempercepat iterasi pengembangan.

// React Router DOM
// Alasan: Routing sisi-klien yang sederhana, mendukung protected routes untuk area admin.

// Tailwind CSS
// Alasan: Utility-first CSS mempercepat styling yang konsisten dan responsif tanpa menulis CSS bertele-tele.

// react-data-table-component
// Alasan: Komponen tabel siap pakai (sorting, pagination) yang dapat dikustomisasi untuk data operasional yang besar.

// ESLint + plugin React, Tailwind, PostCSS/Autoprefixer
// Alasan: Menjaga kualitas kode, konsistensi gaya, serta kompatibilitas CSS lintas browser.

// 3) Tantangan & Solusi

// Tantangan 1 — Autentikasi Admin + Protected Routes (Sanctum, CSRF, dan Expired Token)

// Masalah:
// Integrasi React (Vite) dengan backend Laravel Sanctum membutuhkan pengaturan kredensial, CSRF, dan CORS yang benar.
// Token kedaluwarsa menyebabkan sesi “terlihat” aktif di UI, padahal server sudah menolak (401), menimbulkan inkonsistensi pengalaman pengguna.

// Pendekatan & Solusi:
// Menetapkan konfigurasi terpusat: baseURL dari VITE_API_BASE_URL, header default, dan withCredentials bila menggunakan cookie/CSRF.
// Menambahkan interceptor:
// Request: injeksikan token/headers yang diperlukan.
// Response: tangkap status 401/419 untuk memicu auto-logout, membersihkan state auth di Context, lalu redirect ke halaman login.
// Protected routes di React Router:
// Wrapper komponen yang memeriksa state auth (mis. token/role) sebelum merender halaman admin; jika tidak memenuhi, redirect ke login.

// Dampak:
// Alur login/logout lebih andal dan aman.
// Admin tidak lagi “terjebak” pada sesi UI kadaluarsa; tingkat error operasional berkurang dan UX meningkat.laman, utils untuk fungsi umum—memudahkan perawatan dan skalabilitas.

// =============================================================================================
// Online Clothing Shop (User)
// =============================================================================================

// Judul & Pernyataan Masalah
// Tujuan proyek ini adalah membangun frontend e-commerce yang cepat, responsif, dan aman untuk pelanggan agar dapat menjelajah katalog, mengelola keranjang, melakukan checkout, membayar melalui Midtrans, serta memantau pesanan melalui dasbor. Solusinya harus terintegrasi mulus dengan backend Laravel yang sudah ada, meminimalkan ketergantungan, dan menjaga pengalaman pengguna tetap lancar di perangkat mobile.

// Tumpukan Teknologi & Alasan
// - React 18 + Vite
//   - Alasan: SPA dengan React memudahkan komposisi UI berbasis komponen dan pengelolaan state. Vite memberikan HMR super-cepat, build yang efisien, dan konfigurasi ringan—penting untuk iterasi cepat dan waktu muat singkat di produksi.

// - React Router DOM (v7)
//   - Alasan: Routing client-side untuk halaman katalog, detail produk, keranjang, checkout, dan dasbor. Mendukung protected routes dan kontrol akses yang jelas.

// - React Context API
//   - Alasan: Skala aplikasi ini cocok memakai Context (dibanding Redux) untuk state global seperti autentikasi, keranjang, dan notifikasi, sehingga mengurangi kompleksitas dan dependensi.

// - Tailwind CSS
//   - Alasan: Utility-first CSS mempercepat styling responsif, konsisten, dan menjaga ukuran bundle efisien tanpa CSS berlebih.

// - HTTP Client: Fetch API
//   - Alasan: Menghindari dependensi tambahan, cukup dengan wrapper util sederhana untuk header, auth, dan error handling.

// - Integrasi Pembayaran: Midtrans Snap
//   - Alasan: Gateway populer di Indonesia dengan dokumentasi baik dan alur client-token yang aman; mudah diintegrasikan di frontend React.


// Tantangan & Solusi
// 1) Integrasi Midtrans Snap di SPA React
// - Tantangan:
//   - Memuat skrip Snap dinamis di lingkungan SPA agar tidak crash pada navigasi ulang.
//   - Menjaga keamanan: hanya client key di frontend, sementara pembuatan transaction token harus dilakukan di server (Laravel).
//   - Menangani callback status transaksi (success/pending/error) dan menjaga idempotensi agar pesanan tidak tercatat ganda.
// - Solusi:
//   - Dynamic script loading: pada saat checkout, saya memuat skrip Snap via useEffect dan membersihkannya saat unmount untuk mencegah multiple injection.
//   - Alur aman: frontend meminta transaction token ke endpoint Laravel yang tervalidasi; frontend hanya memanggil window.snap.pay(token).
//   - Callback terstruktur: pada onSuccess/onPending/onError, saya:
//     - Memperbarui status pesanan di backend (endpoint khusus konfirmasi) agar tercatat resmi.
//     - Menampilkan toast untuk feedback instan.
//     - Mengosongkan keranjang dan melakukan redirect yang tepat (riwayat pesanan/detail pesanan).
//   - Idempotensi: menambahkan order reference unik dari server dan melakukan pengecekan di backend jika callback datang berulang; di frontend mencegah double-click dengan disabling tombol dan state “processing”.

// 2) Proteksi Rute, Manajemen Sesi, dan Auto-Logout
// - Tantangan:
//   - Menjaga halaman sensitif (Checkout, Dashboard, Orders) hanya untuk user terautentikasi.
//   - Menangani token kedaluwarsa agar user otomatis logout dengan pengalaman yang jelas dan aman.
//   - Persistensi state agar refresh halaman tidak menghilangkan status login/keranjang.
// - Solusi:
//   - PrivateRoute dan GuestRoute: komponen guard yang membaca state auth dari AppContext; jika belum login, redirect ke Login; jika sudah login, cegah akses ke halaman Guest (mis. login).
//   - Validasi token: menyimpan metadata sesi (mis. exp) dan melakukan pengecekan saat mount/navigasi. Jika exp lewat atau refresh token gagal, saya clear state, hapus storage, tampilkan toast, lalu redirect ke Login.
//   - Persistensi terukur: simpan subset state (token minimal dan keranjang) di localStorage dengan namespace; sinkronkan kembali keranjang ke backend setelah login untuk konsistensi lintas perangkat.
//   - UX aman: indikator loading saat verifikasi sesi, sehingga tidak ada “flicker” halaman sebelum redirect; tombol aksi dinonaktifkan ketika sesi tidak valid.

// Hasil
// - Pengalaman belanja yang cepat, responsif, dan konsisten di mobile.
// - Alur pembayaran Midtrans yang aman dan dapat diandalkan, dengan callback tertangani rapi.
// - Navigasi yang terproteksi dengan sesi yang dikelola otomatis, mengurangi error pengguna dan meningkatkan kepercayaan.

// =============================================================================================
// Sistem Informasi Gereja
// =============================================================================================

// Judul & Pernyataan Masalah
// - Judul: Sistem Informasi Gereja
// - Pernyataan Masalah:
//   - Jemaat membutuhkan akses mudah ke renungan, jadwal ibadah, warta jemaat (PDF), tata ibadah (PDF), dan informasi gereja.
//   - Admin gereja membutuhkan panel yang efisien untuk mengelola konten dengan performa baik meskipun data bertambah.
//   - Aksesibilitas perlu ditingkatkan agar konten dapat diakses lewat Text-to-Speech dan navigasi suara.
//   - Komunikasi dua arah (chat) antara jemaat dan admin perlu berjalan real-time, dengan pembeda pengalaman tamu (guest) vs jemaat login.

// Tumpukan Teknologi & Alasan
// - Backend
//   - PHP 8.2 + Laravel 12
//     - Framework matang dengan ekosistem lengkap (auth, validation, storage, queue, broadcasting).
//     - Arsitektur MVC memudahkan pemisahan concerns dan maintainability.
//   - Eloquent ORM
//     - Query expressive dan relasi yang jelas; cepat untuk iterasi fitur CRUD.
//   - Multi-Guard (web untuk jemaat, admin_users untuk admin)
//     - Memisahkan autentikasi dan otorisasi sehingga kebijakan akses lebih aman dan mudah dikelola.
//   - Yajra DataTables (server-side processing)
//     - Menangani tabel data dengan pencarian, sortir, dan pagination efisien di server.
//   - Storage (disk public)
//     - Penanganan berkas terstandar untuk upload PDF (warta, tata ibadah) dan gambar thumbnail.
//   - Broadcasting (Pusher)
//     - Mengirim event real-time (MessageSent, MessagesMarkedAsRead) untuk chat dan notifikasi tanpa membangun infrastruktur websocket sendiri.
//   - Database
//     - Pengembangan memanfaatkan  MySQL

// - Frontend
//   - Blade Template
//     - Rendering sisi server yang sederhana dan cepat, cocok dengan Laravel.
//   - Bootstrap 5.3 + Font Awesome
//     - UI responsif cepat dibangun dengan komponen siap pakai.
//   - jQuery 3.7 + DataTables
//     - Interaksi AJAX, manipulasi DOM, dan tabel kaya fitur dengan integrasi Yajra di backend.
//   - Summernote (WYSIWYG)
//     - Memudahkan admin menyusun renungan dan konten dengan format yang rapi.
//   - SweetAlert2
//     - Umpan balik UI (konfirmasi, alert) yang konsisten.
//   - Web Speech API (SpeechSynthesis & SpeechRecognition)
//     - Aksesibilitas: TTS untuk membaca konten penting dan navigasi suara sederhana.
//   - Vite
//     - Bundling aset modern untuk waktu build lebih cepat dan HMR.
//   - Laravel Echo + Pusher (JS)
//     - Mendengarkan event real-time di browser untuk chat, notifikasi, dan status terbaca.

// Tantangan & Solusi
// 1) Chat Real-time dengan Pembeda Guest vs Jemaat Login
// - Tantangan:
//   - Menyediakan live chat yang:
//     - Mengizinkan tamu mengirim pesan template tanpa menyimpan riwayat.
//     - Menyimpan riwayat dan status “terbaca” untuk jemaat yang login.
//   - Mengamankan channel real-time (private/presence) agar hanya pengguna berhak yang bisa berlangganan.
//   - Sinkronisasi status terbaca lintas klien dan admin secara real-time.
// - Solusi:
//   - Laravel Broadcasting + Pusher untuk event MessageSent dan MessagesMarkedAsRead.
//   - Channel authorization di Laravel (Private/Presence Channel) yang memeriksa guard terkait: guest hanya akses endpoint publik terbatas; jemaat login mendapatkan channel privat berbasis user ID atau room ID.
//   - Laravel Echo di frontend untuk subscribe ke channel yang sesuai dan meng-update UI ketika event datang (pesan baru, penandaan terbaca).
//   - Pemisahan alur penyimpanan:
//     - Guest: hanya kirim pesan template, tidak di-persist (stateless/ephemeral).
//     - Jemaat: pesan disimpan via Eloquent; event broadcast setelah commit sukses.
//   - Idempoten untuk penandaan “terbaca” (misalnya menggunakan timestamp/flag per pesan) dan mem-broadcast update agar semua klien melihat status terbaru.

// 2) Performa Tabel Admin (Renungan, Jadwal, Arsip PDF) pada Skala Data yang Bertambah
// - Tantangan:
//   - Data CRUD admin (renungan, jadwal, warta, tata ibadah, pendeta, jemaat) perlu pencarian dan sortir cepat saat jumlah data tumbuh.
//   - Client-side DataTables akan lambat jika data besar, dan filtering bisa berat di browser.
// - Solusi:
//   - Server-side processing dengan Yajra DataTables:
//     - Query di server (Eloquent/Query Builder), hanya mengirim page data yang diperlukan ke client.
//     - Mapping kolom yang dapat di-sort dan di-search untuk mencegah query tidak aman.
//     - Eager loading relasi yang diperlukan untuk menghindari N+1.
//     - Validasi parameter request DataTables (order, search, length, start) agar aman dan konsisten.
//   - Indeks database pada kolom yang sering difilter/diurut (mis. created_at, title) untuk mempercepat query.
//   - Notifikasi AJAX dan loading state agar UX tetap responsif selama proses.

// Catatan Dampak
// - Aksesibilitas meningkat lewat TTS dan navigasi suara, membantu jemaat lansia atau disabilitas penglihatan.
// - Panel admin yang efisien mengurangi waktu operasional dan kesalahan input.
// - Chat real-time meningkatkan kedekatan jemaat–admin tanpa membebani server berkat arsitektur event-driven.

// =============================================================================================
// Sistem Informasi Perpustakaan
// =============================================================================================

// 1) Judul & Pernyataan Masalah
// - Judul: Sistem Informasi Perpustakaan Sekolah
// - Konteks: Digitalisasi proses perpustakaan di lingkungan sekolah (tercantum “SMKN 1 Sanggau Ledo” pada tampilan).
// - Masalah:
//   - Pencatatan peminjaman/pengembalian manual rawan error dan lambat.
//   - Siswa kesulitan mengecek ketersediaan dan status buku (booking, peminjaman aktif, denda).
//   - Admin membutuhkan laporan terstruktur (pengadaan, sirkulasi) serta ekspor data.
// - Tujuan:
//   - Menyediakan katalog dan sirkulasi buku end-to-end (admin dan siswa) secara online.
//   - Memberi visibilitas status (peminjaman aktif, lewat tempo, denda) bagi siswa dan panel manajemen lengkap bagi admin.
//   - Menyediakan notifikasi (mis. pengingat jatuh tempo) dan laporan yang dapat diekspor ke Excel.

// 2) Tumpukan Teknologi & Alasan
// - Backend
//   - PHP 8.2 + Laravel 12
//     - Alasan: framework mature, fitur keamanan dan autentikasi kuat, Eloquent ORM memudahkan query relasional, middleware/guard untuk multi-peran (admin dan siswa), queue dan event mudah diintegrasikan.
// - Frontend
//   - Blade (Server-Side Rendering) + Bootstrap 5 + Bootstrap Icons
//     - Alasan: SSR cepat dan sederhana untuk aplikasi dashboard/admin; Bootstrap mempercepat pengembangan UI konsisten; Blade memudahkan komposisi layout/komponen.
//   - Tailwind CSS 4 (terpasang via devDependencies)
//     - Alasan: utilitas CSS modern untuk kebutuhan styling granular/khusus bila diperlukan.
//   - jQuery (disertakan) dan Axios
//     - Alasan: jQuery untuk interaksi DOM ringan/compat; Axios untuk request Ajax yang lebih rapi di sisi klien.
// - Build & Dev Experience
//   - Vite + laravel-vite-plugin, concurrently
//     - Alasan: dev server cepat, HMR, bundling modern; skrip dev menyalakan server Laravel, listener queue, log, dan Vite secara paralel.
// - Integrasi & Fitur Tambahan
//   - Firebase Cloud Messaging (kreait/laravel-firebase) + Firebase JS SDK
//     - Alasan: pengiriman notifikasi push ke browser siswa (mis. pengingat jatuh tempo) tanpa membangun infrastruktur notifikasi sendiri.
//   - Ekspor Excel (maatwebsite/excel)
//     - Alasan: standar de facto untuk ekspor Excel di Laravel; memudahkan pembuatan laporan operasional.
// - Pengujian & Tooling
//   - PHPUnit, Faker, Laravel Pint, Sail, Pail
//     - Alasan: menjaga kualitas kode (testing), otomatisasi format, dan lingkungan dev containerized bila dibutuhkan.

// 3) Tantangan & Solusi (Teknis Spesifik)
// - Tantangan 1: Validasi multi-form pada halaman pengelolaan eksemplar buku
//   - Gejala:
//     - Halaman Edit Buku menampilkan daftar eksemplar dan menyediakan banyak form (tambah/edit/hapus) sekaligus.
//     - Jika semua validasi dimasukkan ke error bag default, pesan error bercampur dan sulit diarahkan ke form yang tepat.
//     - Bukti di kode: penggunaan named error bags seperti $errors->storeCopy dan $errors->{'updateCopy_'.$copy->id} pada resources/views/admin/books/edit.blade.php.
//   - Solusi:
//     - Menggunakan Named Error Bags Laravel untuk setiap aksi/form yang berbeda.
//     - Menetapkan key dinamis per eksemplar saat validasi (mis. updateCopy_{id}) agar pesan tampil tepat di modal/form terkait.
//     - Hasil:
//       - UX lebih jelas; pengguna melihat error di form yang benar.
//       - Perubahan pada satu eksemplar tidak mengganggu eksemplar lain (lebih “atomic”).
// - Tantangan 2: Filter rentang tanggal dan ekspor Excel untuk laporan pengadaan
//   - Gejala:
//     - Perlu memfilter data pengadaan berdasarkan start_date dan end_date serta hanya menampilkan tombol ekspor ketika filter valid.
//     - Bukti di kode: tampilan laporan pengadaan (resources/views/admin/reports/procurements.blade.php) memvalidasi tanggal, menampilkan pesan error terarah, dan hanya menampilkan tombol “Export Excel” jika rentang valid.
//   - Solusi:
//     - Validasi sisi server untuk memastikan start_date ≤ end_date.
//     - Query efisien dengan whereBetween dan eager loading jika diperlukan.
//     - Ekspor via maatwebsite/excel menggunakan FromCollection/FromView sesuai kebutuhan, menjaga kolom, format tanggal, dan header yang konsisten.
//     - Hasil:
//       - Admin dapat melihat hasil terfilter sebelum ekspor.
//       - File Excel konsisten dan siap dibagikan/diarsipkan.
// - Tantangan 3: Integrasi push notification (FCM) untuk siswa
//   - Gejala:
//     - Aplikasi siswa memuat Firebase JS SDK (firebase-app, firebase-messaging) dan mendefinisikan endpoint penyimpanan token FCM melalui window.fcmTokenStoreUrl; backend menggunakan paket kreait/laravel-firebase.
//     - Tantangan umum: memperoleh izin browser, menangani rotasi/invalidasi token, dan menghubungkan token ke akun siswa.
//   - Solusi:
//     - Inisialisasi Firebase di klien, minta permission, ambil token, kirim token ke route user.fcm-token.store.
//     - Simpan token terasosiasi dengan user login; siapkan mekanisme refresh token.
//     - Kirim notifikasi (mis. pengingat jatuh tempo, status booking) via SDK server-side Kreait.
//     - Hasil:
//       - Komunikasi proaktif ke siswa tanpa polling.
//       - Peningkatan keterlibatan dan kepatuhan pengembalian buku.
