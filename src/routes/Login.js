import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import logo from "../img/logo.svg";
import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForm";
import { useAuth } from "../context/auth";

const Login = props => {
  console.log(props);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  const postLogin = () => {
    if (userName && password == "ciao") {
      setAuthTokens(true);
      setLoggedIn(true);
    } else {
      setIsError(true);
    }
    // axios
    //   .post("https://www.somePlace.com/auth/login", {
    //     userName,
    //     password
    //   })
    //   .then(result => {
    //     console.log(result.status);
    //     if (result.status === 200) {
    //       setAuthTokens(result.data);
    //       setLoggedIn(true);
    //     } else {
    //       setIsError(true);
    //     }
    //   })
    //   .catch(e => {
    //     setIsError(true);
    //   });
  };

  const referer = (props.location.state && props.location.state.referer) || "/";

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <Card>
      <Logo src={logo} />
      <Form>
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Non hai un account?</Link>
      {isError && <Error>Username o password errati!</Error>}
    </Card>
  );
};

export default Login;
