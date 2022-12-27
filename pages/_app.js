import { SessionProvider } from "next-auth/react"

import Layout from '../components/layout/layout';
import '../styles/globals.css';
import { NotificationContextProvider } from '../store/notification-context';

function MyApp({ Component, pageProps }) {
  return (
    // Error: [next-auth]: `useSession` must be wrapped in a <SessionProvider />
    <SessionProvider session={pageProps.session}>
    <NotificationContextProvider>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
      </NotificationContextProvider>
    </SessionProvider>
   
  );
}

export default MyApp;
