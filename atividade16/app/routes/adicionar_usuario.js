module.exports = function (app) {
    app.get('admin/formulario_adicionar_usuario',function (req,res) {
        res.send("admin/adicionar_usuario");
    });
}