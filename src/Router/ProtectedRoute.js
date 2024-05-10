/* eslint-disable react/prop-types */
import UserAuth from "../Custom-hooks/UserAuth";
import { useNavigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser } = UserAuth();

  return currentUser ? children : navigate("/login");
};
