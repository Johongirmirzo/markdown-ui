import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PageNotFoundImg from "../../assets/—Pngtree—cartoon hand drawn 404 error_5391390.png";
import {
  NotFoundBox,
  NotFoundImgWrapper,
  NotFoundImg,
  NotFoundTitle,
  NotFoundDescription,
} from "./NotFound.styled";

const NotFound = () => {
  return (
    <NotFoundBox>
      <NotFoundImgWrapper>
        <NotFoundImg src={PageNotFoundImg} alt="not image" />
      </NotFoundImgWrapper>
      <NotFoundTitle>You visited unexisting page!</NotFoundTitle>
      <NotFoundDescription>
        Current page does not exist, go back to{" "}
        <Link to="/" style={{ color: "#0f68b7" }}>
          HOME
        </Link>{" "}
        page
      </NotFoundDescription>
    </NotFoundBox>
  );
};

export default NotFound;
