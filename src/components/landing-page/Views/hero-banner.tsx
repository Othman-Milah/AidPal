import { h } from "preact";
import { useState } from "preact/hooks";
import "ojs/ojinputtext";
import { ojButton } from "ojs/ojbutton";
import "ojs/ojbutton";

const HeroBanner = () => {
  const [email, setEmail] = useState("");

  const updateEmail = (e: CustomEvent): void => {
    // console.log(e.detail?.value);
    setEmail(e.detail?.value);
  };

  const sendEmailTo = (e: CustomEvent): void => {
    e.preventDefault();

    fetch("http://localhost:8080/email/basic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Request body data
      }),
    })
      .then((response) => {
        // Handle response
        alert("email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section class="hero__banner">
      <div class="hero__content">
        <h1>Welcome To AidPal</h1>
        <p>
          Our mission is to create a platform that enables donors and
          beneficiaries to connect with ease, so that no one in our community
          goes without basic needs such as food and clothing. By leveraging the
          power of technology and community, we aim to streamline the donation
          process and provide a more efficient and effective solution for those
          in need.
        </p>
        <form class={"hero__content__form"}>
          {/* <input type="text" placeholder="Enter your email" /> */}
          <oj-input-text
            id="text-email-input"
            value={email}
            label-hint="Email"
            label-edge="inside"
            onrawValueChanged={(e) => {
              updateEmail(e);
            }}
          ></oj-input-text>
          {/* <button type="submit">Sign up</button> */}
          <oj-button id="emailbutton" onojAction={sendEmailTo}>
            <span slot="endIcon" class="oj-ux-ico-email"></span>
            Send
          </oj-button>
        </form>
      </div>
      <img
        class={"hero__content__image"}
        src="https://objectstorage.eu-madrid-1.oraclecloud.com/p/OJIuG4yQ3weQQ3QRoaJ3XSp46vK3grc18Hsj8Nqc6kYZf3WJeHxSjxEkEjFqtUzp/n/ax3ymupp8kgr/b/GCN_Bucket/o/Piggybiggy.jpg"
        alt="Hero Image"
      />
    </section>
  );
};

export default HeroBanner;
