
export { default } from './view';

export { name, reducer } from './store/slice';


export { resetStateAction } from './store/slice';

export {
  getGallery,
  getGroups,
  getCategories,
  getBrands,
  getProduct,
  getCurrencies,
  getAttributes,
  updateProduct,
} from './store/commands';

export {
  selectData,
  selectGallery,
  selectGroups,
  selectCategories,
  selectCurrencies,
  selectAttributes,
  selectBrands,
  selectInProcess,
  selectInUploadProcess
} from './store/slice';