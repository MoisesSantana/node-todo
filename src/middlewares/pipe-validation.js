export function pipeValidation(req, res, next) {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.writeHeader(400).end(JSON.stringify('Title and description are required'));
  } else {
    return next();
  }
}