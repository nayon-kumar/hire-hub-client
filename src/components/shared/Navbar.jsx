"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Company", href: "/company" },
    { name: "Pricing", href: "/plans" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1E1E1E] px-4 py-3">
      <nav className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">
              Hire<span className="text-blue-500">Hub</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-sm transition hover:text-white pb-1
                    ${isActive ? "text-white font-medium" : "text-gray-300"}`}
                >
                  {link.name}
                  {/* Active Underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-4 md:flex">
            {user ? (
              <>
                <div>
                  <Button onClick={handleSignOut} variant="secondary">
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="text-sm text-indigo-400 transition hover:text-indigo-300"
                >
                  Sign In
                </Link>

                <Link
                  href="/auth/signup"
                  className="rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
          >
            {isOpen ? <IoMdClose size={24} /> : <IoMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-[#111827] p-5 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`py-2 px-3 rounded-xl transition ${
                      isActive
                        ? "text-white bg-white/10 font-medium"
                        : "text-gray-300 hover:bg-white/5"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <hr className="border-gray-700" />

              <Link
                href="/auth/signin"
                className="text-indigo-400 py-2 px-3 rounded-xl hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>

              <Link
                href="/auth/signup"
                className="rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 px-4 py-2 text-center font-medium text-white"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
