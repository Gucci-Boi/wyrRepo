// TODO finish these lines to select the correct elements in the HTML page.

let randomCountryElement = document.querySelector('#randomCountryDisplay')     // The element to display the country's name in, currently has the text 'Country name placeholder'
let userAnswerElement = document.querySelector('#userAnswerEntry')    // The input element the user enters their answer in
let submitButton = document.querySelector('#submitUserAnswer')    // The button the user clicks to submit their answer
let resultTextElement = document.querySelector('#gameResult')   // The element that displays if the user is correct or not. Currently has the text "Replace with result"

// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array country names and two-letter country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files included with script elements as one big file,
// organized in the order of the script tags. So the countriesAndCodes array from countries.js
// is available to this script.

// An array country names and two-letter country codes is provided in the countries.js file.
// TODO when the page loads, select an element at random from the countriesAndCodes array

// callback function for the randomized country
function randomCountry() {
// uses the built-in random() method and multiplies it by the length of the countriesAndCodes array's length
    return countriesAndCodes[Math.floor(Math.random() * countriesAndCodes.length)]
}
let randomStartingCountry = randomCountry()

// TODO display the country's name in the randomCountryElement
// callback function for displaying the random country name
function displayRandomCountry() {
    randomCountryElement.innerHTML = randomStartingCountry.name
}
// calls it here so a random country is actually selected
displayRandomCountry()

// TODO add a click event handler to the submitButton.  When the user clicks the button,
submitButton.addEventListener('click', () => {
    // calls the function at the bottom
    checkAnswer()
})

// TODO Create a Play Again button in the HTML.
let playAgainButton = document.querySelector('#playAgainButton')
// When the Play Again button is clicked, the user can try to guess a new country's capital.
playAgainButton.addEventListener('click', () => {
    // Clear the user's answer
    userAnswerElement.value = ''

    // clears the result text
    resultTextElement.innerHTML = ''

    // select a new random country
     randomStartingCountry = randomCountry()
    // display the country's name, handle the user's guess as described above.
    displayRandomCountry()

})

// If you didn't use functions in the code you've already written, you should refactor your code
// to use function(s) to avoid writing very similar code again.
function checkAnswer() {
    //  * Read the text the user typed into userAnswerElement.
    let userAnswer = userAnswerElement.value

    //  * Create the URL you will need to make a request to.
    //     - You will need with the letter code for the country chosen, to build the URL.
    let startingCountryCode = randomStartingCountry.twoLetterCode

    // variable for the country's name
    let startingCountryName = randomStartingCountry.name

    //     - These are in countriesAndCodes, example the code for China is 'CN', the code for Afghanistan is 'AF'.
    let worldBankUrl = `https://api.worldbank.org/v2/country/${startingCountryCode}?format=json`

    //  * Use fetch() to make a call to the World Bank API.
    fetch(worldBankUrl)
        //  * Catch any errors encountered in the API call. If an error occurs, display an alert message
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                alert(response.message)
            }
        })
        //  * If the API call was successful, extract the name of the capital city from the World Bank API response.
        .then(data => {
            let capitalCity = data[1][0]?.capitalCity

            if (capitalCity) {
                alert("Capital city is in the World Bank API")
            } else {
                alert("Capital city isn't in the World Bank API")
            }

            //  * Compare the actual capital city to the user's answer.
            //      - You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
            //        as the World Bank data. You can make the comparison case-insensitive.
            if (capitalCity.toLowerCase() === userAnswer.toLowerCase().trim()) {

                //  * Display an appropriate message in the resultTextElement to tell the user if they are right or wrong.
                //      For example 'Correct! The capital of Germany is Berlin' or 'Wrong - the capital of Germany is not G, it is Berlin'
                resultTextElement.innerHTML = `Correct. ${userAnswer} is the capital of ${startingCountryName}.`
            } else {
                resultTextElement.innerHTML = `Incorrect. The capital of ${startingCountryName} is not ${userAnswer}.`
            }
        })
        .catch(error => alert(`Error while fetching data: ${error}`));

    //      - Optional: if you want to be more flexible, and allow close guesses to be correct, include and use a string similarity
    //        library such as https://github.com/hiddentao/fast-levenshtein. This means you can allow an answer
    //        like 'Washington DC' when the name of the capital listed by the World Bank is 'Washington D.C.'
}