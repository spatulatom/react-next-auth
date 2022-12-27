import { useContext } from 'react';

import NotificationContext from '../../store/notification-context';

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = 'bg-green-600';
  }

  if (status === 'error') {
    statusClasses = 'bg-red-600';
  }

  if (status === 'pending') {
    statusClasses = 'bg-stone-600';
  }

  return (
    <div
      className={`flex flex-col fixed left-0 min-w-full  bottom-0 justify-around items-center text-white p-4 px-8 md:px-4 min-h-max md:flex-row ${statusClasses}`}
      onClick={notificationCtx.hideNotification}
    >
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
