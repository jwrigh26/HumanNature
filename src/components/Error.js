class CustomError extends Error {
  constructor(foo = 'bar', ...params) {
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = 'Unimath Error';
    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

export default CustomError;


/**
 * Example of how to use
 *
  try {
    throw new CustomError('baz', 'bazMessage')
  } catch(e) {
    console.error(e.name)    //CustomError
    console.error(e.foo)     //baz
    console.error(e.message) //bazMessage
    console.error(e.stack)   //stacktrace
  }
 */