function PopulateFilms()
{
  const target = document.getElementById("movie");
  const uri = "https://gist.githubusercontent.com/aspcodenet/31a21ce9d8b8ccf19108a8a02883e9bb/raw/785f9bcb1527cb01e182d3fe40ffafd6fd00dac9/movies.json";
  let films = fetch(uri)
      .then(response => JSON.parse(response));
    console.log(films)
  for (const film in films){
    target
        .appendChild("option")
        .setAttribute("value", film.Price);
    let foo = document.getElementsByTagName("option");
    foo[foo.length-1].innerHTML = film.Title +' '+ '('+film.Price+')';
  }
}
export default PopulateFilms