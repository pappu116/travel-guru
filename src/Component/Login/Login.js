import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
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
  const handelSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setUser(signOutUser);
        setLoggedInUser(signOutUser);
      })
      .catch((err) => {});
  };
  const handelBlur = (e) => {
    console.log(e.target.name, e.target.value);
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

    //**************************//
    //password valid * /

    //end code//
    if (isEpValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  //***************************
  // new user Create codes * /
  const clickToFormSubmit = (e) => {
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
      .then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
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
  //reset or forfot password  code* /
  const forGotPassword = (email) => {
    var auth = firebase.auth();
    // var emailAddress = "user@example.com";

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
    <Container>
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
          <Form onClick={clickToFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                {newUser ? <h1>Sign Up</h1> : <h1>Login</h1>}
              </Form.Label>
              {newUser && (
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  onBlur={handelBlur}
                  required
                />
              )}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="text"
                name="email"
                placeholder="User Or Email"
                onBlur={handelBlur}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onBlur={handelBlur}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              {newUser && (
                <Form.Control
                  type="password"
                  name="re-Password"
                  placeholder="Re-Password"
                  onBlur={handelBlur}
                  required
                />
              )}
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
              <span
                className="text-warning fgotpass"
                onClick={forGotPassword(user.email)}
              >
                Forgot Password
              </span>
            </Form.Group>
            <Button variant="primary" type="submit" size="lg" block>
              {newUser ? "SingUp" : "Login"}
            </Button>
            <br />
          </Form>
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
            block
            onClick={fbLogedIn}
          >
            <span>
              <img style={{ height: "40px" }} src={Fblogo} alt="" />
            </span>
            <span className="ml-5">Continue With Facebook</span>
          </Button>
          <br />
          {/* Gooogle Handel Button */}
          <Button
            variant="secondary"
            type="submit"
            size="lg"
            block
            onClick={googleLogin}
          >
            <span>
              <img style={{ height: "40px" }} src={Glogo} alt="" />
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
