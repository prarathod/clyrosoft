"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, Button, Typography, Avatar } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title, Text } = Typography;

const testimonials = [
  {
    id: 1,
    name: "Harsh P.",
    role: "Product Designer",
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=harsh`,
    rating: 5,
    comment:
      "I used to dread doing my taxes every year, but jakgedone has made the process so much simpler and stress-free.",
  },
  {
    id: 2,
    name: "Jane D.",
    role: "CEO",
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=jane`,
    rating: 5,
    comment:
      "The user interface is so intuitive, I was able to start using it without any guidance.",
  },
  {
    id: 3,
    name: "John S.",
    role: "Developer",
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=john`,
    rating: 5,
    comment:
      "Outstanding experience! The attention to detail and user-centric design really sets this apart.",
  },
  {
    id: 4,
    name: "Alex K.",
    role: "Developer",
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=alex`,
    rating: 4.8,
    comment:
      "Absolutely revolutionary. This has transformed how we handle our workflow.",
  },
];

const TestimonialCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const numPages = Math.ceil(testimonials.length / 2);
  const paginate = (newDirection: number) => {
    setCurrentPage((prev) => (prev + newDirection + numPages) % numPages);
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div style={{ display: "flex", gap: "4px" }}>
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            style={{
              fontSize: "16px",
              color: i < rating ? "#FFB800" : "#E8E8E8",
            }}
          >
            ★
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "64px 24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "48px" }}
      >
        <Title level={2} style={{ marginBottom: 0 }}>
          23k+ Customers gave their{" "}
          <Text style={{ color: "#5C43E8", fontWeight: 700 }}>Feedback</Text>
        </Title>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          padding: "16px",
        }}
      >
        {testimonials
          .slice(currentPage * 2, currentPage * 2 + 2)
          .map((testimonial) => (
            <Card
              key={testimonial.id}
              style={{
                background: "#fff",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                height: "100%",
                border: "1px solid #f0f0f0",
                borderRadius: "12px",
              }}
              bodyStyle={{ padding: "24px" }}
              hoverable
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Text
                  style={{
                    fontSize: "16px",
                    display: "block",
                    marginBottom: "24px",
                    color: "#444",
                    lineHeight: "1.6",
                  }}
                >
                  &quot;{testimonial.comment}&quot;
                </Text>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <Avatar size={48} src={testimonial.avatar} />
                    <div>
                      <Text
                        strong
                        style={{
                          display: "block",
                          fontSize: "16px",
                          color: "#222",
                        }}
                      >
                        {testimonial.name}
                      </Text>
                      <Text type="secondary" style={{ fontSize: "14px" }}>
                        {testimonial.role}
                      </Text>
                    </div>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </motion.div>
            </Card>
          ))}
      </motion.div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "32px",
        }}
      >
        <Button
          onClick={() => paginate(-1)}
          icon={<LeftOutlined />}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 16px",
            height: "40px",
          }}
        />
        <Button
          onClick={() => paginate(1)}
          icon={<RightOutlined />}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 16px",
            height: "40px",
          }}
        />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
