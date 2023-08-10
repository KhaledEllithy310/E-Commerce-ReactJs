import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Register = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  //Handler Input Values
  const HandlerInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "userName" && value.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //Handler Submit form
  const HandlerSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      setUsers([...users, user]);
      setUser({});
    }
    // Reset the user object to an empty object
  };

  useEffect(() => {
    console.log("user", user);
    console.log("users", users);
    console.log("error", error);
  }, [users]);
  return (
    <Container>
      <Row>
        <Col lg={6} className="mx-auto">
          <h2 className="p-3 text-center">Sign Up</h2>
          <form onSubmit={HandlerSubmit}>
            <div className="form-group form__container">
              <label htmlFor="">User Name</label>
              <input
                type="text"
                name="userName"
                className="form-control"
                onChange={HandlerInput}
                value={user.userName || ""}
              />
              {error && (
                <p className="alert alert-danger p-1 my-2">
                  Username must have at least 3 characters
                </p>
              )}
              {!error && (
                <p className="alert alert-success p-1 my-2">
                  Username is valid
                </p>
              )}
              {/* {user.userName && error ? (
                <p className="alert alert-danger p-1 my-2">Error</p>
              ) : (
                ""
                // <p className="alert alert-success p-1 my-2">success</p>
              )} */}
            </div>
            <div className="form-group form__container">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={HandlerInput}
                value={user.email || ""}
              />
            </div>
            <div className="form-group form__container">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={HandlerInput}
                value={user.password || ""}
              />
            </div>
            <button className="btn btn-dark" type="submit">
              Register
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
