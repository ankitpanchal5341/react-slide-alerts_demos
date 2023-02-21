import "./styles.css";
import SlideAlert from "react-slide-alerts";
export default function App() {
  return (
    <div className="App">
      hello
      <SlideAlert open={true} message="testing message" />
    </div>
  );
}
