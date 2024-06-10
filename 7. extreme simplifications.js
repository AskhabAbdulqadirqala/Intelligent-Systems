//Метод предельных упрощений

function simplification(graph, threshold) {
// Создаем список вершин графа
let vertices = Array.from({ length: graph.length }, (_, i) => i);

// Удаляем все ребра, чей вес превышает пороговое значение
vertices.forEach(i => {
vertices.forEach(j => {
if (graph[i][j] > threshold) {
graph[i][j] = 0;
}
});
});

// Удаляем все изолированные вершины
let isolatedVertices = vertices.filter(vertex => !graph[vertex].some(Boolean));
isolatedVertices.forEach(vertex => {
vertices = vertices.filter(v => v !== vertex);
graph.splice(vertex, 1);
graph.forEach(row => row.splice(vertex, 1));
});

return graph;
}
// Пример использования:
const graph = [
  [0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 3, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
const threshold = 2;
const simplifiedGraph = simplification(graph, threshold);
console.log(simplifiedGraph);

