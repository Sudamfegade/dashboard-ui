import React from "react";
import styled from "styled-components";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const ActivityContainer = styled.div`
  background-color: #34354a;
  padding: 1rem 1rem 2rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  height: 350px;
`;

const ActivityTitle = styled.h3`
  margin: 0 0 1rem 0;
`;

const data = [
  { day: "1", value: 3000 },
  { day: "2", value: 5000 },
  { day: "3", value: 7000 },
  { day: "4", value: 4000 },
  { day: "5", value: 6000 },
  { day: "6", value: 8000 },
  { day: "7", value: 2000 },
  { day: "8", value: 4000 },
  { day: "9", value: 6000 },
  { day: "10", value: 8000 },
  { day: "11", value: 5000 },
  { day: "12", value: 7000 },
  { day: "13", value: 3000 },
  { day: "14", value: 1000 },
  { day: "15", value: 9000 },
  { day: "16", value: 7000 },
  { day: "17", value: 5000 },
  { day: "18", value: 3000 },
  { day: "19", value: 1000 },
  { day: "20", value: 9000 },
  { day: "21", value: 7000 },
  { day: "22", value: 5000 },
  { day: "23", value: 3000 },
  { day: "24", value: 1000 },
  { day: "25", value: 9000 },
  { day: "26", value: 7000 },
  { day: "27", value: 5000 },
  { day: "28", value: 3000 },
  { day: "29", value: 1000 },
  { day: "30", value: 9000 },
];

export const ActivityChart: React.FC = () => {
  return (
    <ActivityContainer>
      <ActivityTitle>Activity</ActivityTitle>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="day" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          {/* <Tooltip /> */}
          <Bar dataKey="value" fill="#6c63ff" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ActivityContainer>
  );
};
