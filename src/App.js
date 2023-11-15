import "./App.css";
import { ChildOne } from "./components/Optimization/ChildOne";
import GrandParent from "./components/Optimization/GrandParent";
import { ParentOne } from "./components/Optimization/ParentOne";

function App() {
	return (
		<div className="App">
			<GrandParent />
		</div>
	);
}

export default App;
