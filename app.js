let a=[
    [5,6,3],
    [4,5,9],
    [16,7,8]
];
let b=[
    [1,7,6],
    [6,5,4],
    [3,2,1]
];

let result =[[],[],[]];
for (let i = 0; i< 3 ; i++){
    for (let j = 0; j < 3; j++) {
    //    console.log(a[i][j]+b[i][j]);
       result[i].push(a[i][j]+b[i][j])
    }
}

console.log(result);
