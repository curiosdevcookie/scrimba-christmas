/*
The cool people of Lapland are bored of traditional social media and have decided to build their own app called Northagram...and they need your help!

This is how the app should work:
- It displays circular avatars of the friends who have uploaded pictures lately. These avatars have a white border.
- Underneath, it cycles through the friends' pictures displaying each for 1.5 seconds. (There's an animated snowman loading state before pictures load.)
- While a friend's pictures are being displayed, that friend's avatar gets a red border.
- This red border reverts to white when their pictures have finished being displayed.
- When all of the images have been displayed, the user should see a message "Refresh to load latest images". All avatars should have a white border at this point.

Stretch Goals for dedicated Social Media Engineers

- Add captions to the images.
- Refactor your code to use generators!
- Grey out the avatar after that friend's pictures have been displayed.
- Make it so clicking on an image pauses the timer.
- Add left and right arrow overlays to the image so users can scroll back and forth.
*/
import { feedData } from './data.js'

const avatarContainer = document.querySelector('.feed-avatars')
const imageContainer = document.querySelector('.feed-images')

let currentFriendIndex = 0
let currentImageIndex = 0
let intervalId = null

function displayAvatars() {
  feedData.forEach(({ handle, avatarUrl }) => {
    const avatar = document.createElement('img')
    avatar.classList.add('avatar')
    avatar.src = `./images/${avatarUrl}`
    avatar.alt = `${handle}'s avatar`
    avatar.setAttribute('data-handle', handle)
    avatar.title = handle
    avatarContainer.appendChild(avatar)
  })
}

function displayImage(imageUrl, alt) {
  const image = document.createElement('img')
  image.classList.add('feature-image')
  image.src = `./images/${imageUrl}`
  image.alt = alt
  imageContainer.innerHTML = ''
  imageContainer.appendChild(image)
}

function displayLoadingState() {
  const loadingImage = document.createElement('img')
  loadingImage.classList.add('ux-loading')
  loadingImage.src = './images/loading.gif'
  loadingImage.alt = 'Loading'
  imageContainer.innerHTML = ''
  imageContainer.appendChild(loadingImage)
}

function updateAvatarBorders() {
  const avatars = document.querySelectorAll('.avatar')
  avatars.forEach((avatar, index) => {
    if (index === currentFriendIndex) {
      avatar.classList.add('highlight')
    } else {
      avatar.classList.remove('highlight')
    }
  })
}

function displayRefreshMessage() {
  const message = document.createElement('p')
  message.classList.add('ux-message')
  message.textContent = 'Refresh to load latest images'
  imageContainer.innerHTML = ''
  imageContainer.appendChild(message)

  // Reset all avatar borders to white
  const avatars = document.querySelectorAll('.avatar')
  avatars.forEach(avatar => avatar.classList.remove('highlight'))
}

function cycleImages() {
  if (currentFriendIndex >= feedData.length) {
    clearInterval(intervalId)
    displayRefreshMessage()
    return
  }

  const currentFriend = feedData[currentFriendIndex]

  if (currentImageIndex === 0) {
    updateAvatarBorders()
    displayLoadingState()
    setTimeout(() => {
      displayImage(currentFriend.features[currentImageIndex].imageUrl, currentFriend.features[currentImageIndex].alt)
      currentImageIndex++
    }, 1000)
  } else if (currentImageIndex < currentFriend.features.length) {
    displayImage(currentFriend.features[currentImageIndex].imageUrl, currentFriend.features[currentImageIndex].alt)
    currentImageIndex++
  } else {
    // Move to the next friend
    currentFriendIndex++
    currentImageIndex = 0
    updateAvatarBorders() // Reset borders when moving to next friend
  }

  console.log(`Friend: ${currentFriendIndex}, Image: ${currentImageIndex}`)
}

function startNorthagram() {
  displayAvatars()
  cycleImages()
  intervalId = setInterval(cycleImages, 1500)
}

startNorthagram()
