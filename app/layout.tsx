import Header from "@/components/Header";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {fetchSocials} from "@/hooks/fetchData";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "witty",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socials = await fetchSocials();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[rgb(36,35,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
          <Header socials={socials} />

          {children}
        </div>
      </body>
    </html>
  );
}
