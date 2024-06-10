/*Нейросеть Хопфилда используется для ассоциативного запоминания и восстановления образов. 
Она хранит образы в своих весах и может восстанавливать соответствующий образ по заданному входному образу. 
*/
class HopfieldNetwork {
    constructor(size) {
        this.size = size;
        this.weights = new Array(size).fill().map(() => new Array(size).fill(0));
    }

    train(patterns) {
        const numPatterns = patterns.length;

        for (let p = 0; p < numPatterns; p++) {
            const pattern = patterns[p];
            for (let i = 0; i < this.size; i++) {
                for (let j = 0; j < this.size; j++) {
                    if (i !== j) {
                        this.weights[i][j] += pattern[i] * pattern[j];
                    }
                }
            }
        }
    }

    recall(pattern) {
        const output = new Array(this.size).fill(0);

        for (let i = 0; i < this.size; i++) {
            let activation = 0;
            for (let j = 0; j < this.size; j++) {
                activation += this.weights[i][j] * pattern[j];
            }

            output[i] = activation >= 0 ? 1 : -1;
        }

        return output;
    }
}

// Пример использования

const hopfield = new HopfieldNetwork(10);

// Обучаем нейронную сеть на большом наборе информационных образцов
const patterns = [
    [1, -1, 1, -1, 1, -1, 1, -1, 1, -1], // Образец 1
    [-1, 1, -1, 1, -1, 1, -1, 1, -1, 1], // Образец 2
    [1, 1, 1, 1, 1, -1, -1, -1, -1, -1], // Образец 3
    [-1, -1, -1, -1, -1, 1, 1, 1, 1, 1]  // Образец 4
];
console.log('Train Patterns:', patterns);

hopfield.train(patterns);

// Восстанавливаем информацию
const inputPattern = [1, 0, 1, -1, 0, -1, 1, -1, 0, -1]; // Частично поврежденный образец
const recalledPattern = hopfield.recall(inputPattern);

console.log('Input Pattern:', inputPattern);
console.log('Recalled Pattern:', recalledPattern);
