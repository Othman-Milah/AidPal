import { ExtendGlobalProps, registerCustomElement } from "ojs/ojvcomponent";
import { h, ComponentProps, ComponentType } from "preact";
import componentStrings = require("ojL10n!./resources/nls/donor-page-strings");
import "css!./donor-page-styles.css";
import DonorTable from "./views/donor-table";
import DonorPackage from "./views/donor-package";
import DonorItem from "./views/donor-item";

type Props = Readonly<{
  message?: string;
}>;

/**
 *
 * @ojmetadata version "1.0.0"
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
 *
 */
function DonorPageImpl({ message = "Hello from  donor-page" }: Props) {
  return (
    <div class={"donor__container"}>
      <div class={"donor__donation__list"}>
        <DonorTable />
      </div>
      <div class={"donor__donation__info"}>
        <div class={"donor__donation__info__packages"}>
          <DonorPackage />
        </div>
        <div class={"donor__donation__info__items"}>
          <DonorItem />
        </div>
      </div>
    </div>
  );
}

export const DonorPage: ComponentType<
  ExtendGlobalProps<ComponentProps<typeof DonorPageImpl>>
> = registerCustomElement("donor-page", DonorPageImpl);
