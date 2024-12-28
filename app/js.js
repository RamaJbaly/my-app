const arr = [
    {
        id: '1',
        name: 'pens',
        price: 15,
        amount: 2
    },
    {
        id: '2',
        name: 'colors',
        price: 120,
        amount: 2
    },
    {
        name: 'cute pens',
        price: 10,
        amount: 1
    },
    {
        id: '1',
        name: 'pens',
        price: 15,
        amount: 3
    },
    {
        id: '2',
        name: 'colors',
        price: 120,
        amount: 1
    },
    {
        id: '2',
        name: 'colors',
        price: 110,
        amount: 4
    },
    {
        id: '2',
        name: 'colorful bag',
        price: 110,
        amount: 4
    },
]

const newarr = [];

arr.forEach((item) => {
    console.log(item);
    const found = newarr.find((element) => element.name == item.name);
    if (!found) {
        newarr.push(item)
    }
    else{
        found.amount+=item.amount
    }
})

console.log("newarr");
console.log(newarr);


