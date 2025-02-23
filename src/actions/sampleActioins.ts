'use server';

interface FormState {
  error: string;
}

export const createTask = async (taskId: number, state: FormState, formData: FormData) => {
  // DBにTaskを作成
  console.log(formData);
  console.log(taskId);
  state.error = 'エラーが発生しました';
  return state;
}