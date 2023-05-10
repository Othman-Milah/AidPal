import { registerCustomElement } from "ojs/ojvcomponent";
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Context = require("ojs/ojcontext");
import { Footer } from "./footer";
import { Header } from "./header";
import { Content } from "./content/index";
import CoreRouter = require("ojs/ojcorerouter");
import UrlParamAdapter = require("ojs/ojurlparamadapter");

type Props = Readonly<{
  appName?: string;
  userLogin?: string;
}>;

type User = Readonly<{
  don_id: number;
  name: string | null;
  email: string | null;
  phone: number | null;
  address: string | null;
  age: number | null;
  username: string | null;
}>;

type Route = {
  path: string;
  detail?: object;
  redirect?: string;
};

const routeArray: Array<Route> = [
  { path: "", redirect: "landing-page" },
  { path: "landing-page", detail: { label: "LandingPage" } },
  { path: "sign-in", detail: { label: "SignIn" } },
  { path: "donor-page", detail: { label: "DonorPage" } },
];

const router = new CoreRouter<CoreRouter.DetailedRouteConfig>(routeArray, {
  urlAdapter: new UrlParamAdapter(),
});
const pageEventHandler = (value: string): void => {
  router.go({ path: value });
};

export const App = registerCustomElement(
  "app-root",
  ({ appName = "AidPal", userLogin = "" }: Props) => {
    const [routePath, setRoutePath] = useState<string>("");
    const [loggedInUser, setLoggedInUser] = useState("");
    const [user, setUser] = useState({});

    useEffect(() => {
      Context.getPageContext().getBusyContext().applicationBootstrapComplete();
      router.currentState.subscribe(routerUpdated);
      router.sync();
    }, [routePath]);

    const fetchUserIfExists = async (
      username: string,
      password: string
    ): Promise<boolean> => {
      alert("checking for username " + username);
      let found = false;
      try {
        const response = await fetch("http://localhost:8080/donors/list");
        const data = await response.json();
        data.forEach((userInfo: User) => {
          if (
            userInfo.username === username &&
            userInfo.username === username
          ) {
            alert("user found");
            found = true;
            setUser(userInfo);
          }
        });
      } catch (error) {
        console.error(error);
      }
      return found;
    };

    const routerUpdated = (
      actionable: CoreRouter.ActionableState<CoreRouter.DetailedRouteConfig>
    ): void => {
      // Update our state based on new router state
      const newPath = actionable.state?.path;
      setRoutePath(newPath);
    };

    const updateLoggedInUser = (name: string) => {
      setLoggedInUser(name);
    };

    return (
      <div id="appContainer" class="oj-web-applayout-page">
        <Header
          appName={appName}
          userLogin={loggedInUser}
          pageEventHandler={pageEventHandler}
          updateLoggedInUser={updateLoggedInUser}
        />
        <Content
          page={routePath}
          pageEventHandler={pageEventHandler}
          updateLoggedInUser={updateLoggedInUser}
          fetchUserIfExists={fetchUserIfExists}
        />
        <Footer />
      </div>
    );
  }
);
