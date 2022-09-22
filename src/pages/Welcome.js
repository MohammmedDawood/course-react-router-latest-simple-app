import { Link, Outlet } from "react-router-dom"; //, Route, Routes

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      {/* V6 */}
      <Link to="new-user">New User</Link>
      <Outlet />
      {/* <Routes>
        <Route path="new-user" element={<p>Welcome, new user!</p>} />
      </Routes> */}

      {/* V5 */}
      {/* <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route> */}
    </section>
  );
};

export default Welcome;
