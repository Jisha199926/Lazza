export const MENUITEMS = [
  {
    menutitle: "",
  },
  {
    icon: <i className="side-menu__icon bx bx-home"></i>, // Icon for the menu item
    type: "link", // Changed to 'link' since we don't need a dropdown
    Name: "", // Property without value, likely unused here
    active: false, // State property to indicate if the item is active
    selected: false, // State property to indicate if the item is selected
    dirchange: false, // State property, might relate to direction change (e.g., RTL)
    title: "Home", // Title of the menu item
    badge: "", // Additional badge property (possibly for notification count)
    badgetxt: "", // No badge text since it's not required
    class: "", // No additional classes needed for the badge
    path: `${import.meta.env.BASE_URL}dashboards/crm`, // Direct link to CRM dashboard
  },
  {
    menutitle: "",
  },
  {
    icon: <i className="bx bx-file-blank side-menu__icon"></i>,
    type: "sub",
    Name: "",
    active: false,
    selected: false,
    dirchange: false,
    title: "Consumption",
    badge: "",
    class:
      " text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2",
    children: [
      {
        path: `${import.meta.env.BASE_URL}pages/aboutus`,
        title: "About Us",
        type: "link",
        active: false,
        selected: false,
        dirchange: false,
      },
      {
        title: "File Manager",
        type: "sub",
        selected: false,
        dirchange: false,
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}pages/filemanager/filemanager`,
            title: "File Manager",
            type: "link",
            active: false,
            selected: false,
            dirchange: false,
          },
        ],
      },
    ],
  },

  {
    icon: <i className="bx bx-task side-menu__icon"></i>,
    type: "link",
    Name: "",
    active: false,
    selected: false,
    dirchange: false,
    title: "Wastage Analysis",
    badge: "",
    class:
      "text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2",
    path: `${import.meta.env.BASE_URL}task/kanbanboard`,
  },
  {
    icon: <i className="bx bx-fingerprint side-menu__icon"></i>,
    type: "link", // Changed to 'link' since we don't need a dropdown
    Name: "",
    active: false,
    selected: false,
    dirchange: false,
    title: "Machine Complaints", // Title of the menu item
    badge: "",
    badgetxt: "",
    class: "", // CSS classes for styling
    path: `${import.meta.env.BASE_URL}authentication/comingsoon` // Direct link to the desired path
  },
  {
    menutitle: "",
  },
  {
    icon: <i className="bx bx-box side-menu__icon"></i>,
    type: "link",
    Name: "",
    active: false,
    selected: false,
    dirchange: false,
    title: "Spare Request",
    badge: "",
    badgetxt: "",
    class: "",
    path: `${import.meta.env.BASE_URL}authentication/comingsoon` // Direct link to the desired path
  },
  {
    icon: <i className="bx bx-box side-menu__icon"></i>,
    type: "link",
    Name: "",
    active: false,
    selected: false,
    dirchange: false,
    title: "Store",
    badge: "",
    badgetxt: "",
    class: "",
    path: `${import.meta.env.BASE_URL}authentication/comingsoon` // Direct link to the desired path
  },
  {
    icon: <i className="bx bx-file side-menu__icon"></i>,
    type: "link",
    Name: "",
    active: false,
    selected: false,
    dirchange: false,
    title: "User Roles",
    badge: "",
    badgetxt: "",
    class: "",
    path: `${import.meta.env.BASE_URL}authentication/comingsoon` // Direct link to the desired path
  },
  {
    icon: <i className="bx bx-party side-menu__icon"></i>,
    type: "link",
    Name: "",
    active: false,
    selected: false,
    dirchange: false,
    title: "Factory",
    badge: "",
    badgetxt: "",
    class: "",
    path: `${import.meta.env.BASE_URL}advancedui/accordionscollapse`,
  },
  {
    path: `${import.meta.env.BASE_URL}widgets`,
    icon: <i className="bx bx-gift side-menu__icon"></i>,
    title: "Settings",
    type: "link",
    badge: "",
    badgetxt: "",
    class:
      "text-danger text-[0.75em] rounded-sm badge !py-[0.25rem] !px-[0.45rem] !bg-danger/10 ms-2",
    selected: false,
    dirchange: false,
    active: false,
  },
];
