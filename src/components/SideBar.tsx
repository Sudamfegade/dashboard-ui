import React from "react";
import styled from "styled-components";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
const SidebarContainer = styled.div`
  width: 80px;
  background-color: #1f1f2f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;

const IconWrapper = styled.div`
  margin: 1rem 0;
  font-size: 1.5rem;
  color: #bbb;
`;

const UserProfile = styled.div`
  margin-top: auto;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #bbb;
`;

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <IconWrapper>
        <GridViewRoundedIcon fontSize="large" color="primary" />
      </IconWrapper>
      <IconWrapper>
        <HomeIcon fontSize="large" color="primary" />
      </IconWrapper>
      <IconWrapper>
        <InsertChartOutlinedIcon fontSize="large" />
      </IconWrapper>
      <IconWrapper>
        <AssignmentTurnedInOutlinedIcon fontSize="large" />
      </IconWrapper>
      <IconWrapper>
        <AccountBalanceWalletOutlinedIcon fontSize="large" />
      </IconWrapper>
      <IconWrapper>
        <LocalMallOutlinedIcon fontSize="large" />
      </IconWrapper>
      <UserProfile>
        <LogoutIcon fontSize="large" />
      </UserProfile>
    </SidebarContainer>
  );
};
