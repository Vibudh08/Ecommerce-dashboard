import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function SearchProduct() {
  return (
    <>
      <Header />
      <br />
      <div className="col-sm-6 offset-sm-3">
        <h1>SearchProduct</h1>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Search Product"
        />
      </div>
    </>
  );
}
export default SearchProduct;
