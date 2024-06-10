// Алгоритм с ковариациями и с квадратичными описаниями

// Генерация случайных точек
const generatePoints = (n) => {
const points = [];
for (let i = 0; i < n; i++) {
const x = Math.random() * 2 - 1;
const y = Math.random() * 2 - 1;
points.push([x, y]);
}
return points;
}

//Вычисление ковариационной матрицы
const computeCovarianceMatrix = (points) => {
const n = points.length;
const sum_x = points.reduce((sum, point) => sum + point[0], 0);
const sum_y = points.reduce((sum, point) => sum + point[1], 0);
const mean_x = sum_x / n;
const mean_y = sum_y / n;
let covariance_matrix = [[0, 0], [0, 0]];
for (let i = 0; i < n; i++) {
const x_diff = points[i][0] - mean_x;
const y_diff = points[i][1] - mean_y;
covariance_matrix[0][0] += x_diff * x_diff;
covariance_matrix[0][1] += x_diff * y_diff;
covariance_matrix[1][0] += x_diff * y_diff;
covariance_matrix[1][1] += y_diff * y_diff;
}
covariance_matrix = covariance_matrix.map((row) => row.map((val) => val / n));
return covariance_matrix;
};
//Поиск квадратичного описания
const findQuadraticDescription = (covariance_matrix) => {
const a = covariance_matrix[0][0];
const b = covariance_matrix[0][1] + covariance_matrix[1][0];
const c = covariance_matrix[1][1];
return [a, b, c];
};

const n = parseInt(prompt("Введите количество точек: "));
const points = generatePoints(n);
const covariance_matrix = computeCovarianceMatrix(points);
const [a, b, c] = findQuadraticDescription(covariance_matrix);
console.log("Квадратичное описание:");
console.log("a =", a);
console.log("b =", b);
console.log("c =", c);

