/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = "/"; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./src/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
      /*!*****************************************************************************************************!*\
  !*** /home/ashik/tuts-project/devConnector/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }

        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);

              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "next",
                  value
                );
              }

              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  "throw",
                  err
                );
              }

              _next(undefined);
            });
          };
        }

        module.exports = _asyncToGenerator;

        /***/
      },

    /***/ "../../node_modules/@babel/runtime/regenerator/index.js":
      /*!**********************************************************************************************!*\
  !*** /home/ashik/tuts-project/devConnector/node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! regenerator-runtime */ "../../node_modules/regenerator-runtime/runtime.js"
        );

        /***/
      },

    /***/ "../../node_modules/regenerator-runtime/runtime.js":
      /*!*****************************************************************************************!*\
  !*** /home/ashik/tuts-project/devConnector/node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        var runtime = (function (exports) {
          "use strict";

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined; // More compressible than void 0.
          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator =
              outerFn && outerFn.prototype instanceof Generator
                ? outerFn
                : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);

            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            generator._invoke = makeInvokeMethod(innerFn, self, context);

            return generator;
          }
          exports.wrap = wrap;

          // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }

          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed";

          // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.
          var ContinueSentinel = {};

          // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}

          // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.
          var IteratorPrototype = {};
          IteratorPrototype[iteratorSymbol] = function () {
            return this;
          };

          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype =
            getProto && getProto(getProto(values([])));
          if (
            NativeIteratorPrototype &&
            NativeIteratorPrototype !== Op &&
            hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
          ) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(
            IteratorPrototype
          ));
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[
            toStringTagSymbol
          ] = GeneratorFunction.displayName = "GeneratorFunction";

          // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              prototype[method] = function (arg) {
                return this._invoke(method, arg);
              };
            });
          }

          exports.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor
              ? ctor === GeneratorFunction ||
                  // For the native GeneratorFunction constructor, the best we can
                  // do is to check its .name property.
                  (ctor.displayName || ctor.name) === "GeneratorFunction"
              : false;
          };

          exports.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = "GeneratorFunction";
              }
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };

          // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.
          exports.awrap = function (arg) {
            return { __await: arg };
          };

          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;
                if (
                  value &&
                  typeof value === "object" &&
                  hasOwn.call(value, "__await")
                ) {
                  return PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke("next", value, resolve, reject);
                    },
                    function (err) {
                      invoke("throw", err, resolve, reject);
                    }
                  );
                }

                return PromiseImpl.resolve(value).then(
                  function (unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                  },
                  function (error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                  }
                );
              }
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return (previousPromise =
                // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise
                  ? previousPromise.then(
                      callInvokeWithMethodAndArg,
                      // Avoid propagating failures to Promises returned by later
                      // invocations of the iterator.
                      callInvokeWithMethodAndArg
                    )
                  : callInvokeWithMethodAndArg());
            }

            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);
          AsyncIterator.prototype[asyncIteratorSymbol] = function () {
            return this;
          };
          exports.AsyncIterator = AsyncIterator;

          // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.
          exports.async = function (
            innerFn,
            outerFn,
            self,
            tryLocsList,
            PromiseImpl
          ) {
            if (PromiseImpl === void 0) PromiseImpl = Promise;

            var iter = new AsyncIterator(
              wrap(innerFn, outerFn, self, tryLocsList),
              PromiseImpl
            );

            return exports.isGeneratorFunction(outerFn)
              ? iter // If outerFn is a generator, return the full iterator.
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;

            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }

              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                }

                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
              }

              context.method = method;
              context.arg = arg;

              while (true) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }

                if (context.method === "next") {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;
                } else if (context.method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);
                } else if (context.method === "return") {
                  context.abrupt("return", context.arg);
                }

                state = GenStateExecuting;

                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done
                    ? GenStateCompleted
                    : GenStateSuspendedYield;

                  if (record.arg === ContinueSentinel) {
                    continue;
                  }

                  return {
                    value: record.arg,
                    done: context.done,
                  };
                } else if (record.type === "throw") {
                  state = GenStateCompleted;
                  // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.
                  context.method = "throw";
                  context.arg = record.arg;
                }
              }
            };
          }

          // Call delegate.iterator[context.method](context.arg) and handle the
          // result, either by returning a { value, done } result from the
          // delegate iterator, or by modifying context.method and context.arg,
          // setting context.delegate to null, and returning the ContinueSentinel.
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined) {
              // A .throw or .return when the delegate iterator has no .throw
              // method always terminates the yield* loop.
              context.delegate = null;

              if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  context.method = "return";
                  context.arg = undefined;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === "throw") {
                    // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                  }
                }

                context.method = "throw";
                context.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                );
              }

              return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
            }

            if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value;

              // Resume execution at the desired location (see delegateYield).
              context.next = delegate.nextLoc;

              // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.
              if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
              }
            } else {
              // Re-yield the result returned by the delegate method.
              return info;
            }

            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
            context.delegate = null;
            return ContinueSentinel;
          }

          // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.
          defineIteratorMethods(Gp);

          Gp[toStringTagSymbol] = "Generator";

          // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.
          Gp[iteratorSymbol] = function () {
            return this;
          };

          Gp.toString = function () {
            return "[object Generator]";
          };

          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [{ tryLoc: "root" }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          exports.keys = function (object) {
            var keys = [];
            for (var key in object) {
              keys.push(key);
            }
            keys.reverse();

            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
              while (keys.length) {
                var key = keys.pop();
                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              }

              // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.
              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === "function") {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    while (++i < iterable.length) {
                      if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                      }
                    }

                    next.value = undefined;
                    next.done = true;

                    return next;
                  };

                return (next.next = next);
              }
            }

            // Return an iterator with no values.
            return { next: doneResult };
          }
          exports.values = values;

          function doneResult() {
            return { value: undefined, done: true };
          }

          Context.prototype = {
            constructor: Context,

            reset: function (skipTempReset) {
              this.prev = 0;
              this.next = 0;
              // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.
              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;

              this.method = "next";
              this.arg = undefined;

              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (
                    name.charAt(0) === "t" &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1))
                  ) {
                    this[name] = undefined;
                  }
                }
              }
            },

            stop: function () {
              this.done = true;

              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }

              return this.rval;
            },

            dispatchException: function (exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;
              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = "next";
                  context.arg = undefined;
                }

                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === "root") {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle("end");
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },

            abrupt: function (type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, "finallyLoc") &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (
                finallyEntry &&
                (type === "break" || type === "continue") &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc
              ) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },

            complete: function (record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }

              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },

            finish: function (finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },

            catch: function (tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }

              // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.
              throw new Error("illegal catch attempt");
            },

            delegateYield: function (iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc,
              };

              if (this.method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined;
              }

              return ContinueSentinel;
            },
          };

          // Regardless of whether this script is executing as a CommonJS module
          // or not, return the runtime object so that we can declare the variable
          // regeneratorRuntime in the outer scope, which allows this module to be
          // injected easily by `bin/regenerator --include-runtime script.js`.
          return exports;
        })(
          // If this script is executing as a CommonJS module, use module.exports
          // as the regeneratorRuntime namespace. Otherwise create a new empty
          // object. Either way, the resulting object will be used to initialize
          // the regeneratorRuntime variable at the top of this file.
          true ? module.exports : undefined
        );

        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          // This module should not be running in strict mode, so the above
          // assignment should always work unless something is misconfigured. Just
          // in case runtime.js accidentally runs in strict mode, we can escape
          // strict mode using a global Function call. This could conceivably fail
          // if a Content Security Policy forbids using Function, but in that case
          // the proper solution is to fix the accidental strict mode problem. If
          // you've misconfigured your bundler to force strict mode and applied a
          // CSP to forbid Function, and you're not willing to fix either of those
          // problems, please detail your unique predicament in a GitHub issue.
          Function("r", "regeneratorRuntime = r")(runtime);
        }

        /***/
      },

    /***/ "./src/app.js":
      /*!********************!*\
  !*** ./src/app.js ***!
  \********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! express */ "express"
        );
        /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          express__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! cors */ "cors"
        );
        /* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          cors__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _handlers_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./handlers/errorHandler */ "./src/handlers/errorHandler.js"
        );
        /* harmony import */ var _routes_api_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./routes/api/users */ "./src/routes/api/users.js"
        );
        /* harmony import */ var _routes_api_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./routes/api/auth */ "./src/routes/api/auth.js"
        );
        /* harmony import */ var _routes_api_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./routes/api/profile */ "./src/routes/api/profile.js"
        );
        /* harmony import */ var _routes_api_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./routes/api/posts */ "./src/routes/api/posts.js"
        );

        // create express app

        var app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // set up cors to handle request from frontend

        app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());
        app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());
        app.use(
          express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({
            extended: false,
          })
        ); // User Routes

        app.use(
          "/api/users",
          _routes_api_users__WEBPACK_IMPORTED_MODULE_3__["default"]
        ); // auth Routes

        app.use(
          "/api/auth",
          _routes_api_auth__WEBPACK_IMPORTED_MODULE_4__["default"]
        ); // profile Routes

        app.use(
          "/api/profile",
          _routes_api_profile__WEBPACK_IMPORTED_MODULE_5__["default"]
        ); // posts Routes

        app.use(
          "/api/posts",
          _routes_api_posts__WEBPACK_IMPORTED_MODULE_6__["default"]
        ); // If that above routes didnt work, we 404 them and forward to error handler

        app.use(
          _handlers_errorHandler__WEBPACK_IMPORTED_MODULE_2__["notFound"]
        ); // Otherwise this was a really bad error we didn't expect! Shoot eh

        if (app.get("env") === "development") {
          /* Development Error Handler - Prints stack trace */
          app.use(
            _handlers_errorHandler__WEBPACK_IMPORTED_MODULE_2__[
              "developmentErrors"
            ]
          );
        }

        /* harmony default export */ __webpack_exports__["default"] = app;

        /***/
      },

    /***/ "./src/handlers/errorHandler.js":
      /*!**************************************!*\
  !*** ./src/handlers/errorHandler.js ***!
  \**************************************/
      /*! exports provided: catchErrors, notFound, developmentErrors */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "catchErrors",
          function () {
            return catchErrors;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "notFound",
          function () {
            return notFound;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "developmentErrors",
          function () {
            return developmentErrors;
          }
        );
        /*
  Catch Errors Handler
  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch and errors they throw, and pass it along to our express middleware with next()
*/
        var catchErrors = function catchErrors(fn) {
          return function (req, res, next) {
            return fn(req, res, next)["catch"](next);
          };
        };
        /*
    Not Found Error Handler
    If we hit a route that is not found, we mark it as 404 and pass it along to the next error handler to display
  */

        var notFound = function notFound(req, res, next) {
          var err = new Error("Not Found");
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

        var developmentErrors = function developmentErrors(
          err,
          req,
          res,
          next
        ) {
          err.stack = err.stack || "";
          var errorDetails = {
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

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./models/User */ "./src/models/User.js"
        );
        /* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./models/Profile */ "./src/models/Profile.js"
        );
        /* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./models/Post */ "./src/models/Post.js"
        );
        /* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./app */ "./src/app.js"
        );
        // import all of our models

        var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

        var _process$env = process.env,
          API_PORT = _process$env.API_PORT,
          DATABASE = _process$env.DATABASE;
        var mongodbOptions = {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        }; // connect to db

        mongoose.connect(DATABASE, mongodbOptions);
        mongoose.connection.on("error", function (err) {
          console.error("".concat(err.message));
        });
        _app__WEBPACK_IMPORTED_MODULE_3__["default"].set(
          "port",
          API_PORT || 7777
        );
        var server = _app__WEBPACK_IMPORTED_MODULE_3__["default"].listen(
          _app__WEBPACK_IMPORTED_MODULE_3__["default"].get("port"),
          function () {
            console.log(
              "Express running \u2192 PORT ".concat(server.address().port)
            );
          }
        );

        /***/
      },

    /***/ "./src/middleware/auth.js":
      /*!********************************!*\
  !*** ./src/middleware/auth.js ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! jsonwebtoken */ "jsonwebtoken"
        );
        /* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__
        );

        var jwtValidator = function jwtValidator(token) {
          return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(
            token,
            process.env.APP_SECRET
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = function (
          req,
          res,
          next
        ) {
          // Get token from header
          var token = req.header("x-auth-token"); // check if no token

          if (!token) {
            return res.status(401).json({
              msg: "No token, authorization denied",
            });
          } // verify token

          try {
            var decoded = jwtValidator(token);
            req.user = decoded;
            next();
          } catch (err) {
            res.status(401).json({
              msg: "Token is not valid",
            });
          }
        };

        /***/
      },

    /***/ "./src/models/Post.js":
      /*!****************************!*\
  !*** ./src/models/Post.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! mongoose */ "mongoose"
        );
        /* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          mongoose__WEBPACK_IMPORTED_MODULE_0__
        );

        var Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
        var postSchema = new Schema({
          user: {
            type:
              mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types
                .ObjectId,
            ref: "User",
          },
          text: {
            type: String,
            required: true,
          },
          name: {
            type: String,
          },
          avatar: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
          likes: [
            {
              user: {
                type:
                  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types
                    .ObjectId,
                ref: "User",
              },
            },
          ],
          comments: [
            {
              user: {
                type:
                  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types
                    .ObjectId,
                ref: "User",
              },
              text: {
                type: String,
                required: true,
              },
              name: {
                type: String,
              },
              avatar: {
                type: String,
              },
              date: {
                type: Date,
                default: Date.now,
              },
            },
          ],
        });
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(
          "Post",
          postSchema
        );

        /***/
      },

    /***/ "./src/models/Profile.js":
      /*!*******************************!*\
  !*** ./src/models/Profile.js ***!
  \*******************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! mongoose */ "mongoose"
        );
        /* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          mongoose__WEBPACK_IMPORTED_MODULE_0__
        );

        var Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;
        var ProfileSchema = new Schema({
          user: {
            type:
              mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types
                .ObjectId,
            ref: "User",
          },
          company: {
            type: String,
          },
          website: {
            type: String,
          },
          location: {
            type: String,
          },
          status: {
            type: String,
            required: true,
          },
          skills: {
            type: [String],
            required: true,
          },
          bio: {
            type: String,
          },
          githubusername: {
            type: String,
          },
          experience: [
            {
              title: {
                type: String,
                required: true,
              },
              company: {
                type: String,
                required: true,
              },
              location: {
                type: String,
              },
              from: {
                type: Date,
                required: true,
              },
              to: {
                type: Date,
              },
              current: {
                type: Boolean,
                default: false,
              },
              description: {
                type: String,
              },
            },
          ],
          education: [
            {
              school: {
                type: String,
                required: true,
              },
              degree: {
                type: String,
                required: true,
              },
              fieldofstudy: {
                type: String,
                required: true,
              },
              from: {
                type: Date,
                required: true,
              },
              to: {
                type: Date,
              },
              current: {
                type: Boolean,
                default: false,
              },
              description: {
                type: String,
              },
            },
          ],
          social: {
            youtube: {
              type: String,
            },
            twitter: {
              type: String,
            },
            facebook: {
              type: String,
            },
            linkedin: {
              type: String,
            },
            instagram: {
              type: String,
            },
          },
          date: {
            type: Date,
            default: Date.now(),
          },
        });
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model(
          "Profile",
          ProfileSchema
        );

        /***/
      },

    /***/ "./src/models/User.js":
      /*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

        var Schema = mongoose.Schema;
        var UserSchema = new Schema({
          name: {
            type: String,
            required: true,
            trim: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
          },
          password: {
            type: String,
            required: true,
          },
          avatar: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
        });
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = mongoose.model("User", UserSchema);

        /***/
      },

    /***/ "./src/routes/api/auth.js":
      /*!********************************!*\
  !*** ./src/routes/api/auth.js ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js"
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! express */ "express"
        );
        /* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          express__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! mongoose */ "mongoose"
        );
        /* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          mongoose__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! bcryptjs */ "bcryptjs"
        );
        /* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          bcryptjs__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! express-validator */ "express-validator"
        );
        /* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          express_validator__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../middleware/auth */ "./src/middleware/auth.js"
        );
        /* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../utils/utils */ "./src/utils/utils.js"
        );

        var User = mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.model(
          "User"
        );
        var router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router(); // @route  GET api/auth
        // @desc   Get Current User
        // @access Private

        router.get(
          "/",
          _middleware_auth__WEBPACK_IMPORTED_MODULE_6__["default"],
          /*#__PURE__*/ (function () {
            var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee(req, res) {
                  var user;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return User.findOne({
                              _id: req.user.id,
                            }).select("-password");

                          case 3:
                            user = _context.sent;
                            res.json(user);
                            _context.next = 11;
                            break;

                          case 7:
                            _context.prev = 7;
                            _context.t0 = _context["catch"](0);
                            console.error(_context.t0.message);
                            res.status(500).send("Server Error");

                          case 11:
                          case "end":
                            return _context.stop();
                        }
                      }
                    },
                    _callee,
                    null,
                    [[0, 7]]
                  );
                }
              )
            );

            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })()
        ); // @route  POST api/auth
        // @desc   Authenticate user & get token
        // @access Public

        router.post(
          "/",
          [
            Object(express_validator__WEBPACK_IMPORTED_MODULE_5__["check"])(
              "email",
              "Please include a valid email"
            ).isEmail(),
            Object(express_validator__WEBPACK_IMPORTED_MODULE_5__["check"])(
              "password",
              "password is required"
            ).exists(),
          ],
          /*#__PURE__*/ (function () {
            var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee2(req, res) {
                  var errors, _req$body, email, password, user, isMatch;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee2$(_context2) {
                      while (1) {
                        switch ((_context2.prev = _context2.next)) {
                          case 0:
                            errors = Object(
                              express_validator__WEBPACK_IMPORTED_MODULE_5__[
                                "validationResult"
                              ]
                            )(req);

                            if (errors.isEmpty()) {
                              _context2.next = 3;
                              break;
                            }

                            return _context2.abrupt(
                              "return",
                              res.status(400).json({
                                errors: errors.array(),
                              })
                            );

                          case 3:
                            (_req$body = req.body),
                              (email = _req$body.email),
                              (password = _req$body.password);
                            _context2.prev = 4;
                            _context2.next = 7;
                            return User.findOne({
                              email: email,
                            });

                          case 7:
                            user = _context2.sent;

                            if (user) {
                              _context2.next = 10;
                              break;
                            }

                            return _context2.abrupt(
                              "return",
                              res.status(400).json({
                                errors: [
                                  {
                                    msg: "Invalid Credentials",
                                  },
                                ],
                              })
                            );

                          case 10:
                            _context2.next = 12;
                            return bcryptjs__WEBPACK_IMPORTED_MODULE_4___default.a.compare(
                              password,
                              user.password
                            );

                          case 12:
                            isMatch = _context2.sent;

                            if (isMatch) {
                              _context2.next = 15;
                              break;
                            }

                            return _context2.abrupt(
                              "return",
                              res.status(400).json({
                                errors: [
                                  {
                                    msg: "Invalid Credentials",
                                  },
                                ],
                              })
                            );

                          case 15:
                            return _context2.abrupt(
                              "return",
                              res.status(200).json({
                                token: Object(
                                  _utils_utils__WEBPACK_IMPORTED_MODULE_7__[
                                    "signToken"
                                  ]
                                )(user),
                              })
                            );

                          case 18:
                            _context2.prev = 18;
                            _context2.t0 = _context2["catch"](4);
                            console.log(_context2.t0.message);
                            return _context2.abrupt(
                              "return",
                              res.status(500).send("Server Error")
                            );

                          case 22:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    },
                    _callee2,
                    null,
                    [[4, 18]]
                  );
                }
              )
            );

            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })()
        );
        /* harmony default export */ __webpack_exports__["default"] = router;

        /***/
      },

    /***/ "./src/routes/api/posts.js":
      /*!*********************************!*\
  !*** ./src/routes/api/posts.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js"
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! express-validator */ "express-validator"
        );
        /* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          express_validator__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! mongoose */ "mongoose"
        );
        /* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          mongoose__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../middleware/auth */ "./src/middleware/auth.js"
        );

        var User = mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.model(
          "User"
        );
        var Post = mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.model(
          "Post"
        );

        var express = __webpack_require__(/*! express */ "express");

        var router = express.Router(); // @route  POST api/posts
        // @desc   Create a post
        // @access Private

        router.post(
          "/",
          [
            _middleware_auth__WEBPACK_IMPORTED_MODULE_4__["default"],
            [
              Object(express_validator__WEBPACK_IMPORTED_MODULE_2__["check"])(
                "text",
                "Text is required"
              )
                .not()
                .isEmpty(),
            ],
          ],
          /*#__PURE__*/ (function () {
            var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee(req, res) {
                  var errors, text, user, newPost, post;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            errors = Object(
                              express_validator__WEBPACK_IMPORTED_MODULE_2__[
                                "validationResult"
                              ]
                            )(req);

                            if (errors.isEmpty()) {
                              _context.next = 3;
                              break;
                            }

                            return _context.abrupt(
                              "return",
                              res.status(400).json({
                                errors: errors.array(),
                              })
                            );

                          case 3:
                            text = req.body.text;
                            _context.prev = 4;
                            _context.next = 7;
                            return User.findOne({
                              _id: req.user.id,
                            }).select("-password");

                          case 7:
                            user = _context.sent;
                            newPost = {
                              text: text,
                              name: user.name,
                              avatar: user.avatar,
                              user: req.user.id,
                            };
                            _context.next = 11;
                            return new Post(newPost);

                          case 11:
                            post = _context.sent;
                            _context.next = 14;
                            return post.save();

                          case 14:
                            res.json(post);
                            _context.next = 21;
                            break;

                          case 17:
                            _context.prev = 17;
                            _context.t0 = _context["catch"](4);
                            console.error(_context.t0.message);
                            res.status(500).send("Server Error");

                          case 21:
                          case "end":
                            return _context.stop();
                        }
                      }
                    },
                    _callee,
                    null,
                    [[4, 17]]
                  );
                }
              )
            );

            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })()
        ); // @route  GET api/posts
        // @desc   Create all posts
        // @access Private

        router.get(
          "/",
          _middleware_auth__WEBPACK_IMPORTED_MODULE_4__["default"],
          /*#__PURE__*/ (function () {
            var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee2(req, res) {
                  var posts;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee2$(_context2) {
                      while (1) {
                        switch ((_context2.prev = _context2.next)) {
                          case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return Post.find().sort({
                              date: -1,
                            });

                          case 3:
                            posts = _context2.sent;
                            res.json(posts);
                            _context2.next = 11;
                            break;

                          case 7:
                            _context2.prev = 7;
                            _context2.t0 = _context2["catch"](0);
                            console.error(_context2.t0.message);
                            res.status(500).send("Server Error");

                          case 11:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    },
                    _callee2,
                    null,
                    [[0, 7]]
                  );
                }
              )
            );

            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })()
        ); // @route  GET api/posts/:postId
        // @desc   Get Post by id
        // @access Private

        router.get(
          "/:postId",
          _middleware_auth__WEBPACK_IMPORTED_MODULE_4__["default"],
          /*#__PURE__*/ (function () {
            var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee3(req, res) {
                  var postId, post;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee3$(_context3) {
                      while (1) {
                        switch ((_context3.prev = _context3.next)) {
                          case 0:
                            postId = req.params.postId;
                            _context3.prev = 1;
                            _context3.next = 4;
                            return Post.findOne({
                              _id: postId,
                            });

                          case 4:
                            post = _context3.sent;

                            if (post) {
                              _context3.next = 7;
                              break;
                            }

                            return _context3.abrupt(
                              "return",
                              res.status(404).json({
                                msg: "Post not found",
                              })
                            );

                          case 7:
                            res.send(post);
                            _context3.next = 16;
                            break;

                          case 10:
                            _context3.prev = 10;
                            _context3.t0 = _context3["catch"](1);
                            console.error(_context3.t0.message);

                            if (!(_context3.t0.kind === "ObjectId")) {
                              _context3.next = 15;
                              break;
                            }

                            return _context3.abrupt(
                              "return",
                              res.status(404).json({
                                msg: "Post not found",
                              })
                            );

                          case 15:
                            res.status(500).send("Server Error");

                          case 16:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    },
                    _callee3,
                    null,
                    [[1, 10]]
                  );
                }
              )
            );

            return function (_x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          })()
        ); // @route  DELETE api/posts/:postId
        // @desc   Delete a post
        // @access Private

        router["delete"](
          "/:postId",
          _middleware_auth__WEBPACK_IMPORTED_MODULE_4__["default"],
          /*#__PURE__*/ (function () {
            var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee4(req, res) {
                  var post;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee4$(_context4) {
                      while (1) {
                        switch ((_context4.prev = _context4.next)) {
                          case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return Post.findOne({
                              _id: req.params.postId,
                            });

                          case 3:
                            post = _context4.sent;

                            if (post) {
                              _context4.next = 6;
                              break;
                            }

                            return _context4.abrupt(
                              "return",
                              res.status(404).json({
                                msg: "Post not found",
                              })
                            );

                          case 6:
                            if (
                              !(req.user.id.toString() !== post.user.toString())
                            ) {
                              _context4.next = 8;
                              break;
                            }

                            return _context4.abrupt(
                              "return",
                              res.status(401).json({
                                msg: "User not authorized",
                              })
                            );

                          case 8:
                            _context4.next = 10;
                            return post.remove();

                          case 10:
                            res.json({
                              msg: "Post removed",
                            });
                            _context4.next = 19;
                            break;

                          case 13:
                            _context4.prev = 13;
                            _context4.t0 = _context4["catch"](0);
                            console.error(_context4.t0.message);

                            if (!(_context4.t0.kind === "ObjectId")) {
                              _context4.next = 18;
                              break;
                            }

                            return _context4.abrupt(
                              "return",
                              res.status(404).json({
                                msg: "Post not found",
                              })
                            );

                          case 18:
                            res.status(500).send("Server Error");

                          case 19:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    },
                    _callee4,
                    null,
                    [[0, 13]]
                  );
                }
              )
            );

            return function (_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          })()
        ); // @route  DELETE api/posts/like/:postId
        // @desc   Like a post
        // @access Private

        router.put(
          "/like/:postId",
          _middleware_auth__WEBPACK_IMPORTED_MODULE_4__["default"],
          /*#__PURE__*/ (function () {
            var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee5(req, res) {
                  var post;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee5$(_context5) {
                      while (1) {
                        switch ((_context5.prev = _context5.next)) {
                          case 0:
                            _context5.prev = 0;
                            _context5.next = 3;
                            return Post.findOne({
                              _id: req.params.postId,
                            });

                          case 3:
                            post = _context5.sent;

                            if (
                              !(
                                post.likes.filter(function (like) {
                                  return (
                                    like.user.toString() ===
                                    req.user.id.toString()
                                  );
                                }).length > 0
                              )
                            ) {
                              _context5.next = 6;
                              break;
                            }

                            return _context5.abrupt(
                              "return",
                              res.status(400).json({
                                msg: "Post already liked",
                              })
                            );

                          case 6:
                            post.likes.unshift({
                              user: req.user.id,
                            });
                            _context5.next = 9;
                            return post.save();

                          case 9:
                            res.json(post.likes);
                            _context5.next = 16;
                            break;

                          case 12:
                            _context5.prev = 12;
                            _context5.t0 = _context5["catch"](0);
                            console.error(_context5.t0);
                            res.status(500).send("Server Error");

                          case 16:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    },
                    _callee5,
                    null,
                    [[0, 12]]
                  );
                }
              )
            );

            return function (_x9, _x10) {
              return _ref5.apply(this, arguments);
            };
          })()
        ); // @route  PUT api/posts/unlike/:postId
        // @desc   Unlike a post
        // @access Private

        router.put(
          "/unlike/:postId",
          _middleware_auth__WEBPACK_IMPORTED_MODULE_4__["default"],
          /*#__PURE__*/ (function () {
            var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee6(req, res) {
                  var post, removeIndex;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee6$(_context6) {
                      while (1) {
                        switch ((_context6.prev = _context6.next)) {
                          case 0:
                            _context6.prev = 0;
                            _context6.next = 3;
                            return Post.findOne({
                              _id: req.params.postId,
                            });

                          case 3:
                            post = _context6.sent;

                            if (
                              !(
                                post.likes.filter(function (like) {
                                  return (
                                    like.user.toString() ===
                                    req.user.id.toString()
                                  );
                                }).length === 0
                              )
                            ) {
                              _context6.next = 6;
                              break;
                            }

                            return _context6.abrupt(
                              "return",
                              res.status(400).json({
                                msg: "Post has not yet been liked",
                              })
                            );

                          case 6:
                            removeIndex = post.likes
                              .map(function (like) {
                                return like.user.toString();
                              })
                              .indexOf(req.user.id.toString());
                            post.likes.splice(removeIndex, 1);
                            _context6.next = 10;
                            return post.save();

                          case 10:
                            res.json(post.likes);
                            _context6.next = 17;
                            break;

                          case 13:
                            _context6.prev = 13;
                            _context6.t0 = _context6["catch"](0);
                            console.error(_context6.t0);
                            res.status(500).send("Server Error");

                          case 17:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    },
                    _callee6,
                    null,
                    [[0, 13]]
                  );
                }
              )
            );

            return function (_x11, _x12) {
              return _ref6.apply(this, arguments);
            };
          })()
        ); // @route  POST api/posts/comment/:postId
        // @desc   Add a comment on a post
        // @access Private

        router.post(
          "/comment/:postId",
          [
            _middleware_auth__WEBPACK_IMPORTED_MODULE_4__["default"],
            [
              Object(express_validator__WEBPACK_IMPORTED_MODULE_2__["check"])(
                "text",
                "Text is required"
              )
                .not()
                .isEmpty(),
            ],
          ],
          /*#__PURE__*/ (function () {
            var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee7(req, res) {
                  var errors, user, post, newComment;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee7$(_context7) {
                      while (1) {
                        switch ((_context7.prev = _context7.next)) {
                          case 0:
                            errors = Object(
                              express_validator__WEBPACK_IMPORTED_MODULE_2__[
                                "validationResult"
                              ]
                            )(req);

                            if (errors.isEmpty()) {
                              _context7.next = 3;
                              break;
                            }

                            return _context7.abrupt(
                              "return",
                              res.status(400).json({
                                errors: errors.array(),
                              })
                            );

                          case 3:
                            _context7.prev = 3;
                            _context7.next = 6;
                            return User.findOne({
                              _id: req.user.id,
                            }).select("-password");

                          case 6:
                            user = _context7.sent;
                            _context7.next = 9;
                            return Post.findOne({
                              _id: req.params.postId,
                            });

                          case 9:
                            post = _context7.sent;
                            newComment = {
                              text: req.body.text,
                              name: user.name,
                              avatar: user.avatar,
                              user: req.user.id,
                            };
                            post.comments.unshift(newComment);
                            _context7.next = 14;
                            return post.save();

                          case 14:
                            res.json(post.comments);
                            _context7.next = 21;
                            break;

                          case 17:
                            _context7.prev = 17;
                            _context7.t0 = _context7["catch"](3);
                            console.error(_context7.t0.message);
                            res.status(500).send("Server Error");

                          case 21:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    },
                    _callee7,
                    null,
                    [[3, 17]]
                  );
                }
              )
            );

            return function (_x13, _x14) {
              return _ref7.apply(this, arguments);
            };
          })()
        ); // @route  POST api/posts/comment/:postId/:commentId
        // @desc   Delete a comment from a post
        // @access Private

        router["delete"](
          "/comment/:postId/:commentId",
          _middleware_auth__WEBPACK_IMPORTED_MODULE_4__["default"],
          /*#__PURE__*/ (function () {
            var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee8(req, res) {
                  var post, comment, removeIndex;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee8$(_context8) {
                      while (1) {
                        switch ((_context8.prev = _context8.next)) {
                          case 0:
                            _context8.prev = 0;
                            _context8.next = 3;
                            return Post.findOne({
                              _id: req.params.postId,
                            });

                          case 3:
                            post = _context8.sent;
                            // Pull out comment
                            comment = post.comments.find(function (c) {
                              return c.id === req.params.commentId;
                            });

                            if (comment) {
                              _context8.next = 7;
                              break;
                            }

                            return _context8.abrupt(
                              "return",
                              res.status(404).json({
                                msg: "Comment does not exist",
                              })
                            );

                          case 7:
                            if (
                              !(
                                comment.user.toString() !==
                                req.user.id.toString()
                              )
                            ) {
                              _context8.next = 9;
                              break;
                            }

                            return _context8.abrupt(
                              "return",
                              res.status(401).json({
                                msg: "User not authorized",
                              })
                            );

                          case 9:
                            removeIndex = post.comments
                              .map(function (c) {
                                return c.user.toString();
                              })
                              .indexOf(req.user.id.toString());
                            post.comments.splice(removeIndex, 1);
                            _context8.next = 13;
                            return post.save();

                          case 13:
                            res.json(post.comments);
                            _context8.next = 20;
                            break;

                          case 16:
                            _context8.prev = 16;
                            _context8.t0 = _context8["catch"](0);
                            console.error(_context8.t0.message);
                            res.status(500).send("Server Error");

                          case 20:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    },
                    _callee8,
                    null,
                    [[0, 16]]
                  );
                }
              )
            );

            return function (_x15, _x16) {
              return _ref8.apply(this, arguments);
            };
          })()
        );
        /* harmony default export */ __webpack_exports__["default"] = router;

        /***/
      },

    /***/ "./src/routes/api/profile.js":
      /*!***********************************!*\
  !*** ./src/routes/api/profile.js ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js"
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! mongoose */ "mongoose"
        );
        /* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          mongoose__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! express-validator */ "express-validator"
        );
        /* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          express_validator__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! request */ "request"
        );
        /* harmony import */ var request__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          request__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../middleware/auth */ "./src/middleware/auth.js"
        );

        var Profile = mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.model(
          "Profile"
        );
        var User = mongoose__WEBPACK_IMPORTED_MODULE_2___default.a.model(
          "User"
        );

        var express = __webpack_require__(/*! express */ "express");

        var router = express.Router(); // @route  GET api/profile/me
        // @desc   Get Current Users's Profile
        // @access Private

        router.get(
          "/me",
          _middleware_auth__WEBPACK_IMPORTED_MODULE_5__["default"],
          /*#__PURE__*/ (function () {
            var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee(req, res) {
                  var profile;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return Profile.findOne({
                              user: req.user.id,
                            }).populate("user", ["name", "avatar"]);

                          case 3:
                            profile = _context.sent;

                            if (profile) {
                              _context.next = 7;
                              break;
                            }

                            return _context.abrupt(
                              "return",
                              res.status(400).json({
                                msg: "There is no profile for this user",
                              })
                            );

                          case 7:
                            res.json(profile);
                            _context.next = 14;
                            break;

                          case 10:
                            _context.prev = 10;
                            _context.t0 = _context["catch"](0);
                            console.error(_context.t0.message);
                            res.status(500).send("Server Error");

                          case 14:
                          case "end":
                            return _context.stop();
                        }
                      }
                    },
                    _callee,
                    null,
                    [[0, 10]]
                  );
                }
              )
            );

            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })()
        ); // @route  POST api/profile
        // @desc   Create or Update user profile
        // @access Private

        router.post(
          "/",
          [
            _middleware_auth__WEBPACK_IMPORTED_MODULE_5__["default"],
            [
              Object(express_validator__WEBPACK_IMPORTED_MODULE_3__["check"])(
                "status",
                "Status is required"
              )
                .not()
                .isEmpty(),
              Object(express_validator__WEBPACK_IMPORTED_MODULE_3__["check"])(
                "skills",
                "Skills are required"
              )
                .not()
                .isEmpty(),
            ],
          ],
          /*#__PURE__*/ (function () {
            var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee2(req, res) {
                  var errors,
                    _req$body,
                    company,
                    website,
                    location,
                    bio,
                    status,
                    githubusername,
                    skills,
                    youtube,
                    facebook,
                    twitter,
                    instagram,
                    linkedin,
                    profileFields,
                    profile;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee2$(_context2) {
                      while (1) {
                        switch ((_context2.prev = _context2.next)) {
                          case 0:
                            errors = Object(
                              express_validator__WEBPACK_IMPORTED_MODULE_3__[
                                "validationResult"
                              ]
                            )(req);

                            if (errors.isEmpty()) {
                              _context2.next = 3;
                              break;
                            }

                            return _context2.abrupt(
                              "return",
                              res.status(400).json({
                                errors: errors.array(),
                              })
                            );

                          case 3:
                            (_req$body = req.body),
                              (company = _req$body.company),
                              (website = _req$body.website),
                              (location = _req$body.location),
                              (bio = _req$body.bio),
                              (status = _req$body.status),
                              (githubusername = _req$body.githubusername),
                              (skills = _req$body.skills),
                              (youtube = _req$body.youtube),
                              (facebook = _req$body.facebook),
                              (twitter = _req$body.twitter),
                              (instagram = _req$body.instagram),
                              (linkedin = _req$body.linkedin); // build profile objects

                            profileFields = {};
                            profileFields.user = req.user.id;
                            if (company) profileFields.company = company;
                            if (website) profileFields.website = website;
                            if (location) profileFields.location = location;
                            if (bio) profileFields.bio = bio;
                            if (status) profileFields.status = status;
                            if (githubusername)
                              profileFields.githubusername = githubusername;

                            if (skills) {
                              profileFields.skills = skills
                                .split(",")
                                .map(function (skill) {
                                  return skill.trim();
                                });
                            } // build social object

                            profileFields.social = {};
                            if (youtube) profileFields.social.youtube = youtube;
                            if (twitter) profileFields.social.twitter = twitter;
                            if (facebook)
                              profileFields.social.facebook = facebook;
                            if (linkedin)
                              profileFields.social.linkedin = linkedin;
                            if (instagram)
                              profileFields.social.instagram = instagram;
                            _context2.prev = 19;
                            _context2.next = 22;
                            return Profile.findOne({
                              user: req.user.id,
                            });

                          case 22:
                            profile = _context2.sent;

                            if (!profile) {
                              _context2.next = 28;
                              break;
                            }

                            _context2.next = 26;
                            return Profile.findOneAndUpdate(
                              {
                                user: req.user.id,
                              },
                              {
                                $set: profileFields,
                              },
                              {
                                new: true,
                              }
                            );

                          case 26:
                            profile = _context2.sent;
                            return _context2.abrupt(
                              "return",
                              res.json(profile)
                            );

                          case 28:
                            _context2.next = 30;
                            return new Profile(profileFields);

                          case 30:
                            profile = _context2.sent;
                            _context2.next = 33;
                            return profile.save();

                          case 33:
                            return _context2.abrupt(
                              "return",
                              res.json(profile)
                            );

                          case 36:
                            _context2.prev = 36;
                            _context2.t0 = _context2["catch"](19);
                            console.error(_context2.t0.message);
                            res.status(500).send("Server Error");

                          case 40:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    },
                    _callee2,
                    null,
                    [[19, 36]]
                  );
                }
              )
            );

            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          })()
        ); // @route  GET api/profile
        // @desc   Get all users's profile
        // @access Public

        router.get(
          "/",
          /*#__PURE__*/ (function () {
            var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee3(req, res) {
                  var profiles;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee3$(_context3) {
                      while (1) {
                        switch ((_context3.prev = _context3.next)) {
                          case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return Profile.find().populate("user", [
                              "name",
                              "avatar",
                            ]);

                          case 3:
                            profiles = _context3.sent;
                            // const profiles = await Profile.find();
                            res.json(profiles);
                            _context3.next = 11;
                            break;

                          case 7:
                            _context3.prev = 7;
                            _context3.t0 = _context3["catch"](0);
                            console.error(_context3.t0.message);
                            res.status(500).send("Server Error");

                          case 11:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    },
                    _callee3,
                    null,
                    [[0, 7]]
                  );
                }
              )
            );

            return function (_x5, _x6) {
              return _ref3.apply(this, arguments);
            };
          })()
        ); // @route  GET api/profile/user/:userId
        // @desc   Get profile by user id
        // @access Public

        router.get(
          "/user/:userId",
          /*#__PURE__*/ (function () {
            var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee4(req, res) {
                  var userId, profile;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee4$(_context4) {
                      while (1) {
                        switch ((_context4.prev = _context4.next)) {
                          case 0:
                            userId = req.params.userId;
                            _context4.prev = 1;
                            _context4.next = 4;
                            return Profile.findOne({
                              user: userId,
                            }).populate("user", ["name", "avatar"]);

                          case 4:
                            profile = _context4.sent;

                            if (profile) {
                              _context4.next = 7;
                              break;
                            }

                            return _context4.abrupt(
                              "return",
                              res.status(400).json({
                                msg: "There is no profile for this user",
                              })
                            );

                          case 7:
                            res.json(profile);
                            _context4.next = 16;
                            break;

                          case 10:
                            _context4.prev = 10;
                            _context4.t0 = _context4["catch"](1);
                            console.error(_context4.t0.message);

                            if (!(_context4.t0.kind === "ObjectId")) {
                              _context4.next = 15;
                              break;
                            }

                            return _context4.abrupt(
                              "return",
                              res.status(400).json({
                                msg: "Profile not found",
                              })
                            );

                          case 15:
                            res.status(500).send("Server Error");

                          case 16:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    },
                    _callee4,
                    null,
                    [[1, 10]]
                  );
                }
              )
            );

            return function (_x7, _x8) {
              return _ref4.apply(this, arguments);
            };
          })()
        ); // @route  DELETE api/profile
        // @desc   Delete Profile, user and posts
        // @access Private

        router["delete"](
          "/",
          _middleware_auth__WEBPACK_IMPORTED_MODULE_5__["default"],
          /*#__PURE__*/ (function () {
            var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee5(req, res) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee5$(_context5) {
                      while (1) {
                        switch ((_context5.prev = _context5.next)) {
                          case 0:
                            _context5.prev = 0;
                            _context5.next = 3;
                            return Profile.findOneAndRemove({
                              user: req.user.id,
                            });

                          case 3:
                            _context5.next = 5;
                            return User.findOneAndRemove({
                              _id: req.user.id,
                            });

                          case 5:
                            res.json({
                              msg: "User has been Deleted",
                            });
                            _context5.next = 12;
                            break;

                          case 8:
                            _context5.prev = 8;
                            _context5.t0 = _context5["catch"](0);
                            console.error(_context5.t0.message);
                            res.status(500).send("Server Error");

                          case 12:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    },
                    _callee5,
                    null,
                    [[0, 8]]
                  );
                }
              )
            );

            return function (_x9, _x10) {
              return _ref5.apply(this, arguments);
            };
          })()
        ); // @route  PUT api/profile/experience
        // @desc   ADD Profile experience
        // @access Private

        router.put(
          "/experience",
          [
            _middleware_auth__WEBPACK_IMPORTED_MODULE_5__["default"],
            [
              Object(express_validator__WEBPACK_IMPORTED_MODULE_3__["check"])(
                "title",
                "title is required"
              )
                .not()
                .isEmpty(),
              Object(express_validator__WEBPACK_IMPORTED_MODULE_3__["check"])(
                "company",
                "company is required"
              )
                .not()
                .isEmpty(),
              Object(express_validator__WEBPACK_IMPORTED_MODULE_3__["check"])(
                "from",
                "From date is required"
              )
                .not()
                .isEmpty(),
            ],
          ],
          /*#__PURE__*/ (function () {
            var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee6(req, res) {
                  var errors,
                    _req$body2,
                    title,
                    company,
                    from,
                    location,
                    to,
                    current,
                    description,
                    newExp,
                    profile;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee6$(_context6) {
                      while (1) {
                        switch ((_context6.prev = _context6.next)) {
                          case 0:
                            errors = Object(
                              express_validator__WEBPACK_IMPORTED_MODULE_3__[
                                "validationResult"
                              ]
                            )(req);

                            if (errors.isEmpty()) {
                              _context6.next = 3;
                              break;
                            }

                            return _context6.abrupt(
                              "return",
                              res.status(400).json({
                                errors: errors.array(),
                              })
                            );

                          case 3:
                            (_req$body2 = req.body),
                              (title = _req$body2.title),
                              (company = _req$body2.company),
                              (from = _req$body2.from),
                              (location = _req$body2.location),
                              (to = _req$body2.to),
                              (current = _req$body2.current),
                              (description = _req$body2.description);
                            newExp = {
                              title: title,
                              company: company,
                              from: from,
                              location: location,
                              to: to,
                              current: current,
                              description: description,
                            };
                            _context6.prev = 5;
                            _context6.next = 8;
                            return Profile.findOne({
                              user: req.user.id,
                            });

                          case 8:
                            profile = _context6.sent;
                            profile.experience.unshift(newExp);
                            _context6.next = 12;
                            return profile.save();

                          case 12:
                            res.json(profile);
                            _context6.next = 19;
                            break;

                          case 15:
                            _context6.prev = 15;
                            _context6.t0 = _context6["catch"](5);
                            console.error(_context6.t0.message);
                            res.status(500).send("Sever Error");

                          case 19:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    },
                    _callee6,
                    null,
                    [[5, 15]]
                  );
                }
              )
            );

            return function (_x11, _x12) {
              return _ref6.apply(this, arguments);
            };
          })()
        ); // @route  DELETE api/profile/experience/:expId
        // @desc   Delete experience from profile
        // @access Private

        router["delete"](
          "/experience/:expId",
          _middleware_auth__WEBPACK_IMPORTED_MODULE_5__["default"],
          /*#__PURE__*/ (function () {
            var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee7(req, res) {
                  var expId, profile, removeIndex;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee7$(_context7) {
                      while (1) {
                        switch ((_context7.prev = _context7.next)) {
                          case 0:
                            expId = req.params.expId;
                            _context7.prev = 1;
                            _context7.next = 4;
                            return Profile.findOne({
                              user: req.user.id,
                            });

                          case 4:
                            profile = _context7.sent;
                            // get remove index.
                            removeIndex = profile.experience
                              .map(function (exp) {
                                return exp.id;
                              })
                              .indexOf(expId);
                            profile.experience.splice(removeIndex, 1);
                            _context7.next = 9;
                            return profile.save();

                          case 9:
                            res.json(profile);
                            _context7.next = 16;
                            break;

                          case 12:
                            _context7.prev = 12;
                            _context7.t0 = _context7["catch"](1);
                            console.error(_context7.t0);
                            res.json(500).send("Server Error");

                          case 16:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    },
                    _callee7,
                    null,
                    [[1, 12]]
                  );
                }
              )
            );

            return function (_x13, _x14) {
              return _ref7.apply(this, arguments);
            };
          })()
        ); // @route  PUT api/profile/education
        // @desc   ADD Profile education
        // @access Private

        router.put(
          "/education",
          [
            _middleware_auth__WEBPACK_IMPORTED_MODULE_5__["default"],
            [
              Object(express_validator__WEBPACK_IMPORTED_MODULE_3__["check"])(
                "school",
                "school is required"
              )
                .not()
                .isEmpty(),
              Object(express_validator__WEBPACK_IMPORTED_MODULE_3__["check"])(
                "degree",
                " is required"
              )
                .not()
                .isEmpty(),
              Object(express_validator__WEBPACK_IMPORTED_MODULE_3__["check"])(
                "fieldofstudy",
                "Field of study is required"
              )
                .not()
                .isEmpty(),
              Object(express_validator__WEBPACK_IMPORTED_MODULE_3__["check"])(
                "from",
                "From date is required"
              )
                .not()
                .isEmpty(),
            ],
          ],
          /*#__PURE__*/ (function () {
            var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee8(req, res) {
                  var errors,
                    _req$body3,
                    school,
                    degree,
                    fieldofstudy,
                    from,
                    to,
                    current,
                    description,
                    newEdu,
                    profile;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee8$(_context8) {
                      while (1) {
                        switch ((_context8.prev = _context8.next)) {
                          case 0:
                            errors = Object(
                              express_validator__WEBPACK_IMPORTED_MODULE_3__[
                                "validationResult"
                              ]
                            )(req);

                            if (errors.isEmpty()) {
                              _context8.next = 3;
                              break;
                            }

                            return _context8.abrupt(
                              "return",
                              res.status(400).json({
                                errors: errors.array(),
                              })
                            );

                          case 3:
                            (_req$body3 = req.body),
                              (school = _req$body3.school),
                              (degree = _req$body3.degree),
                              (fieldofstudy = _req$body3.fieldofstudy),
                              (from = _req$body3.from),
                              (to = _req$body3.to),
                              (current = _req$body3.current),
                              (description = _req$body3.description);
                            newEdu = {
                              school: school,
                              degree: degree,
                              from: from,
                              fieldofstudy: fieldofstudy,
                              to: to,
                              current: current,
                              description: description,
                            };
                            _context8.prev = 5;
                            _context8.next = 8;
                            return Profile.findOne({
                              user: req.user.id,
                            });

                          case 8:
                            profile = _context8.sent;
                            profile.education.unshift(newEdu);
                            _context8.next = 12;
                            return profile.save();

                          case 12:
                            res.json(profile);
                            _context8.next = 19;
                            break;

                          case 15:
                            _context8.prev = 15;
                            _context8.t0 = _context8["catch"](5);
                            console.error(_context8.t0.message);
                            res.status(500).send("Sever Error");

                          case 19:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    },
                    _callee8,
                    null,
                    [[5, 15]]
                  );
                }
              )
            );

            return function (_x15, _x16) {
              return _ref8.apply(this, arguments);
            };
          })()
        ); // @route  DELETE api/profile/education/:eduId
        // @desc   Delete education from profile
        // @access Private

        router["delete"](
          "/education/:eduId",
          _middleware_auth__WEBPACK_IMPORTED_MODULE_5__["default"],
          /*#__PURE__*/ (function () {
            var _ref9 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee9(req, res) {
                  var eduId, profile, removeIndex;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee9$(_context9) {
                      while (1) {
                        switch ((_context9.prev = _context9.next)) {
                          case 0:
                            eduId = req.params.eduId;
                            _context9.prev = 1;
                            _context9.next = 4;
                            return Profile.findOne({
                              user: req.user.id,
                            });

                          case 4:
                            profile = _context9.sent;
                            // get remove index.
                            removeIndex = profile.education
                              .map(function (edu) {
                                return edu.id;
                              })
                              .indexOf(eduId);
                            profile.education.splice(removeIndex, 1);
                            _context9.next = 9;
                            return profile.save();

                          case 9:
                            res.json(profile);
                            _context9.next = 16;
                            break;

                          case 12:
                            _context9.prev = 12;
                            _context9.t0 = _context9["catch"](1);
                            console.error(_context9.t0);
                            res.json(500).send("Server Error");

                          case 16:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    },
                    _callee9,
                    null,
                    [[1, 12]]
                  );
                }
              )
            );

            return function (_x17, _x18) {
              return _ref9.apply(this, arguments);
            };
          })()
        ); // @route  GET api/profile/github/:username
        // @desc   Get user repos from github
        // @access Public

        router.get(
          "/github/:username",
          /*#__PURE__*/ (function () {
            var _ref10 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee10(req, res) {
                  var options;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee10$(_context10) {
                      while (1) {
                        switch ((_context10.prev = _context10.next)) {
                          case 0:
                            try {
                              options = {
                                uri: "https://api.github.com/users/"
                                  .concat(
                                    req.params.username,
                                    "/repos?per_page=5&sort=created:asc&client_id="
                                  )
                                  .concat(
                                    process.env.GITHUB_CLIENT_ID,
                                    "&client_secret="
                                  )
                                  .concat(process.env.GITHUB_SECRET),
                                methods: "GET",
                                headers: {
                                  "user-agent": "node-js",
                                },
                              };
                              request__WEBPACK_IMPORTED_MODULE_4___default()(
                                options,
                                function (error, response, body) {
                                  if (error) console.error(error);

                                  if (response.statusCode !== 200) {
                                    return res.status(404).json({
                                      msg: "No Github profile found",
                                    });
                                  }

                                  res.json(JSON.parse(body));
                                }
                              );
                            } catch (error) {
                              console.error(error.message);
                              res.status(500).send("Server Error");
                            }

                          case 1:
                          case "end":
                            return _context10.stop();
                        }
                      }
                    },
                    _callee10
                  );
                }
              )
            );

            return function (_x19, _x20) {
              return _ref10.apply(this, arguments);
            };
          })()
        );
        /* harmony default export */ __webpack_exports__["default"] = router;

        /***/
      },

    /***/ "./src/routes/api/users.js":
      /*!*********************************!*\
  !*** ./src/routes/api/users.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js"
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! express-validator */ "express-validator"
        );
        /* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          express_validator__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! mongoose */ "mongoose"
        );
        /* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          mongoose__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! gravatar */ "gravatar"
        );
        /* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          gravatar__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! bcryptjs */ "bcryptjs"
        );
        /* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          bcryptjs__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../utils/utils */ "./src/utils/utils.js"
        );

        var User = mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.model(
          "User"
        );

        var express = __webpack_require__(/*! express */ "express");

        var router = express.Router(); // @route  POST api/users
        // @desc   Register User
        // @access Public

        router.post(
          "/",
          [
            Object(express_validator__WEBPACK_IMPORTED_MODULE_2__["check"])(
              "name",
              "Name is required"
            )
              .not()
              .isEmpty(),
            Object(express_validator__WEBPACK_IMPORTED_MODULE_2__["check"])(
              "email",
              "Please include a valid email"
            ).isEmail(),
            Object(express_validator__WEBPACK_IMPORTED_MODULE_2__["check"])(
              "password",
              "please enter a password with 6 or more characters"
            ).isLength({
              min: 6,
            }),
          ],
          /*#__PURE__*/ (function () {
            var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                function _callee(req, res) {
                  var errors,
                    _req$body,
                    name,
                    email,
                    password,
                    user,
                    avatar,
                    salt,
                    hashedPassword,
                    newUser;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                    function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            errors = Object(
                              express_validator__WEBPACK_IMPORTED_MODULE_2__[
                                "validationResult"
                              ]
                            )(req);

                            if (errors.isEmpty()) {
                              _context.next = 3;
                              break;
                            }

                            return _context.abrupt(
                              "return",
                              res.status(400).json({
                                errors: errors.array(),
                              })
                            );

                          case 3:
                            (_req$body = req.body),
                              (name = _req$body.name),
                              (email = _req$body.email),
                              (password = _req$body.password);
                            _context.prev = 4;
                            _context.next = 7;
                            return User.findOne({
                              email: email,
                            });

                          case 7:
                            user = _context.sent;

                            if (!user) {
                              _context.next = 10;
                              break;
                            }

                            return _context.abrupt(
                              "return",
                              res.status(400).json({
                                errors: [
                                  {
                                    msg: "User already exists",
                                  },
                                ],
                              })
                            );

                          case 10:
                            // get users gravatar
                            avatar = gravatar__WEBPACK_IMPORTED_MODULE_4___default.a.url(
                              email,
                              {
                                s: "200",
                                r: "pg",
                                d: "mm",
                              }
                            ); // encrypt password

                            _context.next = 13;
                            return bcryptjs__WEBPACK_IMPORTED_MODULE_5___default.a.genSalt(
                              10
                            );

                          case 13:
                            salt = _context.sent;
                            _context.next = 16;
                            return bcryptjs__WEBPACK_IMPORTED_MODULE_5___default.a.hash(
                              password,
                              salt
                            );

                          case 16:
                            hashedPassword = _context.sent;
                            _context.next = 19;
                            return new User({
                              name: name,
                              email: email,
                              avatar: avatar,
                              password: hashedPassword,
                            });

                          case 19:
                            newUser = _context.sent;
                            _context.next = 22;
                            return newUser.save();

                          case 22:
                            return _context.abrupt(
                              "return",
                              res.status(200).json({
                                token: Object(
                                  _utils_utils__WEBPACK_IMPORTED_MODULE_6__[
                                    "signToken"
                                  ]
                                )(newUser),
                              })
                            );

                          case 25:
                            _context.prev = 25;
                            _context.t0 = _context["catch"](4);
                            console.log(_context.t0.message);
                            return _context.abrupt(
                              "return",
                              res.status(500).send("Server Error")
                            );

                          case 29:
                          case "end":
                            return _context.stop();
                        }
                      }
                    },
                    _callee,
                    null,
                    [[4, 25]]
                  );
                }
              )
            );

            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          })()
        );
        /* harmony default export */ __webpack_exports__["default"] = router;

        /***/
      },

    /***/ "./src/utils/utils.js":
      /*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
      /*! exports provided: signToken, createHash */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "signToken",
          function () {
            return signToken;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "createHash",
          function () {
            return createHash;
          }
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js"
        );
        /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"
        );
        /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! jsonwebtoken */ "jsonwebtoken"
        );
        /* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! crypto */ "crypto"
        );
        /* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          crypto__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! util */ "util"
        );
        /* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          util__WEBPACK_IMPORTED_MODULE_4__
        );

        var signToken = function signToken(_ref) {
          var id = _ref.id,
            name = _ref.name,
            email = _ref.email;
          return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.sign(
            {
              id: id,
              name: name,
              email: email,
            },
            process.env.APP_SECRET,
            {
              expiresIn: "1 day",
            }
          );
        };

        var createHash = /*#__PURE__*/ (function () {
          var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
            /*#__PURE__*/ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
              function _callee() {
                var randomBytesPromise, hash;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          randomBytesPromise = Object(
                            util__WEBPACK_IMPORTED_MODULE_4__["promisify"]
                          )(crypto__WEBPACK_IMPORTED_MODULE_3__["randomBytes"]);
                          _context.next = 3;
                          return randomBytesPromise(20);

                        case 3:
                          hash = _context.sent.toString("hex");
                          return _context.abrupt("return", hash);

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  },
                  _callee
                );
              }
            )
          );

          return function createHash() {
            return _ref2.apply(this, arguments);
          };
        })();

        /***/
      },

    /***/ bcryptjs:
      /*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("bcryptjs");

        /***/
      },

    /***/ cors:
      /*!***********************!*\
  !*** external "cors" ***!
  \***********************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("cors");

        /***/
      },

    /***/ crypto:
      /*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("crypto");

        /***/
      },

    /***/ express:
      /*!**************************!*\
  !*** external "express" ***!
  \**************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("express");

        /***/
      },

    /***/ "express-validator":
      /*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("express-validator");

        /***/
      },

    /***/ gravatar:
      /*!***************************!*\
  !*** external "gravatar" ***!
  \***************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("gravatar");

        /***/
      },

    /***/ jsonwebtoken:
      /*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("jsonwebtoken");

        /***/
      },

    /***/ mongoose:
      /*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("mongoose");

        /***/
      },

    /***/ request:
      /*!**************************!*\
  !*** external "request" ***!
  \**************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("request");

        /***/
      },

    /***/ util:
      /*!***********************!*\
  !*** external "util" ***!
  \***********************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("util");

        /***/
      },

    /******/
  }
);
