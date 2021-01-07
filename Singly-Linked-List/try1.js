class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        if (val === undefined) return undefined
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
            // head and tail points to same memory location
        }
        else {
            // just take the current tail and point it towards the new node(32). After that set tail to be the new node(32)
            // '--------->' this arrow means 'next'
            // 23(tail/head)
            // 23(head)--------->32(tail)
            // to push 52, point the next property of the current tail to the newly created node 52
            // then set the tail to new node 52
            // 23(head)--------->32--------->52(tail)
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
}

const list = new SinglyLinkedList()
list.push("Animesh")
list.push("paul")
list.push("bro")
console.log(list)