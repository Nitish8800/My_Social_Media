// function map(arr,meth){
//     let res=[]

// arr.forEach(el=>{
//     const value = meth(el)
// })

// }

// const f = n=> n<=1 ? 1 : n*f(n-1)

// let g = f(4)

// console.log(g)

// let x = ["1","2","15","-7","300"]

// console.log(x.sort())

// function build(sen){

//     let root={}

//     sen.forEach(el=>{
//         let base=root
//         el.split(" ").forEach(word=>{
//             if(base[word]==undefined){
//                 base[word]={}
//             }
//             base=base[word]
//         })
//     })
// return root

// }

// console.log(build(["Hello World","Hello there"]))

// function check(items){
//     for(var i=0;i<items.length;i++){
//         if(items[i].length==0){
//             items.splice(i,1)
//         }
//     }
// }
// var names = ["Rachel","","Meghana","","","Tim"]
// console.log(check(names))

// function check(arr){
//     let pos=false
//     let neg=false

//     arr.forEach(num=>{
//         pos=num>0
//         neg=num<0
//     })

// console.log([pos,neg])

// }
// check()

// function func(a,b){
//     a+=1
//     b.push(1)
// }

// const a=0
// const b=[]
// func(a,b)
// console.log(a,b)

// function func(arr,fn){
//     let pos=false

//     for(let i=0;i<arr.length;i++){

//         let row
//     }

// }

// const promises = [3, 2, 1].map(
//   (d) =>
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(d);
//       }, d * 1000);
//     })
// );

// Promise.race(promises).then((val) => {
//   console.log(val);
// });


// fucntion randomInt(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min)
// }

// function sample(items,n){
    
// }