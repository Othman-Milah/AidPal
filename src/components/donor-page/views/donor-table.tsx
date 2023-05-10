import { h } from "preact";
import "ojs/ojtable";
import MutableArrayDataProvider = require("ojs/ojmutablearraydataprovider");

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
      ]}
      class="demo-table-container"
    ></oj-table>
  );
};

export default DonorTable;
