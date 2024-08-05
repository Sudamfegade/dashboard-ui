import React from "react";
import styled from "styled-components";
import { RecentOrders } from "./Recentorders";
import { Feedback } from "./Feedback";
import { Summary } from "./Summary";
import { GoalsPopularDishesMenus } from "./PopularDishes";
import { ActivityChart } from "./Activitychart";

const MainContentContainer = styled.div`
  padding: 1rem;
  background-color: black;
  color: white;
  height: calc(100vh - 4rem);
  overflow-y: auto;
  flex: 1;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MainContent: React.FC = () => {
  return (
    <MainContentContainer>
      <h1 style={{ padding: "20px" }}>Dashboard</h1>
      <Summary />
      <ContentGrid>
        <LeftColumn>
          <ActivityChart />
          <RecentOrders />
        </LeftColumn>
        <RightColumn>
          <GoalsPopularDishesMenus />
          <Feedback />
        </RightColumn>
      </ContentGrid>
    </MainContentContainer>
  );
};
