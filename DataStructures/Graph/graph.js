class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1] && this.adjacencyList[vertex1].has(vertex2)
    );
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].delete(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].delete(vertex1);
    }
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return false;
    }
    for (let neighbour of this.adjacencyList[vertex]) {
      this.removeEdge(neighbour, vertex);
    }
    delete this.adjacencyList[vertex];
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "=> " + [...this.adjacencyList[vertex]]);
    }
  }
  bfs(start) {
    let visited = new Set();
    let queue = [start];
    visited.add(start);

    while (queue.length) {
      let vertex = queue.shift();
      console.log(vertex);

      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    return visited;
  }
  dfs(start) {
    let visited = new Set();

    let dfshelper = (vertex) => {
      if (!vertex) return;
      visited.add(vertex);
      console.log(vertex);

      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          dfshelper(neighbor);
        }
      }
    };
    dfshelper(start);
    return visited;
  }

  reverse() {
    const reversedGraph = new Graph();

    for (let vertex in this.adjacencyList) {
      for (let neighbor of this.adjacencyList[vertex]) {
        reversedGraph.addEdge(neighbor, vertex);
      }
    }

    return reversedGraph;
  }

  hasCycle() {
    const visited = new Set();

    const dfs = (vertex, parent) => {
      visited.add(vertex);

      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          if (dfs(neighbor, vertex)) {
            return true;
          }
        } else if (neighbor !== parent) {
          return true;
        }
      }

      return false;
    };

    for (let vertex in this.adjacencyList) {
      if (!visited.has(vertex)) {
        if (dfs(vertex, null)) {
          return true;
        }
      }
    }

    return false;
  }
}

const g = new Graph();
g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "D");
g.addEdge("D", "E");
console.log(g.hasEdge("A", "B"));
g.display();
console.log("****BFS****");
g.bfs("A");
console.log("****DFS****");
g.dfs("A");
console.log("Has cycle:",g.hasCycle());
console.log("Reversed graph: ",g.reverse());