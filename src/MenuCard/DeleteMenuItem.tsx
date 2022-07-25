import { useParams } from "react-router-dom";

var DeleteMenuItem = () => {
  const { id }: any = useParams();

  return (
    <>
      <h3> Delete Item </h3>
      Id is {id}
    </>
  );
};

export default DeleteMenuItem;
