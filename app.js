// Things to Do

// Grab input from the form
    // Based on mouse click??
    // verify that it's in proper format
// API call - grab info

const inputButton = document.getElementById('button');

inputButton.addEventListener('click', function(e) {
  
    const input = document.getElementById('input').value;
    //test it for length, html doesn't seem to work well
    if(input.length != 5){
        // you suck! try again
        console.log("oops");
    }
    console.log(input);
    //you need this to prevent the weird page reloading ???
    e.preventDefault();
});