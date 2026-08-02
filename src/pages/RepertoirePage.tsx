import Seo from '../components/Seo';
import { ROUTES } from '../lib/site';
import Songs from '../components/Songs';

const RepertoirePage = () => (
  <>
    <Seo
      title="Repertoriu"
      description="Repertoriul Formației Ionut Sterie. Ascultă piesele noastre și descoperă stilul muzical potrivit evenimentului tău."
      path={ROUTES.repertoire}
      breadcrumbs={[{ name: 'Acasă', path: ROUTES.home }]}
    />
    <h1 className="sr-only">Repertoriu</h1>
    <Songs />
  </>
);

export default RepertoirePage;
