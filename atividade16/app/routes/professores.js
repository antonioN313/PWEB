module.exports = function (app) {
    app.get('/informacao/professores',function (req,res) {
        const sql = require('mssql/msnodesqlv8');

        const sqlConfig = {
            user: 'BD2121015',
            password: 'acfgf15-17',
            database: 'LP2',
            server: '192.168.1.6'
        }
        res.send("admin/professores");
    });
}