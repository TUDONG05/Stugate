// controllers/homeController.js
const getHomePage = (req, res) => {
  res.render('homepage.ejs');
};

module.exports = getHomePage;
