"use client";
import React from "react";
import { ConfigProvider, Typography } from "antd";
import { theme } from "antd";
import { ClrButton } from "../Button/Base";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const { Title, Paragraph } = Typography;

const themeConfig = {
  token: {
    colorBgContainer: "#0A0F1E",
    colorText: "#FFFFFF",
    colorTextSecondary: "rgba(255, 255, 255, 0.65)",
    colorPrimary: "#1677ff",
    borderRadius: 6,
  },
  components: {
    Typography: {
      colorText: "#FFFFFF",
      colorTextSecondary: "rgba(255, 255, 255, 0.65)",
    },
  },
  algorithm: theme.darkAlgorithm,
};

const wave1 = keyframes`
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
`;

const wave2 = keyframes`
  0% {
    transform: translate(-50%, -75%) rotate(90deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(450deg);
  }
`;

const Container = styled.div`
  padding: 50px 70px;
  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const CTAContainer = styled.div`
  background: ${themeConfig.token.colorBgContainer};
  padding: 80px 24px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  isolation: isolate;
`;

const WaveContainer = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.5;
  z-index: 0;
  background: linear-gradient(45deg, #0a0f1e 0%, #1a1f2e 100%);
  overflow: hidden;
`;

const Wave = styled.div<{ opacity: number; anim: string; duration: number }>`
  position: absolute;
  left: 50%;
  top: 75%;
  width: 200%;
  height: 200%;
  border-radius: 38% 42%;
  background: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  animation: ${(props) => props.anim} ${(props) => props.duration}s linear
    infinite;
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.3;
`;

const GlowingOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 0%,
    rgba(22, 119, 255, 0.15),
    transparent 70%
  );
`;

const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(10, 15, 30, 0) 0%,
    rgba(10, 15, 30, 0.9) 100%
  );
  z-index: 1;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const BorderGlow = styled.div<{ position: "top" | "bottom" }>`
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #1677ff, transparent);
  opacity: 0.5;
  ${(props) => (props.position === "top" ? "top: 0;" : "bottom: 0;")}
`;

const StyledButton = styled(ClrButton)`
  position: relative;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(22, 119, 255, 0.5),
      0 0 40px rgba(22, 119, 255, 0.3);
  }

  &:after {
    content: "";
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, #1677ff, #00f2fe);
    border-radius: 8px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:after {
    opacity: 0.5;
  }
`;

const TitleText = styled(Title)`
  background: linear-gradient(135deg, #ffffff 0%, #b3b3b3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;

  &:after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background: linear-gradient(135deg, #1677ff 0%, #00f2fe 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
    transform: translateY(2px);
    transition: all 0.3s ease;
  }

  &:hover:after {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CTASection = () => {
  return (
    <ConfigProvider theme={themeConfig}>
      <Container>
        <CTAContainer>
          <WaveContainer>
            <Wave
              color="rgba(22,119,255,0.15)"
              opacity={0.3}
              anim={wave1}
              duration={25}
            />
            <Wave
              color="rgba(22,119,255,0.15)"
              opacity={0.2}
              anim={wave2}
              duration={30}
            />
            <GridOverlay />
            <GlowingOverlay />
          </WaveContainer>

          <GradientOverlay />

          <Content>
            <TitleText
              level={2}
              data-text="Let's build your website today!"
              style={{
                fontSize: "2.5rem",
                marginBottom: 16,
                fontWeight: 600,
              }}
            >
              Let&apos;s build your website today!
            </TitleText>

            <Paragraph
              style={{
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: "1.1rem",
                marginBottom: 32,
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Contact us and we will get back within 24 hours. We mean it. You
              saw the testimonials, right?
            </Paragraph>

            <StyledButton btntype="quaternary" size="large">
              Contact Us
            </StyledButton>
          </Content>

          <BorderGlow position="top" />
          <BorderGlow position="bottom" />
        </CTAContainer>
      </Container>
    </ConfigProvider>
  );
};

export default CTASection;
