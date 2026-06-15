import Link from "next/link";
import { navItems } from "@/config/navigation";

export function Navbar() {
  return (
    <header className="site-container pb-0">
      <nav className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <Link href="/" className="no-underline">
          Bhuvan
        </Link>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
