import log from './logger';

const ardacRouter = async (req, res, next) => {
  const {
    type, filter, sort, fields, accessibility,
  } = req.body;

  log.info('[ardac] ', JSON.stringify(req.body, null, 4));

  // TODO: Caution! No auth, see download.js for tiered auth example

  try {
    const data = JSON.stringify({ message: 'Hello, world!', x: 5, y: 6 });

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.send(data);
  } catch (err) {
    log.error(err);
    next(err);
  }
  return 0;
};

export default ardacRouter;
