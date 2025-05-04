import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function CustomApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  // document is not defined 해결용 (이게 왜 뜨지?)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Head>
          <title>모노레포 PoC</title>
        </Head>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default CustomApp;
