let myPromise = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve("Promise Resolved")
    }, 6000)
})

console.log("Brfore calling promise")

myPromise.then((successMessage)=>{
    console.log("From callback: " + successMessage)
})
console.log("After calling promise")
setTimeout(() => {}, 7000);
