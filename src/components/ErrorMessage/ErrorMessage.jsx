import toast from "hot-toast";
import { useEffect } from "react";

const ErrorMessage = ({ message }) => {
  useEffect(() => {
    toast.error(message);
  }, [message]);

  return null;
};

export default ErrorMessage;
