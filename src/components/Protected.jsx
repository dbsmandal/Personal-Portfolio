import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
 if (!isLoggedIn) {
 return <Navigate to="/MySkills"  />;
 }
 return children;
};
export default Protected;