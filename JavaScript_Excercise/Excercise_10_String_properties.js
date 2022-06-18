const movie = {
  title: "a",
  releaseyear: 2022,
  rating: 4.5,
  director: "b",
};

function showProperties(obj) {
  for (let key in movie) {
    // console.log(key, movie[key]);
    if (typeof movie[key] === "string") {
      console.log(key, movie[key]);
    }
  }
}
showProperties(movie);
