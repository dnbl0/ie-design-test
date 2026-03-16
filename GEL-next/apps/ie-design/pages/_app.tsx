import '../styles/globals.css';
import '@westpac/ui/dist/css/westpac-ui.css';
import type { AppProps } from 'next/app';
import { GELNextProvider } from '@westpac/ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GELNextProvider>
      <Component {...pageProps} />
    </GELNextProvider>
  );
}
