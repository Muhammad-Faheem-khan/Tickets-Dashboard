import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

function Login() {
  const navigate = useNavigate();
  const handleLoginReidrect = () => {
    navigate("dashboard");
  };

  return (
    <div className="h-screen relative flex flex-col items-center justify-center overflow-y-hidden bg-[#F9F8FF] lg:grid lg:grid-cols-2 lg:justify-items-center lg:content-center">
      Login Page
      <Button
        variant="primary"
        className="mt-8 p-4 bg-primary text-white"
        onClick={handleLoginReidrect}
      >
        Go to Dashboard
      </Button>
    </div>
  );
}

export default Login;
