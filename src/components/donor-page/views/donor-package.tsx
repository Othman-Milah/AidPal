import { h } from "preact";
import { useState } from "preact/hooks";
import "ojs/ojbutton";
import "ojs/ojconveyorbelt";

const DonorPackage = () => {
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
              orientation="vertical"
              data-oj-binding-provider="none"
            >
              {chemicals.map((element) => (
                <oj-button class="demo-ver-button oj-sm-margin-1x">
                  {element.name}
                </oj-button>
              ))}
            </oj-conveyor-belt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorPackage;
