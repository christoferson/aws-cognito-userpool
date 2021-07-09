import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
      },
      onFailure: (err) => {
        console.error("onFailure: ", err);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
  };
  /*
  const cognitoUser = UserPool.getCurrentUser()
	if (cognitoUser) {
	  // sign inしている状態
	  console.log('signing in')
	} else {
	  // sign inしていない状態
	  console.log('no signing in')
	}

  	if (cognitoUser) {
	  		return (<p>Signed In: {cognitoUser.username}</p>);
		}
	*/
  return (
    <div>    	
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(event) => setEmail(event.target.value)}></input>
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(event) => setPassword(event.target.value)}></input>
		<br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
