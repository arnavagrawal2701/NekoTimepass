// Get the eyeball elements
var eyeball1 = document.getElementById('cat-eyeball1');
var eyeball2 = document.getElementById('cat-eyeball2');

// Calculate the radius within which the eyeballs can move
var radius = 10;

// Add event listener for mousemove on the document
document.addEventListener('mousemove', function (e) {
    // Calculate the position of the cursor relative to the eyeball container
    var rect = document.getElementById('cat-container').getBoundingClientRect();
    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - rect.top;

    // Calculate the angle between the cursor and the center of the eyeball container
    var angle = Math.atan2(mouseY - 50, mouseX - 50);

    // Calculate the new position of the eyeballs within the specified radius
    var newX = Math.cos(angle) * radius - 3;
    var newY = Math.sin(angle) * radius + 50;

    // Update the transform property of the eyeballs
    eyeball1.style.transform = 'translate(' + (newX - 0) + 'px, ' + (newY - 50) + 'px)';
    eyeball2.style.transform = 'translate(' + (newX - 0) + 'px, ' + (newY - 50) + 'px)';
});

document.addEventListener('click', function (e) {
    // Create a new image element
    var fishImage = document.createElement('img');
    
    // Set the source of the image to 'fish.png'
    fishImage.src = 'fish.png';

    // Set the size of the image to 80px width and auto height
    fishImage.style.width = '80px';
    fishImage.style.height = 'auto';

    // Set the initial position of the image to the mouse click coordinates
    fishImage.style.position = 'absolute';
    fishImage.style.left = e.clientX + 'px';
    fishImage.style.top = e.clientY + 'px';

    // Append the image to the document body
    document.body.appendChild(fishImage);

    // Calculate the distance to the bottom of the page
    var distanceToBottom = window.innerHeight - e.clientY;

    // Trigger a reflow to ensure the transition is applied from the initial position
    void fishImage.offsetWidth;

    // Animate the fish falling down
    fishImage.style.transition = 'top 2s cubic-bezier(0.68,-0.55,0.27,1.55)';
    fishImage.style.top = window.innerHeight - fishImage.offsetHeight + 'px';

    // Optionally, you can remove the image from the DOM after the animation is complete
    fishImage.addEventListener('transitionend', function() {
        document.body.removeChild(fishImage);
    });
});
