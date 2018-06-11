// Файл email-validator.test.js
mocha.setup(`tdd`);

const assert = chai.assert;

suite(`Email validator`, () => {
  
 test(`valid emails`, () => {
    assert(isValidEmail(`zeckson@htmlacademy.ru`));
    assert(isValidEmail(`z@htmlacademy.ru`));
    assert(isValidEmail(`русский@почта.рус`));
    assert(isValidEmail(`myverylongemailname@gmail.com`));
    assert(isValidEmail(`a@l.as`));
  });
  
  test(`invalid emails`, () => {
    assert(!isValidEmail(`Вася`));
    assert(!isValidEmail(`@sobaka`));
    assert(!isValidEmail(`sobaka@`));
    assert(!isValidEmail(`sob@ka`));
    assert(!isValidEmail(`sob@ka@`));
    assert(!isValidEmail(`test@.ru`));
    assert(!isValidEmail(`test@`));
    assert(!isValidEmail(`@`));
    assert(!isValidEmail(`@@@@@`));
    assert(!isValidEmail(`@@@.@@`));
    assert(!isValidEmail(`.@@@.@@`));
  });
  
  test(`corner cases`, () => {
    assert(!isValidEmail(``));
    assert(!isValidEmail(null));
    assert(!isValidEmail(undefined));
  });
  
  test(`invalid data`,  () => {
    assert(!isValidEmail(0));
    assert(!isValidEmail(1));
    assert(!isValidEmail(true));
    assert(!isValidEmail({}));
    assert(!isValidEmail([]));
  });
});

mocha.run();
