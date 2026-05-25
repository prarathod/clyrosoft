"use client";

import { useState } from "react";
import { Form, InputNumber, Slider, Tabs } from "antd";
import { ClrButton } from "app/components/Button/Base";
import ToolForm from "app/components/tools/ToolForm";
import ResultCard, { ResultStat } from "app/components/tools/ResultCard";
import {
  calculateEmi,
  formatRupees,
  formatLakhCrore,
  type EmiResult,
} from "./logic";

type FormValues = {
  principal: number;
  annualRate: number;
  tenureYears: number;
};

const defaults: FormValues = {
  principal: 2000000,     // ₹20 lakh — typical home loan
  annualRate: 8.5,
  tenureYears: 20,
};

export default function EmiCalculator() {
  const [form] = Form.useForm<FormValues>();
  const [result, setResult] = useState<EmiResult | null>(null);
  const [showFullSchedule, setShowFullSchedule] = useState(false);

  // Watch slider values for live preview
  const [liveValues, setLiveValues] = useState<FormValues>(defaults);

  const onValuesChange = (changed: Partial<FormValues>, all: FormValues) => {
    setLiveValues(all);
    // Auto-calculate on every change (no submit needed)
    if (all.principal && all.annualRate && all.tenureYears) {
      const res = calculateEmi({
        principal: all.principal,
        annualRate: all.annualRate,
        tenureMonths: all.tenureYears * 12,
      });
      setResult(res);
    }
  };

  const onFinish = (values: FormValues) => {
    const res = calculateEmi({
      principal: values.principal,
      annualRate: values.annualRate,
      tenureMonths: values.tenureYears * 12,
    });
    setResult(res);
  };

  return (
    <div>
      {/* ── Input Form ─────────────────────────────────────────────── */}
      <ToolForm title="Loan details">
        <Form
          form={form}
          layout="vertical"
          initialValues={defaults}
          onValuesChange={onValuesChange}
          onFinish={onFinish}
        >
          {/* Loan Amount */}
          <Form.Item
            name="principal"
            label={
              <span className="font-medium text-gray-700">
                Loan Amount:{" "}
                <span className="text-blue-600 font-semibold">
                  {formatLakhCrore(liveValues.principal ?? defaults.principal)}
                </span>
              </span>
            }
            rules={[{ required: true, message: "Enter loan amount" }]}
          >
            <div className="space-y-2">
              <Slider
                min={100000}
                max={10000000}
                step={100000}
                value={liveValues.principal}
                onChange={(v) => {
                  form.setFieldValue("principal", v);
                  setLiveValues((prev) => ({ ...prev, principal: v }));
                  form.submit();
                }}
                tooltip={{ formatter: (v) => formatLakhCrore(v ?? 0) }}
              />
              <InputNumber
                style={{ width: "100%" }}
                min={10000 as number}
                max={100000000 as number}
                step={10000}
                prefix="₹"
                size="large"
                formatter={(v) =>
                  `${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(v) => Number(v?.replace(/,/g, "") ?? 0)}
              />
            </div>
          </Form.Item>

          {/* Interest Rate */}
          <Form.Item
            name="annualRate"
            label={
              <span className="font-medium text-gray-700">
                Interest Rate:{" "}
                <span className="text-blue-600 font-semibold">
                  {liveValues.annualRate ?? defaults.annualRate}% per annum
                </span>
              </span>
            }
            rules={[{ required: true, message: "Enter interest rate" }]}
          >
            <div className="space-y-2">
              <Slider
                min={4}
                max={30}
                step={0.1}
                value={liveValues.annualRate}
                onChange={(v) => {
                  form.setFieldValue("annualRate", v);
                  setLiveValues((prev) => ({ ...prev, annualRate: v }));
                  form.submit();
                }}
                tooltip={{ formatter: (v) => `${v}%` }}
              />
              <InputNumber
                style={{ width: "100%" }}
                min={1}
                max={50}
                step={0.1}
                precision={1}
                suffix="% p.a."
                size="large"
              />
            </div>
          </Form.Item>

          {/* Tenure */}
          <Form.Item
            name="tenureYears"
            label={
              <span className="font-medium text-gray-700">
                Loan Tenure:{" "}
                <span className="text-blue-600 font-semibold">
                  {liveValues.tenureYears ?? defaults.tenureYears} Years
                </span>
              </span>
            }
            rules={[{ required: true, message: "Enter loan tenure" }]}
          >
            <div className="space-y-2">
              <Slider
                min={1}
                max={30}
                step={1}
                value={liveValues.tenureYears}
                onChange={(v) => {
                  form.setFieldValue("tenureYears", v);
                  setLiveValues((prev) => ({ ...prev, tenureYears: v }));
                  form.submit();
                }}
                tooltip={{ formatter: (v) => `${v} yr` }}
              />
              <InputNumber
                style={{ width: "100%" }}
                min={1}
                max={30}
                step={1}
                suffix="Years"
                size="large"
              />
            </div>
          </Form.Item>

          <ClrButton btntype="secondary" htmlType="submit" size="large">
            Calculate EMI
          </ClrButton>
        </Form>
      </ToolForm>

      {/* ── Result ─────────────────────────────────────────────────── */}
      {result && (
        <ResultCard
          title="Your EMI Breakdown"
          footer={
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                Principal:{" "}
                <strong className="text-gray-700">
                  {result.principalPercent}%
                </strong>{" "}
                · Interest:{" "}
                <strong className="text-red-600">
                  {result.interestPercent}%
                </strong>
              </span>
              <span className="text-xs text-gray-400">
                {liveValues.tenureYears * 12} monthly payments
              </span>
            </div>
          }
        >
          {/* Primary stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <ResultStat
              label="Monthly EMI"
              value={formatRupees(result.emi)}
              highlight
            />
            <ResultStat
              label="Total Interest"
              value={formatLakhCrore(result.totalInterest)}
            />
            <ResultStat
              label="Total Payable"
              value={formatLakhCrore(result.totalAmount)}
            />
          </div>

          {/* Yearly breakdown table */}
          <Tabs
            items={[
              {
                key: "yearly",
                label: "Yearly Summary",
                children: (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead>
                        <tr className="border-b border-gray-100 text-xs text-gray-500 uppercase">
                          <th className="py-2 pr-4">Year</th>
                          <th className="py-2 pr-4">Principal Paid</th>
                          <th className="py-2 pr-4">Interest Paid</th>
                          <th className="py-2">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.yearlyBreakdown.map((row) => (
                          <tr
                            key={row.year}
                            className="border-b border-gray-50 hover:bg-gray-50"
                          >
                            <td className="py-2 pr-4 font-medium text-gray-700">
                              Year {row.year}
                            </td>
                            <td className="py-2 pr-4 text-emerald-700">
                              {formatRupees(row.principalPaid)}
                            </td>
                            <td className="py-2 pr-4 text-red-600">
                              {formatRupees(row.interestPaid)}
                            </td>
                            <td className="py-2 text-gray-600">
                              {formatLakhCrore(row.balance)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ),
              },
              {
                key: "monthly",
                label: `Monthly Schedule (${result.schedule.length} months)`,
                children: (
                  <div>
                    <div className="overflow-x-auto max-h-64">
                      <table className="w-full text-sm text-left">
                        <thead className="sticky top-0 bg-white">
                          <tr className="border-b border-gray-100 text-xs text-gray-500 uppercase">
                            <th className="py-2 pr-3">Month</th>
                            <th className="py-2 pr-3">EMI</th>
                            <th className="py-2 pr-3">Principal</th>
                            <th className="py-2 pr-3">Interest</th>
                            <th className="py-2">Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(showFullSchedule
                            ? result.schedule
                            : result.schedule.slice(0, 24)
                          ).map((row) => (
                            <tr
                              key={row.month}
                              className="border-b border-gray-50 hover:bg-gray-50"
                            >
                              <td className="py-1.5 pr-3 font-medium text-gray-600">
                                {row.month}
                              </td>
                              <td className="py-1.5 pr-3">
                                {formatRupees(row.emi)}
                              </td>
                              <td className="py-1.5 pr-3 text-emerald-700">
                                {formatRupees(row.principalPaid)}
                              </td>
                              <td className="py-1.5 pr-3 text-red-600">
                                {formatRupees(row.interestPaid)}
                              </td>
                              <td className="py-1.5 text-gray-500">
                                {formatLakhCrore(row.balance)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {!showFullSchedule && result.schedule.length > 24 && (
                      <button
                        onClick={() => setShowFullSchedule(true)}
                        className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Show all {result.schedule.length} months ↓
                      </button>
                    )}
                  </div>
                ),
              },
            ]}
          />
        </ResultCard>
      )}
    </div>
  );
}
