import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { useState } from "react";
const App = () => {
const[editproduct,seteditproduct]=useState(null)

function startedit(id) {
  seteditproduct(id)
}
  const[products,setproducts]=useState([])


function addproduct(product) {
  
setproducts([

...products,

{
...product,
id:Date.now()

}


])

  
}
function deleteproduct(id) {
  const newproduct=
  products.filter(
    (product)=> product.id !==id 
  
  );

  setproducts(newproduct);
}
function getproduct(id) {
  const update= products.find(
    (product)=> product.id === id
  )
return update;

}
const update=getproduct(editproduct)

function updatedproduct(lastproduct,id) {
  
  const updateall=
  products.map((product)=> {
    if (product.id ===id) {
     return{
      ...lastproduct,
      id:product.id


     };
    }

return product;

  })

  setproducts(updateall)
  seteditproduct(null);

}
  return (
    <div className="container py-5">

      <div className="mb-5">
        <h1 className="fw-bold">My Store</h1>

        <p className="text-secondary">
          Manage your products
        </p>
      </div>

      <div className="row g-4">
        <div className="col-lg-4">
          <ProductForm addproduct={addproduct} editproduct={editproduct} update={update} updatedproduct={updatedproduct} />
        </div>

        <div className="col-lg-8">
          <ProductList products={products} startedit={startedit} deleteproduct={deleteproduct}  />
        </div>
      </div>

    </div>
  );
};

export default App;

