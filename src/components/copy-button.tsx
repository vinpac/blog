"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { MdCheck } from "react-icons/md";

export const CopyButton = ({
  value,
  className,
}: {
  value: string;
  className?: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const onClick = useCallback(() => {
    navigator.clipboard.writeText(value);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }, [value]);

  return (
    <Button
      onClick={onClick}
      className={cn(
        isCopied
          ? "!text-green-600 !bg-green-100 !border-green-600"
          : "text-gray-600",
        className
      )}
      variant="ghost"
    >
      {isCopied ? <MdCheck /> : <FaCopy />}
    </Button>
  );
};
