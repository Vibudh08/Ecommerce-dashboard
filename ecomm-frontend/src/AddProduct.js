import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !file || !price || !description) {
      setError("Please fill in all fields.");
      setTimeout(() => {
        setError("");
      }, 2000); 
      return false;
    }
    if (!/^[a-zA-Z ]+$/.test(name)) {
      setError("Name should only contain alphabets and spaces.");
      setTimeout(() => {
        setError("");
      }, 2000); 
      return false;
    }
    if (isNaN(price) || parseFloat(price) <= 0) {
      setError("Price should be a valid number greater than 0.");
      setTimeout(() => {
        setError("");
      }, 2000); 
      return false;
    }
    setError("");
    return true;
  };

  const addProduct = async () => {
    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    formData.append("price", price);
    formData.append("description", description);

    try {
      await axios.post("http://127.0.0.1:8000/api/addproduct", formData);
      navigate("/");
    } catch (error) {
      console.error("Error occurred while adding product:", error);
    }
  };

  return (
    <>
      <Header />
      <br />
      <h1>Add Product</h1>
      <div className="col-sm-6 offset-sm-3">
        {error && <div className="alert alert-danger">{error}</div>}
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <br />
        <input
          type="file"
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
        <button onClick={addProduct} className="btn btn-primary">
          Add Product
        </button>
      </div>
    </>
  );
}

export default AddProduct;
