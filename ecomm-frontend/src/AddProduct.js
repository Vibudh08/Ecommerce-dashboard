import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import { useNavigate } from "react-router-dom";


function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();


  const addProduct = async () => {

    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);
    formData.append('price', price);
    formData.append('description', description);

    await axios
      .post("http://127.0.0.1:8000/api/addproduct", formData)
      .then((response) => {
        navigate("/")
      })
      .catch((error)=>console.log(error))
  };
  return (
    <>
      <Header />
      <br />
      <h1>Add Product</h1>
      <div className="col-sm-6 offset-sm-3">
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <br />
        <input
          type="File"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
          placeholder="Enter File"
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Price"
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
        />
        <br />
        <br />
        <button onClick={addProduct} className="btn btn-primary">Add Product</button>
      </div>
    </>
  );
}
export default AddProduct;
