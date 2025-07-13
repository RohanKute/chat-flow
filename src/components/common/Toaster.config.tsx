import React from "react";
import { Toaster } from "react-hot-toast";

const ToasterConfig: React.FC = () => (
  <Toaster
    position="top-center"
    toastOptions={{
      duration: 3000,
      style: {
        fontFamily: "Arial, sans-serif",
        fontWeight: 600,
        fontSize: "14px",
      },
      success: {
        style: { background: "#4CAF50", color: "#ffffff" },
      },
      error: {
        style: { background: "#f44336", color: "#ffffff" },
      },
    }}
  />
);

export default ToasterConfig;