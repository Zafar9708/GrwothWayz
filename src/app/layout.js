import './globals.css';
import HeaderTop from '../components/HeaderTop';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Hide HeaderTop in mobile view */}
        <div className="hidden md:block">
          <HeaderTop />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
