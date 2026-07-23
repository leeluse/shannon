"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "sonner";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30_000,
            refetchOnWindowFocus: false
          }
        }
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          className: "!border !border-white/10 !bg-zinc-950/55 !text-white !backdrop-blur-xl before:!absolute before:!left-4 before:!right-4 before:!top-0 before:!h-px before:!bg-gradient-to-r before:!from-transparent before:!via-violet-300/50 before:!to-transparent before:!content-['']"
        }}
      />
    </QueryClientProvider>
  );
}
