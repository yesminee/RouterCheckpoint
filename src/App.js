import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import MovieList from "./components/movieList";
import Filter from "./components/filter";
import AddMovie from "./components/addMovie";
import Footer from "./components/footer";
import ressources from "./ressources";
import MovieTrailer from "./components/movieTrailer";
import { Route} from "react-router-dom";



export function App() {

  const [cardsInfo, setCardsInfo] = useState(ressources);
    
  //filter with title
  const [title, setTitle] = useState("");
  const searchMovie = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  //filter with rating
  const [clicked, setClicked] = useState(true);
  const [rate, setRate] = useState(0);
  const handleStarRating = (e) => {
    clicked ? setClicked(false) : setClicked(true);
    clicked || e.target.value !== rate ? setRate(e.target.value) : setRate(0);
  };
  return (
    <div>
      <Header />
        <Route
          exact
          path="/"
          render={() => (<>
            <Filter
              title={title}
              handleSearch={searchMovie}
              rate={rate}
              handleStarRating={handleStarRating}
            />
            <MovieList
              cardsInfo={
                Number(rate) && title.length > 0
                  ? cardsInfo.filter(
                    (elm) =>
                      Number(elm.rate) >= Number(rate) &&
                      elm.title.match(new RegExp(`${title}`, "gi"))
                  )
                  : Number(rate)
                    ? cardsInfo.filter((elm) => Number(elm.rate) >= Number(rate))
                    : title.length > 0
                      ? cardsInfo.filter((elm) =>
                        elm.title.match(new RegExp(`${title}`, "gi"))
                      )
                      : cardsInfo
              }
            />
          </>
            
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <AddMovie cardsInfo={cardsInfo} setCardsInfo={setCardsInfo} />
          )}
        />
        <Route exact path="/:id" component={MovieTrailer} />
        <Route exact path="/" component={Footer} />
    </div>
  );
}
export default App;