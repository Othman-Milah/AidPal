import { h } from "preact";
import { useState, useRef } from "preact/hooks";
import "ojs/ojtable";
import "ojs/ojbutton";
import MutableArrayDataProvider = require("ojs/ojmutablearraydataprovider");
import { ojTable } from "ojs/ojtable";
import { ojButton, ojButtonsetOne } from "ojs/ojbutton";

const Data = [
  {
    DonorId: 10,
    DonorName: "Othman",
    DonorEmail: "othman@gmail.com",
    DonorPhone: 987654321,
    Address: "California 11 lovik street",
    DonorAge: 10,
  },
  {
    DonorId: 10,
    DonorName: "Othman",
    DonorEmail: "othman@gmail.com",
    DonorPhone: 87654321,
    Address: "California 11 lovik street",
    DonorAge: 10,
  },
  {
    DonorId: 10,
    DonorName: "Othman",
    DonorEmail: "othman@gmail.com",
    DonorPhone: 987654321,
    Address: "California 11 lovik street",
    DonorAge: 10,
  },
  {
    DonorId: 10,
    DonorName: "Othman",
    DonorEmail: "othman@gmail.com",
    DonorPhone: 987654321,
    Address: "California 11 lovik street",
    DonorAge: 10,
  },
  {
    DonorId: 10,
    DonorName: "Othman",
    DonorEmail: "othman@gmail.com",
    DonorPhone: 987654321,
    Address: "California 11 lovik street",
    DonorAge: 10,
  },
  {
    DonorId: 10,
    DonorName: "Othman",
    DonorEmail: "othman@gmail.com",
    DonorPhone: 987654321,
    Address: "California 11 lovik street",
    DonorAge: 10,
  },
  {
    DonorId: 10,
    DonorName: "Othman",
    DonorEmail: "othman@gmail.com",
    DonorPhone: 987654321,
    Address: "California 11 lovik street",
    DonorAge: 10,
  },
  {
    DonorId: 10,
    DonorName: "Othman",
    DonorEmail: "othman@gmail.com",
    DonorPhone: 987654321,
    Address: "California 11 lovik street",
    DonorAge: 10,
  },
];

type Dept = {
  DepartmentId: number;
  DepartmentName: string;
  LocationId: number;
  ManagerId: number;
};

const dataprovider: MutableArrayDataProvider<Dept["DepartmentId"], Dept> =
  new MutableArrayDataProvider(Data, {
    keyAttributes: "DepartmentId",
    implicitSort: [{ attribute: "DepartmentId", direction: "ascending" }],
  });

const DonorTable = () => {
  const [editRow, setEditRow] = useState<any>();
  const cancelEdit = useRef(false);

  const insertNewDonation = () => {
    alert("Start");
    const url = "http://143.47.59.22:8080/donations";
    const data = {
      beneficiary: "John Doe",
      donationDate: "2023-05-11",
      deliveryId: 123,
      donorId: 1,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData); // Handle the response data
      })
      .catch((error) => {
        console.error("Error:", error); // Handle any errors
      });
    alert("ENDED");
  };

  const actionColumn = (): any => {
    return (
      <oj-button
        onojAction={() => {
          insertNewDonation();
        }}
      >
        Insert
      </oj-button>
    );
  };

  return (
    <oj-table
      id="table"
      aria-label="Departments Table"
      // accessibility.row-header="depName"
      data={dataprovider}
      selection-mode='{"row": "multiple", "column": "multiple"}'
      //   dnd='{"reorder": {"columns": "enabled"}}'
      scroll-policy="loadMoreOnScroll"
      scroll-policy-options='{"fetchSize": 6}'
      columns={[
        {
          headerText: "DonorId",
          field: "DonorId",
          headerClassName: "oj-sm-only-hide",
          className: "oj-sm-only-hide",
          resizable: "enabled",
          id: "DonorId",
        },
        {
          headerText: "Name",
          field: "DonorName",
          resizable: "enabled",
          id: "DonorName",
        },
        {
          headerText: "Email",
          field: "DonorEmail",
          headerClassName: "oj-sm-only-hide",
          className: "oj-sm-only-hide",
          resizable: "enabled",
          id: "DonorEmail",
        },
        {
          headerText: "Phone",
          field: "DonorPhone",
          resizable: "enabled",
          id: "DonorPhone",
        },
        {
          headerText: "Address",
          field: "DonorAddress",
          headerClassName: "oj-md-down-hide",
          className: "oj-md-down-hide",
          resizable: "enabled",
          id: "Address",
        },
        {
          headerText: "Age",
          field: "DonorAge",
          headerClassName: "oj-md-down-hide",
          className: "oj-md-down-hide",
          resizable: "enabled",
          id: "DonorAge",
        },
        {
          headerText: "Action",
          resizable: "disabled",
          template: "actionTemplate",
        },
      ]}
      class="demo-table-container"
    >
      <template slot="actionTemplate" render={actionColumn}></template>
    </oj-table>
  );
};

export default DonorTable;
