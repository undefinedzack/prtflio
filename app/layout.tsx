import "./global.css";
import clsx from "clsx";

import localFont from "next/font/local";

import { Analytics } from "@vercel/analytics/react";

import NavigationBar from "../components/navbar";
import { Providers } from "./providers";

import Footer from "../components/footer";
import { useServerInsertedHTML } from "next/navigation";

const graphik = localFont({
  src: [
    {
      path: "../public/fonts/Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Graphik-Medium.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-graphik",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        graphik.variable
      )}
    >
      <body className="min-h-screen flex flex-col">
        <Providers>
          <NavigationBar />
          <div className="max-w-3xl flex-grow mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
            <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
              {children}
              <Analytics />
            </main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
