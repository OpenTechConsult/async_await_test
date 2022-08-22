function delay(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date())
        }, milliseconds)
    })
}

function delayError(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Error after ${milliseconds}ms`))
        }, milliseconds);
    })
}

async function playingWithDelays() {

    console.log('Delaying...', new Date())

    const dateAfterOneSecond = await delay(1000)
    console.log(dateAfterOneSecond)

    const dateAfterThreeSeconds = await delay(3000)
    console.log(dateAfterThreeSeconds)

    console.log('Second delaying...', new Date())

    return 'done'

}

async function playingWithErrors(throwSyncError) {
    try {
        if (throwSyncError) {
            throw new Error('This is synchronous error')
        }
        await delayError(1000)
    } catch (err) {
        console.error(`We have an error: ${err.message}`)
    } finally {
        console.log('Done')
    }
}

// playingWithDelays().then(result => {
//     console.log(`After 4 seconds: ${result}`);
// })

// console.log('the rest of the function executes here');

playingWithErrors(false)