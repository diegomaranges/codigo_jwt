const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema(
 {
   nombre: {
     type: String,
     required: true,
   },
   username: {
     type: String,
     required: true,
     unique: true,
   },
   email: {
     type: String,
     required: true,
     unique: true,
   },
   password: {
     type: String,
     required: true,
   },
 },
 { timestamps: true, versionKey: false }
);

module.exports = model('usuario', UsuarioSchema);