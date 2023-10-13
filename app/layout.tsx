import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Theme } from "@radix-ui/themes";
import { NavBar } from "./NavBar";
import { GoogleAnalyticsScript } from "./GoogleAnalyticsScript";

const localFontPoppins = localFont({
  src: "../public/fonts/poppins-regular-webfont.woff2",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "My NextJS App",
  description: "My NextJS app for exploring concepts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={localFontPoppins.variable}>
      <GoogleAnalyticsScript />
      <body>
        <Theme appearance="light" accentColor="grass" radius="small">
          <NavBar />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
