import React from "react";

type Props = { html: string; className?: string };

export default function RichText({ html, className }: Props) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}