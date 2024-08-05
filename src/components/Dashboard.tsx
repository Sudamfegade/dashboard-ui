import React from "react";
import styled from "styled-components";
import { Sidebar } from "./SideBar";
import { Header } from "./Header";
import { MainContent } from "./Maincontent";

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <div>
        <Header />
        <MainContent />
      </div>
    </DashboardContainer>
  );
};
