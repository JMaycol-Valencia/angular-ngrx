import {createAction, props} from "@ngrx/store";
import {ItemModel} from "@core/models/Item.interface";

export const loadItems = createAction(
  '[Items List] Load Items'
);

export const loadItemsSuccess = createAction(
  '[Items List] Load Items Success',
  props<{ items: ItemModel[] }>()
);
