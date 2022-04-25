import Rating from "./components/Rating/Rating";
import { RatingType } from "./types";

function App() {
  return (
    <div className="App">
      <Rating
        stars={["Useless", "Poor", "Ok", "Good", "Excellent"]}
        onChange={() => {}}
        starProps={{
          type: RatingType.controlled,
        }}
      />
    </div>
  );
}

export default App;
