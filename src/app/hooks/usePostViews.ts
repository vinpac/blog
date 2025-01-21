"use client";

import { useEffect, useRef, useState } from "react";

export function usePostViews(slug: string) {
  const lastViewedId = useRef<string | null>(null);
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const registerView = async () => {
      if (lastViewedId.current === slug) return;
      lastViewedId.current = slug;
      try {
        const response = await fetch(`/api/views/${slug}`, {
          method: "POST",
        });
        const data = await response.json();
        setViews(data.views);
      } catch (error) {
        console.error("Failed to register view:", error);
      }
    };

    registerView();
  }, [slug]);

  return { views };
}
