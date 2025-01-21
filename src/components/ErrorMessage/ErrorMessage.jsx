import toast from "react-hot-toast";
import { useEffect } from "react";

const ErrorMessage = ({ message }) => {
  useEffect(() => {
    if (message) {
      toast.error(message);
    }
  }, [message]);

  return <div className="error-message">{message}</div>;
};

export default ErrorMessage;
