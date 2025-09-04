"use strict";
//22. Create a class Stack with push, pop, peek, isEmpty methods.
class Stack {
    constructor() {
        this.items = [];
    }
    // thêm 1 vào stack
    push(item) {
        this.items.push(item);
    }
    //xóa 1 phần tử ra khỏi stack
    pop() {
        return this.items.pop();
    }
    //xem phần tử đầu tiên của stack
    peek() {
        return this.items[this.items.length - 1];
    }
    //check xem stack có rỗng hay không
    isEmpty() {
        return this.items.length === 0 ? "rong" : "khong";
    }
}
const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
console.log(stack);
stack.pop();
console.log("sau khi xoa 1 phan tu", stack);
stack.peek();
console.log("phan tu dau tien", stack.peek());
stack.isEmpty();
console.log("stack rong hay khong:", stack.isEmpty());
