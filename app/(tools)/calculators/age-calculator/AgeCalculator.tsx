"use client";

import { useState } from "react";
import { Form, DatePicker } from "antd";
import { ClrButton } from "app/components/Button/Base";
import ToolForm from "app/components/tools/ToolForm";
import ResultCard, { ResultStat } from "app/components/tools/ResultCard";
import { calculateAge, type AgeResult } from "./logic";
// formatDate is available from ./logic if you need to display the DOB in the result

// antd DatePicker returns a dayjs object at runtime — we type it loosely here
// so the project doesn't need dayjs as a direct dependency.
type DayjsLike = { toDate(): Date };

type FormValues = {
  dob: DayjsLike;
};

export default function AgeCalculator() {
  const [form] = Form.useForm<FormValues>();
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onFinish = ({ dob }: FormValues) => {
    setError(null);
    try {
      const age = calculateAge(dob.toDate());
      setResult(age);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const onReset = () => {
    form.resetFields();
    setResult(null);
    setError(null);
  };

  return (
    <div>
      {/* ── Input Form ─────────────────────────────────────────────── */}
      <ToolForm
        title="Enter your date of birth"
        description="Select a date to calculate your exact age."
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[{ required: true, message: "Please select your date of birth." }]}
          >
            <DatePicker
              style={{ width: "100%" }}
              format="DD/MM/YYYY"
              placeholder="DD/MM/YYYY"
              disabledDate={(d: DayjsLike & { isAfter(d: unknown): boolean }) =>
                d.isAfter(new Date())
              }
              size="large"
            />
          </Form.Item>

          {error && (
            <p className="text-red-600 text-sm mb-4">{error}</p>
          )}

          <div className="flex gap-3">
            <ClrButton btntype="secondary" htmlType="submit" size="large">
              Calculate Age
            </ClrButton>
            {result && (
              <ClrButton btntype="primary" onClick={onReset} size="large">
                Reset
              </ClrButton>
            )}
          </div>
        </Form>
      </ToolForm>

      {/* ── Result ─────────────────────────────────────────────────── */}
      {result && (
        <ResultCard
          title="Your Age"
          footer={
            result.isToday ? (
              <p className="text-emerald-700 font-medium text-sm">
                🎉 Happy Birthday! Today is your special day.
              </p>
            ) : (
              <p className="text-gray-500 text-sm">
                Your next birthday is in{" "}
                <span className="font-semibold text-gray-700">
                  {result.nextBirthdayInDays} days
                </span>
              </p>
            )
          }
        >
          {/* Primary stats */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <ResultStat label="Years" value={result.years} highlight />
            <ResultStat label="Months" value={result.months} />
            <ResultStat label="Days" value={result.days} />
          </div>

          {/* Secondary stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <ResultStat
              label="Total Days"
              value={result.totalDays.toLocaleString("en-IN")}
            />
            <ResultStat
              label="Total Hours"
              value={result.totalHours.toLocaleString("en-IN")}
            />
            <ResultStat
              label="Total Minutes"
              value={result.totalMinutes.toLocaleString("en-IN")}
            />
          </div>
        </ResultCard>
      )}
    </div>
  );
}
