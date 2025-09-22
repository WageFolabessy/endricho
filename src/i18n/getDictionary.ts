import { Locale } from "./config";

export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("./dictionaries/en")).default;
    case "id":
    default:
      return (await import("./dictionaries/id")).default;
  }
}