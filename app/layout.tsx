import type {Metadata} from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import AuthProvider from "@/providers/auth-provider";
import QueryProvider from "@/providers/query-provider";
import ReduxProvider from "@/providers/redux-provider";
import React from "react";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kim Remy - Énergéticienne",
  description: "Generated by create next app",

};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr" suppressHydrationWarning={true}>

      <body className={poppins.className}>
      <QueryProvider>
        <AuthProvider>
          <ReduxProvider>
            <main className={"flex flex-col justify-between  font-poppins"}>
              <Header/>

              {children}
            </main>
          </ReduxProvider>
        </AuthProvider>
      </QueryProvider>
      </body>
      </html>
  );
}
