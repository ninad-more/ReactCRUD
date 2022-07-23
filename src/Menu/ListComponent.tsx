import { ReactElement } from "react";
import Loading from "./Loading";

var ListComponent = (props: ListCompProps) => {
  if (!props.list) {
    if (props.loadingUI) {
      return props.loadingUI;
    }

    return <h3>Loading...</h3>;
  } else if (props.list.length < 1) {
    if (props.emptyListUI) {
      return props.emptyListUI;
    }

    return <>No data</>;
  } else {
    return props.children;
  }
};

export default ListComponent;

interface ListCompProps {
  list: any;
  loadingUI?: ReactElement;
  errorUI?: ReactElement;
  emptyListUI?: ReactElement;
  children: ReactElement;
}
