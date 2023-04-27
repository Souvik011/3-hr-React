import { Fragment } from "react";
import CandyForm from "./CandyForm";
import Product from "./Product";
import CandyProvider from "../Context/CandyProvider";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <Fragment>
      <CandyProvider>
        <Navbar />
        <CandyForm />
        <Product />
      </CandyProvider>
    </Fragment>
  );
};

export default Header;
