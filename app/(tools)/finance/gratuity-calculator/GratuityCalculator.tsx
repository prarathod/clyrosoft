"use client";

import { useState } from "react";
import { Form, InputNumber, Radio, Alert } from "antd";
import { ClrButton } from "app/components/Button/Base";
import ToolForm from "app/components/tools/ToolForm";
import ResultCard, { ResultStat } from "app/components/tools/ResultCard";
import {
  calculateGratuity,
  formatRupees,
  formatLakhCrore,
  type EmploymentType,
  type GratuityResult,
} from "./logic";

type FormValues = {
  basicSalary: number;
  yearsOfService: number;
  employmentType: EmploymentType;
};

const defaults: FormValues = {
  basicSalary: 50000,
  yearsOfService: 10,
  employmentType: "private",
};

export default function GratuityCalculator() {
  const [form] = Form.useForm<FormValues>();
  const [result, setResult] = useState<GratuityResult | null>(null);

  const onFinish = (values: FormValues) => {
    setResult(calculateGratuity(values));
  };

  const onValuesChange = (_: Partial<FormValues>, all: FormValues) => {
    if (all.basicSalary && all.yearsOfService) {
      setResult(calculateGratuity(all));
    }
  };

  return (
    <div>
      <ToolForm title="Employment details">
        <Form
          form={form}
          layout="vertical"
          initialValues={defaults}
          onValuesChange={onValuesChange}
          onFinish={onFinish}
        >
          {/* Employment Type */}
          <Form.Item
            name="employmentType"
            label={<span className="font-medium text-gray-700">Employment Type</span>}
          >
            <Radio.Group size="large">
              <Radio.Button value="private">Private Sector</Radio.Button>
              <Radio.Button value="government">Government</Radio.Button>
            </Radio.Group>
          </Form.Item>

          {/* Basic Salary */}
          <Form.Item
            name="basicSalary"
            label={
              <span className="font-medium text-gray-700">
                Last Basic Salary + DA (Monthly)
              </span>
            }
            rules={[{ required: true, message: "Enter basic salary" }]}
            extra="Include Basic Pay + Dearness Allowance only. Exclude HRA and other allowances."
          >
            <InputNumber
              style={{ width: "100%" }}
              min={1000 as number}
              max={10000000 as number}
              step={1000}
              prefix="₹"
              size="large"
              formatter={(v) => `${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              parser={(v) => Number(v?.replace(/,/g, "") ?? 0)}
            />
          </Form.Item>

          {/* Years of Service */}
          <Form.Item
            name="yearsOfService"
            label={
              <span className="font-medium text-gray-700">Years of Service</span>
            }
            rules={[{ required: true, message: "Enter years of service" }]}
            extra="Private sector: minimum 5 completed years required for eligibility."
          >
            <InputNumber
              style={{ width: "100%" }}
              min={0}
              max={50}
              step={0.5}
              precision={1}
              suffix="Years"
              size="large"
            />
          </Form.Item>

          <ClrButton btntype="secondary" htmlType="submit" size="large">
            Calculate Gratuity
          </ClrButton>
        </Form>
      </ToolForm>

      {result && (
        <ResultCard title="Your Gratuity Calculation">
          {!result.isEligible ? (
            <Alert
              type="warning"
              message="Not Eligible for Gratuity"
              description="You must complete a minimum of 5 years of continuous service to be eligible for gratuity under the Payment of Gratuity Act, 1972."
              showIcon
            />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <ResultStat
                  label="Gratuity Amount"
                  value={formatLakhCrore(result.gratuity)}
                  highlight
                />
                <ResultStat
                  label="Tax-Free Portion"
                  value={formatLakhCrore(result.taxExemptAmount)}
                />
                <ResultStat
                  label="Taxable Amount"
                  value={formatRupees(result.taxableAmount)}
                />
              </div>

              <div className="mt-3 p-3 bg-gray-50 rounded-xl text-sm text-gray-600">
                <p className="font-medium text-gray-700 mb-1">Formula Applied</p>
                <p className="font-mono text-xs">{result.formulaUsed}</p>
                {result.taxableAmount === 0 && (
                  <p className="mt-2 text-emerald-700 text-xs font-medium">
                    ✓ Fully tax-exempt — your gratuity is within the ₹20 lakh limit.
                  </p>
                )}
                {result.taxableAmount > 0 && (
                  <p className="mt-2 text-amber-700 text-xs font-medium">
                    ⚠ {formatRupees(result.taxableAmount)} exceeds the ₹20 lakh exemption limit and will be taxed per your income slab.
                  </p>
                )}
              </div>
            </>
          )}
        </ResultCard>
      )}
    </div>
  );
}
