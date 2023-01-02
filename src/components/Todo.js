import { useState } from "react";

function someHandler() {

}


function Todo(props) {
  const [ smth, smth2 ] = useState();
  return (
    <div>
      <h1 onClick={someHandler}>{props.title}</h1>
    </div>
  );
}
export default Todo;
