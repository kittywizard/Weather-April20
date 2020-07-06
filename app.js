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

        errorMessage("Please enter a number that is 5 digits.");
    }
    else {
        console.log(input);
    }
    //you need this to prevent the weird page reloading ???
    e.preventDefault();
});

function errorMessage(e) {

    //create a div and apply bootstrap class to it
    const div = document.createElement('div');
    div.className = 'alert alert-danger';
    
    //create text node with error message
    div.appendChild(document.createTextNode(e));
    
    //get parent
    const container = document.querySelector('.mainInput');

    //insert alert
    container.insertBefore(div, container);
                    
    setTimeout(() => {
        this.clearAlert();
    }, 3000);
}