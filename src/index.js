
const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...

document.querySelector("#start-btn").addEventListener("click", function() {
  console.log("Start button clicked!");
  startCountdown();
}
);


// ITERATION 2: Start Countdown
function startCountdown() {

  console.log("startCountdown called!");

  // Your code goes here ...

  let i = 10;
  const countDown = setInterval(() => {
  (document.querySelector("#time").innerText = i)
    i--;
    document.querySelector("#start-btn").disabled = true; 

    if (i < 0) {
      clearInterval(countDown);
      document.querySelector("#start-btn").disabled = false;
      showToast("#toast-message");
    }
  }, 1000);

}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...

document.querySelector("#toast").classList.add("show");
setTimeout(() => {
    document.querySelector("#toast").classList.remove("show");
  }, 3000);





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
document.querySelector("#close-toast").addEventListener("click", function() {
  document.querySelector("#toast").classList.remove("show");
  });
}

