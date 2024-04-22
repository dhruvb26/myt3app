import "~/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "~/lib/utils";
import { Inter } from "next/font/google";
import Navbar from "~/components/navbar";
import { ThemeProvider } from "~/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "My T3 App",
  description: "My app starter template.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
