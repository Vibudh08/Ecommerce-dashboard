import { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function UpdateProduct() {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();


  let { id } = useParams();

  useEffect(() => {
    func();
  }, []);

  const func = async () => {
    let res = await axios.get("http://127.0.0.1:8000/api/getProduct/" + id);
    console.log(res.data);
    setData(res.data);
    setName(res.data.name);
    setPrice(res.data.price);
    setDescription(res.data.description);
    setFile(res.data.file);
  };

  const updateProduct = async(id)=>{
     const formData = new FormData();
     formData.append("name", name);
     formData.append("file", file);
     formData.append("price", price);
     formData.append("description", description);

     await axios
       .post("http://127.0.0.1:8000/api/updateProduct/"+ id+"?_method=put", formData)
       .then((response) => {
         navigate("/");
       })
       .catch((error) => console.log(error));
  }
  return (
    <>
      <Header />
      {/* <div>{id}</div> */}
      <br />
      <h1>UpdateProduct</h1>
      <br />
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          defaultValue={data.name}
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          defaultValue={data.description}
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setPrice(e.target.value)}
          defaultValue={data.price}
        />
        <br />
        <input
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
          defaultValue={data.file_path}
        />
        <br />
        <img
          src={"http://127.0.0.1:8000/" + data.file_path}
          style={{ height: "100", width: "100px" }}
        />
        <br />
        <br />
        <button
          onClick={() => updateProduct(data.id)}
          className="btn btn-primary"
        >
          Update
        </button>
      </div>
    </>
  );
}
export default UpdateProduct;
