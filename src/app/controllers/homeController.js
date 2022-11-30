class homController
{
    show(req, res, next)
    {
        res.render('home');
    }
}

module.exports = new homController;
