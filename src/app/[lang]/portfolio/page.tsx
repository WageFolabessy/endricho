import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

type Params = Promise<{ lang: string }>;

const THUM_TOKENS: Record<string, string> = {
  "ocs.efolabessy.app": "75236-1758615824516-c70fa315a2659b2bc9520f3cdc368228",
  "cis.efolabessy.app": "75236-1758616161128-a2d381d6df58d216fb863a375bb24ba5",
  "lis.efolabessy.app": "75236-1758616198483-facf89098ac438d06ee8c5b7c7bd278b",
  "admin.ocs.efolabessy.app": "75236-1758616243962-e8f815c9c59f650d97aa8538148813d7",
};

function thumbFor(href: string) {
  try {
    const u = new URL(href);
    const token = THUM_TOKENS[u.hostname];
    if (token) return `https://image.thum.io/get/auth/${token}/${href}`;
  } catch {}
  return `https://image.thum.io/get/auth/${THUM_TOKENS["ocs.efolabessy.app"]}/${href}`;
}

function hostOf(href: string) {
  try {
    const h = new URL(href).hostname;
    return h.replace(/^www\./, "");
  } catch {
    return href;
  }
}

function brandOfRepo(href: string) {
  const h = hostOf(href);
  if (h.includes("github.com")) return "GitHub";
  if (h.includes("gitlab.com")) return "GitLab";
  if (h.includes("bitbucket.org")) return "Bitbucket";
  return "Repository";
}

function findByEnTitle(enTitle: string) {
  const p = projects.find((p) => p.title.en === enTitle);
  if (!p) throw new Error(`Project not found: ${enTitle}`);
  return p;
}

