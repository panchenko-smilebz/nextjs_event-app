import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div className="container-medium">
        <div className="header_top-wrapper">
          <Link href="/">
            <Image
              width={50}
              height={50}
              src={'/images/logo_black.png'}
              alt="logo"
            />
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header_title-wrapper">
          <p className="hero-title">Sed ut perspiciatis unde omnis</p>
        </div>
      </div>
    </header>
  );
};
