import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/TopNav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "~/components/ui/sonner";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Generated by Anjana",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} `}>
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        <body className={"dark font-sans"}>
          <div className="grid h-screen grid-rows-[auto,1fr]">
            <TopNav />
            <main className="overflow-y-scroll">{children}</main>
          </div>
          {modal}
          <div id="modal-root" />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
