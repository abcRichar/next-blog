import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="font-mono text-sm uppercase tracking-[0.35em] text-[#ff6a98] drop-shadow-[0_0_10px_rgba(255,42,109,0.22)] transition hover:text-[#05d9e8]">
            Next-Item
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="cyber-pill px-3 py-2 text-[11px] sm:px-4 sm:text-xs">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
