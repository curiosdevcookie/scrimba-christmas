There are many ways you could solve this challenge, but I did it using 4 functions:

- renderAvatars() - to, well, render the avatars.

- renderAvatarHighlight() - to render and remove the red/white borders from avatars.

- renderImage() - to render each image from each friends' feature array

- handleTimer() - this was the most complex. I used setInterval and clearInterval to control when images/avatar highlights were rendered and unrendered.

Useful JS

- getElementsByClassName will give you an HTMLCollection which is similar to an array. Finding a way to loop/iterate over it might well be useful!

- You will likely need to use element.classList.add() and element.classList.remove()