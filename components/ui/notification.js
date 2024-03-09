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
    statusClasses = 'bg-red-600';
  }

  if (status === 'pending') {
    statusClasses = 'bg-blue-900';
  }

  // when position fixed and width set to full/screen on mobile the div below has one margin visible and the other one goes into side
  // viewport, in other word it is not centred. box-sizing: border-box is set in css, also width full is set on the parent el and width: inherit
  // here was tried but it also dosen work
  return (
    <div
      className={`flex flex-col z-50 fixed w-95% right-0 top-1/3  mx-2 md:w-1/2 md:left-1/2 md:top-32 md:-translate-x-1/2 md:-translate-y-1/2  justify-between items-center text-white p-2 pt-4 pb-6 m-2 md:p-4 md:py-8  rounded-lg   min-h-max md:flex-row ${statusClasses}`}
      onClick={notificationCtx.hideNotification}
    >
      <h2 className='mx-4 whitespace-nowrap uppercase'>{title}</h2>
      <p>{message}</p>
      <p className="absolute top-0 right-2 px-1 cursor-pointer border ">Close X</p>
    </div>
  );
}

export default Notification;
