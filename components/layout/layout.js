import { Fragment, useContext } from 'react';
import Footer from './footer';
import Notification from '../ui/notification';
import NotificationContext from '../../store/notification-context';

import MainNavigation from './main-navigation';

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default Layout;
