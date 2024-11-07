import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationBar } from "@/components/NavigationBar/Index";
import { Providers } from "@/components/Providers";
import { AudioPlayerProvider } from "./context/audioContext";
import { FavoritesProvider } from "./context/favouriteContext";
import { Suspense } from "react";
import Loading from "./loading";
import { HistoryProvider } from "./context/historyContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "sproutcast",
  description: "Discover,grow and enjoy diverse podcasts tailored for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <HistoryProvider>
          <FavoritesProvider>
            <AudioPlayerProvider>
              <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-700 dark:bg-black dark:text-white h-screen`}
              >
                <div className="grid items-start gap-10 p-10 ">
                  <section>
                    {" "}
                    <NavigationBar></NavigationBar>
                  </section>
                  <Suspense fallback={<Loading></Loading>}>
                    <section className="grow">{children}</section>
                  </Suspense>
                </div>
              </body>
            </AudioPlayerProvider>
          </FavoritesProvider>
        </HistoryProvider>
      </Providers>
    </html>
  );
}
