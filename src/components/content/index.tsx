import { h } from "preact";
import { LandingPage } from "landing-page/landing-page";
import SignIn from "./sign-in/sign-in";
import { DonorPage } from "donor-page/donor-page";

type Props = {
  page: string;
  pageEventHandler: (value: string) => void;
  updateLoggedInUser: (value: string) => void;
  fetchUserIfExists: (username: string, password: string) => Promise<boolean>;
};

export function Content({
  page,
  pageEventHandler,
  updateLoggedInUser,
  fetchUserIfExists,
}: Props) {
  let pageContent = (page: string) => {
    switch (page) {
      case "landing-page":
        return <LandingPage />;
      case "sign-in":
        return (
          <SignIn
            pageEventHandler={pageEventHandler}
            updateLoggedInUser={updateLoggedInUser}
            fetchUserIfExists={fetchUserIfExists}
          />
        );
      case "donor-page":
        return <DonorPage />;
    }
  };
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
      {pageContent(page as string)}
    </div>
  );
}
