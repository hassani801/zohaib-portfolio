import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#531fae] pb-24 pt-16 lg:pb-12">
      <Image
        src="/assets/footer-gradient.svg"
        alt=""
        fill
        className="object-cover opacity-80 pointer-events-none"
        aria-hidden
      />
      <div className="container relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Image
            src="/assets/footer-logo.svg"
            alt="Endpoint Clients"
            width={200}
            height={60}
            className="h-12 w-auto"
          />
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <Link href="#home" className="hover:text-white">
              Home
            </Link>
            <Link href="#about" className="hover:text-white">
              About
            </Link>
            <Link href="#services" className="hover:text-white">
              Services
            </Link>
            <Link href="#contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Endpoint Clients. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
