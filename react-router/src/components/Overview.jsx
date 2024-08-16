import ProductList from "../pages/ProductList";

function Overview() {
  return (
    <>
      <div className="text-center">
        <h1 className={"mt-3"}>Overview Page</h1>
        <h1 className={"mt-3"}>This is Overview Page</h1>
      </div>
      <div className="mx-32 my-32">
        <ProductList />
      </div>
    </>
  );
}

export default Overview;
