import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "./components";
import { Footer } from "./components";
import {
  Aboutus,
  Career,
  Contactus,
  Plans,
  Home,
  Counsellors,
  Signin,
  Signup
} from "./pages";

function App() {
  return (
    <>
    <Navbar />
    
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        ></Route>
        <Route path="/counsellors" element={<Counsellors/>}></Route>
        <Route
          path="/aboutus"
          element={
              <Aboutus />
          }
        ></Route>
        <Route path="/plans" element={<Plans />}></Route>
        <Route
          path="/career"
          element={
              <Career />
          }
        ></Route>
        <Route
          path="/contactus"
          element={
              <Contactus />
          }
        ></Route>
        {/* <Route path="/allcoaches1" element={<AllCoaches1 />}></Route>
        <Route path="/allcoaches2" element={<AllCoaches2 />}></Route>
        <Route
          path="/userhome"
          element={
              <UserHome />
          }
        /> */}
        {/* <Route
          path="/usercommunity"
          element={
              <UserCommunity />
          }
        ></Route> */}
        <Route
          path="/signin"
          element={
              <Signin />
          }
        ></Route>
        <Route
          path="/signup"
          element={
              <Signup />
          }
        ></Route>
        {/* <Route
          path="/posts/all"
          element={
              <AllPosts />
          }
        ></Route>
        <Route
          path="/posts/:category"
          element={
              <CategoryPage />
          }
        ></Route> */}
      </Routes>
      <Footer />
    </>
  );
};
const GuestRoute = ({ children, ...rest }) => {
  const { authData } = useSelector((state) => state.auth);
  return authData ? (
    <Navigate to="/userhome" state={{ from: rest.location }} />
  ) : (
    <>
      <Navbar />
    {children}
      <Footer />
    </>
  );
};

const PrivateRoute = ({ children, ...rest }) => {
  const { authData } = useSelector((state) => state.auth);
  return authData ? (
    <>
      {/* <UserDashNav />
    {children} */}
    </>
  ) : (
    <Navigate to="/signin" state={{ from: rest.location }} />
  );
};

export default App;

