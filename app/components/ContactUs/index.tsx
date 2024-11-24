"use client";
import React, { useState } from "react";
import { Form, Input, Card, Avatar, Typography, message } from "antd";
import {
  TwitterOutlined,
  LinkOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { ClrButton } from "../Button/Base";
import { sendEmail } from "@/app/Service/EmailService";
import { ContactFormFieldTypes } from "@/app/Types/type";

const { TextArea } = Input;
const { Title, Text } = Typography;

// Dummy avatar data
const avatars = [
  { id: 1, url: "https://api.dicebear.com/7.x/avataaars/svg?seed=1" },
  { id: 2, url: "https://api.dicebear.com/7.x/avataaars/svg?seed=2" },
  { id: 3, url: "https://api.dicebear.com/7.x/avataaars/svg?seed=3" },
  { id: 4, url: "https://api.dicebear.com/7.x/avataaars/svg?seed=4" },
  { id: 5, url: "https://api.dicebear.com/7.x/avataaars/svg?seed=5" },
];

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: ContactFormFieldTypes) => {
    setLoading(true);
    try {
      await sendEmail(values);
      message.success(
        `Thank you ${values.fullName}} for your message! We will get back to you soon.`
      );
      form.resetFields();
    } catch {
      message.error("Something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto p-6">
      {/* Left side - Contact Form */}
      <div className="flex-1">
        <Card bordered={false} className="shadow-sm">
          <Title style={{ fontWeight: "bolder" }} level={5}>
            Contact Us
          </Title>
          <Text className="text-gray-500 block mb-6">
            Please reach out to us and we will get back to you at the speed of
            light.
          </Text>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="fullName"
              label="Full Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="John Doe" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email address"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="name@company.com" />
            </Form.Item>

            <Form.Item name="company" label="Company">
              <Input placeholder="Your company name" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <TextArea rows={4} placeholder="Enter your message here" />
            </Form.Item>

            <Form.Item>
              <ClrButton
                style={{ borderRadius: "20px" }}
                btntype="secondary"
                htmlType="submit"
                block
                loading={loading}
              >
                Submit
              </ClrButton>
            </Form.Item>
          </Form>

          <div className="flex justify-center gap-4 mt-4">
            <TwitterOutlined className="text-gray-600 text-xl cursor-pointer hover:text-blue-400" />
            <LinkOutlined className="text-gray-600 text-xl cursor-pointer hover:text-blue-400" />
            <InstagramOutlined className="text-gray-600 text-xl cursor-pointer hover:text-blue-400" />
          </div>
        </Card>
      </div>

      {/* Right side - Users Section */}
      <div className="flex-1 flex items-center">
        <div className="text-center">
          <Avatar.Group>
            {avatars.map((avatar) => (
              <Avatar
                key={avatar.id}
                src={avatar.url}
                size={40}
                className="border-2 border-white"
              />
            ))}
          </Avatar.Group>
          <Title level={4} className="mt-6">
            Every AI is used by thousands of users
          </Title>
          <Text className="text-gray-500">
            With lots of AI applications around! Everything AI makes will work
            as hard as Pro art Marketing
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
