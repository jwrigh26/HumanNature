import {
  isEmpty,
  isFunction,
  isNil,
  isNumeric,
  isObject,
  isString,
  hasValue,
  sortBy,
} from './utils';

describe('isEmpty', () => {
  it('should check if value is en empty object or collection', () => {
    // Note: does not support evaluating Set or a Map
    expect(isEmpty(undefined)).toEqual(true);
    expect(isEmpty(null)).toEqual(true);
    expect(isEmpty('')).toEqual(true);
    expect(isEmpty({})).toEqual(true);
    expect(isEmpty([])).toEqual(true);
    expect(isEmpty({ duck: 'Scrooge' })).toEqual(false);
  });
});

describe('isFunction', () => {
  it('should check if something is a function', () => {
    // Standard basic object
    expect(isFunction(() => {})).toEqual(true);
    expect(isFunction(function () {})).toEqual(true);
  });

  it('should check if something is not a function', () => {
    // Standard basic object
    expect(isFunction('Scrooge')).toEqual(false);
    expect(isFunction('')).toEqual(false);
    expect(isFunction(0)).toEqual(false);
    expect(isFunction(1234)).toEqual(false);
    expect(isFunction({})).toEqual(false);
  });

  it('should check against null and undefined', () => {
    expect(isFunction(null)).toEqual(false);
    expect(isFunction(undefined)).toEqual(false);
  });
});

describe('isNil', () => {
  it('should check if value is null or undefined', () => {
    expect(isNil(null)).toEqual(true);
    expect(isNil(NaN)).toEqual(false);
    expect(isNil(undefined)).toEqual(true);
    expect(isNil(0)).toEqual(false);
    expect(isNil(1)).toEqual(false);
    expect(isNil('Cat')).toEqual(false);
    expect(isNil({})).toEqual(false);
  });
});

describe('isNumeric', () => {
  it('should check if something is a number or instance of Number', () => {
    // Standard basic object
    expect(isNumeric(0)).toEqual(true);
    expect(isNumeric(1)).toEqual(true);
    expect(isNumeric(1.1)).toEqual(true);
    expect(isNumeric('2 ')).toEqual(true);
    expect(isNumeric('-64.1')).toEqual(true);
    expect(isNumeric(-64.1)).toEqual(true);
    expect(isNumeric(Number(0))).toEqual(true);
    expect(isNumeric(Number(1))).toEqual(true);
    expect(isNumeric(Number(1.1))).toEqual(true);
  });

  it('should check if something is not a number or instance of Number', () => {
    // Standard basic object
    expect(isNumeric('Scrooge')).toEqual(false);
    expect(isNumeric('')).toEqual(false);
    expect(isNumeric({})).toEqual(false);
    expect(isNumeric([])).toEqual(false);
  });

  it('should check against null and undefined', () => {
    expect(isNumeric(null)).toEqual(false);
    expect(isNumeric(undefined)).toEqual(false);
  });
});

describe('isObject', () => {
  it('should be able check if something is an object', () => {
    // Standard basic object
    expect(isObject({ duck: 'Scrooge' })).toEqual(true);
  });

  it('should be able check if an empty object is still an object', () => {
    expect(isObject({})).toEqual(true);
  });

  it('should be able to check if something is not an object', () => {
    expect(isObject('Scrooge')).toEqual(false);
    expect(isObject('')).toEqual(false);
    expect(isObject(123)).toEqual(false);
    expect(isObject(0)).toEqual(false);
    expect(isObject(['Scrooge'])).toEqual(false);
    expect(isObject([])).toEqual(false);
  });

  it('should be able to check against null and undefined', () => {
    expect(isObject(null)).toEqual(false);
    expect(isObject(undefined)).toEqual(false);
  });
});

describe('isString', () => {
  it('should check if something is a string or instance of String', () => {
    expect(isString('Scrooge')).toEqual(true);
    expect(isString('')).toEqual(true);
  });

  it(
    'should be able to check if ' +
      'something is not a string or instance of String',
    () => {
      expect(isString(123)).toEqual(false);
      expect(isString(0)).toEqual(false);
      expect(isString(['Scrooge'])).toEqual(false);
      expect(isString([])).toEqual(false);
      expect(isString({ duck: 'Scrooge' })).toEqual(false);
      expect(isString({})).toEqual(false);
    }
  );

  it('should be able to check against null and undefined', () => {
    expect(isString(null)).toEqual(false);
    expect(isString(undefined)).toEqual(false);
  });
});

describe('hasValue', () => {
  it('should check if is undefined or null', () => {
    expect(hasValue(undefined)).toEqual(false);
    expect(hasValue(null)).toEqual(false);
  });

  it('should check if something is a function', () => {
    expect(hasValue(() => {})).toEqual(false);
  });
});

describe('hasValue for Array', () => {
  it('should check if it is an Array that has a value', () => {
    expect(hasValue(['Scrooge'])).toEqual(true);
  });

  it('Should check if it is an Array that has no value', () => {
    expect(hasValue([])).toEqual(false);
  });
});

describe('hasValue for Object', () => {
  it('should check if it is a Object that has a value', () => {
    expect(hasValue({ duck: 'Scrooge' })).toEqual(true);
  });

  it('should check if it is a Object that has no value', () => {
    expect(hasValue({})).toEqual(false);
  });
});

describe('hasValue for String', () => {
  it('should check if it is a String that has a value', () => {
    expect(hasValue('scrooge')).toEqual(true);
    expect(hasValue(String('Scrooge is the richest duck!'))).toEqual(true);
  });

  it('should check if it is a String that has no value', () => {
    expect(hasValue('')).toEqual(false);
    expect(hasValue(String(''))).toEqual(false);
  });
});

describe('hasValue for Number', () => {
  it('should check if it is a String that has a value', () => {
    expect(hasValue(0)).toEqual(true);
    expect(hasValue(-1)).toEqual(true);
    expect(hasValue(1234.1234)).toEqual(true);
    expect(hasValue(Number(0))).toEqual(true);
    expect(hasValue(Number(-1))).toEqual(true);
    expect(hasValue(Number(1234.1234))).toEqual(true);
  });
});

describe('sortBy', () => {
  const names = [
    {
      name: 'Frank',
    },
    {
      name: 'Bryce',
    },
    {
      name: 'Alice',
    },
    {
      name: 'Zoey',
    },
  ];

  it('sorts by ascending', () => {
    expect(names.sort(sortBy((x) => x.name))).toEqual([
      {
        name: 'Alice',
      },
      {
        name: 'Bryce',
      },
      {
        name: 'Frank',
      },
      {
        name: 'Zoey',
      },
    ]);
  });

  it('sorts by descending', () => {
    expect(names.sort(sortBy((x) => x.name, false))).toEqual([
      {
        name: 'Zoey',
      },
      {
        name: 'Frank',
      },
      {
        name: 'Bryce',
      },
      {
        name: 'Alice',
      },
    ]);
  });

  it('sorts by ascending with accessor as string', () => {
    expect(names.sort(sortBy('name'))).toEqual([
      {
        name: 'Alice',
      },
      {
        name: 'Bryce',
      },
      {
        name: 'Frank',
      },
      {
        name: 'Zoey',
      },
    ]);
  });
});
