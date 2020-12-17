/* eslint-disable no-unused-expressions */
const pool = require('../models/psqlSuggestion.js');

// const getImagesAPIByID = (id, callback) => {
//   pool.query(`SELECT shoes.shoeUrl, shoes.series, shoes.shoe_type, shoes.price, shoes.price, shoes.salePrice FROM shoes INNER JOIN suggestions ON suggestions.mainId = ${id} AND suggestions.suggestionId = shoes.id;`, (err, res) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, res);
//     }
//   });
// };

const getImagesAPIByID = (id, callback) => {
  pool.query(`SELECT productlist.id, suggestionlist.shoeurl, suggestionlist.series, suggestionlist.shoe_type, suggestionlist.price, suggestionlist.saleprice FROM suggestionlist INNER JOIN productlist ON productlist.id = ${id} AND suggestionlist.id=ANY(productlist.suggestions)`, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
};

// const addNew = (suggestions, callback) => {
//   client.query(`INSERT INTO shoes(shoeUrl, series, shoe_type, price, salePrice) VALUES ('${suggestions.shoeUrl}', '${suggestions.series}', '${suggestions.type}', ${suggestions.price}, ${suggestions.salePrice})`, (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('successfully added to shoes');
//       client.query('SELECT mainid FROM suggestions ORDER BY mainid DESC LIMIT 1', (err, maxId) => {
//         if (err) {
//           console.log(err);
//         } else {
//           const suggestionSeeder = (cb) => {
//             for (let i = 0; i < suggestions.suggestion.length; i++) {
//               client.query(`INSERT INTO suggestions (mainid, suggestionid) VALUES (${maxId.rows[0].mainid + 1}, ${suggestions.suggestion[i]})`, (err) => {
//                 if (err) {
//                   console.log(err);
//                 } else {
//                   console.log('success adding into suggestions');
//                   if (i === suggestions.suggestion.length - 1) {
//                     cb();
//                   }
//                 }
//               });
//             }
//           };
//           suggestionSeeder(() => {
//             // client.end((err) => {
//             //   if (err) {
//             //     console.log(err);
//             //   } else {
//             //     console.log('disconnected');
//             //     callback();
//             //   }
//             // });
//             callback();
//           });
//         }
//       });
//     }
//   });
// };

// secondary =========================================

// const addNew = (suggestions, callback) => {
//   client.connect();
//   client.query('SELECT id FROM suggestionlist ORDER BY id DESC LIMIT 1', (err, maxIdx) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(maxIdx);
//       const index = Number(maxIdx) + 1;
//       let arrString = '';
//       for (let i = 0; i < suggestions.length; i++) {
//         client.query(`INSERT INTO suggestionlist VALUES ('${suggestions[i].shoeUrl}', '${suggestions[i].series}', '${suggestions[i].type}', ${suggestions[i].price}, ${suggestions[i].salePrice})`, (err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log('successfully logged into suggestions');
//           }
//         });
//         arrString += `${index},`;
//       }
//       arrString = arrString.slice(0, -1);
//       const suggestionArr = `"{${arrString}}"`;
//       client.query(`INSERT INTO productlist VALUES (${suggestionArr})`, (err) => {
//         if (err) {
//           callback(err);
//         } else {
//           callback();
//         }
//         client.end();
//       });
//     }
//   });
// };

module.exports.getImagesAPIByID = getImagesAPIByID;
// module.exports.addNew = addNew;