export default async function PortfolioENPage({ params }: { params: Params }) {
  await params; // lang not needed
  const admin = findByEnTitle("Online Clothing Shop Admin Panel");
  const user = findByEnTitle("Online Clothing Shop (User)");
  const church = findByEnTitle("Church Information System");
  const library = findByEnTitle("Library Information System");

  const siteUrl = process.env.SITE_URL ?? "https://efolabessy.app";

  const LinkGroup = ({ demos, repos }: { demos: string[]; repos: string[] }) => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        {demos.map((d) => (
          <a
            key={d}
            href={d}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open demo ${hostOf(d)}`}
            title={`Open demo: ${d}`}
            className="group relative block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            {/* Thumbnail now fills the card width */}
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <Image
                src={thumbFor(d)}
                alt={`Demo preview: ${d}`}
                fill
                loading="lazy"
                sizes="(min-width: 1536px) 33vw, (min-width: 1280px) 50vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover bg-gray-100 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between gap-2">
              <span className="px-2 py-1 rounded bg-black/60 text-white text-xs font-medium backdrop-blur-sm">
                {hostOf(d)}
              </span>
              <span className="rounded-md bg-blue-600 text-white px-3 py-1.5 text-xs font-semibold shadow-sm ring-1 ring-blue-600/20 group-hover:bg-blue-700">
                Open Demo
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {repos.map((r) => (
          <a
            key={r}
            href={r}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${brandOfRepo(r)} repository`}
            title={r}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-800 ring-1 ring-gray-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <span className="text-xs font-medium px-1.5 py-0.5 rounded bg-white ring-1 ring-gray-200">
              {brandOfRepo(r)}
            </span>
            <span className="text-sm font-medium">Open Repo ↗</span>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              url: siteUrl,
              name: "Endricho Portfolio",
              inLanguage: "en-US",
              publisher: { "@id": `${siteUrl}/#organization` },
            },
            {
              "@type": "Organization",
              "@id": `${siteUrl}/#organization`,
              name: "GAS Native",
              url: siteUrl,
              logo: { "@type": "ImageObject", url: `${siteUrl}/images/gasnative.png` },
              image: `${siteUrl}/images/gasnative.png`,
              sameAs: [
                "https://efolabessy.app/",
                "https://github.com/WageFolabessy",
                "https://linkedin.com/in/endricho-folabessy/",
                "https://instagram.com/endrichofolabessy/",
              ],
            },
          ],
        }}
      />
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-start gap-4">
            <Image
              src="/images/gasnative.png"
              alt="GAS Native"
              width={64}
              height={64}
              className="w-16 h-16 rounded-md object-contain ring-1 ring-gray-200 bg-white"
              priority
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to GAS Native!</h1>
              <p className="text-gray-900">
                GAS Native is an organization founded by Endricho as a center for innovation and collaboration in software development. We focus on storing, managing, and documenting repositories that are being developed, produced, or deployed. Through GAS Native, every project can grow in a structured, integrated, and easily accessible environment for the team.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* User Frontend */}
        <article className="bg-white rounded-lg p-6 shadow-sm text-gray-900 space-y-4">
          <h2 className="text-2xl font-semibold mb-1">{user.title.en}</h2>
          <LinkGroup demos={user.demos} repos={user.repos} />

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="leading-relaxed">
              Build a fast, responsive, and secure e‑commerce frontend for browsing, cart, checkout, Midtrans payments, and order dashboard, tightly integrated with an existing Laravel backend.
            </p>
            <p className="leading-relaxed">
              Focus on mobile‑first UX, reliable payment flow, and protecting sensitive routes (checkout/dashboard) with clear session management.
            </p>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>React 18 + Vite, React Router DOM v7</li>
              <li>React Context API for global state (auth/cart/notifications)</li>
              <li>Tailwind CSS for efficient responsive styling</li>
              <li>Fetch API with a small wrapper for headers/auth/errors</li>
              <li>Midtrans Snap for secure client-token payment flow</li>
            </ul>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Challenges & Solutions</h3>
            <h4 className="font-medium">1) Midtrans Snap Integration in SPA</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dynamic script loading with cleanup to avoid multiple injections.</li>
              <li>Transaction token created on server; frontend only calls window.snap.pay(token).</li>
              <li>Structured callbacks to update backend, show toasts, clear cart, and redirect.</li>
              <li>Idempotency: unique order reference and disabled double-click via “processing” state.</li>
            </ul>
            <h4 className="font-medium">2) Route Protection, Session Management, Auto-Logout</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>PrivateRoute/GuestRoute based on AppContext.</li>
              <li>Validate token exp on mount/navigation; clear state and redirect when invalid.</li>
              <li>Measured persistence (minimal token + cart) and resync post-login.</li>
              <li>Safe UX: loading during session verification, disabled actions when invalid.</li>
            </ul>
            <h3 className="text-lg font-semibold">Results</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fast, consistent mobile experience.</li>
              <li>Reliable Midtrans payment flow with clean callbacks.</li>
              <li>Protected navigation with automatic session handling.</li>
            </ul>
          </section>
        </article>

        {/* Admin Panel */}
        <article className="bg-white rounded-lg p-6 shadow-sm text-gray-900 space-y-4">
          <h2 className="text-2xl font-semibold mb-1">{admin.title.en}</h2>
          <LinkGroup demos={admin.demos} repos={admin.repos} />

          <section className="mt-2">
            <h3 className="text-lg font-semibold">Admin Login</h3>
            <div className="mt-2 rounded-md bg-blue-50 text-blue-900 p-3 text-sm">
              <p><span className="font-medium">Email:</span> admin@admin.com</p>
              <p><span className="font-medium">Password:</span> password</p>
            </div>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="leading-relaxed">
              Build a fast, responsive e‑commerce admin dashboard to manage products, categories, orders, shipping, payments, users, and admins. The core problem is centralizing operations in a secure, admin‑friendly interface integrated with a Laravel + Sanctum backend for authentication and data management.
            </p>
            <p className="leading-relaxed">
              Scope: dashboard metrics, product/category CRUD (image upload, rich text), order/shipping management, payment monitoring, user/admin management, admin profile, and PDF sales reports.
            </p>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>React 18 + Vite, React Router DOM v7</li>
              <li>React Router DOM — client-side routing with protected routes for admin area.</li>
              <li>Tailwind CSS — utility-first, consistent and responsive styling.</li>
              <li>react-data-table-component — customizable tables (sorting/pagination).</li>
              <li>ESLint + React/Tailwind plugins + PostCSS/Autoprefixer — quality and compatibility.</li>
            </ul>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Challenges & Solutions</h3>
            <h4 className="font-medium">1) Admin Auth + Protected Routes (Sanctum, CSRF, Expired Token)</h4>
            <p className="font-medium">Problem:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Proper credentials/CSRF/CORS setup with Laravel Sanctum.</li>
              <li>Expired tokens made the UI “look” logged in while server returned 401.</li>
            </ul>
            <p className="font-medium">Approach & Solution:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Centralized config: baseURL, default headers, withCredentials.</li>
              <li>Interceptors: request (inject token/headers), response (catch 401/419 → auto-logout and redirect).</li>
              <li>Protected routes: wrapper checks auth state (token/role) before rendering.</li>
            </ul>
            <p className="font-medium">Impact:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reliable and secure login/logout flow.</li>
              <li>Eliminated “stale UI sessions”; fewer operational errors and better UX.</li>
            </ul>
            <h3 className="text-lg font-semibold">Results</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Admin panel fully functional with real data.</li>
              <li>Secure and efficient admin operations.</li>
            </ul>
          </section>
        </article>

        {/* Church IS */}
        <article className="bg-white rounded-lg p-6 shadow-sm text-gray-900 space-y-4">
          <h2 className="text-2xl font-semibold mb-1">{church.title.en}</h2>
          <LinkGroup demos={church.demos} repos={church.repos} />

          <section className="mt-2">
            <h3 className="text-lg font-semibold">Admin Login</h3>
            <div className="mt-2 rounded-md bg-blue-50 text-blue-900 p-3 text-sm">
              <p><span className="font-medium">Path:</span> /admin/login</p>
              <p><span className="font-medium">Username:</span> admin</p>
              <p><span className="font-medium">Password:</span> password</p>
            </div>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="leading-relaxed">
              Provide a church portal for easy access to devotionals, service schedules, bulletins (PDF), liturgy (PDF), and church information, with an efficient admin panel as data grows.
            </p>
            <p className="leading-relaxed">
              Special needs: accessibility (Text‑to‑Speech, voice navigation) and real‑time chat between members and admins with distinct guest vs logged‑in experiences.
            </p>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Laravel 12, Eloquent, Multi-Guard, Storage (public), Broadcasting (Pusher), MySQL.</li>
              <li>Blade, Bootstrap 5.3, jQuery + DataTables, Summernote, SweetAlert2, Web Speech API, Vite, Laravel Echo + Pusher.</li>
            </ul>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Challenges & Solutions</h3>
            <h4 className="font-medium">1) Real-time Chat (Guest vs Logged-in)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Laravel Broadcasting + Pusher (MessageSent, MessagesMarkedAsRead).</li>
              <li>Channel authorization per guard; private channels for logged-in users.</li>
              <li>Laravel Echo subscriptions; differentiated persistence (guest not persisted).</li>
              <li>Idempotent “read” status updates.</li>
            </ul>
            <h4 className="font-medium">2) Admin Table Performance at Scale</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Server-side processing (Yajra) + parameter validation.</li>
              <li>Eager loading; DB indexes on frequent filter/sort columns.</li>
              <li>Responsive UX with loading/feedback.</li>
            </ul>
            <h3 className="text-lg font-semibold">Results</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Improved accessibility (TTS, voice nav).</li>
              <li>Efficient admin operations; fewer input errors.</li>
              <li>Real-time chat without heavy infra.</li>
            </ul>
          </section>
        </article>

        {/* Library IS */}
        <article className="bg-white rounded-lg p-6 shadow-sm text-gray-900 space-y-4">
          <h2 className="text-2xl font-semibold mb-1">{library.title.en}</h2>
          <LinkGroup demos={library.demos} repos={library.repos} />

          <section className="mt-2">
            <h3 className="text-lg font-semibold">Admin Login</h3>
            <div className="mt-2 rounded-md bg-blue-50 text-blue-900 p-3 text-sm">
              <p><span className="font-medium">Path:</span> /admin/login</p>
              <p><span className="font-medium">NIP:</span> 123456</p>
              <p><span className="font-medium">Password:</span> password</p>
            </div>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="leading-relaxed">
              Digitalize school library processes for catalog, reservations, loans/returns, and fines—reducing manual errors and speeding up operations.
            </p>
            <p className="leading-relaxed">
              Goals: clear visibility for students (availability, active loans, overdue, fines) and a full admin panel with structured reports, Excel export, and reminder notifications.
            </p>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Tech Stack</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Laravel 12 with secure auth, multi-roles, and relational ORM.</li>
              <li>Blade + Bootstrap 5 + Icons; Tailwind CSS 4 for granular styling.</li>
              <li>jQuery + Axios; Vite + laravel-vite-plugin.</li>
              <li>FCM (kreait/laravel-firebase) for push; Excel export (maatwebsite/excel).</li>
              <li>Tooling: PHPUnit, Faker, Pint, Sail, Pail.</li>
            </ul>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Challenges & Solutions</h3>
            <h4 className="font-medium">1) Multi-form validation for book copies</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Named Error Bags per action/form; dynamic keys (e.g., <code>updateCopy_{"{"}id{"}"}</code>).</li>
              <li>Clear UX; changes are atomic per copy.</li>
            </ul>
            <h4 className="font-medium">2) Date-range filtering + Excel export</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Server validation for start_date ≤ end_date; efficient queries with whereBetween.</li>
              <li>Excel via maatwebsite/excel; consistent columns and date formatting.</li>
            </ul>
            <h4 className="font-medium">3) Push notifications (FCM)</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Initialize Firebase, request permission, get token, store to user.fcm-token.store.</li>
              <li>Associate token to user; refresh handling; send via Kreait on server.</li>
            </ul>
          </section>

          <section className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">Results</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Proactive communication to students without polling.</li>
              <li>Increased engagement and on-time returns.</li>
            </ul>
          </section>
        </article>

        <div className="text-center">
          <Link
            href="/en"
            className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = process.env.SITE_URL ?? "https://efolabessy.app";
  const currentUrl = `${siteUrl}/en/portfolio`;
  return {
    title: "Portfolio — Endricho",
    description:
      "Selected projects: e‑commerce (user/admin), church IS, and library IS. Laravel + React with robust auth, payments, and real‑time features.",
    alternates: {
      canonical: currentUrl,
      languages: {
        "id-ID": `${siteUrl}/id/portofolio`,
        "en-US": currentUrl,
      },
    },
    openGraph: {
      type: "website",
      url: currentUrl,
      title: "Portfolio — Endricho",
      description:
        "Selected projects: e‑commerce (user/admin), church IS, and library IS.",
      images: [`${siteUrl}/images/photo.JPG`],
    },
  };
}

export const dynamic = "error";
export const revalidate = false;