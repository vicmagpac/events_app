import Image from 'next/image';

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Events page</h1>
      {data.map((ev) => (
        <a key={ev.id} href={`/events/${ev.id}`}>
          <Image alt={ev.title} src={ev.image} width={300} height={300} />
          <h2>{ev.title}</h2>
        </a>
      ))}
      
    </div>
  );
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import('data/data.json');
  return {
    props: {
      data: events_categories
    }
  }
}

