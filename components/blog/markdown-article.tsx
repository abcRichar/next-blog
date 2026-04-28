"use client";

import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { CopyButton } from "@/components/post/copy-button";

type ComponentsProps = Parameters<typeof ReactMarkdown>[0]["components"];

function slugifyHeading(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\u4e00-\u9fa5\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function MarkdownArticle({ content }: { content: string }) {
  const components = useMemo<ComponentsProps>(
    () => ({
      h2: ({ children }) => {
        const text = String(children);
        return <h2 id={slugifyHeading(text)}>{children}</h2>;
      },
      h3: ({ children }) => {
        const text = String(children);
        return <h3 id={slugifyHeading(text)}>{children}</h3>;
      },
      table: ({ children }) => (
        <div className="overflow-x-auto">
          <table>{children}</table>
        </div>
      ),
      pre: ({ children }) => {
        const codeChild = Array.isArray(children) ? children[0] : children;
        const code = typeof codeChild === "object" && codeChild && "props" in codeChild ? String((codeChild as { props?: { children?: string } }).props?.children ?? "") : "";
        return (
          <div className="group relative">
            <CopyButton code={code} />
            <pre>{children}</pre>
          </div>
        );
      }
    }),
    []
  );

  return (
    <div className="markdown-body min-w-0">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
