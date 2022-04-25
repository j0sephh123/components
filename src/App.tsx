import Rating from "./components/Rating/Rating";
import { RatingType } from "./types";

function App() {
  return (
    <div className="App">
      <Rating
        onChange={() => {}}
        starProps={{
          type: RatingType.controlled,
        }}
      />
    </div>
  );
}

export default App;
