import type { Metadata } from "next";
import { promises as fs } from "node:fs";
import path from "node:path";

export const metadata: Metadata = {
  title: "Privacy Policy — Tyler Grant",
  description:
    "How Tyler Grant collects, uses, and protects your personal information.",
};

async function getPolicyHtml(): Promise<string> {
  const raw = await fs.readFile(
    path.join(process.cwd(), "privacy-policy.md"),
    "utf-8",
  );
  return raw.match(/```html\s*([\s\S]*?)\s*```/)?.[1] ?? "";
}

/** Privacy policy page — renders the HTML maintained in /privacy-policy.md. */
export default async function PrivacyPage() {
  const html = await getPolicyHtml();
  return (
    <main className="flex flex-1 flex-col">
      <article className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
        <div
          data-custom-class="body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}
