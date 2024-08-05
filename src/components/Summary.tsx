import React from "react";
import styled from "styled-components";
import { CircularProgress, Typography } from "@mui/joy";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { colors, Grid } from "@mui/material";
const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1rem;
`;

const SummaryItem = styled.div`
  text-align: left;
  flex: 1;
  border-radius: 8px;
  background-color: #34354a;
  margin: 10px;
  padding: 10px;
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Summary: React.FC = () => {
  return (
    <SummaryContainer>
      <SummaryItem style={{ marginLeft: 0 }}>
        <IconWrapper>
          <img
            src="https://cdn-icons-png.flaticon.com/128/17349/17349586.png"
            alt="alt"
            height={"50px"}
            width={"50px"}
          />
        </IconWrapper>
        <h2 style={{ fontSize: "0.9rem" }}>Total Orders</h2>
        <p>75</p>
      </SummaryItem>
      <SummaryItem>
        <IconWrapper>
          <img
            src="https://cdn-icons-png.flaticon.com/128/12549/12549832.png"
            alt="alt"
            height={"50px"}
            width={"50px"}
          />
        </IconWrapper>
        <h2 style={{ fontSize: "0.9rem" }}>Total Delivered</h2>
        <p>70</p>
      </SummaryItem>
      <SummaryItem>
        <IconWrapper>
          <img
            src="https://cdn-icons-png.flaticon.com/128/6815/6815046.png"
            alt="alt"
            height={"50px"}
            width={"50px"}
          />
        </IconWrapper>
        <h2 style={{ fontSize: "0.9rem" }}>Total Cancelled</h2>
        <p>05</p>
      </SummaryItem>
      <SummaryItem>
        <IconWrapper>
          <MonetizationOnIcon color="secondary" sx={{ fontSize: "50px" }} />
        </IconWrapper>
        <h2 style={{ fontSize: "0.9rem" }}>Total Revenue</h2>
        <p>$12k</p>
      </SummaryItem>
      <SummaryItem
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid
          container
          style={{
            paddingRight: "5rem",
          }}
        >
          <h2 style={{ fontSize: "0.9rem" }}>Net Profit</h2>
          <p style={{ fontSize: "2rem" }}>$6759.25</p>
        </Grid>
        <Grid>
          <CircularProgress size="lg" determinate value={66.67}>
            <Typography
              style={{ fontSize: "0.9rem", color: "white", display: "flex" }}
            >
              70%
            </Typography>
          </CircularProgress>
          <Typography style={{ fontSize: "0.4rem", color: "white" }}>
            *The values here has been rounded off.
          </Typography>
        </Grid>
      </SummaryItem>
    </SummaryContainer>
  );
};
