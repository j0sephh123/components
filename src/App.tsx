import Rating from "./components/Rating/Rating";
import { RatingType } from "./types";

const initialRating = [
  { id: 1, active: true, clicked: false },
  { id: 2, active: true, clicked: false },
  { id: 3, active: true, clicked: false },
  { id: 4, active: true, clicked: false },
  { id: 5, active: true, clicked: false },
];

function App() {
  return (
    <div className="App">
      {/* <Rating type={RatingType.controlled} initialRating={initialRating} /> */}
      <Rating type={RatingType.readOnly} initialRating={initialRating} />
      {/* <Rating type={RatingType.disabled} initialRating={initialRating} /> */}
      {/* <Rating type={RatingType.noRating} initialRating={initialRating} /> */}
    </div>
  );
}

export default App;
