interface Task {
  id: number;
  title: string;
  note: string;
  priority: Priority;
  completed: boolean;
}

export default Task;

export type Priority = 'high' | 'medium' | 'low';
