import { Fragment, useContext } from 'react';
import Footer from './footer';
import Notification from '../ui/notification';
import NotificationContext from '../../store/notification-context';

import MainNavigation from './main-navigation';

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    // we need this extra div here for the styling, noramlly with pages
    // filled with content this wouldnt be needed but here for ex saved jokes
    // page when there is no jokes saved yet in that case footer would 
    // go up, it would stack up after the next element so it would be somewhere in the middle
    // and setting these css n body in document.js is no good since what in
    // the body there is jus one <Main/> element
    <div className="min-h-screen flex flex-col justify-between">
      <MainNavigation />
      <main className="scroll-smooth">{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
      <Footer />
    </div>
  );
}

export default Layout;
