import Task from '../types/taskType';

enum ScreenNames {
  MAIN = 'MainScreen',
  ADD = 'AddTaskScreen',
}
export default ScreenNames;

export type RootParamsList = {
  [ScreenNames.MAIN]: undefined;
  [ScreenNames.ADD]: {
    task?: Task;
  };
};
