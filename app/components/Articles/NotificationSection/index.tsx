"use client";
import React from "react";
import { Input, Typography, ConfigProvider } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { ClrButton } from "../../Button/Base";

const { Title, Paragraph } = Typography;

const NotifySignup = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextPlaceholder: "#6B7280",
        },
      }}
    >
      <div className="pl-10 pr-10">
        <div
          style={{
            background: "linear-gradient(145deg, #1a1f35 0%, #20133e 100%)",
            minHeight: "300px",
            borderRadius: "24px",
            padding: "48px 24px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            marginBottom: "50px",
          }}
        >
          {/* Purple glow effect */}
          <div
            style={{
              position: "absolute",
              bottom: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              height: "300px",
              background:
                "radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(147, 51, 234, 0) 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Title
              level={2}
              style={{
                color: "white",
                marginBottom: "16px",
                fontSize: "32px",
                fontWeight: "600",
              }}
            >
              Get notified when we&apos;re launching.
            </Title>

            <Paragraph
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "16px",
                marginBottom: "32px",
                lineHeight: "1.6",
              }}
            >
              Reprehenderit ad esse et non officia in nulla. Id proident tempor
              incididunt nostrud nulla et culpa.
            </Paragraph>

            <div
              className="flex flex-col items-center w-full max-w-[440px] mx-auto px-4 
                 space-y-3
                 sm:flex-row sm:space-y-0 sm:gap-3"
            >
              <Input
                placeholder="Enter your email"
                size="large"
                className="w-full mb-3 sm:mb-0 sm:flex-grow
                    bg-white/10 border border-white/20 
                    text-white rounded-xl px-5 py-3"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              />
              <ClrButton
                btntype="primary"
                size="large"
                icon={<BellOutlined />}
                className="w-full sm:w-auto max-w-[200px]"
              >
                Notify me
              </ClrButton>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default NotifySignup;
