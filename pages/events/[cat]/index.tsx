const EventsCatPage = ({ data }) => {
  return (
    <div>
      <h1>Events EventsCatPage</h1>
      <a href="">
        <img />
        <h2>Event in London</h2>
      </a>
      <a href="">
        <img />
        <h2>Event in San Francisco</h2>
      </a>
      <a href="">
        <img />
        <h2>Event in Barcelona</h2>
      </a>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {

  const { events_categories } = await import('data/data.json');
  const allPaths = events_categories.map(ev => {
    return {
      params: {
        cat: ev.id.toString(),
      }
    }
  });

  return {
    path: [
      allPaths
    ]
  }
}

// export async function getStaticProps() {

//   const { allEvents } = await import('data/data.json');

//   return {
//     props: {
//       data: allEvents
//     }
//   }
// }
