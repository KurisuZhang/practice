import ProductList from "../pages/ProductList";

function Overview() {
  return (
    <>
      <div className="text-center">
        <h1 className={"mt-3"}>Overview Page</h1>
      </div>
      <div className="flex justify-center">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open popup
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Hello!</h3>
            <p className="py-4">This is PopUp</p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      <div className="mx-32 my-32">
        <ProductList />
      </div>
    </>
  );
}

export default Overview;
