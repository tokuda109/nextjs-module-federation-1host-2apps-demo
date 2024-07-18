import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 2000);
  }, []);

  return <Component {...pageProps} isAuthenticated={isAuthenticated} />;
}
