const ProductCard = ({product,deleteproduct,startedit}) => {
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-body p-4">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title mb-0">
            {product.name}
          </h5>

          <span className="badge text-bg-success">
            Available
          </span>
        </div>

        <h4 className="text-primary mb-3">
           {product.price}
        </h4>

        <p className="text-secondary">
          {product.details}
        </p>

        <div className="d-flex gap-2 mt-4">
          <button className="btn btn-outline-primary flex-fill"
                    onClick={ () =>{
            startedit(product.id)

          }}
          >
            Edit
          </button>

          <button className="btn btn-outline-danger flex-fill" 
          onClick={ () =>{
            deleteproduct(product.id)

          }}>
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;