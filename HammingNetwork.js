        /*Нейросеть Хэмминга используется для распознавания образов, 
        но в отличие от нейросети Хопфилда, она специализируется на исправлении ошибок во входных данных.
        Нейросеть Хэмминга может корректировать и восстанавливать искаженные образы.*/

        const data = [
            [1, 0, 1, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 1],
            [0, 1, 0, 1],
            [0, 1, 0, 0],
        ];

        // Класс нейронной сети Хэмминга
        class HammingNetwork {
            constructor(data) {
                this.data = data;
                this.size = data[0].length;
            }

            findNearestNeighbors(input, k) {
                const distances = [];
                for (let i = 0; i < this.data.length; i++) {
                    const distance = this.hammingDistance(input, this.data[i]);
                    distances.push({ index: i, distance });
                }
                distances.sort((a, b) => a.distance - b.distance);
                return distances.slice(0, k);
            }

            hammingDistance(input1, input2) {
                let distance = 0;
                for (let i = 0; i < this.size; i++) {
                    if (input1[i] !== input2[i]) {
                        distance++;
                    }
                }
                return distance;
            }
        }

        // Создание нейросети Хэмминга
        const hammingNetwork = new HammingNetwork(data);

        // Тестирование нейросети
        const input = [0, 1, 0, 1];
        const k = 3; // Количество ближайших соседей
        const neighbors = hammingNetwork.findNearestNeighbors(input, k);
        console.log("Data: ", data);
        console.log("Input: ", input);
        console.log("Nearest Neighbors:");
        for (const neighbor of neighbors) {
            console.log(data[neighbor.index]);
        }
