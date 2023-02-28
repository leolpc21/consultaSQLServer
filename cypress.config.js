const { defineConfig } = require('cypress')
//const sqlServer = require('cypress-sql-server');

const tedious = require('tedious')
function execSQL(sql, config) {
  const connection = new tedious.Connection(config);
  return new Promise((res, rej) => {
    connection.on('connect', err => {
      if (err) {
        rej(err);
      }

      const request = new tedious.Request(sql, function (err, rowCount, rows) {
        return err ? rej(err) : res(rows);
      });

      connection.execSql(request);
    });
  })
}

module.exports = defineConfig({

  e2e: {
    env: {
      "db": {
        "server": "DESKTOP-38I9CRL\\SQLLEO",
        "authentication": {
          "type": "default",
          "options": {
            "userName": "xxxxx",
            "password": "xxxxxx"
          }
        },
        "options": {
          "port": 50001,
          "database": "YouTube",
          "encrypt": true,
          "rowCollectionOnRequestCompletion": true,
          "trustServerCertificate": true,
          "validateBulkLoadParameters": true
        }
      },
      // "db": {
      //   "userName": "sqlcypress",
      //   "password": "sql1234@",
      //   "server": "DESKTOP-38I9CRL\\SQLLEO",
      //   "options": {
      //     "database": "YouTube",
      //     "encrypt": true,
      //     "rowCollectionOnRequestCompletion": true
      //   }
      // }
    },
    setupNodeEvents(on, config) {
      // tasks = sqlServer.loadDBPlugin(config.env.db);
      // on('task', tasks);
      on('task', {
        sqlServerDB: sql => {
          return execSQL(sql, config.env.db)
        },
      })
      return config
    }
  }

});
