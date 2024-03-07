import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wrap } from "../styles/InputStyle";
import Header from "../components/Header";

const Home = () => {
  const router = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access")) {
      alert("로그인 후에 이용 가능합니다.");
      router("/login");
    }
  }, [router]);

  return (
    <Wrap>
      <Header />
      <h1
        style={{
          marginTop: "100px",
          textAlign: "center",
        }}
      >
        준비중 입니다.
      </h1>
    </Wrap>
  );
};

export default Home;
