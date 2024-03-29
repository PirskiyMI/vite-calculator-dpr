import { createSelector } from '@reduxjs/toolkit';

const attackParamsSelector = (state: RootState) => state.attackParamsReducer;

export const getAttackParamsSelector = createSelector(
   [attackParamsSelector, (_attackParamsSelector, id: string) => id],
   (paramList, id) => {
      return paramList[id];
   },
);
