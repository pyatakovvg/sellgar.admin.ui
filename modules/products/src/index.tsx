
export { default } from './view';

export { name, reducer } from './store/slice';
export { resetStateAction } from './store/slice';

export {
  getGroups,
  getBrands,
  getCategories,

  createProduct,
  getProducts,
  updateProduct,
} from './store/commands';

export {
  selectGroups,
  selectBrands,
  selectCategories,
  selectData,
  selectMeta,
  selectInProcess,
  selectInUploadProcess,
} from './store/slice';