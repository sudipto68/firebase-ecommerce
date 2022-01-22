import React from "react";

const Product = (props) => {
  const { image, title } = props.data;
  return (
    <>
      <div className="col-md-4 my-2">
        <div className="card p-2" style={{ width: "18rem" }}>
          <div className="text-center">
            <img
              src={image}
              className="card-img-top"
              style={{ width: "200px", height: "200px" }}
              alt=""
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">{title.substring(0, 15)}</h5>
            <div className="text-center">
              <button className="btn card-btn text-center">See Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
