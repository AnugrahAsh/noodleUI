"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300 text-sm rounded-t-lg">
        <span>{language}</span>
        <button
          onClick={copyCode}
          className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-700 transition-colors"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="p-4 bg-gray-900 text-gray-100 rounded-b-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};
