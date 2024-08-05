import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

const RecentOrdersContainer = styled.div`
  background-color: #34354a;
  padding: 1rem 0 0 1rem;
  border-radius: 8px;
`;

const Title = styled.h3`
  margin: 0 0 1rem 0;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0 1rem;
  color: #ffffff;
`;

const TableRow = styled.tr`
  border-radius: 8px;
  border-bottom: 1px solid grey;
  overflow: hidden;
`;

const TableCell = styled.td`
  padding: 0rem 0.3rem;
  vertical-align: middle;
`;

const Status = styled.span<{ status: string }>`
  color: ${({ status }) =>
    status === "Delivered"
      ? "green"
      : status === "Cancelled"
      ? "red"
      : "orange"};
`;

const data = [
  {
    avatar: "A",
    name: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    avatar: "J",
    name: "Jane Cooper",
    orderNo: "48967896",
    amount: "$305.02",
    status: "Pending",
  },
  {
    avatar: "G",
    name: "Guy Hawkins",
    orderNo: "78985215",
    amount: "$45.88",
    status: "Delivered",
  },
  {
    avatar: "K",
    name: "Kristin Watson",
    orderNo: "20965732",
    amount: "$60.00",
    status: "Cancelled",
  },
];

export const RecentOrders: React.FC = () => {
  return (
    <RecentOrdersContainer>
      <Title>Recent Orders</Title>
      <Table>
        <thead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Order No.</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </thead>
        <tbody>
          {data.map((order, index) => (
            <TableRow key={index}>
              <TableCell style={{ display: "flex", alignItems: "center" }}>
                <Avatar>{order.avatar}</Avatar>
                <span style={{ marginLeft: "1rem" }}>{order.name}</span>
              </TableCell>
              <TableCell>{order.orderNo}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>
                <Status status={order.status}>{order.status}</Status>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </RecentOrdersContainer>
  );
};
