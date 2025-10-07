"use client";

import { SettingsLayout } from "@/components/SettingsLayout";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SettingsLayout>{children}</SettingsLayout>;
}