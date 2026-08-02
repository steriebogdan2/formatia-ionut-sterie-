import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { ROUTES } from '../lib/site';

const NotFoundPage = () => (
  <>
    <Seo
      title="Pagină negăsită"
      description="Pagina căutată nu există. Întoarce-te la pagina principală a Formației Ionut Sterie."
      path="/404"
      noIndex
    />
    <section className="section-y flex min-h-[60vh] items-center justify-center bg-black">
      <div className="container-page max-w-7xl text-center">
        <h1 className="mb-6 text-balance font-playfair text-4xl text-gold md:text-5xl">
          404: Pagină negăsită
        </h1>
        <Link
          to={ROUTES.home}
          className="inline-block px-3 py-2 font-montserrat text-white transition-colors duration-200 hover:text-gold"
        >
          Înapoi la pagina principală
        </Link>
      </div>
    </section>
  </>
);

export default NotFoundPage;
