import { Settings2 } from "lucide-react";

const sidenav = [
  {
    id: 1,
    label: "Dashboard",
    icon: <Settings2 />,
    sub: false,
    to: "/dashboard",
  },
  {
    id: 2,
    label: "User Roles",
    icon: <Settings2 />,
    sub: true,
    childs: [
      {
        id: 201,
        label: "Add Role",
        icon: <Settings2 />,
        to: "/user-roles/create",
      },
      {
        id: 202,
        label: "Manage Roles",
        icon: <Settings2 />,
        to: "/user-roles",
      },
    ],
  },
  {
    id: 3,
    label: "User",
    icon: <Settings2 />,
    sub: true,
    childs: [
      {
        id: 301,
        label: "Add User",
        icon: <Settings2 />,
        to: "/users/create",
      },
      {
        id: 302,
        label: "Manage Users",
        icon: <Settings2 />,
        to: "/users",
      },
    ],
  },
  {
    id: 4,
    label: "Supplier",
    icon: <Settings2 />,
    sub: true,
    childs: [
      {
        id: 401,
        label: "Add Supplier",
        icon: <Settings2 />,
        to: "/suppliers/create",
      },
      {
        id: 202,
        label: "Manage Suppliers",
        icon: <Settings2 />,
        to: "/suppliers",
      },
    ],
  },
  {
    id: 5,
    label: "Customer",
    icon: <Settings2 />,
    sub: true,
    childs: [
      {
        id: 501,
        label: "Add Customer",
        icon: <Settings2 />,
        to: "/customer/create",
      },
      {
        id: 502,
        label: "Manage Customers",
        icon: <Settings2 />,
        to: "/customer",
      },
    ],
  },
  {
    id: 6,
    label: "Service",
    icon: <Settings2 />,
    sub: true,
    childs: [
      {
        id: 601,
        label: "Add Service",
        icon: <Settings2 />,
        to: "/services/create",
      },
      {
        id: 602,
        label: "Manage Services",
        icon: <Settings2 />,
        to: "/services",
      },
    ],
  },
  {
    id: 7,
    label: "Product Group",
    icon: <Settings2 />,
    sub: true,
    childs: [
      {
        id: 701,
        label: "Add Product Group",
        icon: <Settings2 />,
        to: "/products/groups/create",
      },
      {
        id: 702,
        label: "Manage Product Groups",
        icon: <Settings2 />,
        to: "/products/groups",
      },
    ],
  },
  {
    id: 8,
    label: "Brand",
    icon: <Settings2 />,
    sub: true,
    childs: [
      {
        id: 801,
        label: "Add Brand",
        icon: <Settings2 />,
        to: "/brands/create",
      },
      {
        id: 802,
        label: "Manage Brands",
        icon: <Settings2 />,
        to: "/brands",
      },
    ],
  },
  {
    id: 9,
    label: "Product Category",
    icon: <Settings2 />,
    sub: true,
    childs: [
      {
        id: 901,
        label: "Add Product Category",
        icon: <Settings2 />,
        to: "/products/categories/create",
      },
      {
        id: 902,
        label: "Manage Product Categories",
        icon: <Settings2 />,
        to: "/products/categories",
      },
    ],
  },
  {
    id: 10,
    label: "Product Model",
    icon: <Settings2 />,
    sub: true,
    childs: [
      {
        id: 1000,
        label: "Add Product Model",
        icon: <Settings2 />,
        to: "/products/models/create",
      },
      {
        id: 1001,
        label: "Manage Product Models",
        icon: <Settings2 />,
        to: "/products/models",
      },
    ],
  },
  {
    id: 12,
    label: "Product",
    icon: <Settings2 />,
    sub: true,
    childs: [
      {
        id: 1200,
        label: "Add Product",
        icon: <Settings2 />,
        to: "/products/create",
      },
      {
        id: 1200,
        label: "Manage Products",
        icon: <Settings2 />,
        to: "/products",
      },
    ],
  },
  {
    id: 13,
    label: "Stock",
    icon: <Settings2 />,
    sub: true,
    childs: [
      {
        id: 1301,
        label: "Add Stock",
        icon: <Settings2 />,
        to: "/stocks/create",
      },
      {
        id: 1302,
        label: "Manage Stocks",
        icon: <Settings2 />,
        to: "/stocks",
      },
    ],
  },
];

export default sidenav;
