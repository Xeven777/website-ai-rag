import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ask The website",
  metadataBase: new URL("https://askwebsite.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen antialiased")}>
        <div className="h-screen text-foreground bg-background">{children}</div>
      </body>
    </html>
  );
}
