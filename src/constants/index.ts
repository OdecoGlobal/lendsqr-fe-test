import briefcase from "../assets/briefcase.png";
import home from "../assets/home.png";
import users from "../assets/user-group.png";
import guarantors from "../assets/users.png";
import loans from "../assets/sack.png";
import decision from "../assets/handshake-regular.png";
import savings from "../assets/piggy-bank.png";
import loan from "../assets/giving-money.png";
import whitelist from "../assets/user-check.png";
import karma from "../assets/user-times.png";
import briefcase2 from "../assets/briefcase-2.png";
import coins from "../assets/coins.png";
import bank from "../assets/bank.png";
import transactions from "../assets/transaction.png";
import services from "../assets/galaxy.png";
import userCog from "../assets/user-cog.png";
import settlements from "../assets/scroll.png";
import reports from "../assets/chart-bar.png";
import preferences from "../assets/sliders.png";
import pricing from "../assets/badge-percent.png";
import audit from "../assets/clipboard-list.png";

export const APP_NAME = "Lendsqr";

export const menuItems = [
  {
    label: "Switch Organization",
    icon: briefcase,
    type: "dropdown",
  },
  {
    label: "Dashboard",
    icon: home,
    path: "/dashboard",
  },

  {
    section: "CUSTOMERS",
    items: [
      { label: "Users", icon: users, path: "/users" },
      { label: "Guarantors", icon: guarantors, path: "/#guarantors" },
      { label: "Loans", icon: loans, path: "/#loans" },
      { label: "Decision Models", icon: decision, path: "/#decision-models" },
      { label: "Savings", icon: savings, path: "/#savings" },
      { label: "Loan Requests", icon: loan, path: "/#loan-requests" },
      { label: "Whitelist", icon: whitelist, path: "/#whitelist" },
      { label: "Karma", icon: karma, path: "/#karma" },
    ],
  },
  {
    section: "BUSINESS",
    items: [
      { label: "Organization", icon: briefcase2, path: "/#organization" },
      { label: "Loan Products", icon: loan, path: "/#loan-products" },
      { label: "Saving Products", icon: bank, path: "/#saving-products" },
      { label: "Fees and Charges ", icon: coins, path: "/#fees-and-charges" },
      { label: "Transactions", icon: transactions, path: "/#transactions" },
      { label: "Services", icon: services, path: "/#services" },
      {
        label: "Service Account ",
        icon: userCog,
        path: "/#service-account",
      },
      { label: "Settlements", icon: settlements, path: "/#settlements" },
      { label: "Reports", icon: reports, path: "/#reports" },
    ],
  },
  {
    section: "SETTINGS",
    items: [
      { label: "Preferences", icon: preferences, path: "/#preferences" },
      {
        label: "Fees and Pricing",
        icon: pricing,
        path: "/#fees-and-pricing",
      },
      { label: "Audit Logs", icon: audit, path: "/audit-logs" },
    ],
  },
];
