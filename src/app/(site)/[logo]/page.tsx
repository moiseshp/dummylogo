export default function Page({ params }: any) {
  return (
    <div className="container bg-gray-100">
      <div className="sticky top-20 bg-yellow-400 w-[400px]">
        <h1>Logo Selected {params.logo}</h1>
      </div>
      <section className="flex-grow ml-[450px]">
        <ul>
          <li>
            Navbar (Simula diferentes estilos de navbar (clara, oscura,
            transparente).)
          </li>
          <li>Login</li>
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
        {/* {[...Array(130)].map((_, index) => (
          <p key={index}>Lorem Ipsum sit amet...</p>
        ))} */}
      </section>
    </div>
  );
}
