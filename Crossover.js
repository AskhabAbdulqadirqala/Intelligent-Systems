function singlePointCrossover(parent1, parent2) {
    const crossoverPoint = Math.floor(Math.random() * parent1.length);
    const child1 = parent1.slice(0, crossoverPoint).concat(parent2.slice(crossoverPoint));
    const child2 = parent2.slice(0, crossoverPoint).concat(parent1.slice(crossoverPoint));
    return [child1, child2];
}

// Многоточечный кроссинговер. Несколько случайно выбранных точечных разрыва в геноме используются для обмена
function multiPointCrossover(parent1, parent2, numPoints) {
    const crossoverPoints = [];
    for (let i = 0; i < numPoints; i++) {
        crossoverPoints.push(Math.floor(Math.random() * parent1.length));
    }
    crossoverPoints.sort((a, b) => a - b);

    let currentParent = parent1;
    const children = [];
    for (let i = 0; i < crossoverPoints.length; i++) {
        const crossoverPoint = crossoverPoints[i];
        const child = currentParent.slice(0, crossoverPoint).concat(parent2.slice(crossoverPoint));
        children.push(child);
        currentParent = currentParent === parent1 ? parent2 : parent1;
    }
    return children;
}

// Равномерный кроссинговар. Каждый бит в геноме имеет равную вероятность быть обменянным между двумя родителями
function uniformCrossover(parent1, parent2) {
    const child1 = [];
    const child2 = [];
    for (let i = 0; i < parent1.length; i++) {
        const randomParent = Math.random() < 0.5 ? parent1 : parent2;
        child1.push(randomParent[i]);
        child2.push(randomParent[i]);
    }
    return [child1, child2];
}

// Арифметический кроссинговар. вычисляется среднее значение гена у двух родителей
function arithmeticCrossover(parent1, parent2) {
    const child1 = [];
    const child2 = [];
    for (let i = 0; i < parent1.length; i++) {
        const randomParent = Math.random() < 0.5 ? parent1 : parent2;
        const value = randomParent[i] + (parent2[i] - parent1[i]) / 2;
        child1.push(value);
        child2.push(value);
    }
    return [child1, child2];
}

// Пример использования
const parent1 = [1, 0, 1, 0, 1];
const parent2 = [0, 1, 0, 1, 0];

const singlePointChildren = singlePointCrossover(parent1, parent2);
const multiPointChildren = multiPointCrossover(parent1, parent2, 2);
const uniformChildren = uniformCrossover(parent1, parent2);
const arithmeticChildren = arithmeticCrossover(parent1, parent2);

console.log("Parent 1:", parent1);
console.log("Parent 2:", parent2);
console.log("Children after Single Point Crossover:", singlePointChildren);
console.log("Children after Multi Point Crossover:", multiPointChildren);
console.log("Children after Uniform Crossover:", uniformChildren);
console.log("Children after Arithmetic Crossover:", arithmeticChildren);</script>
