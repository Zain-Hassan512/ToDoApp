interface Task {
  id: number;
  title: string;
  note: string;
  priority: Priority;
}

export default Task;

export type Priority = 'high' | 'medium' | 'low';
