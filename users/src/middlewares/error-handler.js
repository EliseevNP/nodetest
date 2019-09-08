module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(`[SERVER] ${err}`);
    ctx.status = 500;
  }
};