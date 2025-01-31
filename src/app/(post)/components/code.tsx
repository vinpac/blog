import { CopyButton } from "@/components/copy-button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Code = ({ children }: { children: React.ReactNode }) => (
  <div className="relative overflow-hidden bg-stone-900 rounded-lg !-m-4">
    <CopyButton value={children as string} className="absolute top-2 right-2" />
    {typeof children === "string" ? (
      <LineNumbers>{children}</LineNumbers>
    ) : null}
    <SyntaxHighlighter
      className=" !bg-stone-900 !pt-6 !px-6 !pl-12"
      language="typescript"
      style={dracula}
    >
      {children as string}
    </SyntaxHighlighter>
  </div>
);

const LineNumbers = ({ children }: { children: string }) => (
  <div className="absolute bg-stone-900 px-4 py-[1.8rem] left left-0 flex flex-col  font-mono text-gray-500 text-right text-sm pointer-events-none leading-[1.175rem]">
    {children
      .trim()
      .split("\n")
      .map((line, index) => (
        <div key={index}>{index + 1}</div>
      ))}
  </div>
);
