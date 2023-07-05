import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
  const error = useRouteError();
  let title = 'An error occurred...';
  let message = 'Something went wrong.';

  if (error.status === 500) {
    title = '500 Error';
    message = error.data.message;
  }

  if (error.status === 404) {
    title = '404 Error';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
