"use client";

import { useState } from "react";
import { Form, InputNumber, Alert } from "antd";
import { ClrButton } from "app/components/Button/Base";
import ToolForm from "app/components/tools/ToolForm";
import ResultCard, { ResultStat } from "app/components/tools/ResultCard";
import {
  calculateRetirement,
  formatRupees,
  formatLakhCrore,
  type RetirementResult,
} from "./logic";

type FormValues = {
  currentAge: number;
  retirementAge: number;
  currentSavings: number;
  monthlyContribution: number;
  annualReturn: number;
  inflationRate: number;
  desiredMonthlyIncome: number;
  retirementDuration: number;
};

const defaults: FormValues = {
  currentAge: 30,
  retirementAge: 60,
  currentSavings: 500000,
  monthlyContribution: 10000,
  annualReturn: 12,
  inflationRate: 6,
  desiredMonthlyIncome: 50000,
  retirementDuration: 25,
};

const numberField = (label: string, extra?: string) => (
  <span className="font-medium text-gray-700">
    {label}
    {extra && <span className="font-normal text-gray-400 text-xs ml-1">{extra}</span>}
  </span>
);

export default function RetirementCalculator() {
  const [form] = Form.useForm<FormValues>();
  const [result, setResult] = useState<RetirementResult | null>(null);
  const [showFullProjection, setShowFullProjection] = useState(false);

  const compute = (values: FormValues) => {
    if (values.currentAge && values.retirementAge && values.retirementAge > values.currentAge) {
      setResult(calculateRetirement(values));
    }
  };

  const onValuesChange = (_: Partial<FormValues>, all: FormValues) => compute(all);

  return (
    <div>
      <ToolForm title="Retirement planning details">
        <Form
          form={form}
          layout="vertical"
          initialValues={defaults}
          onValuesChange={onValuesChange}
          onFinish={compute}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <Form.Item
              name="currentAge"
              label={numberField("Current Age")}
              rules={[{ required: true, message: "Required" }]}
            >
              <InputNumber style={{ width: "100%" }} min={18} max={80} suffix="yrs" size="large" />
            </Form.Item>

            <Form.Item
              name="retirementAge"
              label={numberField("Retirement Age")}
              rules={[{ required: true, message: "Required" }]}
            >
              <InputNumber style={{ width: "100%" }} min={30} max={80} suffix="yrs" size="large" />
            </Form.Item>

            <Form.Item
              name="currentSavings"
              label={numberField("Current Retirement Savings", "(EPF + PPF + NPS + other)")}
              rules={[{ required: true, message: "Required" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={0 as number}
                step={10000}
                prefix="₹"
                size="large"
                formatter={(v) => `${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                parser={(v) => Number(v?.replace(/,/g, "") ?? 0)}
              />
            </Form.Item>

            <Form.Item
              name="monthlyContribution"
              label={numberField("Monthly Contribution")}
              rules={[{ required: true, message: "Required" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={0 as number}
                step={500}
                prefix="₹"
                size="large"
                formatter={(v) => `${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                parser={(v) => Number(v?.replace(/,/g, "") ?? 0)}
              />
            </Form.Item>

            <Form.Item
              name="annualReturn"
              label={numberField("Expected Annual Return")}
              rules={[{ required: true, message: "Required" }]}
            >
              <InputNumber style={{ width: "100%" }} min={1} max={30} step={0.5} precision={1} suffix="% p.a." size="large" />
            </Form.Item>

            <Form.Item
              name="inflationRate"
              label={numberField("Inflation Rate", "(use 6% for India)")}
              rules={[{ required: true, message: "Required" }]}
            >
              <InputNumber style={{ width: "100%" }} min={1} max={20} step={0.5} precision={1} suffix="% p.a." size="large" />
            </Form.Item>

            <Form.Item
              name="desiredMonthlyIncome"
              label={numberField("Desired Monthly Income", "(today's value)")}
              rules={[{ required: true, message: "Required" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={0 as number}
                step={5000}
                prefix="₹"
                size="large"
                formatter={(v) => `${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                parser={(v) => Number(v?.replace(/,/g, "") ?? 0)}
              />
            </Form.Item>

            <Form.Item
              name="retirementDuration"
              label={numberField("Years in Retirement")}
              rules={[{ required: true, message: "Required" }]}
            >
              <InputNumber style={{ width: "100%" }} min={5} max={50} suffix="yrs" size="large" />
            </Form.Item>
          </div>

          <ClrButton btntype="secondary" htmlType="submit" size="large">
            Calculate Retirement Plan
          </ClrButton>
        </Form>
      </ToolForm>

      {result && (
        <ResultCard
          title="Your Retirement Plan"
          footer={
            <div className="text-sm text-gray-500">
              {result.yearsToRetirement} years to retirement · Inflation-adjusted projection
            </div>
          }
        >
          {/* Status banner */}
          <Alert
            type={result.isOnTrack ? "success" : "warning"}
            message={
              result.isOnTrack
                ? `You are on track — surplus of ${formatLakhCrore(Math.abs(result.corpusGap))}`
                : `Shortfall of ${formatLakhCrore(result.corpusGap)} — save ₹${result.additionalSavingsNeeded.toLocaleString("en-IN")}/month more`
            }
            showIcon
            className="mb-4"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            <ResultStat
              label="Corpus at Retirement"
              value={formatLakhCrore(result.corpusAtRetirement)}
              highlight
            />
            <ResultStat
              label="Required Corpus"
              value={formatLakhCrore(result.requiredCorpus)}
            />
            <ResultStat
              label="Monthly Income Needed"
              value={formatRupees(result.inflationAdjustedIncome)}
            />
            <ResultStat
              label={result.isOnTrack ? "Surplus" : "Shortfall"}
              value={formatLakhCrore(Math.abs(result.corpusGap))}
            />
          </div>

          {/* Year-by-year projection */}
          <div className="mt-2">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
              Corpus Growth Projection
            </p>
            <div className="overflow-x-auto max-h-64">
              <table className="w-full text-sm text-left">
                <thead className="sticky top-0 bg-white">
                  <tr className="border-b border-gray-100 text-xs text-gray-500 uppercase">
                    <th className="py-2 pr-4">Age</th>
                    <th className="py-2 pr-4">Total Contributed</th>
                    <th className="py-2">Projected Corpus</th>
                  </tr>
                </thead>
                <tbody>
                  {(showFullProjection
                    ? result.yearlyProjection
                    : result.yearlyProjection.filter((r) => r.year % 5 === 0 || r.year === 1)
                  ).map((row) => (
                    <tr key={row.age} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-2 pr-4 font-medium text-gray-700">Age {row.age}</td>
                      <td className="py-2 pr-4 text-gray-500">{formatLakhCrore(row.contributed)}</td>
                      <td className="py-2 font-semibold text-blue-700">{formatLakhCrore(row.corpus)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {!showFullProjection && (
              <button
                onClick={() => setShowFullProjection(true)}
                className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Show year-by-year breakdown ↓
              </button>
            )}
          </div>
        </ResultCard>
      )}
    </div>
  );
}
