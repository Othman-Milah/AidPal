import { h } from "preact";
import "ojs/ojformlayout";
import "ojs/ojradioset";
import "ojs/ojoption";
import "ojs/ojselectcombobox";
import "ojs/ojinputnumber";

const DonorItem = () => {
  return (
    <div>
      <div class="wrap animate pop">
        <div class="overlay">
          <div class="overlay-content animate slide-left delay-2">
            <h1 class="animate slide-left pop delay-4">Donor Name</h1>
            <p
              class="animate slide-left pop delay-5"
              style="color: white; margin-bottom: 2.5rem;"
            >
              Package name
            </p>
          </div>
          <div class="image-content animate slide delay-5"></div>
          <div class="dots animate">
            <div class="dot animate slide-up delay-6"></div>
            <div class="dot animate slide-up delay-7"></div>
            <div class="dot animate slide-up delay-8"></div>
          </div>
        </div>
        <div class="text">
          {/* <p>
            Trees are woody perennial plants that are a member of the kingdom{" "}
            <em>Plantae</em>. All species of trees are grouped by their genus,
            family, and order. This helps make identifying and studying trees
            easier.
          </p>
          <p>
            Apart from providing oxygen for the planet and beauty when they
            bloom or turn color, trees are very useful. Certain species of
            hardwood and softwood trees are excellent for timber, making
            furniture, and paper.
          </p>
          <p>
            When managed properly, trees are a good source of renewable energy
            and construction material.
          </p> */}
          <oj-form-layout
            id="formLayoutOptions"
            max-columns="4"
            direction="row"
            user-assistance-density="compact"
          >
            <oj-radioset
              label-hint="Label Edge"
              value="{{labelEdge}}"
              aria-controls="myform"
            >
              <oj-option value="available">Available</oj-option>
              <oj-option value="notavailable">Not Available</oj-option>
              <oj-option value="start">start</oj-option>
            </oj-radioset>
            <oj-input-text
              id="input-phonenumber-id"
              labelHint="Item Name"
              value={"here should be item name"}
              onrawValueChanged={(e: CustomEvent): void => {
                // setPhoneNumber(e.detail?.value);
              }}
              required={true}
            />
            <oj-combobox-one>
              id="f8" label-hint="Category" //
              disabled="[[disableFormControls]]" required={true}
              <oj-option value="Internet Explorer">
                Windows10InternetExplorer
              </oj-option>
              <oj-option value="Clothes">Clothes</oj-option>
              <oj-option value="Food">Food</oj-option>
            </oj-combobox-one>
            <oj-input-number
              id="itemquntity"
              label-hint="Iten Quantity"
              max={120}
              min={0}
              step={1}
              value={0}
              required={true}
              // onrawValueChanged={(e: CustomEvent): void => {
              //   setAge(e.detail?.value);
              //   setUsername(name + lastName + age);
              // }}
            />
            <oj-input-number
              id="weight"
              label-hint="package weight"
              max={120}
              min={0}
              step={0.1}
              value={0}
              required={true}
              // onrawValueChanged={(e: CustomEvent): void => {
              //   setAge(e.detail?.value);
              //   setUsername(name + lastName + age);
              // }}
            />
            <oj-text-area
              id="input-address-id"
              label-hint="Package description"
              max-rows="-1"
              value={
                " By default write: this item was donated by donor name on date of donation and this item is in the package name:Description"
              }
              // onrawValueChanged={(e: CustomEvent): void => {
              //   setAddresse(e.detail?.value);
              // }}
              required={true}
            />
          </oj-form-layout>
        </div>
      </div>
    </div>
  );
};

export default DonorItem;
