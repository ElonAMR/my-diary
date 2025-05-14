async function addCourse(req,res,next){
    let name = addSlashes(req.body.name); // a' or (drop table courses --
    let Query =`INSERT INTO courses (name) VALUES ('${name}')`;
    const promisePool = db_pool.promise();
    let rows = [];
    try {
        [rows] = await promisePool.query(Query)
    }catch (err){
        console.log(err);
    }

    next();
}


async function UpdateCourse(req,res,next){
    let id = parseInt(req.params.id);
    if (id <= 0){
        req.GoodOne=false;
        return next();
    }
    req.GoodOne=true;
    let name = addSlashes(req.body.name);
    let Query=`UPDATE courses SET name='${name}' WHERE id='${id}'`;
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
    } catch (err) {
        console.log(err);
    }

    next();
}