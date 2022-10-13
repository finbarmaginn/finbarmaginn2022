import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <h2>404 - Page Not Found</h2>
      <Link href='/'>
        <a>Go back home</a>
      </Link>

      <style jsx>{`
        h2,
        a {
          text-align: center;
          display: block;
        }
      `}</style>
    </>
  );
}
