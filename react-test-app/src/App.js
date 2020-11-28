import logo from './logo.svg';
import './App.css';
import Like from "./components/like";
import Checkbox from "./components/checkbox";
function App() {
  return (
    <>
    <Checkbox labelActive="Active" labelInactive="Inactive" />
    <Like/>
    </>
  );
}
export default App;
