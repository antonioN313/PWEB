let app = require('./app/config/server');

let home = require('./app/routes/home');
home(app);

let adduser = require('./app/routes/adicionar_usuario');
adduser(app);

let historia = require('./app/routes/historia');
historia(app);

let cursos = require('./app/routes/cursos');
cursos(app);

let professores = require('./app/routes/professores');
professores(app);

app.listen(3000,function () {
    console.log('servidor iniciado'); 
});