interface Task {
  id: number;
  title: string;
  note: string;
  priority: 'high' | 'medium' | 'low';
}

export default Task;
