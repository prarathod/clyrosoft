"use client";
import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { CodeOutlined, LayoutOutlined, TeamOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { ClrButton } from "../Button/Base";
import HeroSection2 from "./index2";

const { Title, Paragraph } = Typography;

const StyledSection = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, #f7fafc 100%);
  padding: 4rem 2rem;
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const HeroContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: #8b5cf6;
  }

  .ant-card-body {
    padding: 24px;
  }

  .icon-wrapper {
    font-size: 2rem;
    margin-bottom: 1rem;
    transition: color 0.3s ease;
    color: #4096ff;
  }

  &:hover .icon-wrapper {
    color: #8b5cf6;
  }
`;

const StyledButton = styled(ClrButton)`
  background: linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%);
  border: none;
  height: 48px;
  padding: 0 32px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;

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

const HeroSection = () => {
  const features = [
    {
      icon: <CodeOutlined className="icon-wrapper" />,
      title: "Modern Development",
      description:
        "We create scalable, responsive web applications using cutting-edge technologies and best practices.",
    },
    {
      icon: <LayoutOutlined className="icon-wrapper" />,
      title: "Custom Design",
      description:
        "Personalized designs that align with your brand, ensuring intuitive navigation and user experience.",
    },
    {
      icon: <TeamOutlined className="icon-wrapper" />,
      title: "Expert Team",
      description:
        "Our experienced developers deliver high-quality solutions that scale with your business needs.",
    },
  ];

  return (
    <>
      <HeroSection2 />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Hero Header */}
        {/* <HeroContainer>
          <Title level={1} style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
            Web Apps that <GradientText>Make Sense</GradientText>
          </Title>
          <Paragraph
            style={{
              fontSize: "1.25rem",
              color: "#4B5563",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            We build websites that drive results, combining beautiful design
            with powerful functionality. Created by industry professionals with
            years of experience.
          </Paragraph>
        </HeroContainer> */}

        {/* Features Grid */}
        {/* <Row gutter={[24, 24]} style={{ marginBottom: "4rem" }}>
          {features.map((feature, index) => (
            <Col key={index} xs={24} md={8}>
              <StyledCard>
                {feature.icon}
                <Title level={3} style={{ marginBottom: "1rem" }}>
                  {feature.title}
                </Title>
                <Paragraph style={{ color: "#4B5563", marginBottom: 0 }}>
                  {feature.description}
                </Paragraph>
              </StyledCard>
            </Col>
          ))}
        </Row> */}

        {/* CTA Button */}
        <div style={{ textAlign: "center" }}>
          <StyledButton btntype="quaternary" size="large">
            Explore Work
          </StyledButton>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
