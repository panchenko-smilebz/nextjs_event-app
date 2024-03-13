import Image from 'next/image';
import Link from 'next/link';

const EventsCategory = ({ data, pageName }) => {
  return (
    <main>
      <div className="container-medium">
        <h1>Events in {pageName}</h1>
        <div className="is-events-category">
          {data.map((ev) => (
            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
              <Image width={500} height={400} src={ev.image} alt={ev.title} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};
export default EventsCategory;
