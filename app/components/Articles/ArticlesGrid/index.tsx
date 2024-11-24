"use client";
import React, { useState } from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ClrButton } from "../../Button/Base";
import { useRouter } from "next/navigation";
import Image from "next/image";

const { Title, Paragraph } = Typography;

const articles = [
  {
    id: 1,
    image: "/articles/article-1.png",
    title: "Simply dummy text of the printing and typesetting industry.",
    description:
      "The blog, seeing how much happen his subjects were, realized the error of its ways and resolved to change for the better. Lorem Ipsum has been the industry's standard dummy text ever since...",
  },
  {
    id: 2,
    image: "/articles/article-2.png",
    title: "Simply dummy text of the printing and typesetting industry.",
    description:
      "The blog, seeing how much happen his subjects were, realized the error of its ways and resolved to change for the better. Lorem Ipsum has been the industry's standard dummy text ever since...",
  },
  {
    id: 3,
    image: "/articles/article-3.png",
    title: "Simply dummy text of the printing and typesetting industry.",
    description:
      "The blog, seeing how much happen his subjects were, realized the error of its ways and resolved to change for the better. Lorem Ipsum has been the industry's standard dummy text ever since...",
  },
  {
    id: 4,
    image: "/articles/article-4.png",
    title: "Simply dummy text of the printing and typesetting industry.",
    description:
      "The blog, seeing how much happen his subjects were, realized the error of its ways and resolved to change for the better. Lorem Ipsum has been the industry's standard dummy text ever since...",
  },
  {
    id: 5,
    image: "/articles/article-5.png",
    title: "Simply dummy text of the printing and typesetting industry.",
    description:
      "The blog, seeing how much happen his subjects were, realized the error of its ways and resolved to change for the better. Lorem Ipsum has been the industry's standard dummy text ever since...",
  },
  {
    id: 6,
    image: "/articles/article-6.png",
    title: "Simply dummy text of the printing and typesetting industry.",
    description:
      "The blog, seeing how much happen his subjects were, realized the error of its ways and resolved to change for the better. Lorem Ipsum has been the industry's standard dummy text ever since...",
  },
];

const ArticleGrid = ({ isLoadMoreVisible = true }) => {
  const ArticleCard = ({
    article,
  }: {
    article: { id: number; image: string; title: string; description: string };
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();
    return (
      <Card
        hoverable
        style={{
          height: "100%",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: isHovered
            ? "0 8px 20px rgba(0,0,0,0.15)"
            : "0 4px 12px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease-in-out",
          transform: isHovered ? "translateY(-5px)" : "none",
        }}
        bodyStyle={{
          padding: "20px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          router.push("articles/1");
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            height: "240px",
            marginTop: "-20px",
            marginLeft: "-20px",
            marginRight: "-20px",
            borderRadius: "12px 12px 0 0",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: isHovered ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)",
              transition: "all 0.3s ease-in-out",
              zIndex: 1,
            }}
          />
          <Image
            alt="Article thumbnail"
            src={article.image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease-in-out",
              transform: isHovered ? "scale(1.1) rotate(1deg)" : "scale(1)",
            }}
            width={600}
            height={400}
          />
          {isHovered && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <Button
                type="primary"
                ghost
                icon={<ArrowRightOutlined />}
                style={{
                  borderRadius: "20px",
                  borderColor: "#fff",
                  color: "#fff",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                Read More
              </Button>
            </div>
          )}
        </div>

        <div style={{ marginTop: "16px" }}>
          <Title
            level={4}
            style={{
              marginBottom: "12px",
              fontSize: "18px",
              lineHeight: "1.4",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {article.title}
          </Title>
          <Paragraph
            style={{
              color: "#666",
              margin: 0,
              fontSize: "14px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {article.description}
          </Paragraph>
        </div>
      </Card>
    );
  };

  return (
    <div style={{ padding: "40px 20px", background: "#f5f5f5" }}>
      <Row gutter={[24, 24]} style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {articles.map((article) => (
          <Col key={article.id} xs={24} sm={12} lg={8}>
            <ArticleCard article={article} />
          </Col>
        ))}
      </Row>
      {isLoadMoreVisible && (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <ClrButton btntype="primary">Load More</ClrButton>
        </div>
      )}
    </div>
  );
};

export default ArticleGrid;
