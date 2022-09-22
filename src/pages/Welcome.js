import { Link, Route, Routes } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      {/* V6 */}
      <Link to="new-user">New User</Link>
      <Routes>
        <Route path="new-user" element={<p>Welcome, new user!</p>} />
      </Routes>

      {/* V5 */}
      {/* <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route> */}
    </section>
  );
};

export default Welcome;
