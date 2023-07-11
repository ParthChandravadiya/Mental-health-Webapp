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
  Signup,
  UserDashNav,
  UserHome,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        />
        <Route
          path="/counsellors"
          element={
            <GuestRoute>
              <Counsellors />
            </GuestRoute>
          }
        />
        <Route
          path="/aboutus"
          element={
            <GuestRoute>
              <Aboutus />
            </GuestRoute>
          }
        />
        <Route path="/plans" element={<Plans />} />
        <Route
          path="/career"
          element={
            <GuestRoute>
              <Career />
            </GuestRoute>
          }
        />
        <Route
          path="/contactus"
          element={
            <GuestRoute>
              <Contactus />
            </GuestRoute>
          }
        />
        {/* <Route path="/allcoaches1" element={<AllCoaches1 />}></Route>
        <Route path="/allcoaches2" element={<AllCoaches2 />}></Route> */}
        <Route
          path="/userhome"
          element={
            // <PrivateRoute>
              <UserHome />
            // </PrivateRoute>
          }
        />
        {/* <Route
          path="/usercommunity"
          element={
              <UserCommunity />
          }
        ></Route> */}
        <Route
          path="/signin"
          element={
            <GuestRoute>
              <Signin />
            </GuestRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <GuestRoute>
              <Signup />
            </GuestRoute>
          }
        />
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
    </>
  );
}

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
      <UserDashNav />
      {children}
    </>
  ) : (
    <Navigate to="/signin" state={{ from: rest.location }} />
  );
};

export default App;
