
//Testing Examples
{
    const checkAge = function (age) {
        if (age >= 18) {
            console.log('You are old enough')
        } else if (age < 18 && age >= 0) {
            console.log('You are still young')
        } else {
            console.log('You are not born yet')
        }
    }

    checkAge(10)
    checkAge(25)
    checkAge(-2)
}
{
    const addMarks = (text, mark, times) => {
        let newText = text

        for (let i = 0; i <= times; i++) {
            newText += mark
        }

        console.log(newText)
    }

    addMarks('Hello', '!', 1) // Hello!
    addMarks('Hello', '!', 3) // Hello!!!
    addMarks('How are you', '?', 1) // How are you?
    addMarks('How are you', '?', 2) // How are you??
}
{
    const showNameWithAge = (name = 'Unknown', age = 0) => {
        const nameWithAge = `${name} is ${age} year(s) old`

        return nameWithAge // return the value to be used later
    }

    const alpha = showNameWithAge('Alpha', 11)
    const betty = showNameWithAge('Betty', 42)
    const gamma = showNameWithAge('Gamma', 30)

    console.log(alpha)
    console.log(betty)
    console.log(gamma)
}
function logName(name) {
    console.log(`Hello, ${name}! `)
}

    const nameA = 'Alex'
    const nameB = 'Beta'

    logName(nameA)
    logName(nameB)

//My Work
{
    const gamertagCreator = (name, mark, times) => {
        let newName = name


        for (let i = 1; i <= times; i++) {
            newName += mark
        }

        console.log(newName)
    }

    gamertagCreator(prompt("Add Your Name"), prompt('Add your Style'), parseInt(prompt("Add your number")))
    gamertagCreator('Dan', 'x', 5)
}