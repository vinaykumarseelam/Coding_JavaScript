async function getTods() {
  let url = "https://jsonplaceholder.typicode.com/todos";
  let response = await fetch(url);
  //let json = await response.json();
  console.log(response);
}

getTods();
