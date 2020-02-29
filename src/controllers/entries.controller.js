const entries = [];

const renderIndex = (req, res) => {
  res.render('index', {entries});
};

const renderNewEntry = (req, res) => {
  res.render('new-entry');
};

const createNewEntry = (req, res) => {
  // console.log(req.body);
  const newEntry = {
    title: req.body.title,
    boydy: req.body.body,
    published: new Date()
  }
  entries.push(newEntry);

  res.redirect('/');
};

module.exports = {
  renderIndex,
  renderNewEntry,
  createNewEntry
}