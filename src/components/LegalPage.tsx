import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./LegalPage.module.css";

function inline(text: string): ReactNode[] {
  return text.split(/(\[[^\]]+\]\(https?:\/\/[^)]+\)|`[^`]+`)/g).map((part, index) => {
    const markdownLink = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (markdownLink) {
      return <a key={index} href={markdownLink[2]} target="_blank" rel="noopener noreferrer">{markdownLink[1]}</a>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      const value = part.slice(1, -1);
      if (value.startsWith("https://theupgradeshoptus.com/")) {
        return <Link key={index} href={new URL(value).pathname}>{value}</Link>;
      }
      return <span key={index}>{value}</span>;
    }
    return part;
  });
}

function idFor(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function LegalPage({ title, content, otherHref, otherTitle }: {
  title: string;
  content: string;
  otherHref: string;
  otherTitle: string;
}) {
  const blocks = content.split(/\n\n+/);
  const headings = blocks.filter(block => block.startsWith("### ")).map(block => block.slice(4));
  return (
    <main className={styles.page} id="legal-content">
      <div className="wrap">
        <p className="crumbs"><Link href="/">Homepage</Link> / {title}</p>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>TUS Shop Inc. / The Upgrade Shop</p>
          <h1>{title}</h1>
          <p className={styles.date}>{blocks[0]}</p>
        </header>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <nav aria-label={`${title} contents`}>
              <p className={styles.navTitle}>On this page</p>
              {headings.map(heading => <a key={heading} href={`#${idFor(heading)}`}>{heading}</a>)}
            </nav>
            <Link className={styles.related} href={otherHref}>{otherTitle} →</Link>
          </aside>
          <article className={styles.content} aria-label={title}>
            {blocks.slice(1).map((block, index) => {
              if (block.startsWith("### ")) {
                const heading = block.slice(4);
                return <h2 key={index} id={idFor(heading)}>{heading}</h2>;
              }
              if (block.startsWith("- ")) {
                return <ul key={index}>{block.split("\n").map((line, item) => <li key={item}>{inline(line.replace(/^- /, ""))}</li>)}</ul>;
              }
              return <p key={index}>{block.split("\n").map((line, item) => <span key={item}>{item > 0 && <br />}{inline(line.trim())}</span>)}</p>;
            })}
          </article>
        </div>
      </div>
    </main>
  );
}
