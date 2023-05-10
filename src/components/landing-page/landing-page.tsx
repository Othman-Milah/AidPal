import { ExtendGlobalProps, registerCustomElement } from "ojs/ojvcomponent";
import { h, ComponentProps, ComponentType } from "preact";
import componentStrings = require("ojL10n!./resources/nls/landing-page-strings");
import "css!./landing-page-styles.css";
import HeroBanner from "./Views/hero-banner";
import SignupSection from "./Views/signup-section";
import SignUpForm from "./Views/signup-form";
import { useState } from "preact/hooks";

type Props = Readonly<{
  message?: string;
}>;

const userTypesInfo = [
  {
    title: "Beneficiary",
    description:
      "a person who receives donations of food or clothing from our donors. By signing up as a beneficiary, you can gain access to these donations to help support yourself or your organization.",
    icon: "oj-ux-ico-blood-donation",
    image:
      "https://objectstorage.eu-madrid-1.oraclecloud.com/p/VahhCM3h6hfK5bsrsr1Y_oURuYzd460m0XoNZk7aspsquE0HnGN3FBClM4Jqoez_/n/ax3ymupp8kgr/b/GCN_Bucket/o/BenDonVolpattern-gb08752b1e_1920.jpg",
  },
  {
    title: "Donor",
    description:
      "a donor is someone who donates food or clothing to benefit others . By signing up as a donor, you can make a difference in your community by providing support to those who need it most.",
    icon: "oj-ux-ico-loan-request",
    image:
      "https://objectstorage.eu-madrid-1.oraclecloud.com/p/VahhCM3h6hfK5bsrsr1Y_oURuYzd460m0XoNZk7aspsquE0HnGN3FBClM4Jqoez_/n/ax3ymupp8kgr/b/GCN_Bucket/o/BenDonVolpattern-gb08752b1e_1920.jpg",
  },
  {
    title: "Volunteer",
    description:
      "a volunteer is someone who helps with tasks such as collecting and distributing donations. By signing up as a volunteer, you can play an active role in supporting your community and making a positive impact on the lives of others.",
    icon: "oj-ux-ico-bandaid",
    image:
      "https://objectstorage.eu-madrid-1.oraclecloud.com/p/VahhCM3h6hfK5bsrsr1Y_oURuYzd460m0XoNZk7aspsquE0HnGN3FBClM4Jqoez_/n/ax3ymupp8kgr/b/GCN_Bucket/o/BenDonVolpattern-gb08752b1e_1920.jpg",
  },
];

/**
 *
 * @ojmetadata version "1.0.0"
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
 *
 */
function LandingPageImpl({ message = "Hello from  landing-page" }: Props) {
  const [userType, setUserType] = useState("");

  const setUserTypeFunc = (userType: string): void => {
    setUserType(userType);
  };

  return (
    <div>
      <div style={"z-index:100"} id="slide-out-container">
        {/* <!-- Slide-out panel content goes here --> */}
        <oj-label class="signup__label">Sign Up as {userType}</oj-label>
        <hr style={"margin-top:2rem;margin-bottom:1rem"} />
        <SignUpForm userType={userType} />
      </div>
      <HeroBanner />
      {userTypesInfo.map((userType) => (
        <SignupSection
          title={userType.title}
          description={userType.description}
          icon={userType.icon}
          image={userType.image}
          setUserTypeFunc={setUserTypeFunc}
        />
      ))}
    </div>
  );
}

export const LandingPage: ComponentType<
  ExtendGlobalProps<ComponentProps<typeof LandingPageImpl>>
> = registerCustomElement("landing-page", LandingPageImpl);
