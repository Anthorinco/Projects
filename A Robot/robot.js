/* * Objective: Create and compare intelligent robots for parcel delivery.
* Author: Anthoni
* Date: 01/27/2026
* Concepts: Graphs, Breadth-First Search (BFS), Immutability, and Functional Programming.
*/

const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", "Marketplace-Farm",
  "Marketplace-Post Office", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
];


// Converte a lista de estradas em uma estrutura de dados de Grafo (Lista de Adjacência).
 
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);


// Gerencia o estado da vila. É imutável: cada movimento gera um novo estado.
 
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this; // Movimento inválido, retorna o estado atual
    } else {
      // Atualiza a posição dos pacotes e remove os entregues
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}


// Algoritmo de Busca em Largura (BFS) para encontrar o caminho mais curto no grafo.
 
function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}





 // Robô básico que foca em um pacote por vez, na ordem em que aparecem na lista.
 
function goalOrientedRobot({place, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}


 // tuffRobot: Versão otimizada. 
 // Avalia todos os pacotes e escolhe a rota mais curta disponível.
 
function tuffRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let routes = parcels.map((p) => {
      if (p.place != place) {
        return findRoute(roadGraph, place, p.place);
      } else {
        return findRoute(roadGraph, place, p.address);
      }
    });
    // O segredo da eficiência: escolher a menor rota dentre todas as possíveis
    route = routes.reduce((a, b) => (a.length < b.length ? a : b));
  }
  return { direction: route[0], memory: route.slice(1) };
}



  // Simula a entrega sem imprimir no console, retornando apenas o número de turnos.
 
function countSteps(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) return turn;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}


 // Gera um estado inicial aleatório com 5 pacotes.

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}


 // Função principal de comparação estatística.
 
function compareRobots(robot1, memory1, robot2, memory2) {
  let total1 = 0, total2 = 0;
  for (let i = 0; i < 100; i++) {
    let task = VillageState.random();
    total1 += countSteps(task, robot1, memory1);
    total2 += countSteps(task, robot2, memory2);
  }
  console.log(`TuffRobot (Robot 1) média: ${total1 / 100} passos`);
  console.log(`GoalOriented (Robot 2) média: ${total2 / 100} passos`);
}

// Comparação
compareRobots(tuffRobot, [], goalOrientedRobot, []);