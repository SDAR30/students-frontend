const foods = [
    { type: 'meat', calories: 100, name: 'steak' },
    { type: 'diary', calories: 40, name: 'milk' },
    { type: 'meat', calories: 300, name: 'chicken' },
    { type: 'veg', calories: 50, name: 'carrot' },]

//console.log(foods.sort((a,b)=> a.calories - b.calories))

const foodsOfType = (selectedType) => {
    let selectedFoods = []

    for (let value of Object.values(foods)) {
        if (value.type === selectedType) {
            selectedFoods.push(value.name)
        }
    }
    return selectedFoods;

}
//console.log(foodsOfType('meat'))
let swap = false;
for (let i = 0; i < foods.length - 1; i++) {
    swap = false;
    for (let j = i + 1; j < foods.length; j++) {
        if (foods[i].calories > foods[j].calories) {
            swap = true;
            [foods[i], foods[j]] = [foods[j], foods[i]]
        }
    }
    if (!swap) break;
}

const calorieAchieved = (targetedFoodTypes, targetedCalorie) => {
    let calorieCount = 0;

    for (let value of Object.values(foods)) {
        let targetedType = targetedFoodTypes.find(type => type === value.type)
        if(targetedType){
            calorieCount += targetedType.calories
        }
    }
    return calorieCount >= targetedCalorie
}

console.log(calorieAchieved(['meat', 'diary'], 100))
console.log(calorieAchieved(['veg', 'diary'], 55))