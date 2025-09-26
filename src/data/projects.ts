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