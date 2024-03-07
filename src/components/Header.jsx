import React from "react";
import { HeaderArea, Logo } from "../styles/InputStyle";
import { removeCookie } from "../cookies/cookie";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const router = useNavigate();
  const onClickLogOut = () => {
    localStorage.removeItem("access");
    removeCookie("accessToken");
    router("/login");
  };
  return (
    <HeaderArea>
      <Logo>itTodo</Logo>
      <button onClick={onClickLogOut}>로그아웃</button>
      {props.children}
    </HeaderArea>
  );
};

export default Header;
