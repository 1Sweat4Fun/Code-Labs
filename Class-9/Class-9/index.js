fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
  .then((response) => response.json())
.then((data) =>  {


//Step 1 Access the img element
document.getElementById("random-imgae")

// Step 2 store the image from data to 
// The img element
.log(data.message)
.src = data.message
});