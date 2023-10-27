import Cards from "./components/Cards";
import { Card } from "react-bootstrap";


function App() {
  return (
    <>
      <Cards
        title="Card Title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      >
        <Card.Img
          variant="top"
          src="https://s1.1zoom.ru/prev2/618/Autumn_Rivers_Bench_Foliage_617162_300x168.jpg"
        />
      </Cards>
      <Cards
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content."
      >
      </Cards>
    </>
  );
}

export default App;
