import React from "react";
import { Form, Input, Modal } from "antd";
import {
  PhoneOutlined,
  UserOutlined,
  MailOutlined,
  BankOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { ClrButton } from "../Button/Base";

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
    padding: 16px;
  }

  .ant-modal-header {
    margin-bottom: 16px;
  }

  .ant-modal-title {
    font-size: 18px;
    font-weight: 600;
  }

  .ant-form-item {
    margin-bottom: 12px;
  }

  .ant-form-item-label > label {
    font-weight: 500;
    font-size: 14px;
    height: 24px;
  }

  .ant-input {
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      border-color: #4096ff;
      box-shadow: 0 0 0 2px rgba(64, 150, 255, 0.1);
    }
  }

  .submit-button {
    background: linear-gradient(90deg, #4096ff 0%, #1677ff 100%);
    border: none;
    height: 36px;
    font-weight: 500;
    font-size: 14px;
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
  }
`;

const { TextArea } = Input;

export const ScheduleCallModal = ({
  open,
  onCancel,
}: {
  open: boolean;
  onCancel: () => void;
}) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      form.resetFields();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <StyledModal
      title="Schedule a Call"
      open={open}
      onCancel={onCancel}
      footer={null}
      width={600}
      centered
    >
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        onFinish={handleSubmit}
        requiredMark={false}
        size="small"
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input
            prefix={<UserOutlined className="text-gray-400" />}
            placeholder="John Doe"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input
            prefix={<MailOutlined className="text-gray-400" />}
            placeholder="name@company.com"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please enter your phone number" },
            {
              pattern: /^(\+\d{1,3}[- ]?)?\d{10}$/,
              message: "Invalid phone number",
            },
          ]}
        >
          <Input
            prefix={<PhoneOutlined className="text-gray-400" />}
            placeholder="+1 (555) 000-0000"
          />
        </Form.Item>

        <Form.Item
          name="company"
          label="Company Name"
          rules={[{ required: true, message: "Please enter company name" }]}
        >
          <Input
            prefix={<BankOutlined className="text-gray-400" />}
            placeholder="Your company name"
          />
        </Form.Item>

        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <TextArea placeholder="Tell us about your project..." rows={3} />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <ClrButton
            style={{ width: "100%", borderRadius: "20px" }}
            btntype="secondary"
            htmlType="submit"
          >
            Schedule Call
          </ClrButton>
        </Form.Item>
      </Form>
    </StyledModal>
  );
};
