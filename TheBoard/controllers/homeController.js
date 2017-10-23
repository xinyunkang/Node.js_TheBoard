(function (homeController) {

    var data = require("../data");

    homeController.init = function (app) {

        app.get("/", function (req, res) {
            //res.send("<html><body><h1>Express</h1></body></html>");

            data.getNoteCategories(function (err, results) {

                res.render("index", {
                    title: "The Board",
                    error: err,
                    categories: results,
                   // newCatError: req.flash("newCatName")  //get the error
                });

            });
        });

        app.post("/newCategory", function (req, res) {
            var categoryName = req.body.categoryName;
            data.createNewCategory(categoryName, function (err) {
                if (err) {
                    // Handle Error
                    console.log(err);
                    //req.flash("newCatName", err);  //set the error
                    res.redirect("/");
                } else {
                    res.redirect("/notes/" + categoryName);
                }
            });
        });

    };

})(module.exports);