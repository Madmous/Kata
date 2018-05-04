/** @flow */

import findMines from './main';

describe('Find mines', () => {
  xit('should not find any mine when the field has no mines', () => {
    //given
    const field = '*... .... .*......';

    //when
    const mines = findMines(filed);

    //then
    expect(mines).toEqual('*100 2210 1*10 1110');
  });
});
