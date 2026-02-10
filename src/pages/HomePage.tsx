import AmSection from '../components/home/AmSection';
import NoonSection from '../components/home/NoonSection';
import SnackSection from '../components/home/SnackSection';
import PmSection from '../components/home/PmSection';
import '../styles/home.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <AmSection />
      <NoonSection />
      <SnackSection />
      <PmSection />
    </div>
  );
}
