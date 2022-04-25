import Rating from "./components/Rating/Rating";

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
      <Rating initialRating={initialRating} />
    </div>
  );
}

export default App;
