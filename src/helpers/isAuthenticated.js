
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // ACCESS ALLOWED
  } // IF NO ERROR... : AND REDIRECT TO LOGIN 
  req.flash("error_msg", "...Please sign in to display any information or making changes.");
  res.redirect('/login'); // FROM HERE GO TO REGISTER IF NEEDED...
};



module.exports = isAuthenticated;
// module.exports = isLoggedIn;