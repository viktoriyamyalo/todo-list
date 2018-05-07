const cors = require('cors');
const bodyParser = require('body-parser');
//
// const CORS_WHITELIST = require('./constants/frontend');

// const corsOptions = {
//     origin: (origin, callback) =>
//         (CORS_WHITELIST.indexOf(origin) !== -1)
//             ? callback(null, true)
//             : callback(new Error('Not allowed by CORS'))
// };

const configureServer = app => {

    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });

    // app.use(cors());
    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });


    app.use(bodyParser.json());
};

module.exports = configureServer;