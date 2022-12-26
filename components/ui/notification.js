import { useContext } from 'react';

import NotificationContext from '../../store/notification-context';

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = 'bg-veryDarkBlue';
  }

  if (status === 'error') {
    statusClasses = 'bg-red-400';
  }

  if (status === 'pending') {
    statusClasses = 'bg-veryDarkBlue';
  }

  return (
    <div
      className={`flex flex-col fixed container left-0 bottom-0 min-w-full justify-between items-center text-white p-4 px-8 md:px-4 min-h-max md:flex-row ${statusClasses}`}
      onClick={notificationCtx.hideNotification}
    >
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
