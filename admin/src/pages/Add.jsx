import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [bestseller, setBestseller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("bestseller", bestseller);

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } },
      );

      if (response.data.success) {
        toast.success(response.data.message);

        setName("");
        setDescription("");
        setPrice("");
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
        setBestseller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md flex flex-col gap-5"
    >
      <h2 className="text-xl font-semibold">Add Product</h2>

      {/* Image Upload */}
      <div>
        <p className="mb-3 font-medium">Upload Images</p>
        <div className="flex gap-4 flex-wrap">
          {[image1, image2, image3, image4].map((img, index) => (
            <label
              key={index}
              htmlFor={`image${index}`}
              className="cursor-pointer"
            >
              <img
                className="w-24 h-24 object-cover border rounded-md"
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt=""
              />
              <input
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (index === 0) setImage1(file);
                  if (index === 1) setImage2(file);
                  if (index === 2) setImage3(file);
                  if (index === 3) setImage4(file);
                }}
                type="file"
                id={`image${index}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name */}
      <div>
        <p className="mb-2 font-medium">Product Name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter product name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      {/* Description */}
      <div>
        <p className="mb-2 font-medium">Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write product description..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          rows={4}
          required
        />
      </div>

      {/* Price */}
      <div>
        <p className="mb-2 font-medium">Price</p>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Enter price"
          className="w-40 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      {/* Bestseller */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={bestseller}
          onChange={() => setBestseller((prev) => !prev)}
          id="bestseller"
        />
        <label htmlFor="bestseller" className="cursor-pointer">
          Mark as Bestseller
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        Add Product
      </button>
    </form>
  );
};

export default Add;
