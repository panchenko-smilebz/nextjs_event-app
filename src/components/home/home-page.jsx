import Link from 'next/link';
import Image from 'next/image';

export const HomePage = ({ data }) => {
  return (
    <main>
      <div className="container-medium home-wrapper">
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} className="city-item">
            <figure className="city-item_img-wrapper">
              <Image width={400} height={400} src={ev.image} alt={ev.title} />
            </figure>
            <div>
              <h2>{ev.title}</h2>
              <p className="city-item_description">{ev.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};
