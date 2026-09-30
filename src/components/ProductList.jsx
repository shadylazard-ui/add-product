import ProductCard from "./ProductCard";

const ProductList = ({products,startedit,deleteproduct}) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Our Products</h4>

        <span className="badge text-bg-primary">
          {products.length} Products
        </span>
      </div>

      <div className="row g-3">
       {products.map((product)=>(

             <div className="col-md-6 col-lg-4" key={product.id}>
          <ProductCard product={product} startedit={startedit} deleteproduct={deleteproduct}   />
        </div>

        
        ))} 



     


    
        
      </div>
    </div>
  );
};

export default ProductList;