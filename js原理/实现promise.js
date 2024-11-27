class MyPromise {
  static REJECTED = "rejected";
  static PENDING = "pending";
  static FULFILLED = "fulfilled";

  value = undefined;
  status = MyPromise.PENDING;
  onFulfilledCallBacks = [];
  onRejectedCallBacks = [];

  constructor(execute) {
    const resolve = (value) => {
      if (this.status === MyPromise.PENDING) {
        this.value = value;
        this.status = MyPromise.FULFILLED;
        this.onFulfilledCallBacks.forEach((func) => func(value));
      }
    };

    const reject = (value) => {
      if (this.status === MyPromise.PENDING) {
        this.value = value;
        this.status = MyPromise.REJECTED;
        this.onRejectedCallBacks.forEach((func) => func(value));
      }
    };

    try {
      execute(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  // ...（后续实现）
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function"
        ? onFulfilled
        : (onFulfilled) => onFulfilled;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (onRejected) => onRejected;

    return new MyPromise((resolve, reject) => {
      // 处理已完成状态
      if (this.status === MyPromise.FULFILLED) {
        try {
          queueMicrotask(() => {
            const result = onFulfilled(this.value);
            this.handlePromiseResult(result, resolve, reject);
          });
        } catch (error) {
          reject(error);
        }
      }
      // 处理已拒绝状态
      else if (this.status === MyPromise.REJECTED) {
        try {
          queueMicrotask(() => {
            const result = onRejected(this.value);
            this.handlePromiseResult(result, resolve, reject);
          });
        } catch (error) {
          reject(error);
        }
      }
      // 处理异步状态
      else {
        this.onFulfilledCallBacks.push((value) => {
          queueMicrotask(() => {
            const result = onFulfilled(value);
            this.handlePromiseResult(result, resolve, reject);
          });
        });
        this.onRejectedCallBacks.push((value) => {
          queueMicrotask(() => {
            const result = onRejected(value);
            this.handlePromiseResult(result, resolve, reject);
          });
        });
      }
    });
  }

  handlePromiseResult(result, resolve, reject) {
    if (result instanceof MyPromise) {
      result.then(resolve, reject);
    } else {
      resolve(result);
    }
  }
  static resolve = (value) => {
    return new MyPromise((resolve, reject) => {
      resolve(value);
    });
  };

  static reject = (value) => {
    return new MyPromise((resolve, reject) => {
      reject(value);
    });
  };
  static all = (promises) => {
    if (!this._hasIterator(promises)) {
      throw new Error("参数不可迭代");
    }

    return new MyPromise((resolve, reject) => {
      const resultArr = [];
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            if (resultArr.length === promises.length) {
              resolve(resultArr);
            }
            resultArr.push(res);
          },
          (err) => {
            reject(err);
          },
        );
      });
    });
  };
  static allSettled = (promises) => {
    if (!this._hasIterator(promises)) {
      throw new Error("参数不可迭代");
    }

    return new MyPromise((resolve) => {
      const resultArr = [];
      promises.forEach((promise, index) => {
        promise.then(
          (res) => {
            resultArr.push({ status: "fulfilled", value: res });
            if (resultArr.length === promises.length) {
              resolve(resultArr);
            }
          },
          (res) => {
            resultArr.push({ status: "rejected", reason: res });
            if (resultArr.length === promises.length) {
              resolve(resultArr);
            }
          },
        );
      });
    });
  };
  static race = (promises) => {
    if (!this._hasIterator(promises)) {
      throw new Error("参数不可迭代");
    }

    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            resolve(res);
          },
          (res) => {
            reject(res);
          },
        );
      });
    });
  };
  static any = (promises) => {
    if (!this._hasIterator(promises)) {
      throw new Error("参数不可迭代");
    }

    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then((res) => {
          resolve(res);
        });
      });
    });
  };
}
