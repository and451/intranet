"use client";

import { useState, useEffect } from "react";

interface UseGraphDataOptions {
  endpoint: "emails" | "calendar" | "teams";
  enabled?: boolean;
}

export function useGraphData<T>({ endpoint, enabled = true }: UseGraphDataOptions) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`/api/graph/${endpoint}`);
        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || `Erro ${res.status}`);
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint, enabled]);

  return { data, loading, error };
}
