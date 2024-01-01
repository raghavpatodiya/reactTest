// import { Fragment } from "react";
//just use empty brackets, default taken as fragments
import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // items = [];
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

  //event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    //react can't return 2 elements, so we wrap it all under div

    //with braces we can render anything dynamically
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
