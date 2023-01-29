const Email = require('../models/Email')

module.exports = {
    postEmail: (req, res) => {
      let newEmail = new Email({
        email: req.body.email,
      })
      newEmail.save(function(error, result) {
        if (error) {
            console.log(error);
            // res.status(500).send(error);
            res.redirect('/')
            
        } else {
            console.log('saved');
            // res.status(200).send(result)
            res.redirect('/')
        }
      
    })
    
  }
}