// import { Fragment } from "react";
//just use empty brackets, default taken as fragments

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

// import { MouseEvent } from "react";
function ListGroup({ items, heading }: Props) {
  // items = [];
  // let selectedIndex = 0; // -1 means no, 0 means first is selected

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

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
  // const handleClick = (event: MouseEvent) => console.log(event);
  return (
    //react can't return 2 elements, so we wrap it all under div

    //with braces we can render anything dynamically
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item-active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
