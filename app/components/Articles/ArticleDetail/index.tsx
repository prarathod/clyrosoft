"use client";
import React from "react";
import { Typography, Divider } from "antd";
import Image from "next/image";

const { Title, Paragraph, Text } = Typography;

const ArticlePost = () => {
  return (
    <div>
      <article
        style={{
          maxWidth: "94%",
          margin: "0 auto",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        {/* Hero Image Section */}
        <div
          style={{
            position: "relative",
            marginBottom: "40px",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/articles/article-7.png"
            alt="Wedding couple kissing under veil"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              filter: "grayscale(100%)",
            }}
            width={800}
            height={400}
          />
        </div>

        {/* Title Section */}
        <Title
          level={1}
          style={{
            fontSize: "36px",
            fontWeight: "700",
            marginBottom: "24px",
            color: "#1a1a1a",
          }}
        >
          Taxing Laughter: The Joke Tax Chronicles
        </Title>

        {/* Main Content */}
        <div style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}>
          <Paragraph>
            Lorem Ipsum has been the industry&apos;s standard text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. A text scrambled only five centuries, but also
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of tax rates sheets
            containing Lorem Ipsum revenue, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Paragraph>

          <Title
            level={2}
            style={{
              fontSize: "24px",
              fontWeight: "600",
              marginTop: "40px",
              marginBottom: "20px",
              color: "#1a1a1a",
            }}
          >
            The People of the Kingdom
          </Title>

          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s. When an unknown printer took a galley of
            type and scrambled it to make a type specimen book... A text
            scrambled only five centuries, but also leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of tax rates sheets containing Lorem
            Ipsum revenue, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>

          <Paragraph>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites.
          </Paragraph>

          <Paragraph>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from
            &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also
            reproduced in their exact original form, accompanied by English
            versions from the 1914 translation by H. Rackham.
          </Paragraph>
        </div>

        {/* Additional Styling Elements */}
        <Divider style={{ margin: "40px 0" }} />

        {/* Footer Info */}
        <div
          style={{
            color: "#666",
            fontSize: "14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Text>Published on November 17, 2024</Text>
          <Text>5 min read</Text>
        </div>
      </article>
      <h1
        style={{
          margin: "0 auto",
          paddingLeft: "60px",
          fontSize: "36px",
          color: "#52525B",
        }}
      >
        Related Articles
      </h1>
    </div>
  );
};

export default ArticlePost;
