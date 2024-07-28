export const ChangeCantityMail = ({
  completeName,
  loanId,
}: {
  completeName: string;
  loanId: string;
}) => {
  return `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <main>
      <div style="justify-content: flex-start">
        <img
          style="width: 200px; height: auto"
          src="https://res.cloudinary.com/dvquomppa/image/upload/v1717654334/credito_ya/cirm9vbdngqyxymcpfad.png"
        />
      </div>
      <p style="margin-top: 1em">
        ${completeName}, Nos complace informarte que tu solicitud de prestamo
        con id ${loanId} ha sido aprobado pero su cantidad solicitada se ha
        visto reducida, ingresa a la app y decide si aprobar o rechazar este
        cambio en tu solicitud.
      </p>

      <p style="margin-top: 10px">
        Mira los detalles completos
        <a
          style="text-decoration: none"
          href="https://creditoya.vercel.app/req/${loanId}"
          >aqui</a
        >
      </p>
      <h5 style="margin-top: 2em; color: #6c6c6c">Saludos,</h5>
      <h4>Equipo de Credito Ya</h4>
    </main>
  </body>
</html>`;
};
