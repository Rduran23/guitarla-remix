import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta({ matches }) {
  let rootMeta = matches[0].meta;
  let title = rootMeta.find((m) => m.title);
 
  return [
    { title:'GuitarLa - Nosotros'},
    { name: "description", content: 'Venta de guitarras, blog de música e información' },
    { property: "og:title", content: "..." },
 
    // you can now add SEO related <links>
    { tagName: "link", rel: "canonical", href: "..." },
 
    // and <script type=ld+json>
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Remix",
      },
    },
  ];
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt='Sobre Nosotros'></img>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales tincidunt nunc, ac suscipit sapien varius vitae.
          Aenean placerat, quam ut pharetra efficitur, nunc sapien accumsan diam, vel eleifend ligula dolor pellentesque dui.
          Maecenas imperdiet nibh vestibulum congue rutrum. 
        </p>

        <p>
          In volutpat elit ac nisi vehicula, nec dignissim est faucibus. Vestibulum eleifend tincidunt enim, nec eleifend neque mollis at. In finibus
          fringilla libero. Sed velit purus, facilisis sed congue nec, gravida vitae ligula. Phasellus venenatis id tortor eu pellentesque. In efficitur
          lectus nec augue vehicula, id tristique sem volutpat. Nam ultricies turpis risus. 
        </p>
      </div>
    </main>
  )
}

export default Nosotros