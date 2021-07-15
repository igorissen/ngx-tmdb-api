import { getDetails } from './details.request';
import { checkItemStatus } from './item-status.request';
import { addMovie, removeMovie } from './movie.request';
import { createList, clearList, deleteList } from './list.request';

export const Lists = {
  getDetails,
  checkItemStatus,
  addMovie,
  removeMovie,
  createList,
  clearList,
  deleteList
};
