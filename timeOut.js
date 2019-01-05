function getName () {
    setTimeout(() => {
        console.log('my name is Promise')
    }, 1000)
}
// after 1000 ms = 1s : my name is printed out

getName();