import { Reem_Kufi, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const reemKufi = Reem_Kufi({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-architectural",
});

const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm-plex",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${reemKufi.variable} ${ibmPlex.variable}`}
    >
      <body className="font-sans bg-[#F7F4EF] text-[#222222]">{children}</body>
    </html>
  );
}
