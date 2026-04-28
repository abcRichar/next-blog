import type { Metadata } from "next";
import "./globals.css";
import { BackgroundFX } from "@/components/effects/background-fx";
import { Header } from "@/components/layout/header";
import { MusicPlayer } from "@/components/player/music-player";
import { AppProviders } from "@/components/providers/app-providers";

export const metadata: Metadata = {
  title: "NEXT-ITEM // Cyberpunk Tech Blog",
  description: "赛博朋克风格的个人技术博客，基于 Next.js App Router + TypeScript + Tailwind CSS 构建。"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="bg-[var(--background)] font-sans text-[var(--foreground)] antialiased">
        <AppProviders>
          <BackgroundFX />
          <Header />
          <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-6 pb-32 sm:px-6 sm:py-8 sm:pb-36 lg:px-8">
            {children}
          </main>
          <MusicPlayer />
        </AppProviders>
      </body>
    </html>
  );
}
