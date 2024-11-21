import { useState } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";

const AuthModal = () => {
  const [loginView, setLoginView] = useState(true);
  if (loginView) {
    return <Login setLoginView={setLoginView} />;
  }
  return <Register setLoginView={setLoginView} />;
};

export default AuthModal;
