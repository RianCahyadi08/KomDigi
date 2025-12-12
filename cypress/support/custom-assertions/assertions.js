chai.Assertion.addMethod("statusCode", function (expected) {
  const actual = this._obj.status;
  this.assert(
    actual === expected,
    `Expected status ${actual} to equal ${expected}`,
    `Expected status ${actual} not to equal ${expected}`
  );
});
