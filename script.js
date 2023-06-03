const CardContainer = document.querySelector(".CardContainer")

const AfterCard = document.querySelector(".AfterCard")

const submitButton = document.getElementById('submit_score')
const rateAgain = document.getElementById("rate_again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btns")

submitButton.addEventListener("click", () => {
    AfterCard.classList.remove("hidden")
    CardContainer.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    AfterCard.classList.add("hidden")
    CardContainer.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        console.log(rate.InnerHTML)
        rating.innerHTML = rate.innerHTML
    })
})