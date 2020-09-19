import React, { useContext, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Login.css";
import Fblogo from "../../Icon/fb.png";
import Glogo from "../../Icon/google.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
    password: "",
  });
  const provider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const googleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
        // console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };
  //*************************** */
  // handel sing out cores area
  //************************* */
  // const handelSignOut = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then((res) => {
  //       const signOutUser = {
  //         isSignedIn: false,
  //         name: "",
  //         email: "",
  //         photo: "",
  //       };
  //       setUser(signOutUser);
  //       setLoggedInUser(signOutUser);
  //     })
  //     .catch((err) => {});
  // };
  const handelBlur = (e) => {
    // console.log(e.target.name, e.target.value);
    //******************************** * /
    //Ep =email and password
    //email and password Check validation code
    let isEpValid = true;
    if (e.target.name === "email") {
      isEpValid = /\S+@\S+\.\S+/.test(e.target.value);
      console.log(isEpValid);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isEpValid = passwordHasNumber && isPasswordValid;
    }

    if (isEpValid) {
      //**************************//
      //password valid * /

      //end code//
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  //***************************
  // new user Create codes * /
  const handelSubmit = (e) => {
    if (newUser && e.target[3].value !== e.target[4].value) {
      alert("Please Field Must Valid Password");
    } else {
      if (newUser && user.email && user.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            const newUserInfo = { ...user };
            newUserInfo.error = "";
            newUserInfo.success = true;
            setUser(newUserInfo);
            updateUserName(user.name);
            history.replace(from);
            verifyingEmail();
          })
          .catch((error) => {
            const newUserInfo = { ...user };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
          });
      }
    }
    // console.log(e.target[3].value);

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);

          history.replace(from);
          console.log("sign in user info", res.user);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };

  //******************************** */
  //update user name area
  const updateUserName = (name) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("user nmae updated successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const fbLogedIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };

        // console.log(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
        // console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };
  //***************************//
  //Email Verification codes * /
  const verifyingEmail = () => {
    var user = firebase.auth().currentUser;

    user
      .sendEmailVerification()
      .then(function () {
        // Email sent.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  //************************
  // reset or forfot password  code* /

  const ForgotPassword = (email) => {
    var auth = firebase.auth();

    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        // Email sent.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <Container className="art-from">
      <Row>
        <Col sm={6} className="logggedin-from offset-md-3">
          <h4 style={{ color: "red" }}>{user.error}</h4>
          <div className="text-center">
            {user.success && (
              <h4 style={{ color: "green" }}>
                User {newUser ? "Created" : "Logged In"} Successfully
              </h4>
            )}
          </div>
          {newUser ? <h1>Create an account</h1> : <h1>Login</h1>}
          <form onSubmit={handelSubmit}>
            {newUser && (
              <input
                name="firstname"
                type="text"
                onBlur={handelBlur}
                placeholder="First Name"
              />
            )}
            <br />
            {newUser && (
              <input
                name="lastname"
                type="text"
                onBlur={handelBlur}
                placeholder="Last Name"
              />
            )}
            <br />
            <input
              type="email"
              name="email"
              onBlur={handelBlur}
              placeholder="Email Address"
              required
            />
            <br />
            <input
              type="password"
              name="password"
              onBlur={handelBlur}
              id=""
              placeholder=" Password"
              required
            />
            <br />
            {newUser && (
              <input
                type="password"
                name="confarmPassword"
                onBlur={handelBlur}
                id=""
                placeholder="Confarm Password"
                required
              />
            )}
            <br />

            {!newUser && (
              <input
                type="checkbox"
                name="Remem"
                style={{ width: "10px" }}
                id=""
              />
            )}

            {!newUser && (
              <label htmlFor="Remem">
                Re-member
                <span
                  className="fgotpass "
                  onClick={() => ForgotPassword(user.email)}
                >
                  Forgot Password
                </span>
              </label>
            )}
            <br />
            <Button variant="warning" type="submit" size="lg" block>
              {newUser ? "Sign Up" : "Sign In"}
            </Button>
          </form>
          <p className="text-center">
            {newUser ? "Already have an account?" : "Don't have an account?"}
            <span
              className="text-warning pointer"
              onClick={() => setNewUser(!newUser)}
            >
              {newUser ? "Login" : " Create an account"}
            </span>
          </p>

          <p className="border"></p>
          {/* facebook Handel Button */}
          <Button
            variant="secondary"
            type="submit"
            size="lg"
            style={{ borderRadius: "50px" }}
            block
            onClick={fbLogedIn}
          >
            <span>
              <img style={{ height: "30px" }} src={Fblogo} alt="" />
            </span>
            <span className="ml-5">Continue With Facebook</span>
          </Button>
          <br />
          {/* Gooogle Handel Button */}
          <Button
            variant="secondary"
            type="submit"
            size="lg"
            style={{ borderRadius: "50px" }}
            block
            onClick={googleLogin}
          >
            <span>
              <img style={{ height: "30px" }} src={Glogo} alt="" />
            </span>
            <span className="ml-5">Continue With Google</span>
          </Button>
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
