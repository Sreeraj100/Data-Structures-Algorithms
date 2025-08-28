class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Map()
    }

    addEdge(v1, v2, weight) {
        this.addVertex(v1)
        this.addVertex(v2)
        this.adjacencyList[v1].set(v2, weight)
        this.adjacencyList[v2].set(v1, weight)
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " => ", Array.from(this.adjacencyList[vertex]))
        }
    }

}

const Wg =new WeightedGraph()
Wg.addVertex("A")
Wg.addVertex("B")
Wg.addVertex("C")
Wg.addEdge("A","B",20)
Wg.addEdge("B","C",5)
Wg.display()

