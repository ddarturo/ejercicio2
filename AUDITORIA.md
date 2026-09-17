# Auditoría de `ejercicio2`

**Fecha:** 2026-09-17

## Resumen

La página implementa un formulario de creación de cuenta con validación de HTML5 y mensajes personalizados en JavaScript. La estructura semántica básica, las etiquetas de los controles y la carga diferida del script están correctamente planteadas. Se corrigieron los problemas detectados de accesibilidad, estados de validación prematuros, autocompletado y estados interactivos.

## Correcciones aplicadas

- Se añadió `aria-describedby` al checkbox de términos para asociarlo con su mensaje de error.
- Se añadió validación del checkbox al perder el foco y durante el envío del formulario.
- Los controles actualizan `aria-invalid` cuando su valor no es válido.
- Los bordes de validación se muestran después de interactuar con un campo o después de intentar enviar el formulario, evitando marcar el formulario como inválido desde la carga inicial.
- Se mantuvo `novalidate` porque la validación personalizada debe controlar los mensajes y el flujo de envío.
- Se añadieron `autocomplete="tel"` y `autocomplete="new-password"`.
- Se añadieron estados `:hover` y `:focus-visible` al botón y un foco visible consistente para los controles.

## Comprobaciones realizadas

- `index.html`, `styles.css` y `app.js` existen dentro de `ejercicio2`.
- El documento incluye `lang="es"`, `charset` y `viewport`.
- La hoja de estilos se enlaza mediante `styles.css`.
- El script se carga con `defer` mediante `app.js`.
- El formulario tiene un identificador (`registro`) y un botón explícito de tipo `submit`.
- Cada campo tiene una etiqueta `label` asociada mediante `for` e `id`.
- Los campos obligatorios usan `required`.
- El correo usa `type="email"` y el teléfono usa `type="tel"` con un patrón de 10 dígitos.
- El nombre y la contraseña tienen restricciones mínimas mediante `minlength`.
- Los mensajes de error y éxito usan `aria-live` para anunciar cambios dinámicos.
- `app.js` valida nombre, correo, teléfono, contraseña y aceptación de términos al enviar el formulario.
- La validación limpia previamente `setCustomValidity`, evitando que un error anterior quede persistente después de corregir el campo.

## Hallazgos

### Hallazgos altos

No se detectan hallazgos altos.

### Hallazgos medios

No quedan hallazgos medios pendientes en la revisión estática.

### Hallazgos bajos

No quedan hallazgos bajos bloqueantes en la revisión estática. La repetición de mensajes en `app.js` se conserva porque el formulario es pequeño y la lógica sigue siendo legible.

## Verificación posterior recomendada

1. Comprobar contraste, teclado y zoom al 200%.
2. Probar el formulario con lector de pantalla y anchos de 320px, 390px y 768px.
3. Verificar el comportamiento con JavaScript desactivado si se requiere una degradación sin scripts.

## Pruebas sugeridas

- Enviar el formulario vacío y confirmar que todos los errores son comprensibles y quedan asociados a su campo.
- Introducir un nombre de menos de 3 caracteres, un correo inválido, un teléfono que no tenga 10 dígitos y una contraseña de menos de 8 caracteres.
- Corregir cada campo después de un error y confirmar que el mensaje desaparece.
- Intentar enviar sin aceptar los términos y después aceptar el checkbox.
- Completar el formulario correctamente y confirmar que aparece `¡Cuenta creada correctamente!`.
- Recorrer todos los controles usando solo el teclado.

## Conclusión

`ejercicio2` no presenta errores bloqueantes en la revisión estática. Las correcciones de accesibilidad, validación visual, autocompletado y estados interactivos están aplicadas. Solo quedan las comprobaciones manuales de navegador indicadas en la sección de verificación posterior.
