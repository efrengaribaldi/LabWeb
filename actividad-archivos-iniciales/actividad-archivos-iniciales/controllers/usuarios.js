let Usuario = require("../models/usuario");
let Reserva = require("../models/reserva");

const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  list: function (req, res, next) {
    Usuario.find({}, (err, usuarios) => {
      res.render("usuarios/index", { usuarios: usuarios });
    });
  },

  update_get: function (req, res, next) {
    Usuario.findById(req.params.id, function (err, usuario) {
      res.render("usuarios/update", { errors: {}, usuario: usuario });
    });
  },

  update: function (req, res, next) {
    let update_values = { nombre: req.body.nombre };
    Usuario.findByIdAndUpdate(
      req.params.id,
      update_values,
      function (err, usuario) {
        if (err) {
          console.log(err);
          res.render("usuario/update", {
            errors: err.errors,
            usuario: new Usuario({
              nombre: req.body.nombre,
              email: req.body.email,
            }),
          });
        } else {
          res.redirect("/usuarios");
          return;
        }
      }
    );
  },

  create_get: function (req, res, next) {
    res.render("usuarios/create", { errors: {}, usuario: new Usuario() });
  },

  create: function (req, res, next) {
    if (req.body.password != req.body.confirm_password) {
      res.render("usuarios/create", {
        errors: {
          confirm_password: { message: "No coinciden los passwords " },
        },
        usuario: new Usuario({
          nombre: req.body.nombre,
          email: req.body.email,
        }),
      });
      return;
    }
    Usuario.create(
      {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
      },
      function (err, nuevoUsuario) {
        if (err) {
          res.render("usuarios/create", {
            errors: {
              email: { message: "Ya existe un usuario con ese password" },
            },
            usuario: new Usuario({
              nombre: req.body.nombre,
              email: req.body.email,
            }),
          });
        } else {
          nuevoUsuario.enviar_mail_bienvenida();
          res.redirect("/usuarios");
        }
      }
    );
  },

  delete: function (req, res, next) {
    Usuario.findByIdAndDelete(req.body.id, function (err) {
      if (err) next(err);
      else res.redirect("/usuarios");
    });
  },

  login_get: function (req, res, next) {
    res.render("usuarios/login", { errors: {}, usuario: new Usuario() });
  },

  login: async function (req, res, next) {
    const user = await Usuario.findOne({ email: req.body.email });
    if (user) {
      if (!user.verificado) {
        res.json({ error: "El email no está verificado" });
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (validPassword) {
        res.redirect("/usuarios");
      } else {
        res.json({ error: "Invalid Password" });
      }
    } else {
      res.json({ error: "User email no existe" });
    }
  },
  reserve_get: function (req, res, next) {
    res.render("usuarios/reserve", { errors: {}, usuario: new Usuario() });
  },

  reserve: function (req, res, next) {
    Reserva.create(
      {
        desde: req.body.desde,
        hasta: req.body.hasta,
        bicicleta: req.body.bicicleta,
        usuario: req.body.usuario,
      },
      function (err, nuevaReserva) {
        if (err) {
          console.log(err);
          res.json({ error: "Error al crear la reserva" });
        } else {
          res.redirect("/usuarios");
        }
      }
    );
  },
};
