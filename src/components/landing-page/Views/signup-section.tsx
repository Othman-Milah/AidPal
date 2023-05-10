import { h } from "preact";
import "ojs/ojbutton";
import { ojButton } from "ojs/ojbutton";
import "ojs/ojlabel";

type Props = Readonly<{
  title: string;
  description: String;
  icon: string;
  image: string;
  setUserTypeFunc: (userType: string) => void;
}>;

const SignupSection = ({
  title,
  description,
  icon,
  image,
  setUserTypeFunc,
}: Props) => {
  const customSignUp = (e: ojButton.ojAction): void => {
    // alert("Card Clicked");
    // console.log(e.currentTarget);
    setUserTypeFunc(title);
    document.querySelector("#slide-out-container")?.classList.toggle("show");
  };

  const imageDivElement = () => {
    return (
      <div class="signup__container__image">
        <img src={image} alt="BeneficiaryImage" />
      </div>
    );
  };

  return (
    <div>
      {/* Slide out panel */}

      {/* SignUp Element */}
      <div class="signup__container">
        {title == "Donor" && imageDivElement()}
        <div class="signup__container__calltoaction">
          <h2>
            {title + " "}
            <span class={icon}></span>
          </h2>
          <p>{description}</p>
          <oj-button onojAction={customSignUp}>Sign Up!</oj-button>
        </div>
        {title !== "Donor" && imageDivElement()}
      </div>
    </div>
  );
};

export default SignupSection;
