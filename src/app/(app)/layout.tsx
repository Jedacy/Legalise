import type { ReactNode } from "react";

import { AppShell } from "@/components/layout/AppShell";

export const runtime = 'edge';

export default function Layout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
