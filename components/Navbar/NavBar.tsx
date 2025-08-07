import { Fragment } from "react";
import "./Navbar.css";
import Link from "next/link";
import { goldStarMenus } from "@/GlobalConstant";

const NavBar = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12">
            <div className="menu_area alt-font">
              <nav className="navbar navbar-expand-lg navbar-light p-0 current">
                <div className="navbar-header navbar-header-custom">
                  {/* start logo */}
                  <Link href="/" className="navbar-brand show-scroll">
                    <img
                      id="redux_logo"
                      src="https://goldstarmovers.ca/wp-content/uploads/2021/01/logo.png"
                      alt="Logo"
                    />
                  </Link>
                  {/* end logo */}
                </div>
                <div className="navbar-toggler bg-primary" />
                <ul
                  id={'menu.id'}
                  key={'menu.name'}
                  className="navbar-nav align-items-lg-center ms-auto navbar-nav align-items-lg-center ms-auto"
                >
                {goldStarMenus.map((menu:any) => {
                  return <li
                    id={menu.id}
                    key={menu.name}
                    className={`menu-item menu-item-type-custom 
										menu-item-object-custom menu-item-has-children dropdown menu-item-2725 nav-item ${menu.subMenu && 'has-sub'}`}
                  >
                    <span className="submenu-button" />
                    <Link title="Pages" href={menu?.url ? menu?.url : ''} className="nav-link">
                      {menu.name}
                    </Link>
                    {menu?.subMenu && <ul
                      key={menu.id}
                      className="dropdown-menu sub-menu"
                      role="menu"
                      style={{ display: "block" }}
                    >
                    {menu.subMenu.map((sMenu:any) => {
                      return <li
                        key={sMenu.id}
                        id={sMenu.id}
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5531 nav-item"
                      >
                        <Link
                          title={sMenu.name}
                          href={sMenu?.url}
                          className="dropdown-item"
                        >
                          {sMenu.name}
                        </Link>
                      </li>
                    })}
                    </ul>}
                  </li>
                })}
                </ul>
                
                {/* start attribute navigation */}
                <div className="attr-nav align-items-xl-center ms-xl-auto main-font">
                  <ul>
                    <li className="d-xl-inline-block">
                      <Link
                        className="button-primary button md text-white"
                        href="/contact"
                      >
                        <span>Request Now</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* end attribute navigation */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
