var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
import graphqlHTTP from 'express-graphql';//adding graphql API

// var index = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/users', users);

app.get('/', (req, res) => {
  res.render("index", {
    title: "Graphql"
  });
});

import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} from 'graphql';

var rp = require('request-promise');
const queryString = require('query-string');
// import APIInput from './graphql/index';
// const CONFIG = require('./graphql/config');
function getGraphqlType(jsonData, nameType) {
  let objectTarget = {};
  for (let key in jsonData) {
    var data = jsonData[key];
    let typeOfData = typeof data;
    if (typeOfData === 'number' || typeOfData === 'string') {
      objectTarget[key] = {
        type: GraphQLString
      }
    } else if (typeOfData === 'object') {
      if (data instanceof Array) {
        if (data.length != 0) {
          let typeData = getGraphqlType(data[0], key);
          objectTarget[key] = {
            type: new GraphQLList(typeData),

          }
        }
      }
      else {
        if (!isEmpty(data)) {
          let typeData = getGraphqlType(data, key);
          objectTarget[key] = {
            type: typeData
          }
        } else {
          objectTarget[key] = {
            type: GraphQLString,
            description: "Object empty"
          }
        }

      }
    }
  }
  let typeTarget = new GraphQLObjectType({
    name: nameType,
    fields: () => (objectTarget)
  });
  return typeTarget;
}

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop))
      return false;
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

// var data = {
//   "iUserId": "47",
//   "type": "countryList",
//   "tSessionId": "fdfd",
//   "GeneralMemberId": "47",
//   "GeneralUserType": "DRIVER",
//   "GeneralDeviceType": "IOS",
//   "AppVersion": "1.3",
//   "Platform": "IOS",
//   "GeneralAppVersion": "1.3",
//   "vDeviceType": "IOS",
//   "UserType": "DRIVER",
//   "vDeviceToken": "2575ffa260614e03d6c215461ab9190ffa535dd5e15a0c208f0e392d36450876"
// }

// var options = {
//   method: 'POST',
//   uri: 'https://www.bookcar.net.vn/webservice.php',
//   body: queryString.stringify(data),
// headers: {
//   "content-type": "application/x-www-form-urlencoded"
// }
// };

// };
// rp(options)
//   .then(function (parsedBody) {
//     console.log(parsedBody);
//   });

