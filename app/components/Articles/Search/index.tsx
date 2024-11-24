"use client"
import React from "react";
import { Typography, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const ArticleSearch = () => {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "800px",
        margin: "60px auto",
        padding: "0 20px",
      }}
    >
      <Title
        level={1}
        style={{
          fontSize: "36px",
          marginBottom: "16px",
          fontWeight: "600",
        }}
      >
        Everything you need to know about web apps
      </Title>

      <Paragraph
        style={{
          fontSize: "16px",
          color: "#666",
          marginBottom: "32px",
        }}
      >
        Discover insightful resources and expert advice from our seasoned team
        to elevate your knowledge.
      </Paragraph>

      <Input
        size="large"
        placeholder="Type a keyword to search..."
        prefix={<SearchOutlined style={{ color: "#bfbfbf" }} />}
        style={{
          maxWidth: "600px",
          borderRadius: "24px",
          padding: "8px 16px",
          fontSize: "16px",
        }}
      />
    </div>
  );
};

export default ArticleSearch;
