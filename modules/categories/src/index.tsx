
export { default } from './view';

export { name, reducer } from './store/slice';

export { resetStateAction } from './store/slice';
export { selectData, selectInProcess, selectInUploadProcess } from './store/slice';
export { getCategory, getCategories, createCategory, updateCategory } from './store/commands';