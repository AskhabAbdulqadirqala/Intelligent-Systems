// Генерация случайного расписания
function generateRandomSchedule(numUnits, numTasks) {
    const schedule = [];
    for (let i = 0; i < numTasks; i++) {
        schedule.push(Math.floor(Math.random() * numUnits));
    }
    return schedule;
}
// Генетический алгоритм для оптимизации расписания обслуживания оборудования
function calculateFitness(schedule, numUnits) {
    let downtime = Array.from({ length: numUnits }, () => 0);

    for (let task of schedule) {
        downtime[task]++; // Увеличиваем время простоя соответствующей единицы оборудования
    }

    const totalDowntime = downtime.reduce((acc, curr) => acc + curr, 0);
    const averageDowntime = totalDowntime / numUnits;

    // Чем меньше среднее время простоя, тем выше "фитнес"
    return 1 / (1 + averageDowntime);
}

function geneticAlgorithm(numUnits, numTasks, populationSize, generations) {
    let population = Array.from({ length: populationSize }, () => generateRandomSchedule(numUnits, numTasks));

    for (let gen = 0; gen < generations; gen++) {
        const fitnessScores = population.map(schedule => ({ schedule, fitness: calculateFitness(schedule, numUnits) }));
        fitnessScores.sort((a, b) => b.fitness - a.fitness); // Сортировка по убыванию "фитнеса"

        const fittestSchedule = fitnessScores[0].schedule;

        // Здесь можно добавить операторы генетических мутаций и кроссинговера для улучшения популяции
        console.log(`Schedules:`, fitnessScores)
        console.log(`Generation ${gen + 1}: Fittest Schedule - ${fittestSchedule}, Fitness - ${fitnessScores[0].fitness}`);
    }
}

// Пример использования
const numUnits = 3; // Количество единиц оборудования
const numTasks = 10; // Количество задач обслуживания
const populationSize = 50;
const generations = 3;

geneticAlgorithm(numUnits, numTasks, populationSize, generations);
</script>
