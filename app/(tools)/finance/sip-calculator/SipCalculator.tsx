"use client";

import { useState } from "react";
import { Form, InputNumber, Slider } from "antd";
import { ClrButton } from "app/components/Button/Base";
import ToolForm from "app/components/tools/ToolForm";
import ResultCard, { ResultStat } from "app/components/tools/ResultCard";
import { calculateSip, formatRupees, formatLakhCrore, type SipResult } from "./logic";

type FormValues = {
  monthlyAmount: number;
  annualRate: number;
  durationYears: number;
};

const defaults: FormValues = {
  monthlyAmount: 5000,
  annualRate: 12,
  durationYears: 10,
};

export default function SipCalculator() {
  const [form] = Form.useForm<FormValues>();
  const [result, setResult] = useState<SipResult | null>(null);
  const [liveValues, setLiveValues] = useState<FormValues>(defaults);

  const compute = (values: FormValues) => {
    if (values.monthlyAmount && values.annualRate && values.durationYears) {
      setResult(
        calculateSip({
          monthlyAmount: values.monthlyAmount,
          annualRate: values.annualRate,
          durationYears: values.durationYears,
        })
      );
    }
  };

  const onValuesChange = (_: Partial<FormValues>, all: FormValues) => {
    setLiveValues(all);
    compute(all);
  };

  return (
    <div>
      <ToolForm title="Investment details">
        <Form
          form={form}
          layout="vertical"
          initialValues={defaults}
          onValuesChange={onValuesChange}
          onFinish={compute}
        >
          {/* Monthly SIP Amount */}
          <Form.Item
            name="monthlyAmount"
            label={
              <span className="font-medium text-gray-700">
                Monthly SIP Amount:{" "}
                <span className="text-blue-600 font-semibold">
                  {formatRupees(liveValues.monthlyAmount ?? defaults.monthlyAmount)}
                </span>
              </span>
            }
            rules={[{ required: true, message: "Enter monthly SIP amount" }]}
          >
            <div className="space-y-2">
              <Slider
                min={500}
                max={100000}
                step={500}
                value={liveValues.monthlyAmount}
                onChange={(v) => {
                  form.setFieldValue("monthlyAmount", v);
                  setLiveValues((p) => ({ ...p, monthlyAmount: v }));
                  form.submit();
                }}
                tooltip={{ formatter: (v) => formatRupees(v ?? 0) }}
              />
              <InputNumber
                style={{ width: "100%" }}
                min={100 as number}
                max={10000000 as number}
                step={500}
                prefix="₹"
                size="large"
                formatter={(v) => `${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                parser={(v) => Number(v?.replace(/,/g, "") ?? 0)}
              />
            </div>
          </Form.Item>

          {/* Expected Annual Return */}
          <Form.Item
            name="annualRate"
            label={
              <span className="font-medium text-gray-700">
                Expected Annual Return:{" "}
                <span className="text-blue-600 font-semibold">
                  {liveValues.annualRate ?? defaults.annualRate}% p.a.
                </span>
              </span>
            }
            rules={[{ required: true, message: "Enter expected return" }]}
          >
            <div className="space-y-2">
              <Slider
                min={1}
                max={30}
                step={0.5}
                value={liveValues.annualRate}
                onChange={(v) => {
                  form.setFieldValue("annualRate", v);
                  setLiveValues((p) => ({ ...p, annualRate: v }));
                  form.submit();
                }}
                tooltip={{ formatter: (v) => `${v}%` }}
              />
              <InputNumber
                style={{ width: "100%" }}
                min={1}
                max={50}
                step={0.5}
                precision={1}
                suffix="% p.a."
                size="large"
              />
            </div>
          </Form.Item>

          {/* Investment Duration */}
          <Form.Item
            name="durationYears"
            label={
              <span className="font-medium text-gray-700">
                Investment Duration:{" "}
                <span className="text-blue-600 font-semibold">
                  {liveValues.durationYears ?? defaults.durationYears} Years
                </span>
              </span>
            }
            rules={[{ required: true, message: "Enter duration" }]}
          >
            <div className="space-y-2">
              <Slider
                min={1}
                max={40}
                step={1}
                value={liveValues.durationYears}
                onChange={(v) => {
                  form.setFieldValue("durationYears", v);
                  setLiveValues((p) => ({ ...p, durationYears: v }));
                  form.submit();
                }}
                tooltip={{ formatter: (v) => `${v} yr` }}
              />
              <InputNumber
                style={{ width: "100%" }}
                min={1}
                max={40}
                step={1}
                suffix="Years"
                size="large"
              />
            </div>
          </Form.Item>

          <ClrButton btntype="secondary" htmlType="submit" size="large">
            Calculate Returns
          </ClrButton>
        </Form>
      </ToolForm>

      {result && (
        <ResultCard
          title="Your SIP Returns"
          footer={
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                Wealth ratio:{" "}
                <strong className="text-blue-600">{result.wealthRatio}×</strong>
              </span>
              <span className="text-xs text-gray-400">
                {liveValues.durationYears * 12} monthly investments
              </span>
            </div>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <ResultStat
              label="Maturity Value"
              value={formatLakhCrore(result.maturityValue)}
              highlight
            />
            <ResultStat
              label="Total Invested"
              value={formatLakhCrore(result.totalInvested)}
            />
            <ResultStat
              label="Est. Returns"
              value={formatLakhCrore(result.totalReturns)}
            />
          </div>

          {/* Year-by-year growth table */}
          <div className="overflow-x-auto max-h-72">
            <table className="w-full text-sm text-left">
              <thead className="sticky top-0 bg-white">
                <tr className="border-b border-gray-100 text-xs text-gray-500 uppercase">
                  <th className="py-2 pr-4">Year</th>
                  <th className="py-2 pr-4">Invested</th>
                  <th className="py-2 pr-4">Returns</th>
                  <th className="py-2">Total Value</th>
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
                    <td className="py-2 pr-4 text-gray-600">
                      {formatLakhCrore(row.invested)}
                    </td>
                    <td className="py-2 pr-4 text-emerald-700">
                      {formatLakhCrore(row.returns)}
                    </td>
                    <td className="py-2 font-medium text-blue-700">
                      {formatLakhCrore(row.value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ResultCard>
      )}
    </div>
  );
}
