import React, { useState, useContext } from "react";
import "./Login.css";
import Fullwarlogo from "../fullwarlogo.png";
import Toolbar from "../Components/Toolbar/Toolbar";
import { authContext } from "../context/AuthContext";
import { apiRequest } from "../utils/helper";

const Login = () => {
  const [uname, setUname] = useState("");
  const [pswrd, setPswrd] = useState("");
  const [loading, setLoading] = React.useState(false);

  const auth = useContext(authContext);

  const authHandler = async () => {
    try {
      setLoading(true);
      const userData = await apiRequest({
        url: "https://api.worldagainstrape.com/adminlogin",
        method: "post",
        bodyParams: {
          Username: uname,
          Password: pswrd
        }
      });
      const { data, success } = userData;
      if (success) {
        const { token, phoneno } = data;
        auth.setAuthStatus({
          token,
          phoneno
        });
      }
    } catch (err) {
      setLoading(false);
    }
  };
  return (
    <div style={{ height: "100%" }}>
      <Toolbar hideButton={true} />

      <div className="login-body">
        <div className="leftside">
          <div>
            <main>
              {" "}
              <img src={Fullwarlogo} alt="" />
            </main>
          </div>
        </div>
        <div className="rightside">
          <h2>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Login</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              authHandler();
            }}
          >
            <div className="container">
              <label htmlFor="uname">
                <b>Username</b>
              </label>
              <input
                type="text"
                onChange={e => setUname(e.target.value)}
                placeholder="Enter Username"
                name="uname"
                autoComplete="username"
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                autoComplete="current-password"
                onChange={e => setPswrd(e.target.value)}
                placeholder="Enter Password"
                name="psw"
                required
              />

              <button
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  authHandler();
                }}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
