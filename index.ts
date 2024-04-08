console.log('Ahoj');
//objekt s úkolem
interface Task<T> {
  project: T;
  assignee: T;
  label: T;
  priority: number;
}

//Prioritní fronta
type PriorityQueue<T> = Task<T>[];

//fce přidání úkolů
const enqueue = <T>(arr: PriorityQueue<T>, obj: Task<T>): PriorityQueue<T> => {
  arr.push(obj);
  return arr;
};

//přidání úkolů
const priorityQueue: PriorityQueue<string> = [];
//low= 1, medium=2, high= 3
console.log(
  enqueue(priorityQueue, {
    project: 'Project 1',
    assignee: 'Nováková',
    label: 'bug',
    priority: 1,
  }),
);
console.log(
  enqueue(priorityQueue, {
    project: 'Project 2',
    assignee: 'Rychlý',
    label: 'feature',
    priority: 2,
  }),
);
console.log(
  enqueue(priorityQueue, {
    project: 'Project 1',
    assignee: 'Novotný',
    label: 'refactoring',
    priority: 3,
  }),
);
console.log(
  enqueue(priorityQueue, {
    project: 'Project 1',
    assignee: 'Nováková',
    label: 'done',
    priority: 3,
  }),
);

//fce  vrácení prvku s nejvyšší prioritou
const dequeue = <T>(arr: PriorityQueue<T>): Task<T> | null => {
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

//úprava fce dequeue
interface Some<T> {
  kind: 'some';
  value: Task<T>;
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
// console.log(dequeue(priorityQueue));
// console.log(dequeue(priorityQueue));

console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
console.log(dequeueWithOption(priorityQueue));
