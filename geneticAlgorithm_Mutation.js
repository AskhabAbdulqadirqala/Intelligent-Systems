// Flip Mutation (Инверсия бита)
function flipMutation(individual, mutationRate) {
    const mutatedIndividual = individual.map(bit => {
        if (Math.random() < mutationRate) {
            return bit === 0 ? 1 : 0;
        }
        return bit;
    });
    return mutatedIndividual;
}

// Random Mutation (Случайная мутация)
function randomMutation(individual, mutationRate) {
    const mutatedIndividual = individual.map(bit => {
        if (Math.random() < mutationRate) {
            return Math.round(Math.random());
        }
        return bit;
    });
    return mutatedIndividual;
}

// Invert Mutation (Инвертирование последовательности бит)
function invertMutation(individual, mutationRate) {
    if (Math.random() < mutationRate) {
        const mutationStart = Math.floor(Math.random() * individual.length);
        const mutationEnd = Math.floor(Math.random() * individual.length);
        const start = Math.min(mutationStart, mutationEnd);
        const end = Math.max(mutationStart, mutationEnd);
        const mutatedIndividual = individual.slice(0, start)
            .concat(individual.slice(start, end).reverse())
            .concat(individual.slice(end));
        return mutatedIndividual;
    }
    return individual;
}

// Shuffle Mutation (Перемешивание последовательности)
function shuffleMutation(individual, mutationRate) {
    if (Math.random() < mutationRate) {
        const mutationStart = Math.floor(Math.random() * individual.length);
        const mutationEnd = Math.floor(Math.random() * individual.length);
        const start = Math.min(mutationStart, mutationEnd);
        const end = Math.max(mutationStart, mutationEnd);
        const shuffledSection = individual.slice(start, end).sort(() => Math.random() - 0.5);
        const mutatedIndividual = individual.slice(0, start)
            .concat(shuffledSection)
            .concat(individual.slice(end));
        return mutatedIndividual;
    }
    return individual;
}

// Пример использования
const individual = [1, 0, 1, 0, 1];
const mutationRate = 0.1;

const flippedIndividual = flipMutation(individual, mutationRate);
const randomMutatedIndividual = randomMutation(individual, mutationRate);
const invertedIndividual = invertMutation(individual, mutationRate);
const shuffledIndividual = shuffleMutation(individual, mutationRate);

console.log("Original Individual:", individual);
console.log("Individual after Flip Mutation:", flippedIndividual);
console.log("Individual after Random Mutation:", randomMutatedIndividual);
console.log("Individual after Invert Mutation:", invertedIndividual);
console.log("Individual after Shuffle Mutation:", shuffledIndividual);

