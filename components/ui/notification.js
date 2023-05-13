import { useContext } from 'react';

import NotificationContext from '../../store/notification-context';

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = 'bg-stone-800';
  }

  if (status === 'error') {
    statusClasses = 'bg-red-600';
  }

  if (status === 'pending') {
    statusClasses = 'bg-blue-900';
  }

  return (
    <div
      className={`flex flex-col fixed  w-screen   justify-between items-center text-white p-2 pt-4 m-2 md:p-4 md:py-8  rounded   min-h-max md:flex-row ${statusClasses}`}
      onClick={notificationCtx.hideNotification}
    >
      <h2 className='mr-2 whitespace-nowrap uppercase'>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
