console.log('Ahoj');
//objekt s úkolem
interface QueueItem<T> {
  value: T;
  priority: number;
}

//Prioritní fronta
type PriorityQueue<T> = QueueItem<T>[];

//fce přidání úkolů
const enqueue = <T>(
  arr: PriorityQueue<T>,
  value: T,
  priority: number,
): PriorityQueue<T> => {
  arr.push({ value, priority });
  return arr;
};

//přidání úkolů
const priorityQueue: PriorityQueue<string> = [];
//low= 1, medium=2, high= 3
console.log(enqueue(priorityQueue, 'Task 1', 1));
console.log(enqueue(priorityQueue, 'Task 2', 2));
console.log(enqueue(priorityQueue, 'Task 3', 3));
console.log(enqueue(priorityQueue, 'Task 4', 3));

//fce  vrácení prvku s nejvyšší prioritou
const dequeue = <T>(arr: PriorityQueue<T>): QueueItem<T> | null => {
  if (arr.length === 0) {
    return null;
  }

  let highestPriorityIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].priority > arr[highestPriorityIndex].priority) {
      highestPriorityIndex = i;
    }
  }

  return arr.splice(highestPriorityIndex, 1)[0];
};

interface Some<T> {
  kind: 'some';
  value: QueueItem<T>;
}

interface None {
  kind: 'none';
}

type Option<T> = Some<T> | None;
const dequeueWithOption = <T>(arr: PriorityQueue<T>): Option<T> => {
  if (arr.length === 0) {
    return { kind: 'none' };
  }
  let highestPriorityIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].priority > arr[highestPriorityIndex].priority) {
      highestPriorityIndex = i;
    }
  }

  const value = arr.splice(highestPriorityIndex, 1)[0];
  return { kind: 'some', value };
};

// console.log(dequeue(priorityQueue));
// console.log(dequeue(priorityQueue));
// console.log(dequeue(priorityQueue));

console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
