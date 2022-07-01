
export { default } from './view';

export { name, reducer } from './store/slice';

export { resetStateAction } from './store/slice';
export { selectData, selectGroups, selectInProcess, selectInUploadProcess } from './store/slice';
export { getGroups, getCategory, getCategories, createCategory, updateCategory } from './store/commands';