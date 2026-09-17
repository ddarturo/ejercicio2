function validarCampo(input, mensajeError) {
  input.setCustomValidity("");

  if (!input.checkValidity()) {
    input.setCustomValidity(mensajeError);
  }

  var valido = input.checkValidity();
  var errorSpan = document.getElementById(input.id + "-error");
  if (errorSpan) errorSpan.textContent = valido ? "" : mensajeError;
  input.setAttribute("aria-invalid", String(!valido));
  return valido;
}

function validarTerminos() {
  var errorSpan = document.getElementById("terminos-error");
  var valido = terminos.checked;
  terminos.setCustomValidity(valido ? "" : "Debes aceptar los términos y condiciones.");
  errorSpan.textContent = valido ? "" : "Debes aceptar los términos y condiciones.";
  terminos.setAttribute("aria-invalid", String(!valido));
  return valido;
}

var nombre = document.getElementById("nombre");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var clave = document.getElementById("clave");
var terminos = document.getElementById("terminos");

nombre.addEventListener("blur", function () {
  validarCampo(nombre, "Escribe tu nombre completo (mínimo 3 letras).");
});
correo.addEventListener("blur", function () {
  validarCampo(correo, "Escribe un correo electrónico válido.");
});
telefono.addEventListener("blur", function () {
  validarCampo(telefono, "El teléfono debe tener exactamente 10 dígitos.");
});
clave.addEventListener("blur", function () {
  validarCampo(clave, "La contraseña debe tener al menos 8 caracteres.");
});
terminos.addEventListener("blur", validarTerminos);

var form = document.getElementById("registro");
var mensajeExito = document.getElementById("mensajeExito");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.classList.add("validado");
  mensajeExito.textContent = "";

  var okNombre = validarCampo(nombre, "Escribe tu nombre completo (mínimo 3 letras).");
  var okCorreo = validarCampo(correo, "Escribe un correo electrónico válido.");
  var okTelefono = validarCampo(telefono, "El teléfono debe tener exactamente 10 dígitos.");
  var okClave = validarCampo(clave, "La contraseña debe tener al menos 8 caracteres.");

  var okTerminos = validarTerminos();

  if (okNombre && okCorreo && okTelefono && okClave && okTerminos) {
    mensajeExito.textContent = "¡Cuenta creada correctamente!";
  }
});
