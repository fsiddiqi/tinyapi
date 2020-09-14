const axios = require("axios").default;

var routes = function (app) {
    app.get("/jnk", function (req, res) {
        res.status(200).send("REST API call of '/'");
    });

    app.get("/", (req, res, next) => {
        res.json({
            "result": "Good"
        });
    });

    app.get("/nano", (req, res) => {
        var url = "https://squote.getsandbox.com:443/api/quotes";
        axios.get(url)
            .then(function (response) {
                console.log(response);
                var resp = response;
                res.json({
                    "result": "I'm back here",
                    "state": resp.data.state[0]
                });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    });

    /**
     * POST https://github.com/login/oauth/access_token?
  client_id=...&
  redirect_uri=http://www.example.com/oauth_redirect&
  client_secret=...&
  code=...
     */
    app.get("/token", (req, res, next) => {
        var CLIENT_ID = "434db44c82c4db5c5362";
        var CLIENT_SECRET = "beaecf932a6717f10310a51305b6230c1e810dd0";
        var theCode = req.query;
        console.log(theCode);
        var url = `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&redirect_uri=&client_secret=${CLIENT_SECRET}&code=${theCode.code}`;
        //console.log(url)
        axios.post(url)
            .then(function (response) {
                //console.log(response);
                var resp = response;
                console.log(response.data);
                res.json({
                    "result": response.data
                });
            })
            .catch(function (error) {
                // handle error
                //console.log(error);
            });
    });

}


module.exports = routes;