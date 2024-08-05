import React from "react";
import styled from "styled-components";
import { FaBullseye, FaUtensils, FaBook, FaChevronRight } from "react-icons/fa";

const Container = styled.div`
  background-color: #34354a;
  padding: 1rem;
  border-radius: 8px;
`;

const Section = styled.div`
  margin-bottom: 1rem;
`;

const Item = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const GoalsPopularDishesMenus: React.FC = () => {
  return (
    <Container>
      <Section>
        <Item>
          <IconWrapper>
            <img
              src="https://cdn-icons-png.flaticon.com/128/16386/16386816.png"
              alt="alt"
              height={"50px"}
              width={"50px"}
            />
            <span
              style={{
                marginLeft: "1rem",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Goals
            </span>
          </IconWrapper>
          <FaChevronRight />
        </Item>
      </Section>
      <Section>
        <Item>
          <IconWrapper>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3255/3255741.png"
              alt="alt"
              height={"50px"}
              width={"50px"}
            />
            <span
              style={{
                marginLeft: "1rem",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Popular Dishes
            </span>
          </IconWrapper>
          <FaChevronRight />
        </Item>
      </Section>
      <Section>
        <Item>
          <IconWrapper>
            <img
              src="https://cdn-icons-png.flaticon.com/128/638/638583.png"
              alt="alt"
              height={"50px"}
              width={"50px"}
            />
            <span
              style={{
                marginLeft: "1rem",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Menus
            </span>
          </IconWrapper>
          <FaChevronRight />
        </Item>
      </Section>
    </Container>
  );
};
