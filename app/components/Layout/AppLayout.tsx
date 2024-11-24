"use client";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { PropsWithChildren } from "react";
import { ClrFooter } from "../Footer";
import { ClrHeader } from "../Header";
import { ClrBackTop } from "../BackTop";

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Layout>
      <ClrHeader />
      <Layout>
        <Content style={{ minHeight: "80vh" }}>
          {children}
          <ClrBackTop />
        </Content>
      </Layout>
      <ClrFooter />
    </Layout>
  );
};
