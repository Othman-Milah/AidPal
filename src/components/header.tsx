import { h } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import "ojs/ojtoolbar";
import "ojs/ojmenu";
import "ojs/ojbutton";

type Props = Readonly<{
  appName: string;
  userLogin: string;
  pageEventHandler: (value: string) => void;
  updateLoggedInUser: (value: string) => void;
}>;

export function Header({
  appName,
  userLogin,
  pageEventHandler,
  updateLoggedInUser,
}: Props) {
  const mediaQueryRef = useRef<MediaQueryList>(
    window.matchMedia(ResponsiveUtils.getFrameworkQuery("sm-only")!)
  );

  const [isSmallWidth, setIsSmallWidth] = useState(
    mediaQueryRef.current.matches
  );

  useEffect(() => {
    mediaQueryRef.current.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQueryRef.current.removeEventListener(
        "change",
        handleMediaQueryChange
      );
  }, [mediaQueryRef]);

  const changeEventHandler = async (e: CustomEvent): Promise<void> => {
    // console.log(e.detail);
    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for 0ms
    // console.log(e.detail.selectedValue);
    pageEventHandler(e.detail.selectedValue);
    if (e.detail.selectedValue === "landing-page") updateLoggedInUser("");
  };

  function handleMediaQueryChange(e: MediaQueryListEvent) {
    setIsSmallWidth(e.matches);
  }

  function getDisplayType() {
    return isSmallWidth ? "icons" : "all";
  }

  function getEndIconClass() {
    return isSmallWidth
      ? "oj-icon demo-appheader-avatar"
      : "oj-component-icon oj-button-menu-dropdown-icon";
  }

  const signIn = async (e: any) => {
    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for 0ms=
    pageEventHandler("sign-in");
  };

  return (
    <header role="banner" class="oj-web-applayout-header">
      <div class="oj-web-applayout-max-width oj-flex-bar oj-sm-align-items-center">
        <div class="oj-flex-bar-middle oj-sm-align-items-baseline">
          {/* <span
            role="img"
            class="oj-icon demo-oracle-icon"
            title="AidPal logo"
            alt="AidPal Logo"
          ></span> */}
          <img
            class="oj-icon demo-oracle-icon"
            src={
              "https://objectstorage.eu-madrid-1.oraclecloud.com/p/phYgT7WLpPuNoLhWa6dsFsoSfPXbEP2SMaCCsSLJgZnlcolVYkBzXsz7r_Pqz4oR/n/ax3ymupp8kgr/b/GCN_Bucket/o/AidPalLogoAidPal_Logo_NoBackground.png"
            }
            alt="AidPal Logo"
          />
          {/* <h1
            class="oj-sm-only-hide oj-web-applayout-header-title"
            title="Application Name"
          >
            {appName}
          </h1> */}
        </div>
        <div class="oj-flex-bar-end">
          {userLogin === "" ? (
            <a class={"landing__page__signin"} value="sign-in" onClick={signIn}>
              Sign In
            </a>
          ) : (
            <oj-toolbar>
              <oj-menu-button
                id="userMenu"
                display={getDisplayType()}
                chroming="borderless"
              >
                <span>{userLogin}</span>
                <span slot="endIcon" class={getEndIconClass()}></span>
                <oj-menu id="menu1" slot="menu" onojAction={changeEventHandler}>
                  <oj-option id="pref" value="landing-page">
                    Landing Page
                  </oj-option>
                  <oj-option id="help" value="sign-in">
                    SignIn
                  </oj-option>
                  <oj-option id="signout" value="landing-page">
                    SignOut
                  </oj-option>
                  {/* <oj-option id="out" value="out">Sign Out</oj-option> */}
                </oj-menu>
              </oj-menu-button>
            </oj-toolbar>
          )}
        </div>
      </div>
    </header>
  );
}
