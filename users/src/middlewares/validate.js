const validate = require('validate.js');

module.exports = (ctx, next) => {
  try {

    let bodyValidationResult = validate(ctx.request.body, ctx.bodyConstraints, { fullMessages: false });
    let paramsValidationResult = validate(ctx.params, ctx.paramsConstraints, { fullMessages: false });
    let queryValidationResult = validate(ctx.query, ctx.queryConstraints, { fullMessages: false });

    let validationObjects = [];
    if (bodyValidationResult) validationObjects = validationObjects.concat(bodyValidationResult);
    if (paramsValidationResult) validationObjects = validationObjects.concat(paramsValidationResult);
    if (queryValidationResult) validationObjects = validationObjects.concat(queryValidationResult);

    let validationResult = {};
    validationObjects.forEach((validationObject) => {
      Object.assign(validationResult, validationObject);
    });

    if (validationObjects.length !== 0) {
      ctx.status = 400;
      ctx.body = { errors: validationResult };
    } else {
      return next();
    }
  } catch (err) {
    console.log(`[VALIDATE_MIDDLEWARE] ${err}`);
    ctx.status = 500;
  }
};