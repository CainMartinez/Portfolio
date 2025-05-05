import './globals.css';
import { ReactNode } from 'react';
export const metadata = { title: 'Caín Martínez' };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="es"><body>{children}</body></html>;
}