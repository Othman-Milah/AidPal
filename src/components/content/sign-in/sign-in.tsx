import { h } from "preact";
import { useState } from "preact/hooks";
import "ojs/ojformlayout";
import "ojs/ojinputtext";
import "ojs/ojbutton";

type Props = {
  pageEventHandler: (value: string) => void;
  updateLoggedInUser: (value: string) => void;
  fetchUserIfExists: (username: string, password: string) => Promise<boolean>;
};

const SignIn = ({
  pageEventHandler,
  updateLoggedInUser,
  fetchUserIfExists,
}: Props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const logIn = async () => {
    if (await fetchUserIfExists(username, password)) {
      pageEventHandler("donor-page");
      updateLoggedInUser(username);
    } else {
      alert("password or username are wrong");
      setPassword("");
      setUsername("");
    }
  };

  return (
    <div class="container">
      <h2 class={"container__h1"}>Login</h2>
      <p class={"container__p"}>One step at a time for a better world</p>
      <oj-form-layout
        id="formLayoutOptions"
        max-columns="1"
        direction="column"
        user-assistance-density="compact"
        class="oj-helper-margin-auto"
        style={"top:50%"}
      >
        <oj-input-text
          id="f1"
          label-hint="Email"
          placeholder="Please write your email/username"
          value={username}
          // disabled="[[disableFormControls]]"
          messages-custom="[[error]]"
          required={true}
          onrawValueChanged={(e: CustomEvent) => {
            setUsername(e.detail?.value);
          }}
        ></oj-input-text>
        <oj-input-password
          id="f2"
          label-hint="Password"
          placeholder="please write your password"
          value={password}
          // disabled="[[disableFormControls]]"
          // messages-custom="warning"
          required={true}
          onrawValueChanged={(e: CustomEvent) => {
            setPassword(e.detail?.value);
          }}
        ></oj-input-password>
        <oj-button
          id="icon_button1"
          display="icons"
          class="oj-sm-width-full"
          onClick={() => {
            logIn();
          }}
        >
          Login
          {/* <span slot="endIcon" class="oj-ux-ico-information"></span> */}
        </oj-button>
      </oj-form-layout>
    </div>
  );
};

export default SignIn;
