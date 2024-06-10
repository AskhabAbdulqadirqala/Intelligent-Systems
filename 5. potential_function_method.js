// Генерация случайных точек 
function generatePoints(n) {
  let points = [];
  for (let i = 0; i < n; i++) {
      let x = Math.random() * 2 - 1;
      let y = Math.random() * 2 - 1;
      points.push([x, y]);
    }
  return points;
}

// Вычисление расстояния между точками 
function computeDistance(point1, point2) {
  let [x1, y1] = point1;
  let [x2, y2] = point2;
  let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return distance;
}

// Потенциальная функция (способ привлечения и отталкивания) 
function potentialFunction(distance) {
  if (distance == 0) 
    return Infinity; // Защита от деления на ноль 
  
  let potential = 1 / distance;
  return potential;
}

// Поиск локального минимума 
function findLocalMinimum(points) {
  let minPotential = Infinity;
  let localMinimum = null;
  for (let i = 0; i < points.length; i++) {
      let totalPotential = 0;
      for (let j = 0; j < points.length; j++) {
            if (i != j) 
              totalPotential += potentialFunction(computeDistance(points[i], points[j]));
            }
      
      if (totalPotential < minPotential) {
        minPotential = totalPotential;
        localMinimum = points[i];
      }
    }
  return localMinimum;
}

let n = prompt("Введите количество точек: ");
let points = generatePoints(n);
let localMinimum = findLocalMinimum(points);
console.log("Локальный минимум:", localMinimum);
