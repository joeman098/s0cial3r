var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
},
exports.signin = function(req, res) {
 
    res.render('signin');
 
}
exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}
exports.forgot = function (req, res) {
    
    res.render('forgot')
}
exports.reset = function (req, res) {
    res.render('reset')
}
exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}