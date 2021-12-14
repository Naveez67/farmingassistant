import React from "react";
import userService from "../../services/UserService";
import { toast } from "react-toastify"; 
import { Form } from "react-bootstrap";

const Login = (props) => {
  const [username, setusername] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div style={{marginTop:"4rem",width:"30%",marginLeft:"auto",marginRight:"auto"}}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*****"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: ".5rem",
              }}
              onClick={(e) => {
                userService
                  .login(username, password)
                  .then((data) => {
                    console.log(data);
                     window.location.href = "/";
                  })
                  .catch((err) => {
                    console.log(err.response.data);
                    toast.error(err.response.data, {
                      position: toast.POSITION.TOP_LEFT,})
                  });
              }}
            >
              Login
            </Form.Label>
          </Form.Group>
        </Form>
      </div>

  );
};

export default Login;
