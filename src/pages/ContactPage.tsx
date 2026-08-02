import Seo from '../components/Seo';
import { ROUTES } from '../lib/site';
import Contact from '../components/Contact';

const ContactPage = () => (
  <>
    <Seo
      title="Contact"
      description="Pregătește-te pentru cel mai animat eveniment cu Formația Ionut Sterie. Contactează-ne acum pentru a discuta detaliile evenimentului tău în Târgoviște!"
      path={ROUTES.contact}
      breadcrumbs={[{ name: 'Acasă', path: ROUTES.home }]}
    />
    <Contact />
  </>
);

export default ContactPage;
