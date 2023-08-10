import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Register = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [message, setMessage] = useState({});

  //Handler Input Values
  const HandlerInput = (e) => {
    const { name, value } = e.target;
    if (name === "userName" && value.length < 3 && value.length != 0) {
      let errorName = "Username must have at least 3 characters";
      setMessage({ ...message, errorName });
      setError({ ...error, name: true });
    } else if (name === "userName" && value.length == 0) {
      let errorName = "Username is Required";
      setMessage({ ...message, errorName });
      setError({ ...error, name: true });
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        let errorEmail = "Invalid email address";
        setMessage({ ...message, errorEmail });

        setError({ ...error, email: true });
      } else {
        setError({});
      }
    } else if (name === "password") {
      const uppercaseRegex = /[A-Z]/g;
      if (
        value.length < 10 ||
        !uppercaseRegex.test(value) ||
        value.match(uppercaseRegex).length < 3
      ) {
        let errorPassword =
          "Invalid Password. Password must be at least 10 characters long and contain at least 3 uppercase letters.";
        setMessage({ ...message, errorPassword });
        setError({ ...error, password: true });
      } else {
        setError({});
      }
    } else {
      setError({});
    }
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //Handler Submit form
  const HandlerSubmit = (e) => {
    e.preventDefault();
    console.log(error);
    if (Object.keys(error).length === 0) {
      setUsers([...users, user]);
      setUser({});
    }
    // Reset the user object to an empty object
  };

  useEffect(() => {
    console.log("user", user);
    console.log("users", users);
    console.log("error", error);
  }, [error, user, users]);
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
              {error.name && (
                <p className="alert alert-danger p-1 my-2">
                  {message.errorName}
                </p>
              )}
              {/* {error &&  (
                <p className="alert alert-success p-1 my-2">
                  Username is valid
                </p>
              )} */}
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
              {error.email && (
                <p className="alert alert-danger p-1 my-2">
                  {message.errorEmail}
                </p>
              )}
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
              {error.password && (
                <p className="alert alert-danger p-1 my-2">
                  {message.errorPassword}
                </p>
              )}
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
