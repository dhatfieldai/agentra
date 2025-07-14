import "./globals.css";
import Navbar from "@/components/navigation/Navbar";

export const metadata = {
  title: "AURORA9",
  description: "Fully autonomous AI agent workforce",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
