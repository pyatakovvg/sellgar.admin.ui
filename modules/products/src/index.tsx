
export { default } from './view';

export { name, reducer } from './store/slice';

export { resetStateAction } from './store/slice';
export { createProduct, getProducts, updateProduct } from './store/commands';
export { selectData, selectMeta, selectInProcess, selectInUploadProcess } from './store/slice';