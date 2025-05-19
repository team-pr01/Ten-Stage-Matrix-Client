import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const EarningChart = () => {
  const data = [
    { date: "1 Oct", income: 1200, expense: -300 },
    { date: "2 Oct", income: 1000, expense: -800 },
    { date: "3 Oct", income: 1600, expense: -500 },
    { date: "4 Oct", income: 1000, expense: -650 },
  ];
  return (
    <div className="rounded-[15px] border-[3px] border-neutral-25/20 bg-neutral-30 flex flex-col py-7 px-[34px] font-Outfit w-full md:w-[80%] h-full md:h-[300px] overflow-y-auto custom-scrollbar mt-6">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="#2e2e4a"
          />
          <XAxis dataKey="date" stroke="#aaa" />
          <YAxis
            stroke="#aaa"
            domain={[-3000, 3000]}
            tickFormatter={(tick) => `${Math.abs(tick) / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e1e3f",
              borderRadius: "8px",
              border: "none",
            }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Bar dataKey="income" fill="#7C83FD" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expense" fill="#21D4FD" radius={[0, 0, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningChart;
