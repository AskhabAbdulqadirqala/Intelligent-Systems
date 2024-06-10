//Коллективы решающих правил

function collectiv_decision(rule_set, votes, weights) {
  const num_rules = rule_set.length;
  const num_votes = votes.length;
  
  // Проверяем количество голосов, количество правил и количество весов
  if (num_votes <= 0 || num_rules <= 0 || num_votes !== rule_set[0].length || num_rules !== weights.length) {
      console.log("Ошибка: Некорректные данные");
      return null;
    }
  
  // Создаем словарь для подсчета взвешенных голосов
  const vote_count = [];
  for (const rule of rule_set) 
    vote_count[JSON.stringify(rule)] = 0;
  
  
  // Обрабатываем голоса каждого члена коллектива
  for (let i = 0; i < num_votes; i++) {
      const vote = votes[i];
      for (let j = 0; j < num_rules; j++) {
        const rule = rule_set[j];
        if (rule.every(v => vote.includes(v))) 
                  vote_count[JSON.stringify(rule)] += weights[j][i];
         }
  }
    
  
  
  // Определяем решение на основе максимального взвешенного голоса
  const decision = Object.keys(vote_count).reduce((a, b) => vote_count[a] > vote_count[b] ? a : b);
  return JSON.parse(decision);
}

// Пример использования:
const rule_set = [[1, 0, 1], [1, 1, 0], [0, 1, 1]]; // Правила коллективного решения
const votes = [[1, 0, 1], [1, 1, 0], [0, 1, 1]]; // Голоса членов коллектива
const weights = [[0.1, 0.6, 0.2], [0.4, 0.1, 0.1], [0.1, 0.2, 0.1]]; // Веса голосов для каждого правила
const decision = collectiv_decision(rule_set, votes, weights);
if (decision) console.log("Решение:", decision);
