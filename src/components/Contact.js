import Newsletter from "./Newsletter";

export default function Contact({ myName }) {
  return (
    <div>
      <ul>
        <li>email:</li>
        <li>Phone:</li>
      </ul>
      <h2>{myName}</h2>
      <Newsletter />
    </div>
  );
}
