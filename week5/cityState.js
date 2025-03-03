// function to join a city and state to be used for an address
function cityState (city, state) {
    state = state.toUpperCase()
    return city + ', ' + state
}

// test addresses
address = cityState('Minneapolis', 'mn')
console.log(address)

address = cityState('Eagan', 'mn')
console.log(address)