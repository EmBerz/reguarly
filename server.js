let mysql = require('mysql')
let express = require('express')

const loadTasks = (con)=> {
  let tasks = []
  con.query("select * from `tasks`", (error, results, fields) => {
    if (error) console.log(error);
    for(row in results){
      let data = results[row]
      tasks.push({
        id: data.id,
        title: data.title,
        description: data.description.toString('base64'),
        times: data.times,
        unit: data.unit
      })
    }
    console.log(tasks)
  })
}

const startConnection = ()=>{
  let con = mysql.createConnection({
    host: "reguarly-dev.clfxqeewbuc2.us-east-2.rds.amazonaws.com",
    user: "root",
    password: "password"
  });

  con.connect(function(err) {
    if (err) console.log(err);
    console.log("Connected!");
  });
  con.query('use regularly')
  return con
}
const killConnection = () => {
  con.end()
}



let router = express.Router();
let con = startConnection()

router.get('/', function(req, res, next) {
    console.log('here')
    res.render('SQLtest', { title: 'SQL test',
                        result: loadTasks(con)
    });
    console.log(res)
});
loadTasks(con)
killConnection()
