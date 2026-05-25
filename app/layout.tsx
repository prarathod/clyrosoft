import type { Metadata } from "next";
import localFont from "next/font/local";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { ConfigProvider } from "antd";
import theme from "./components/ThemeConfig";
import { AppLayout } from "./components/Layout/AppLayout";
import { siteMetadata } from "lib/metadata";

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

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <AppLayout>{children}</AppLayout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
