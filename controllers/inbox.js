const User = require("../models/User")

module.exports = {
    getInbox: async (req, res) => {
      try {
      //retrieve user
      const user = await User.find({ user: req.user.id });
      res.render("inbox.ejs", { user: req.user });
    }  catch (err) {
      console.log(err);
    }
  }
}
