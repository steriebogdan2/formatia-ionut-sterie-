import Seo from '../components/Seo';
import { ROUTES } from '../lib/site';
import Reviews from '../components/Reviews';

const ReviewsPage = () => (
  <>
    <Seo
      title="Recenzii"
      description="Recenzii și mărturii de la clienții Formației Ionut Sterie. Află ce spun cei care ne-au ales pentru evenimentul lor."
      path={ROUTES.reviews}
      breadcrumbs={[{ name: 'Acasă', path: ROUTES.home }]}
    />
    <h1 className="sr-only">Recenzii</h1>
    <Reviews />
  </>
);

export default ReviewsPage;
