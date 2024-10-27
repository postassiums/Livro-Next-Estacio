import MainLayout from '@/components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )

}
