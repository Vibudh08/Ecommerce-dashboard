import { useEffect, useState } from "react";
import Header from "./Header";
import { Table } from "react-bootstrap";
import axios from "axios";
import {Link} from 'react-router-dom';

function ProductList() {
  const [data, setData] = useState("");

  useEffect(() => {
    standalone();
  }, []);

  const standalone = async () => {
    let res = await axios.post("http://127.0.0.1:8000/api/list");
    console.log(res.data);
    setData(res.data);
  };

  const deleteProd = async (id) => {
    await axios.delete("http://127.0.0.1:8000/api/delete/" + id);
    standalone();
  };

  return (
    <>
      <Header />
      <div className="col-sm-10 offset-sm-1">
        <br />
        <h1>ProductList</h1>
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
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
                  <th>
                    <button
                      onClick={() => {
                        deleteProd(d.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </th>
                  <th>
                      <Link to={"/update/"+d.id} style={{ color: "white", textDecoration:'none' }}>
                    <button className="btn btn-success">
                        Update
                    </button>
                      </Link>
                  </th>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default ProductList;
