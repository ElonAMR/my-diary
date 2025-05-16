const md5 = require('md5');
async function CheckLogin(uname,passwd){
    let enc_pass = md5("A"+passwd);
    let Query = `SELECT * FROM users WHERE uname = ${uname} AND passwd = ${enc_pass}`;

    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
    } catch (err) {
        console.log(err);
    }

    return (rows.length > 0);
}


async function AddUser(req,res,next){
    let name    = (req.body.name   !== undefined) ? addSlashes(req.body.name      ) : "";
    let uname   = (req.body.uname  !== undefined) ? addSlashes(req.body.uname     ) : "";
    let passwd  = (req.body.passwd !== undefined) ?            req.body.passwd      : "";
    let enc_pass = md5("A"+passwd);
    let email   = (req.body.email  !== undefined) ? addSlashes(req.body.email     ) : "";
    let type_id = (req.body.type_id!== undefined) ?     Number(req.body.type_id   ) : -1;
    let tz      = (req.body.tz     !== undefined) ? addSlashes(req.body.tz        ) : "";

    let Query="INSERT INTO users";
    Query +="( `name`, `uname`, `passwd`, `email`, `type_id`, `tz`)";
    Query +=" VALUES ";
    Query +=`( '${name}', '${uname}', '${enc_pass}', '${email}', '${type_id}', '${tz}')`;
    // console.log(__filename,Query);
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
    } catch (err) {
        console.log(err);
    }

    next();
}