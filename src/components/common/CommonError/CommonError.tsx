import { useCallback, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CommonErrorProps {
  error: Nullable<Error>;
  reset: () => void;
}

function CommonError({ error }: CommonErrorProps) {
  const notify = useCallback((errorMessage: string) => {
    toast.error(`${errorMessage}`, {
      autoClose: 3000,
      position: toast.POSITION.TOP_RIGHT,
      toastId: errorMessage,
    });
  }, []);

  useEffect(() => {
    if (error) {
      notify(error.message);
    }
  }, [error, notify]);

  return <ToastContainer />;
}

export default CommonError;
