import Script from "next/script";

type Props = { data: Record<string, unknown> };

export default function JsonLd({ data }: Props) {
  return (
    <Script
      id="json-ld-person"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}