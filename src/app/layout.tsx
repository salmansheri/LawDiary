import Sidebar from "@/components/sidebar/Sidebar";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Modal from "@/components/Modal/Modal";
import LoginModal from "@/components/Modal/LoginModal";
import RegisterModal from "@/components/Modal/RegisterModal";
import ToasterProvider from "@/providers/ToasterProvider";
import AuthProvider from "@/providers/AuthProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "100", "700"],
});

export const metadata = {
  title: "Law diary",
  description: "Manage your court cases",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* <Modal isOpen title="login" actionLabel="Login" /> */}
        <AuthProvider>

        <LoginModal />
        <RegisterModal />
        <main className="flex">
          <ToasterProvider />
          <div className="flex-2">
            <Sidebar />
          </div>

          <div className="lg:flex-8 w-full p-5">{children}
          <Navbar />
          </div>
        </main>
        </AuthProvider>
      </body>
    </html>
  );
}
