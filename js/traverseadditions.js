const human = {

eyes: 2,
head: 1,
hands: 2,
stomach:1,
};
console.log(human);

    for(let key in human){
        console.log(key, human[key]);
    }