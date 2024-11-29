export default function Page({ params }: any) {
  return (
    <div className="">
      <h1>L. {params.logo}</h1>
      <main>
        <ul>
          <li>
            Navbar (Simula diferentes estilos de navbar (clara, oscura,
            transparente).)
          </li>
          <li>Card de tarjetas de producto, perfil y contenido en general</li>
          <li>Firma de correo electrónico</li>
          <li>
            Hero section (Ejemplo: En el centro de un fondo, junto con un
            eslogan o llamada a la acción. )
          </li>
          <li>Icono de aplicación o favicon</li>
          <li>Redes sociales</li>
          <li>Pie de página (Footer)</li>
          <li>
            Banners publicitarios (Banners rectangulares, cuadrados o de redes
            sociales)
          </li>
        </ul>
      </main>
    </div>
  );
}
