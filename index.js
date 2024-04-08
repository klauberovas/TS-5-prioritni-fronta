console.log('Ahoj');
//fce přidání úkolů
var enqueue = function (arr, value, priority) {
    arr.push({ value: value, priority: priority });
    return arr;
};
//přidání úkolů
var priorityQueue = [];
//low= 1, medium=2, high= 3
console.log(enqueue(priorityQueue, 'Task 1', 1));
console.log(enqueue(priorityQueue, 'Task 2', 2));
console.log(enqueue(priorityQueue, 'Task 3', 3));
console.log(enqueue(priorityQueue, 'Task 4', 3));
//fce  vrácení prvku s nejvyšší prioritou
var dequeue = function (arr) {
    if (arr.length === 0) {
        return null;
    }
    var highestPriorityIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].priority > arr[highestPriorityIndex].priority) {
            highestPriorityIndex = i;
        }
    }
    return arr.splice(highestPriorityIndex, 1)[0];
};
var dequeueWithOption = function (arr) {
    if (arr.length === 0) {
        return { kind: 'none' };
    }
    var highestPriorityIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].priority > arr[highestPriorityIndex].priority) {
            highestPriorityIndex = i;
        }
    }
    var value = arr.splice(highestPriorityIndex, 1)[0];
    return { kind: 'some', value: value };
};
// console.log(dequeue(priorityQueue));
// console.log(dequeue(priorityQueue));
// console.log(dequeue(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
