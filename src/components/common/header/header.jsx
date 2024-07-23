import { Fragment, useEffect, useState } from "react";
import Modalsearch from "../modalsearch/modalsearch";
import product1 from "../../../assets/images/ecommerce/jpg/1.jpg";
import product3 from "../../../assets/images/ecommerce/jpg/3.jpg";
import product5 from "../../../assets/images/ecommerce/jpg/5.jpg";
import product4 from "../../../assets/images/ecommerce/jpg/4.jpg";
import product6 from "../../../assets/images/ecommerce/jpg/6.jpg";
import { Link } from "react-router-dom";
import store from "../../../redux/store";
import { connect } from "react-redux";
import { ThemeChanger } from "../../../redux/action";
import us from "../../../assets/images/flags/us_flag.jpg";
import spain from "../../../assets/images/flags/spain_flag.jpg";
import french from "../../../assets/images/flags/french_flag.jpg";
import germany from "../../../assets/images/flags/germany_flag.jpg";
import italy from "../../../assets/images/flags/italy_flag.jpg";
import russia from "../../../assets/images/flags/russia_flag.jpg";
import figma from "../../../assets/images/apps/figma.png";
import powerpoint from "../../../assets/images/apps/microsoft-powerpoint.png";
import word from "../../../assets/images/apps/microsoft-word.png";
import calender from "../../../assets/images/apps/calender.png";
import sketch from "../../../assets/images/apps/sketch.png";
import googledocs from "../../../assets/images/apps/google-docs.png";
import google from "../../../assets/images/apps/google.png";
import translate from "../../../assets/images/apps/translate.png";
import googlesheets from "../../../assets/images/apps/google-sheets.png";
import face9 from "../../../assets/images/faces/9.jpg";
import desktoplogo from "../../../assets/images/brand-logos/desktop-logo1.png";
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png";
import desktopdark from "../../../assets/images/brand-logos/desktop-dark.png";
import toggledark from "../../../assets/images/brand-logos/toggle-dark.png";
import desktopwhite from "../../../assets/images/brand-logos/desktop-white.png";
import togglewhite from "../../../assets/images/brand-logos/toggle-white.png";
import SimpleBar from "simplebar-react";
import AllList from "../../../assets/images/icons/all.png";
import Calender from "../../../assets/images/icons/calender.png";
const Header = ({ local_varaiable, ThemeChanger }) => {
  //Fullscvreen
  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = () => {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      elem.requestFullscreen().then(() => setFullScreen(true));
    } else {
      document.exitFullscreen().then(() => setFullScreen(false));
    }
  };

  const handleFullscreenChange = () => {
    setFullScreen(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);
  //
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const cartProduct = [
    {
      id: 1,
      src: product1,
      name: "SomeThing Phone",
      price: "$1,299.00",
      color: "Metallic Blue",
      text: "6gb Ram",
      class: "",
    },
    {
      id: 2,
      src: product3,
      name: "Stop Watch",
      price: "$179.29",
      color: "Analog",
      text: "Free shipping",
      class:
        "font-[600] py-[0.25rem] px-[0.45rem] rounded-[0.25rem] bg-pink/10 text-pink text-[0.625rem]",
    },
    {
      id: 3,
      src: product5,
      name: "Photo Frame",
      price: "$29.00",
      color: "Decorative",
      text: "",
      class: "",
    },
    {
      id: 4,
      src: product4,
      name: "Kikon Camera",
      price: "$4,999.00",
      color: "Black",
      text: "50MM",
      class: "",
    },
    {
      id: 5,
      src: product6,
      name: "Canvas Shoes",
      price: "$129.00",
      color: "Gray",
      text: "Sports",
      class: "",
    },
  ];
  const [cartItems, setCartItems] = useState([...cartProduct]);
  const [cartItemCount, setCartItemCount] = useState(cartProduct.length);

  const handleRemove = (e, itemId) => {
    e.stopPropagation(); // Prevents the event from reaching the button click event
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    setCartItemCount(updatedCart.length);
  };
  const initialNotifications = [
    {
      id: 1,
      color: "primary",
      avatarColor: "!bg-primary",
      icon: "ti-gift",
      text1: "Your Order Has Been Shipped",
      text2: "Order No: 123456 Has Shipped To Your Delivery Address",
      class: "",
      class1: "",
    },
    {
      id: 2,
      color: "secondary",
      avatarColor: "bg-secondary",
      icon: "ti-discount-2",
      text1: "Discount Available",
      text2: "Discount Available On Selected Products",
      class: "",
      class1: "",
    },
    {
      id: 3,
      color: "pink",
      avatarColor: "bg-pink",
      icon: "ti-user-check",
      text1: "Account Has Been Verified",
      text2: "Your Account Has Been Verified Successfully",
      class: "",
      class1: "",
    },
    {
      id: 4,
      color: "warning",
      avatarColor: "bg-warning",
      icon: "ti-circle-check",
      text1: "Order Placed ",
      text2: "Order Placed Successflly",
      class: "text-warning",
      class1: " ID: #1116773",
    },
    {
      id: 5,
      color: "success",
      avatarColor: "bg-success",
      icon: "ti-clock",
      text1: "Order Delayed",
      text2: "Order Delayed Unfortunately",
      class: "text-success",
      class1: " ID: 7731116",
    },
  ];

  const [notifications, setNotifications] = useState([...initialNotifications]);

  const handleNotificationClose = (e, index) => {
    e.stopPropagation(); // Prevents the event from reaching the button click event
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  function menuClose() {
    const theme = store.getState();
    if (window.innerWidth <= 992) {
      ThemeChanger({ ...theme, toggled: "close" });
    }
    if (window.innerWidth >= 992) {
      ThemeChanger({
        ...theme,
        toggled: local_varaiable.toggled ? local_varaiable.toggled : "",
      });
    }
  }
  const toggleSidebar = () => {
    const theme = store.getState();
    let sidemenuType = theme.dataNavLayout;
    if (window.innerWidth >= 992) {
      if (sidemenuType === "vertical") {
        let verticalStyle = theme.dataVerticalStyle;
        const navStyle = theme.dataNavStyle;
        switch (verticalStyle) {
          // closed
          case "closed":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.toggled === "close-menu-close") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "close-menu-close" });
            }
            break;
          // icon-overlay
          case "overlay":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.toggled === "icon-overlay-close") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              if (window.innerWidth >= 992) {
                ThemeChanger({ ...theme, toggled: "icon-overlay-close" });
              }
            }
            break;
          // icon-text
          case "icontext":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.toggled === "icon-text-close") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "icon-text-close" });
            }
            break;
          // doublemenu
          case "doublemenu":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.toggled === "double-menu-open") {
              ThemeChanger({ ...theme, toggled: "double-menu-close" });
            } else {
              let sidemenu = document.querySelector(".side-menu__item.active");
              if (sidemenu) {
                ThemeChanger({ ...theme, toggled: "double-menu-open" });
                if (sidemenu.nextElementSibling) {
                  sidemenu.nextElementSibling.classList.add(
                    "double-menu-active"
                  );
                } else {
                  ThemeChanger({ ...theme, toggled: "double-menu-close" });
                }
              }
            }

            // doublemenu(ThemeChanger);
            break;
          // detached
          case "detached":
            if (theme.toggled === "detached-close") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "detached-close" });
            }
            break;

          // default
          case "default":
            ThemeChanger({ ...theme, toggled: "" });
        }
        switch (navStyle) {
          case "menu-click":
            if (theme.toggled === "menu-click-closed") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "menu-click-closed" });
            }
            break;
          // icon-overlay
          case "menu-hover":
            if (theme.toggled === "menu-hover-closed") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "menu-hover-closed" });
            }
            break;
          case "icon-click":
            if (theme.toggled === "icon-click-closed") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "icon-click-closed" });
            }
            break;
          case "icon-hover":
            if (theme.toggled === "icon-hover-closed") {
              ThemeChanger({ ...theme, toggled: "" });
            } else {
              ThemeChanger({ ...theme, toggled: "icon-hover-closed" });
            }
            break;
        }
      }
    } else {
      if (theme.toggled === "close") {
        ThemeChanger({ ...theme, toggled: "open" });

        setTimeout(() => {
          if (theme.toggled == "open") {
            const overlay = document.querySelector("#responsive-overlay");

            if (overlay) {
              overlay.classList.add("active");
              overlay.addEventListener("click", () => {
                const overlay = document.querySelector("#responsive-overlay");

                if (overlay) {
                  overlay.classList.remove("active");
                  menuClose();
                }
              });
            }
          }

          window.addEventListener("resize", () => {
            if (window.screen.width >= 992) {
              const overlay = document.querySelector("#responsive-overlay");

              if (overlay) {
                overlay.classList.remove("active");
              }
            }
          });
        }, 100);
      } else {
        ThemeChanger({ ...theme, toggled: "close" });
      }
    }
  };
  const ToggleDark = () => {
    ThemeChanger({
      ...local_varaiable,
      class: local_varaiable.class == "dark" ? "light" : "dark",
      dataHeaderStyles: local_varaiable.class == "dark" ? "light" : "dark",
      dataMenuStyles:
        local_varaiable.dataNavLayout == "horizontal"
          ? local_varaiable.class == "dark"
            ? "light"
            : "dark"
          : "dark",
    });
    const theme = store.getState();

    if (theme.class != "dark") {
      ThemeChanger({
        ...theme,
        bodyBg: "",
        Light: "",
        darkBg: "",
        inputBorder: "",
      });
      localStorage.setItem("ynexlighttheme", "light");
      localStorage.removeItem("ynexdarktheme");
      localStorage.removeItem("ynexMenu");
      localStorage.removeItem("ynexHeader");
    } else {
      localStorage.setItem("ynexdarktheme", "dark");
      localStorage.removeItem("ynexlighttheme");
      localStorage.removeItem("ynexMenu");
      localStorage.removeItem("ynexHeader");
    }
    console.log(logo1);
  };
  const options = [
    { value: "all", label: "All", icon: AllList },
    { value: "South Shore Icereams Pvt. Ltd ", label: "South Shore Icereams Pvt. Ltd", icon: AllList },
    { value: "Combined Foods, Kollam", label: "Combined Foods, Kollam", icon: AllList},
    { value: "HRF, Ponkunnam", label: "HRF, Ponkunnam", icon: AllList},
    { value: "Teejan Foods, Alwaye", label: "Teejan Foods, Alwaye", icon: AllList},
    { value: "Snocap, Trichur", label: "Snocap, Trichur", icon: AllList},
    { value: "North Shore Foods, Manjeswaram", label: "North Shore Foods, Manjeswaram", icon: AllList},
    { value: "Snofield Foods, Palghhat", label: "Snofield Foods, Palghhat", icon: AllList},
    { value: "Simfra Frozen Foods, Madurai", label: "Simfra Frozen Foods, Madurai", icon: AllList},
    { value: "Isa Daiary, Hyderabad", label: "Simfra Frozen Foods, Madurai", icon: AllList},



  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <Fragment>
      <header className="app-header">
        <nav className="main-header !h-[3.75rem]" aria-label="Global">
          <div className="main-header-container ps-[0.725rem] pe-[1rem] ">
            <div className="header-content-left">
              <div className="header-element">
                <div className="horizontal-logo">
                  <a
                    href={`${import.meta.env.BASE_URL}dashboards/crm/`}
                    className="header-logo"
                  >
                    <img
                      src={desktoplogo}
                      alt="logo"
                      className="desktop-logo"
                    />
                    <img src={togglelogo} alt="logo" className="toggle-logo" />
                    <img
                      src={desktopdark}
                      alt="logo"
                      className="desktop-dark"
                    />
                    <img src={toggledark} alt="logo" className="toggle-dark" />
                    <img
                      src={desktopwhite}
                      alt="logo"
                      className="desktop-white"
                    />
                    <img
                      src={togglewhite}
                      alt="logo"
                      className="toggle-white"
                    />
                  </a>
                </div>
              </div>
              <div
                className="header-element md:px-[0.325rem] !items-center"
                onClick={() => toggleSidebar()}
              >
                <Link
                  aria-label="Hide Sidebar"
                  className="inline-flex items-center sidemenu-toggle animated-arrow hor-toggle horizontal-navtoggle"
                  to="#"
                >
                  <span></span>
                </Link>
              </div>
              <div className="flex items-center p-2 border-b border-gray-300">
                <div className="relative inline-block text-gray-700">
                  <div
                    className="flex items-center p-2 bg-white rounded cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <img
                      src={selectedOption.icon}
                      alt={selectedOption.label}
                      className="w-6 h-6 mr-2"
                    />
                    <span className="flex-1">{selectedOption.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {isOpen && (
                    <div className="absolute z-10 mt-1 bg-white shadow-lg w-[500px]">
                      {options.map((option) => (
                        <div
                          key={option.value}
                          className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => handleChange(option)}
                        >
                          <img
                            src={option.icon}
                            alt={option.label}
                            className="w-6 h-6 mr-2"
                          />
                          <span className="flex-1">{option.label}</span>
                          <input
                            type="radio"
                            checked={selectedOption.value === option.value}
                            readOnly
                            className="ml-2 text-green-600 form-radio"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="h-8 mx-4 border-r border-gray-300"></div>
                <div className="flex items-center">
                  <img src={Calender} alt="Calendar" className="w-6 h-6 mr-2" />
                  <input type="date" className="p-1 text-gray-700 border" />
                </div>
              </div>
            </div>
            <div className="header-content-right">
              <div className="header-element py-[1rem] md:px-[0.65rem] px-2 notifications-dropdown header-notification hs-dropdown ti-dropdown !hidden md:!block [--placement:bottom-right] rtl:[--placement:bottom-left]">
                {/* Notification Code Here */}
              </div>

              <div className="header-element header-fullscreen py-[1rem] md:px-[0.65rem] px-2">
                <Link
                  to="#"
                  aria-label="anchor"
                  onClick={toggleFullScreen}
                  className="inline-flex flex-shrink-0 justify-center items-center gap-2  !rounded-full font-medium dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                >
                  {fullScreen ? (
                    <i className="bx bx-exit-fullscreen full-screen-close header-link-icon"></i>
                  ) : (
                    <i className="bx bx-fullscreen full-screen-open header-link-icon"></i>
                  )}
                </Link>
              </div>
              <div className="header-element py-[1rem] md:px-[0.65rem] px-2 notifications-dropdown header-notification hs-dropdown ti-dropdown !hidden md:!block [--placement:bottom-right] rtl:[--placement:bottom-left]">
                <button
                  id="dropdown-notification"
                  type="button"
                  className="hs-dropdown-toggle relative ti-dropdown-toggle !p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none align-middle text-xs"
                >
                  <i className="bx bx-bell header-link-icon  text-[1.125rem]"></i>
                  <span className="flex absolute h-5 w-5 -top-[0.25rem] end-0  -me-[0.6rem]">
                    <span className="animate-slow-ping absolute inline-flex -top-[2px] -start-[2px] h-full w-full rounded-full bg-secondary/40 opacity-75"></span>
                    <span
                      className="relative inline-flex justify-center items-center rounded-full  h-[14.7px] w-[14px] bg-secondary text-[0.625rem] text-white"
                      id="notification-icon-badge"
                    >
                      {notifications.length}
                    </span>
                  </span>
                </button>
                <div
                  className="main-header-dropdown !-mt-3 !p-0 hs-dropdown-menu ti-dropdown-menu bg-white !w-[22rem] border-0 border-defaultborder hidden !m-0"
                  aria-labelledby="dropdown-notification"
                >
                  <div className="ti-dropdown-header !m-0 !p-4 !bg-transparent flex justify-between items-center">
                    <p className="mb-0 text-[1.0625rem] text-defaulttextcolor font-semibold dark:text-[#8c9097] dark:text-white/50">
                      Notifications
                    </p>
                    <span
                      className="text-[0.75em] py-[0.25rem/2] px-[0.45rem] font-[600] rounded-sm bg-secondary/10 text-secondary"
                      id="notifiation-data"
                    >{`${notifications.length} Unread`}</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <ul className="list-none !m-0 !p-0 end-0">
                    <SimpleBar id="header-notification-scroll">
                      {notifications.map((notification, index) => (
                        <li
                          className="ti-dropdown-item dropdown-item"
                          key={index}
                        >
                          <div className="flex items-start">
                            <div className="pe-2">
                              <span
                                className={`inline-flex text-${notification.color} justify-center items-center !w-[2.5rem] !h-[2.5rem] !leading-[2.5rem] !text-[0.8rem] ${notification.avatarColor}/10 !rounded-[50%]`}
                              >
                                <i
                                  className={`ti ${notification.icon} text-[1.125rem]`}
                                ></i>
                              </span>
                            </div>
                            <div className="flex items-center justify-between grow">
                              <div>
                                <p className="mb-0 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 text-[0.8125rem] font-semibold">
                                  <Link
                                    to={`${
                                      import.meta.env.BASE_URL
                                    }pages/notifications/`}
                                  >
                                    {notification.text1}
                                  </Link>
                                  <span className={notification.class}>
                                    {notification.class1}
                                  </span>
                                </p>
                                <span className="text-[#8c9097] dark:text-white/50 font-normal text-[0.75rem] header-notification-text">
                                  {notification.text2}
                                </span>
                              </div>
                              <div>
                                <Link
                                  aria-label="anchor"
                                  to="#"
                                  onClick={(e) =>
                                    handleNotificationClose(e, index)
                                  }
                                  className="min-w-fit text-[#8c9097] dark:text-white/50 me-1 dropdown-item-close1"
                                >
                                  <i className="ti ti-x text-[1rem]"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </SimpleBar>
                  </ul>

                  <div
                    className={`p-4 empty-header-item1 border-t mt-2 ${
                      notifications.length === 0 ? "hidden" : ""
                    }`}
                  >
                    <div className="grid">
                      <Link
                        href={`${import.meta.env.BASE_URL}pages/notifications/`}
                        className="ti-btn ti-btn-primary-full !m-0 w-full p-2"
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`p-[3rem] empty-item1 ${
                      notifications.length === 0 ? "" : "hidden"
                    }`}
                  >
                    <div className="text-center">
                      <span className="!h-[4rem]  !w-[4rem] avatar !leading-[4rem] !rounded-full !bg-secondary/10 !text-secondary">
                        <i className="ri-notification-off-line text-[2rem]  "></i>
                      </span>
                      <h6 className="font-semibold mt-3 text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 text-[1rem]">
                        No New Notifications
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-element md:px-[0.48rem]">
                <button
                  aria-label="button"
                  type="button"
                  className="hs-dropdown-toggle switcher-icon inline-flex flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium  align-middle transition-all text-xs dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                  data-hs-overlay="#hs-overlay-switcher"
                >
                  <i className="bx bx-cog header-link-icon animate-spin-slow"></i>
                </button>
              </div>
              <div className="header-element md:!px-[0.65rem] px-2 hs-dropdown !items-center ti-dropdown [--placement:bottom-left]">
                <button
                  id="dropdown-profile"
                  type="button"
                  className="hs-dropdown-toggle ti-dropdown-toggle !gap-2 !p-0 flex-shrink-0 sm:me-2 me-0 !rounded-full !shadow-none text-xs align-middle !border-0 !shadow-transparent "
                >
                  <img
                    className="inline-block rounded-full "
                    src={face9}
                    width="32"
                    height="32"
                    alt="Image Description"
                  />
                </button>
                <div className="hidden cursor-pointer md:block dropdown-profile">
                  <p className="font-semibold mb-0 leading-none text-[#536485] text-[0.813rem] ">
                    Admin{" "}
                  </p>
                  <span className="opacity-[0.7] font-normal text-[#536485] block text-[0.6875rem] "></span>
                </div>
                <div
                  className="hs-dropdown-menu ti-dropdown-menu !-mt-3 border-0 w-[11rem] !p-0 border-defaultborder hidden main-header-dropdown  pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
                  aria-labelledby="dropdown-profile"
                >
                  <ul className="text-defaulttextcolor font-medium dark:text-[#8c9097] dark:text-white/50">
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0  !p-[0.65rem] !inline-flex"
                        to={`${import.meta.env.BASE_URL}pages/profile/`}
                      >
                        <i className="ti ti-user-circle text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0  !p-[0.65rem] !inline-flex"
                        to={`${import.meta.env.BASE_URL}pages/email/mailapp/`}
                      >
                        <i className="ti ti-inbox text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Inbox{" "}
                        <span className="!py-1 !px-[0.45rem] !font-semibold !rounded-sm text-success text-[0.75em] bg-success/10 ms-auto">
                          25
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex"
                        to={`${import.meta.env.BASE_URL}pages/todolist/`}
                      >
                        <i className="ti ti-clipboard-check text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Task Manager
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex"
                        to={`${
                          import.meta.env.BASE_URL
                        }pages/email/mailsettings/`}
                      >
                        <i className="ti ti-adjustments-horizontal text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !gap-x-0 !p-[0.65rem] !inline-flex"
                        to="#"
                      >
                        <i className="ti ti-wallet text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Bal: $7,12,950
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !p-[0.65rem] !gap-x-0 !inline-flex"
                        to={`${import.meta.env.BASE_URL}pages/chat/`}
                      >
                        <i className="ti ti-headset text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="w-full ti-dropdown-item !text-[0.8125rem] !p-[0.65rem] !gap-x-0 !inline-flex"
                        to={`${
                          import.meta.env.BASE_URL
                        }authentication/signin/signincover/`}
                      >
                        <i className="ti ti-logout text-[1.125rem] me-2 opacity-[0.7]"></i>
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Modalsearch />
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps, { ThemeChanger })(Header);
