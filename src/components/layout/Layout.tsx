import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
