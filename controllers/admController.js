const controller = {};

/*
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM clients', (err, clients) => {
                if(err){
                    res.json(err);
                }
               
                res.render('clients', {
                    data: clients
                });
        });
    });
};

controller.delete = (req, res) => {
    const { id }= req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM clients WHERE id = ?',[id], (err,rows) => {
            res.redirect('/');
        });
    })
};
*/

module.exports = controller;