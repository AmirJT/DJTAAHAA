"use client"; // ✅ This makes it a Client Component

import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }) {
  const pathname = usePathname(); // ✅ Now it's safe to use here

  return (
    <>
      {/* ✅ Show these sections only on the homepage */}
      {pathname === '/' && children}
    </>
  );
}