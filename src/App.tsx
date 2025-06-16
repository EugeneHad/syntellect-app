
import "./App.css";
import Autocomplete from "./components/controls/Autocomplete/Autocomplete";
import ButtonsAndText from "./components/controls/ButtonsAndText/ButtonsAndText";
import { initialization } from "./constants/initialization";

function App() {
  const { viewModel1, viewModel2, autocompleteVM1, autocompleteVM2 } = initialization()

  return <div className="main">
    <ButtonsAndText
      vm={viewModel1}
    />
    <ButtonsAndText
      vm={viewModel2}
    />
    <Autocomplete vm={autocompleteVM1} count={4} />
    <Autocomplete vm={autocompleteVM2} count={10} />
  </div>
}

export default App;
