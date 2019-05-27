'use strict'

// function itemList (){
//     let items = []
//     let i = 0
//     while (i < 10){
//         let item = function () {
//             console.log(i)
//         }
//         items.push(item)
//         i++
//     }
//     return items
// }


// let list = itemList()
// list[0]()
// list[5]()

const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 90) {
            console.log('resolving the promise ...')
            resolve('Hello, Promises!')
        }
    reject(new Error('In 10% of the cases, I fail. Miserably.'))
    }, 1000)
})
    

