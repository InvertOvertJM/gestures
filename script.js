const gestureBox = document.getElementById("gestureBox");
const output = document.getElementById("output");

let startX, startY, endX, endY;

// Task 1: Change the background color of the box when the user touches it
gestureBox.addEventListener("touchstart", function(event) {
    gestureBox.style.backgroundColor = "red"; // Modify this color to test
    output.textContent = "Touch started";
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
});

// Task 2: Make the text inside the box change when the user moves their finger
gestureBox.addEventListener("touchmove", function(event) {
    gestureBox.textContent = "YOU ARE MOVING!!!"; // Modify this message to test
    output.textContent = "MOVING AGAUGHAEUHGA";
});

// Task 3: Reset the box when the user lifts their finger
gestureBox.addEventListener("touchend", function(event) {
    gestureBox.style.backgroundColor = "yellow"; // Modify this reset behavior
    gestureBox.textContent = "swipe me pls"; // Modify this message
    output.textContent = "Touch ended";
});

// Task 4: Change what happens when a swipe is detected
gestureBox.addEventListener("touchend", function(event) {
    endX = event.changedTouches[0].clientX;
    endY = event.changedTouches[0].clientY;
    
    let diffX = endX - startX;
    let diffY = endY - startY;
    
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
            gestureBox.style.backgroundColor = "orange";
            output.textContent = "You swiped right!"; // Modify this action
        } else {
            gestureBox.style.backgroundColor = "purple";
            output.textContent = "You swiped left!"; // Modify this action
        }
    } else {
        if (diffY > 0) {
            gestureBox.style.backgroundColor = "lightgreen";
            output.textContent = "You swiped down!"; // Modify this action
        } else {
            gestureBox.style.backgroundColor = "white";
            output.textContent = "You swiped up!"; // Modify this action
        }
    }
});

// Task 5: Implement a double-tap event that changes the box color
gestureBox.addEventListener("dblclick", function() {
    gestureBox.style.backgroundColor = "blue"; // Modify this behavior
    gestureBox.textContent = "how dare you double tap me";
    output.textContent = "you have double tapped it";
});



