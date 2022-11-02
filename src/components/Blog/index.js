import { useState, useRef } from "react";
import logo from "../../logo.svg";
import "../../App.css";

function Blog() {
  const [imageFile, setImageFile] = useState(logo);
  const fileRef = useRef();

  function handleChange() {
    const image = fileRef.current.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImageFile(reader.result);
    });

    reader.readAsDataURL(image);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={imageFile} className="App-logo" alt="logo" />
        <input
          ref={fileRef}
          type="file"
          placeholder="Gambar"
          onChange={handleChange}
        ></input>

        <a className="btn btn-primary" href="/dashboard">
            Back To Dashboard
        </a>
      </header>
    </div>
  );
}
export default Blog;
