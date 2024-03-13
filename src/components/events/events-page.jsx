import Image from 'next/image';
import Link from 'next/link';

const AllEvents = ({ data }) => {
  return (
    <main>
      <div className="container-medium is-events-page">
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} className="events-city">
            <Image width={300} height={300} src={ev.image} alt={ev.title} />
            <h2>{ev.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default AllEvents;