// GraphQL API
app.use('/graphql', graphqlHTTP(async (request, response, graphQLParams) => {
  // console.log(request.query);
  var apiGetLink = request.query.api;

  var listApiLink = apiGetLink.split(";");
  var apiLink = listApiLink[0];

  var options;
  if (request.query.method == 'get') {
    options = {
      method: 'GET',
      uri: apiLink
    };
  }
  if (request.query.method == 'post') {
    var urlFull = request.url;
    var urlHeaders = JSON.parse('{"' + decodeURI(urlFull.substring(urlFull.indexOf("&hdgraphql") + 10, urlFull.indexOf("&bdgraphql"))).replace(/"/g, '\\"').replace(/%2F/g, '\/').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    var urlBody = JSON.parse('{"' + decodeURI(urlFull.substring(urlFull.indexOf("&bdgraphql") + 10, urlFull.length)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    options = {
      method: 'POST',
      uri: apiLink,
      body: queryString.stringify(urlBody),
      headers: urlHeaders
    };
  }

  var dataResponse = JSON.parse(await getDataApi(options));
  var checkValue = dataResponse instanceof Array;
  if (checkValue) {
    dataResponse = dataResponse[0];
  }
  if (listApiLink.length > 1 && request.query.method == 'get') {
    var params = getAllValueParamsUrl(listApiLink[1]);
    var valueParams1 = dataResponse[params[0]];
    var url1 = listApiLink[1].replace('{' + params[0] + '}', valueParams1);
    var options1 = {
      method: 'GET',
      uri: url1
    }
    var dataResponse1 = JSON.parse(await getDataApi(options1));
    dataResponse[url1.substring(url1.lastIndexOf('/') + 1, url1.length)] = dataResponse1;

  }


  var dataResponseType = getGraphqlType(dataResponse, 'dataResponse');
  var typeResponse = (!checkValue) ? dataResponseType : new GraphQLList(dataResponseType);
  var queriesResponse = {
    type: typeResponse,
    async resolve(root, params) {
      var dataResponse = JSON.parse(await getDataApi(options));
      if (listApiLink.length > 1 && request.query.method == 'get') {
        var checkValue = dataResponse instanceof Array;
        var params = getAllValueParamsUrl(listApiLink[1]);
        if (checkValue) {
          for (let i = 0; i < dataResponse.length; i++) {
            var valueParams1 = dataResponse[i][params[0]];
            var url1 = listApiLink[1].replace('{' + params[0] + '}', valueParams1);
            var options1 = {
              method: 'GET',
              uri: url1
            }
            var dataResponse1 = JSON.parse(await getDataApi(options1));
            dataResponse[i][url1.substring(url1.lastIndexOf('/') + 1, url1.length)] = dataResponse1;
          }
        } else {

          var valueParams1 = dataResponse[params[0]];
          var url1 = listApiLink[1].replace('{' + params[0] + '}', valueParams1);
          var options1 = {
            method: 'GET',
            uri: url1
          }
          var dataResponse1 = JSON.parse(await getDataApi(options1));
          dataResponse[url1.substring(url1.lastIndexOf('/') + 1, url1.length)] = dataResponse1;
        }
      }
      return dataResponse;
    }

  }
  const objectResponse = {
    queriesResponse: queriesResponse
  }
  const queries = new GraphQLObjectType({
    name: "queries",
    fields: objectResponse
  })

  let schema = new GraphQLSchema({
    query: queries
  });
  return { //Tích hợp vào Express
    schema,
    graphiql: true,//If true, presents GraphiQL when the GraphQL endpoint is loaded in a browser
    pretty: true// If true, any JSON response will be pretty-printed.
  }

  // })

  // return rp(options)
  //   .then(function (parsedBody) {
  //     // console.log(parsedBody);
  //     var dataResponse = JSON.parse(parsedBody);
  //     var checkValue = dataResponse instanceof Array;
  //     if (checkValue) {
  //       dataResponse = dataResponse[0];
  //     }
  //     //
  //     if (listApiLink.length > 1) {

  //       var apiLink1 = listApiLink[1];
  //       var valueParams1 = getAllValueParamsUrl(apiLink1, 0);

  //     }
  //
  //       var dataResponseType = getGraphqlType(dataResponse, 'dataResponse');
  // var typeResponse = (!checkValue) ? dataResponseType : new GraphQLList(dataResponseType);
  // var queriesResponse = {
  //   type: typeResponse,
  //   resolve(root, params) {
  //     return rp(options)
  //       .then(function (parsedBody1) {
  //         return JSON.parse(parsedBody1);
  //       })
  //       .catch(function (err) {
  //         console.log(err)
  //       });
  //   }

  // }
  // const objectResponse = {
  //   queriesResponse: queriesResponse
  // }
  // const queries = new GraphQLObjectType({
  //   name: "queries",
  //   fields: objectResponse
  // })

  // let schema = new GraphQLSchema({
  //   query: queries
  // });
  // return { //Tích hợp vào Express
  //   schema,
  //   graphiql: true,//If true, presents GraphiQL when the GraphQL endpoint is loaded in a browser
  //   pretty: true// If true, any JSON response will be pretty-printed.
  // }

  // })
}))

app.listen(process.env.PORT || 3000, () => {
  console.log('GraphQL server running at port 3000...')
})

//get all params into '{}'
function getAllValueParamsUrl(url, index) {
  var params = [];
  var indexOpen = url.indexOf('{', index);
  var indexClose = url.indexOf('}', indexOpen);
  params.push(url.substring(indexOpen + 1, indexClose));
  var indexNext = url.indexOf('{', indexClose);
  if (indexNext == -1) {
    return params;
  } else {
    getAllValueParamsUrl(url, indexOpen);
  }
}



async function getDataApi(options) {

  let tmp = rp(options);

  let data = await tmp;

  return data;


  /*return rp(options)
    .then(function (parsedBody1) {
      return JSON.parse(parsedBody1);
    })
    .catch(function (err) {
      console.log(err)
    });*/
}
