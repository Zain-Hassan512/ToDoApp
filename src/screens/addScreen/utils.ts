import * as yup from 'yup';

export const TaskFormValidation = yup.object().shape({
  title: yup.string().required('Title is required.'),
  note: yup.string().required('Note is  required'),
});
