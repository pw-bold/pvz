import { useContext } from "react"
import AppContext from "./context/AppContext"

function App({ }) {
  const { fetchedPersonData, updateStateWithFetchedData } = useContext(AppContext);

  return <div>
    <button onClick={() => updateStateWithFetchedData('url')}>Fetch</button>

    {fetchedPersonData && <p>{JSON.stringify(fetchedPersonData)}</p>}

  </div>
}

export default App;