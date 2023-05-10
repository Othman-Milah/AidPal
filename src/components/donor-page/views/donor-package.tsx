import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import "ojs/ojbutton";
import "ojs/ojconveyorbelt";

const DonorPackage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [chemicals, setChemicals] = useState([
    { name: "Hydrogen" },
    { name: "Helium" },
    { name: "Lithium" },
    { name: "Beryllium" },
    { name: "Boron" },
    { name: "Carbon" },
    { name: "Nitrogen" },
    { name: "Oxygen" },
    { name: "Fluorine" },
    { name: "Neon" },
    { name: "Sodium" },
    { name: "Magnesium" },
  ]);
  return (
    <div>
      <div id="sampleDemo" class="demo-padding demo-container">
        <div id="componentDemoContent" style="width: 1px; min-width: 100%;">
          <div id="conveyorbelt-vertical-example">
            <oj-conveyor-belt
              class="demo-vertical-height"
              orientation={windowWidth > 768 ? "vertical" : "horizontal"}
              data-oj-binding-provider="none"
            >
              <oj-button class="demo-ver-button oj-sm-margin-1x demo-full-height">
                <span
                  class={"oj-ux-ico-plus-circle"}
                  style={{ fontSize: "xxx-large" }}
                />{" "}
              </oj-button>
              {chemicals.map((element) => (
                <oj-button class="demo-ver-button oj-sm-margin-1x demo-full-height">
                  {element.name}
                </oj-button>
              ))}
              <oj-button class="demo-ver-button oj-sm-margin-1x demo-full-height">
                <span
                  class={"oj-ux-ico-plus-circle"}
                  style={{ fontSize: "xxx-large" }}
                />
              </oj-button>
            </oj-conveyor-belt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorPackage;
