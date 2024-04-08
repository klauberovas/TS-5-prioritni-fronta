console.log('Ahoj');
//fce přidání úkolů
var enqueue = function (arr, obj) {
    arr.push(obj);
    return arr;
};
//přidání úkolů
var priorityQueue = [];
//low= 1, medium=2, high= 3
console.log(enqueue(priorityQueue, {
    project: 'Project 1',
    assignee: 'Nováková',
    label: 'bug',
    priority: 1,
}));
console.log(enqueue(priorityQueue, {
    project: 'Project 2',
    assignee: 'Rychlý',
    label: 'feature',
    priority: 2,
}));
console.log(enqueue(priorityQueue, {
    project: 'Project 1',
    assignee: 'Novotný',
    label: 'refactoring',
    priority: 3,
}));
console.log(enqueue(priorityQueue, {
    project: 'Project 1',
    assignee: 'Nováková',
    label: 'done',
    priority: 3,
}));
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
// console.log(dequeue(priorityQueue));
// console.log(dequeue(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
