import Header from './header';
import Footer from './footer';
import {PageLayoutProps} from './types';

function PageLayout({children, divClass, mainClass}: PageLayoutProps) {
  return (
    <div className={divClass}>
      <Header />
      <main className={mainClass}>{children}</main>
      <Footer />
    </div>
  );
}

export default PageLayout;
