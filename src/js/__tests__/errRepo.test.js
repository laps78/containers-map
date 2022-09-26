import ErrorRepository from '../app';

const errorRepository = new ErrorRepository();

test('errRepo should add new err with set() method', () => {
  errorRepository.set('0', 'test err number 0');
  expect(errorRepository.errMap.has('0')).toBe(true);
});

test('errRepo should translate existing err code', () => {
  expect(errorRepository.translate('0')).toBe('test err number 0');
});

test('errRepo should return an "unknown error" string if err not found', () => {
  expect(errorRepository.translate('1')).toBe('Unknown error');
});
