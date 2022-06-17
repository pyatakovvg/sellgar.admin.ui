
export { default } from './view';

export { name, reducer } from './store/slice';

export { resetStateAction } from './store/slice';
export { selectData, selectUnits, selectCategories, selectInProcess, selectInUploadProcess } from './store/slice';
export { getUnits, getCategories, getAttribute, getAttributes, createAttribute, updateAttribute } from './store/commands';