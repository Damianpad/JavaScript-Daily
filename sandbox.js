function findUser(user) {
    return 'found ${user.firstName} ${user.LastName}'
}

const userData = {
    firstName: "Damian",
    lastName: "Padilla"
}

console.log(findUser(userData));