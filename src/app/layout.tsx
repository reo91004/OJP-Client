import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';

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
    <html lang='ko' suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider>
          <Header />
          <main className='container mx-auto px-4 py-8'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
