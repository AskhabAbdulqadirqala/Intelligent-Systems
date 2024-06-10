/*Алгоритм Кохонена  - алгоритм обучения без учителя , предусматривает
подстройку синапсов на основании их значений от предыдущей итерации
Задача: 
Есть данные о покупках клиентов интернет-магазина. 
Нужно кластеризовать этих клиентов на несколько групп на основе критериев,
таких как сумма покупок, частота покупок и средний чек.*/
// Входные данные клиентов интернет-магазина
        const input = [
            [100, 3, 33], // Сумма покупок, частота покупок, средний чек
            [50, 2, 25],
            [200, 4, 50],
            [500, 2, 250],
            [160, 4, 40],
            [555, 5, 111],
            [100, 10, 10],
            [50, 1, 50],
            [600, 6, 100],
            // ...
        ];

        // Алгоритм Кахонена
        function kohonenAlgorithm(input, k, learningRate, iterations) {
            const weights = [];
            for (let i = 0; i < k; i++) {
                const weight = [Math.random(), Math.random(), Math.random()];
                weights.push(weight);
            }

            for (let iteration = 0; iteration < iterations; iteration++) {
                for (let i = 0; i < input.length; i++) {
                    const customer = input[i];
                    let bestMatchIndex = 0;
                    let smallestDistance = Infinity;

                    for (let j = 0; j < k; j++) {
                        const distance = calculateDistance(customer, weights[j]);
                        if (distance < smallestDistance) {
                            bestMatchIndex = j;
                            smallestDistance = distance;
                        }
                    }

                    for (let j = 0; j < input[0].length; j++) {
                        weights[bestMatchIndex][j] +=
                            learningRate * (customer[j] - weights[bestMatchIndex][j]);
                    }
                }

                learningRate *= 0.99;
            }

            return weights;
        }

        // Вычисление евклидова расстояния между двумя векторами
        function calculateDistance(vector1, vector2) {
            let distance = 0;
            for (let i = 0; i < vector1.length; i++) {
                distance += Math.pow(vector1[i] - vector2[i], 2);
            }
            return Math.sqrt(distance);
        }

        // Настройки и тестирование алгоритма Кахонена
        const k = 4; // Количество кластеров
        const learningRate = 0.1;
        const iterations = 100;
        const weights = kohonenAlgorithm(input, k, learningRate, iterations);

        // Классификация клиентов на кластеры
        const clusters = [];
        for (let i = 0; i < input.length; i++) {
            const customer = input[i];
            let bestMatchIndex = 0;
            let smallestDistance = Infinity;

            for (let j = 0; j < k; j++) {
                const distance = calculateDistance(customer, weights[j]);
                if (distance < smallestDistance) {
                    bestMatchIndex = j;
                    smallestDistance = distance;
                }
            }

            clusters.push(bestMatchIndex);
        }

        console.log("Customers: ", input);
        console.log("Clusters: ", clusters);
