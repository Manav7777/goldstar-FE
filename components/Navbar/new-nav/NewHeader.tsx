"use client";
import React, { useState } from "react";
import { Container, Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import "./NewHeader.css";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import GsButton from "@/components/ui/GsButton";
import { goldStarMenus } from "@/GlobalConstant";
import CollapsibleMenu from "./CollapsibleMenu";

export default function NewHeader() {
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuId: any) => {
    setOpenMenu((prev) => (prev === menuId ? null : menuId));
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className="header-bg sticky-top border-bottom">
        <Container className="d-flex align-items-center justify-content-between h-wrapper">
          <Link href="/" className="d-flex align-items-center logo-link">
            <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}logo.png`}
                width={128}
                height={64}
                alt="logo"
              />
          </Link>

          <Nav className="d-none d-md-flex align-items-center gap-0">
            {goldStarMenus.map((menu) =>
              menu.subMenu ? (
                <div className="dropdown position-relative" key={menu.id}>
                  <span
                    className="nav-link dropdown-toggle text-muted-hover"
                    role="button"
                  >
                    {menu.name}
                  </span>
                  <div className="dropdown-menu show-on-hover">
                    {menu.subMenu.map((sub) => (
                      <Link
                        className="dropdown-item"
                        href={sub.url}
                        key={sub.id}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Nav.Link
                  href={menu.url}
                  key={menu.id}
                  className="text-muted-hover"
                >
                  {menu.name}
                </Nav.Link>
              )
            )}
          </Nav>

          <div className="d-none d-md-flex align-items-center gap-3">
            <GsButton type="primary" />
          </div>

          <Button
            variant="link"
            className="d-md-none toggle-btn"
            onClick={handleShow}
          >
            <div className="navbar-toggler bg-primary" />
          </Button>
        </Container>
      </header>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Link href="/" className="d-flex align-items-center logo-link">
            <div className="p-2 rounded-lg">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_SERVICE_URL}logo.png`}
                width={128}
                height={64}
                alt="logo"
              />
            </div>
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column gap-2">
            {goldStarMenus.map((menu) => (
              <div key={menu.id}>
                {menu.subMenu ? (
                  <CollapsibleMenu
                    menu={menu}
                    isOpen={openMenu === menu.id}
                    onToggle={() => toggleMenu(menu.id)}
                  />
                ) : (
                  <Nav.Link href={menu.url} className="py-2 px-2">
                    {menu.name}
                  </Nav.Link>
                )}
              </div>
            ))}
          </Nav>

          <hr />
          <Link
            href="tel:(289)541-7282"
            className="d-flex align-items-center text-muted-hover mt-3"
          >
            <Phone className="me-2 text-warning wi-18" />
            <span className="fw-medium">+1 (289)541-7282</span>
          </Link>
          <div className="mt-3">
            <GsButton
              type="defaultPrimary"
              text={"Get Free Quote"}
              className={"w-100"}
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
