import { useState,useEffect } from "react";
const ProductForm = ({addproduct,update,editproduct,updatedproduct}) => {

const[product,setproduct]=useState({
name:"",
price:"",
details:"",
})

useEffect(()=> {
  
  if (editproduct!==null) {
    
    setproduct(update)
  }else{
setproduct({
  name:"",
price:"",
details:"",
})
  }

},[editproduct])

function handleclick(product) {
  
if (editproduct!==null) {
  updatedproduct(product,editproduct)
}else{

   addproduct(product)

   setproduct({
  name:"",
price:"",
details:"",
})
}
 


}

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-4">

        <h4 className="mb-4">Add New Product</h4>

        <div className="mb-3">
          <label className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter product name"
            value={product.name}
            onChange={(e)=> {

             setproduct({
               ...product,
              name:e.target.value
            })
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter product price"
              value={product.price}
            onChange={(e)=> {

             setproduct({
               ...product,
              price:e.target.value
            })
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Details
          </label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Enter product details"
              value={product.details}
            onChange={(e)=> {

             setproduct({
               ...product,
              details:e.target.value
            })
            }}
          ></textarea>
        </div>

        <button className="btn btn-primary w-100"  onClick={()=> 
          handleclick(product)
        }>
         {editproduct!==null ? "update product": " Add Product"}
        </button>

      </div>
    </div>
  );
};

export default ProductForm;