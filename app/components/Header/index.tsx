import React, { useState, useRef } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ClrButton } from "../Button/Base";
import { ScheduleCallModal } from "../ScheduleCall";

const { Header } = Layout;

const navigation = [
  { key: "/", label: "Work", href: "/" },
  { key: "services", label: "Services", href: "/services" },
  { key: "articles", label: "Articles", href: "/articles" },
  { key: "about-us", label: "About Us", href: "/about-us" },
  { key: "contact-us", label: "Contact Us", href: "/contact" },
];

export const ClrHeader = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleModal = () => setOpen((prev) => !prev);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const onMenuClick = (val: { key: string }) => {
    router.push(val.key);
    setDrawerOpen(false);
  };

  return (
    <div className="w-full fixed z-[1000]">
      {/* Animated Technology Background */}

      {/* Header Container */}
      <div
        ref={headerRef}
        className={`
          left-0 
          right-0 
          z-50 
          transition-all 
          duration-300
        `}
      >
        <Header
          className={`
            bg-white/80 
            backdrop-blur-lg 
            shadow-2xl 
            px-0 
          `}
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo Container */}
              <div className="flex items-center">
                <div className="relative w-[80px] h-[50px]">
                  <Image
                    src="/clr-logo2.png"
                    alt="logo"
                    fill
                    className="mix-blend-difference object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Center Navigation */}
              <div className="hidden md:flex flex-1 justify-center">
                <Menu
                  theme="light"
                  mode="horizontal"
                  defaultSelectedKeys={["work"]}
                  items={navigation}
                  onClick={onMenuClick}
                  className="border-none min-w-[500px] flex justify-center"
                />
              </div>

              {/* Right Side Content */}
              <div className="flex items-center">
                {/* Desktop Schedule Call Button */}
                <div className="hidden md:block">
                  <ClrButton onClick={toggleModal} btntype="primary">
                    Schedule a Call
                  </ClrButton>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <Button
                    type="text"
                    icon={<MenuOutlined style={{ fontSize: "24px" }} />}
                    onClick={toggleDrawer}
                    className="flex items-center justify-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </Header>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <div className="flex items-center justify-between">
            <div className="relative w-[60px] h-[30px]">
              <Image
                src="/clr-logo2.png"
                alt="logo"
                fill
                className="mix-blend-difference object-contain"
                priority
              />
            </div>
            <Button
              type="text"
              icon={<CloseOutlined style={{ fontSize: "20px" }} />}
              onClick={toggleDrawer}
            />
          </div>
        }
        placement="right"
        onClose={toggleDrawer}
        open={drawerOpen}
        width={300}
        className="md:hidden"
        styles={{
          body: {
            padding: 0,
          },
        }}
        closeIcon={null}
      >
        <Menu
          theme="light"
          mode="vertical"
          defaultSelectedKeys={["work"]}
          items={navigation}
          onClick={onMenuClick}
          className="border-none"
        />
        <div className="p-4">
          <ClrButton
            onClick={() => {
              toggleModal();
              toggleDrawer();
            }}
            btntype="primary"
            className="w-full"
          >
            Schedule a Call
          </ClrButton>
        </div>
      </Drawer>

      {/* Schedule Call Modal */}
      <ScheduleCallModal open={open} onCancel={toggleModal} />

    </div>
  );
};

export default ClrHeader;
