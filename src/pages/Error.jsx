import { useRouteError } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


function ErrorPage({ isOpen, toggleSidebar }) {
  const error = useRouteError();
  

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page. Please chose another url !';
  }

  return (
    <>
    <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    <div className={`mt-16 p-4 h-screen overflow-y-auto ml-72`}>
        <p>{title}</p>
        <p>{message}</p>
    </div>
    </>
  );
}

export default ErrorPage;
