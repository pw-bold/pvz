import { useContext } from "react";
import AppContext from "../../context/AppContext";

function Summary() {
  const { fetchedPersonData } = useContext(AppContext);
  return <div>
    {JSON.stringify(fetchedPersonData)}
  </div>
}

export default Summary;