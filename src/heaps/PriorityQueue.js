class Node {
	constructor ( value, priority ) {
		this.value = value;
		this.priority = priority;
		this.next = null;
	}
}
class PriorityQueue {
	constructor () {
		this.first = null;
	}
}