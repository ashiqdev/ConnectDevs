/*
  Catch Errors Handler
  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch and errors they throw, and pass it along to our express middleware with next()
*/

export const catchErrors = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

/*
    Not Found Error Handler
    If we hit a route that is not found, we mark it as 404 and pass it along to the next error handler to display
  */
export const notFound = (req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
};

/*
    MongoDB Validation Error Handler
    Detect if there are mongodb validation errors that we can nicely show via flash messages
  */

/*
    Development Error Hanlder
    In development we show good error messages so if we hit a syntax error or any other previously un-handled error, we can show good info on what happened
  */
export const developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || "";
  const errorDetails = {
    message: err.message,
    status: err.status,
    stackHighlighted: err.stack.replace(
      /[a-z_-\d]+.js:\d+:\d+/gi,
      "<mark>$&</mark>"
    ),
  };
  res.status(err.status || 500);
  res.json(errorDetails);
};
