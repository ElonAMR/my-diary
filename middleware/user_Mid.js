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

