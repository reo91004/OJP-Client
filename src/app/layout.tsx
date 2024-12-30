import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '수능 수학 기출 문제 추천',
  description: '수능 수학 기출 문제를 효과적으로 학습하세요',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <Header />
        <main className='container mx-auto px-4 py-8'>{children}</main>
      </body>
    </html>
  );
}
