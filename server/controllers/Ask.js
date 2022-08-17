const db = require('../models/ask');
const auth = require('./Jwt');

ask = {
    create :(req, res) => {
        let p = req.body;
        p.time_post = new Date();
        if(!('scspacetoken' in req.cookies)){
            res.send(false)
        }
        
        auth.get_data(req.cookies.scspacetoken)
        .then(result=> {
            p.writer_id = result.student_id;
            db.create(p)
                .then (result => { result ? res.send(true) : res.send(false)});
        })
        .catch((err) => {console.log(err)});
       
    },
    
    readId : (req, res) => {
        db.readId([parseInt(req.query.id)])
            .then(result => {res.json(result);})
            .catch (() => {console.log(result);})
    },

    readAll : (req, res) =>{
        db.readAll()
            .then (result => {res.json(result);})
            .catch (() => {console.log(result);});
    },

    readMine : (req, res) =>{
        db.readMine([parseInt(req.query.writer_id)])
            .then (result => {res.json(result);})
            .catch (() => {console.log(result);});
    },

    delete  : (req, res) => {
        db.delete([parseInt(req.query.id)])
        .then (result => { result ? res.send(true) : res.send(false)});
    },

    createComment : (req, res) => {
        let p = req.body;
        if(!('scspacetoken' in req.cookies)){
            res.send(false)
        }
        
        auth.get_data(req.cookies.scspacetoken)
        .then(result=> {
            if (result.type === 'admin'){
                db.createComment(p)
                .then (result => { result ? res.send(true) : res.send(false)});
            }
            else{
                res.send(false);
            }

        })
        .catch((err) => {console.log(err)});
       
    },
    readComment : (req, res) => {
        db.readComment([parseInt(req.query.id)])
            .then(result => {res.json(result);})
            .catch (() => {console.log(result);})
    },

    latestRead : (req, res) => {
        db.latestRead()
            .then(result => {res.json(result);})
            .catch (() => {console.log(result);})
    },

}


module.exports = ask