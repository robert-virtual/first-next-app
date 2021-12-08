import { useRouter } from "next/dist/client/router";

export async function getServerSideProps() {
  const req = await fetch("http://localhost:3000/api/cars");

  const car = await req.json();
  return {
    props: {
      car,
    },
  };
}

export default function Car({ car }) {
  const router = useRouter();

  return (
    <div>
      <h1>{car.make}</h1>
    </div>
  );
}
