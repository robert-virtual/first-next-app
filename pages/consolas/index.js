export async function getStaticProps() {
  const req = await fetch("https://gamestop-api.herokuapp.com/consolas");
  const consolas = await req.json();
  return {
    props: {
      consolas,
    },
  };
}

export default function Consolas({ consolas }) {
  return (
    <div>
      <div>
        {consolas.map((e, i) => (
          <div key={i}>
            <span>{e.name}</span>
            <img src={e.img} alt={e.img} />
          </div>
        ))}
      </div>
    </div>
  );
}
