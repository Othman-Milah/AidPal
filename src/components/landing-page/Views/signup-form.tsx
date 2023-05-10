import { h } from "preact";
import { useState } from "preact/hooks";
import "ojs/ojformlayout";
import "ojs/ojradioset";
import "ojs/ojoption";
import "ojs/ojcheckboxset";
import "ojs/ojcollapsible";
import "ojs/ojinputnumber";

type Props = Readonly<{
  userType: string;
}>;

const SignUpForm = ({ userType }: Props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddresse] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const closePanel = () => {
    document.querySelector("#slide-out-container")?.classList.toggle("show");
  };

  const submit = (e: CustomEvent): void => {
    alert("Hey");
    e.preventDefault();

    const form = e.target;
    const data = {
      name: name,
      email: email,
      phone: phoneNumber,
      address: address,
      age: age,
      username: username,
    };

    fetch("http://localhost:8080/donors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        // Handle successful response here
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error response here
      });
  };

  return (
    <oj-form-layout
      id="formLayoutOptions"
      max-columns="2"
      direction="row"
      user-assistance-density="compact"
    >
      {/* <oj-input-text
                id="f1"
                label-hint="Email"
                placeholder='Please provide your email address'
                value=""
                messages-custom="Support Correct structure"
                required="true"
                </oj-input-text> */}
      <oj-input-text
        id="input-email-id"
        labelHint="Email"
        placeholder="Please provide a valid email address"
        value={email}
        onrawValueChanged={(e: CustomEvent): void => {
          setEmail(e.detail?.value);
        }}
        required={true}
      />
      <oj-input-text
        id="input-name-id"
        labelHint="Name"
        placeholder="Please provide your legal name"
        value={name}
        onrawValueChanged={(e: CustomEvent): void => {
          setName(e.detail?.value);
          setUsername(name + lastName + age);
        }}
        required={true}
      />
      <oj-input-text
        id="input-lastname-id"
        labelHint="Last Name"
        placeholder="Please provide your legal last name"
        value={lastName}
        onrawValueChanged={(e: CustomEvent): void => {
          setLastName(e.detail?.value);
          setUsername(name + lastName + age);
        }}
        required={true}
      />
      <oj-input-text
        id="input-phonenumber-id"
        labelHint="Phone Number"
        placeholder="Please provide your phone number"
        value={phoneNumber}
        onrawValueChanged={(e: CustomEvent): void => {
          setPhoneNumber(e.detail?.value);
        }}
        required={true}
      />
      <oj-input-number
        id="input-age-id"
        label-hint="Please provide your age"
        max={120}
        min={0}
        step={1}
        placeholder="Please provide your age"
        value={age}
        required={true}
        onrawValueChanged={(e: CustomEvent): void => {
          setAge(e.detail?.value);
          setUsername(name + lastName + age);
        }}
      />
      <oj-text-area
        id="input-address-id"
        label-hint="Please provide your current living address"
        max-rows="-1"
        placeholder="Provide your current adresse"
        value={address}
        onrawValueChanged={(e: CustomEvent): void => {
          setAddresse(e.detail?.value);
        }}
        required={true}
      />
      <oj-input-text
        id="input-username-id"
        labelHint="Username"
        placeholder="Your username will be your full name + your age"
        value={username}
        // onrawValueChanged={(e: CustomEvent): void => {
        //   setUsername(e.detail?.value);
        // }}
        disabled
      />
      <oj-input-password
        id="f2"
        label-hint="Password"
        placeholder="please write your password"
        value={password}
        // disabled="[[disableFormControls]]"
        messages-custom="{{messages}}"
        required={true}
        onrawValueChanged={(e: CustomEvent) => {
          setPassword(e.detail?.value);
        }}
      ></oj-input-password>
      <oj-collapsible class="oj-sm-margin-4x-bottom">
        <h6 slot="header">Advanced options</h6>
        <div class="oj-panel oj-bg-info-30">
          {userType === "Volunteer" && (
            <oj-radioset
              label-hint="Availability"
              value="{{Availability}}"
              aria-controls="myform"
            >
              <oj-option value="top">Available</oj-option>
              <oj-option value="inside">not Available</oj-option>
            </oj-radioset>
          )}
          {userType === "Beneficiary" && (
            <oj-checkboxset label-hint="Disabilities" id="stylesBooleans">
              <oj-option value="Mobility impairments">
                Mobility impairments{" "}
              </oj-option>
              <oj-option value="Visual impairments">
                Visual impairments
              </oj-option>
              <oj-option value="Hearing impairments">
                Hearing impairments
              </oj-option>
              <oj-option value="Mental health impairments">
                Mental health impairments
              </oj-option>
              <oj-option value="Chronic illnesses">Chronic illnesses</oj-option>
            </oj-checkboxset>
          )}
        </div>
      </oj-collapsible>
      <br />
      <div class={"form__layout__buttons"}>
        <oj-button onojAction={submit}>Submit</oj-button>
        <oj-button onojAction={closePanel}>Close</oj-button>
      </div>
    </oj-form-layout>
  );
};

export default SignUpForm;
