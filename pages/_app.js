import { SessionProvider } from "next-auth/react"

import Layout from '../components/layout/layout';
import '../styles/globals.css';
import { NotificationContextProvider } from '../store/notification-context';

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </SessionProvider>
    </NotificationContextProvider>
  );
}

export default MyApp;
