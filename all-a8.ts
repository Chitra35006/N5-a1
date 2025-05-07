function formatString(input: string, toUpper?: boolean):string{
    if(toUpper === false || toUpper === null){
        return input.toLowerCase()
    }
    else{
        return input.toUpperCase()
    }

}

console.log(formatString("Hello")     )
console.log(formatString("Hello", true))
console.log(formatString("Hello", false))