import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Reusable toast function
const showToast = (message, type) => {
    console.log("toast");
    
  const options = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  if (type === "success") {
    toast.success(message, options);
  } else if (type === "error") {
    toast.error(message, options);
  } else {
    toast.info("Default notification", options); // Handle unexpected types gracefully
  }
};

// Toastify Notification Component
const ToastifyNotification = () => {
  return (
    <>
      <ToastContainer />
    </>
  );
};

export default ToastifyNotification;
export { showToast };
