import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
const HeaderContainer = styled.div`
  background-color: #23232e;
  padding: 1rem;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const UserMenu = styled.div`
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #bbb;
`;

const UserIcon = styled.div`
  background-color: #444;
  border-radius: 50%;

  width: 40px;
  height: 40px;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #34354a;
  padding: 0.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: white;
  margin-left: 0.5rem;
  outline: none;
  width: 100%;
`;
export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <SearchBar style={{ marginRight: " auto" }}>
        <FaSearch />
        <SearchInput type="text" placeholder="Search..." />
      </SearchBar>
      <UserMenu>
        <MailOutlinedIcon />
      </UserMenu>
      <UserMenu>
        <SettingsOutlinedIcon />
      </UserMenu>
      <UserMenu>
        <NotificationsNoneOutlinedIcon />
      </UserMenu>
      <UserMenu>
        <UserIcon />
      </UserMenu>
    </HeaderContainer>
  );
};
