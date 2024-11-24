"use client";
import React from "react";
import { ConfigProvider, Typography, Row, Col, theme } from "antd";
import { LineChartOutlined, AppstoreOutlined } from "@ant-design/icons";
import Image from "next/image";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const { Title, Paragraph } = Typography;

const themeConfig = {
  token: {
    colorBgContainer: "#0A0F1E",
    colorText: "#FFFFFF",
    colorTextSecondary: "rgba(255, 255, 255, 0.65)",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    borderRadius: 8,
  },
  algorithm: theme.darkAlgorithm,
};

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(22, 119, 255, 0.3),
                0 0 40px rgba(22, 119, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 30px rgba(22, 119, 255, 0.5),
                0 0 60px rgba(22, 119, 255, 0.2);
  }
`;

const gradientMove = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  padding: 0 16px;
  background: ${themeConfig.token.colorBgContainer};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(22, 119, 255, 0.5),
      transparent
    );
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
  position: relative;
`;

const FeatureCard = styled.div`
  position: relative;
  padding: 40px;
  border-radius: 16px;
  background: linear-gradient(
    145deg,
    rgba(26, 31, 46, 0.6),
    rgba(26, 31, 46, 0.9)
  );
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    rgba(22, 119, 255, 0.2),
    rgba(22, 119, 255, 0.1)
  );
  margin-bottom: 24px;
  animation: ${float} 3s ease-in-out infinite;
`;

const FeatureTitle = styled(Title)`
  background: linear-gradient(135deg, #ffffff, #b3b3b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
  font-size: 32px !important;
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 16px;
  background: linear-gradient(145deg, #1a1f2e, #232838);
  padding: 24px;
  animation: ${glow} 4s ease-in-out infinite;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(22, 119, 255, 0.1),
      transparent
    );
    background-size: 200% 100%;
    animation: ${gradientMove} 3s linear infinite;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const GridPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(22, 119, 255, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(22, 119, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  pointer-events: none;
`;

const FeatureSection = () => {
  const features = [
    {
      icon: <AppstoreOutlined style={{ fontSize: 32, color: "#1677ff" }} />,
      title: "Cross Platform Marketing",
      description:
        "With our cross platform marketing, you can reach your audience on all the prominent platforms.",
      image: "/feature-section-1.png",
      imageAlt: "Marketing Platform Dashboard",
    },
    {
      icon: <LineChartOutlined style={{ fontSize: 32, color: "#1677ff" }} />,
      title: "Managed CRM",
      description:
        "With our managed CRM, you can manage your leads and contacts in one place.",
      image: "/feature-section-2.png",
      imageAlt: "CRM Dashboard",
    },
  ];

  return (
    <ConfigProvider theme={themeConfig}>
      <Container>
        <GridPattern />
        <Content>
          <Row gutter={[48, 96]} align="middle">
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <Col xs={24} md={10} order={index % 2 === 0 ? 0 : 1}>
                  <FeatureCard>
                    <IconWrapper>{feature.icon}</IconWrapper>
                    <FeatureTitle level={2}>{feature.title}</FeatureTitle>
                    <Paragraph
                      style={{
                        color: "rgba(255, 255, 255, 0.85)",
                        fontSize: "16px",
                        lineHeight: "1.6",
                        marginBottom: 0,
                      }}
                    >
                      {feature.description}
                    </Paragraph>
                  </FeatureCard>
                </Col>
                <Col xs={24} md={14} order={index % 2 === 0 ? 1 : 0}>
                  <ImageContainer>
                    <StyledImage
                      src={feature.image}
                      alt={feature.imageAlt}
                      width={400}
                      height={400}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEwMS4wLy4yPjw+Oj47QzxAQD5GOzdYTEtQVlJTWls+RVtfZFtsXGv/2wBDARUXFx4dHhwYGBxrPjA+a2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </ImageContainer>
                </Col>
              </React.Fragment>
            ))}
          </Row>
        </Content>
      </Container>
    </ConfigProvider>
  );
};

export default FeatureSection;
