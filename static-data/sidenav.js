import {
  ActivitySquare,
  AreaChart,
  Barcode,
  Contact,
  CopyPlus,
  FileBox,
  FileCog,
  Group,
  Layers,
  LayoutGrid,
  Package,
  PackageSearch,
  Pocket,
  Send,
  Settings2,
  User,
  Users,
  Wrench,
  MessageCircleMore,
  MessageCircle,
  CircleDollarSign,
  FileCode2,
  PercentSquare,
  WalletCards,
  ShoppingCart,
  Warehouse,
  PackagePlus,
  Blocks,
  LayoutPanelLeft,
  Table,
  ListPlus,
  Settings,
} from "lucide-react";

const sidenav = [
  {
    id: 1,
    label: "Dashboard",
    icon: <AreaChart className="w-5 h-5" />,
    sub: false,
    to: "/dashboard",
  },
  {
    id: 2,
    label: "User Roles",
    icon: <Contact className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 201,
        label: "Add Role",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/user-roles/create",
      },
      {
        id: 202,
        label: "Manage Roles",
        icon: <FileCog className="w-5 h-5" />,
        to: "/user-roles",
      },
    ],
  },
  {
    id: 3,
    label: "User",
    icon: <User className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 301,
        label: "Add User",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/users/create",
      },
      {
        id: 302,
        label: "Manage Users",
        icon: <FileCog className="w-5 h-5" />,
        to: "/users",
      },
    ],
  },
  {
    id: 4,
    label: "Supplier",
    icon: <Package className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 401,
        label: "Add Supplier",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/suppliers/create",
      },
      {
        id: 202,
        label: "Manage Suppliers",
        icon: <FileCog className="w-5 h-5" />,
        to: "/suppliers",
      },
    ],
  },
  {
    id: 5,
    label: "Customer",
    icon: <Users className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 501,
        label: "Add Customer",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/customer/create",
      },
      {
        id: 502,
        label: "Manage Customers",
        icon: <FileCog className="w-5 h-5" />,
        to: "/customer",
      },
    ],
  },
  {
    id: 6,
    label: "Service",
    icon: <Wrench className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 601,
        label: "Add Service",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/services/create",
      },
      {
        id: 602,
        label: "Manage Services",
        icon: <FileCog className="w-5 h-5" />,
        to: "/services",
      },
    ],
  },

  {
    id: 7,
    label: "Product Group",
    icon: <Group className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 701,
        label: "Add Product Group",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/products/groups/create",
      },
      {
        id: 702,
        label: "Manage Product Groups",
        icon: <FileCog className="w-5 h-5" />,
        to: "/products/groups",
      },
    ],
  },
  {
    id: 8,
    label: "Brand",
    icon: <Pocket className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 801,
        label: "Add Brand",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/brands/create",
      },
      {
        id: 802,
        label: "Manage Brands",
        icon: <FileCog className="w-5 h-5" />,
        to: "/brands",
      },
    ],
  },
  {
    id: 9,
    label: "Product Category",
    icon: <LayoutGrid className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 901,
        label: "Add Product Category",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/products/categories/create",
      },
      {
        id: 902,
        label: "Manage Categories",
        icon: <FileCog className="w-5 h-5" />,
        to: "/products/categories",
      },
    ],
  },
  {
    id: 10,
    label: "Product Model",
    icon: <FileBox className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1000,
        label: "Add Product Model",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/products/models/create",
      },
      {
        id: 1001,
        label: "Manage Models",
        icon: <FileCog className="w-1.0 h-1.0" />,
        to: "/products/models",
      },
    ],
  },
  {
    id: 12,
    label: "Product",
    icon: <PackageSearch className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1200,
        label: "Add Product",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/products/create",
      },
      {
        id: 1200,
        label: "Manage Products",
        icon: <FileCog className="w-5 h-5" />,
        to: "/products",
      },
    ],
  },
  {
    id: 13,
    label: "Purchases",
    icon: <ShoppingCart className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1301,
        label: "Add (Barcode)",
        icon: <Barcode className="w-5 h-5" />,
        to: "/stocks/add-barcode",
      },
      {
        id: 1302,
        label: "Add (Bulk)",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/stocks/add-bulk",
      },
      {
        id: 1303,
        label: "View Stocks",
        icon: <ActivitySquare className="w-5 h-5" />,
        to: "/stocks",
      },
    ],
  },
  {
    id: 14,
    label: "Marketting",
    icon: <CircleDollarSign className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1401,
        label: "Send SMS",
        icon: <MessageCircle className="w-5 h-5" />,
        to: "/stocks/add-barcode",
      },
      {
        id: 1402,
        label: "Send Email",
        icon: <Send className="w-5 h-5" />,
        to: "/stocks/add-bulk",
      },
    ],
  },
  {
    id: 15,
    label: "Settings",
    icon: <Settings className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1501,
        label: "SMTP settings",
        icon: <Barcode className="w-5 h-5" />,
        to: "/stocks/add-barcode",
      },
      {
        id: 1502,
        label: "SMS settings",
        icon: <CopyPlus className="w-5 h-5" />,
        to: "/stocks/add-bulk",
      },
      {
        id: 1503,
        label: "SMS Template",
        icon: <ActivitySquare className="w-5 h-5" />,
        to: "/stocks",
      },
      {
        id: 1504,
        label: "EMail Template",
        icon: <ActivitySquare className="w-5 h-5" />,
        to: "/stocks",
      },
    ],
  },
  {
    id: 16,
    label: "Reports",
    icon: <FileCode2 className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1601,
        label: "Sale Report",
        icon: <PercentSquare className="w-5 h-5" />,
        to: "/stocks/add-barcode",
      },
      {
        id: 1602,
        label: "Purchase Reports",
        icon: <WalletCards className="w-5 h-5" />,
        to: "/stocks/add-bulk",
      },
    ],
  },

  {
    id: 17,
    label: "Warehouses",
    icon: <Warehouse className="w-5 h-5" />,
    sub: true,
    childs: [
      {
        id: 1701,
        label: "Add Warehouse",
        icon: <PackagePlus className="w-5 h-5" />,
        to: "/warehouses/add-warehouse",
      },
      {
        id: 1702,
        label: "Add Shelf",
        icon: <ListPlus className="w-5 h-5" />,
        to: "/warehouses/add-shelf",
      },
      {
        id: 1703,
        label: "manage Warehouses",
        icon: <Table className="w-5 h-5" />,
        to: "/warehouses",
      },
      {
        id: 1704,
        label: "manage Shefls",
        icon: <LayoutPanelLeft className="w-5 h-5" />,
        to: "/warehouses/shelves",
      },
    ],
  },
];

export default sidenav;
