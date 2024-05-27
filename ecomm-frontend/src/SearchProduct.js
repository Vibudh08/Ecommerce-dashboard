import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import { Table } from "react-bootstrap";

function SearchProduct() {
  const [data, setData] = useState("");
  const search = async (key) => {
    if(key.length>0){

        let res = await axios.get("http://127.0.0.1:8000/api/search/" + key);
        // console.log(res.data);
        setData(res.data);
    }
  };
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
          onChange={(e) => search(e.target.value)}
          placeholder="Search Product"
        />
      </div>
      <div className="col-sm-8 offset-sm-2">
        <br />
        {
            data?
            <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map((d, i) => (
                <tr key={i}>
                  <th>{d.id}</th>
                  <th>{d.name}</th>
                  <th>
                    <img
                      style={{ width: 100, height: 100 }}
                      src={"http://127.0.0.1:8000/" + d.file_path}
                    />
                  </th>
                  <th>{d.description}</th>
                  <th>{d.price}</th>
                </tr>
              ))}
          </tbody>
        </Table>
        :"Write the name of product which you want to search"
    }
      </div>
    </>
  );
}
export default SearchProduct;
