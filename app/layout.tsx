import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css"
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Kadi",
  description: "Let it cook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5' }
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
         {children}
        </body>
      </html>
    </ClerkProvider>
  );
}