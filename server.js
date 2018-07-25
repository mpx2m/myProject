const express = require("express")
const path = require("path")
const fs = require("fs")
var morgan = require("morgan");

import React from 'react'
import ignoreStyles from 'ignore-styles'
global.React = React

import { compose } from 'redux'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'

import App from './mysrc/components/App.js'
import data from './data/webapp.json'


const app = express()
app.use(morgan("short"))


//login part
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var flash = require("connect-flash");
var mongoose = require("mongoose");
var passport = require("passport");
var session = require("express-session");
var setUpPassport = require("./setuppassport");

var routes = require("./routes");
//
mongoose.connect("mongodb://admin:qwer1234@ds239931.mlab.com:39931/mongodbapp");
//
setUpPassport();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: "ungussafble",
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
//


//elasticapp part
app.use('/elasticapp', require("./elasticapp.js"))
//


//webapp start
const staticCSS2 = fs.readFileSync(path.join(__dirname, './dist/assets/bundle2.css'))
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));


//reduxcolor
app.get('/reduxcolor', (req,res)=>{
    res.sendFile(path.join(__dirname, "dist/assets/reduxcolor.html"))
  });
//

const buildHTMLPage = ({html, data, css}) => `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
        <meta charset="utf-8">
        <title>RainyDev</title>
        <style>${staticCSS2}</style>
    </head>
    <body>
        <div id="react-container">${html}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(data)}
        </script>
        <script src="/assets/bundle2.js"></script>
    </body>
</html>
`

const renderAppToHTML = data => url=>
    ({
        data,
        html: renderToString(
            <StaticRouter location={url} context={{}}>
                <App projects={data}/>
            </StaticRouter>
        )
    })

const htmlResponse = compose(
    buildHTMLPage,
    renderAppToHTML(data),
)

app.use(
    ({url}, res) =>
        res.status(200).send(htmlResponse(url))
)


app.set('port', process.env.PORT || 3000)
    .listen(
        app.get('port'),
        () => console.log(`RainyDev running at 'http://localhost:${app.get('port')}'`)
    )