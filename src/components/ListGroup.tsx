// import { Fragment } from "react";
//just use empty brackets, default taken as fragments
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];
  // const message = items.length === 0 ? <p>No item found</p> : null;
  // const getMessage = () => {
  //   items.length === 0 ? <p>No item found</p> : null;
  // };

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No item Found</p>;
  //     </>
  //   );

  return (
    //react can't return 2 elements, so we wrap it all under div

    //with braces we can render anything dynamically
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
