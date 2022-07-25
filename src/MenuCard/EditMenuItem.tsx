import { useParams } from "react-router-dom";

var EditMenuItem = () => {
  const { id }: any = useParams();
  return (
    <>
      <h3> Edit Item </h3>
      Id is {id}
    </>
  );
};

export default EditMenuItem;
