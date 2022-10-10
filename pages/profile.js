export default function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <section className="profile">
        <article>
          <h3>Name:</h3>
          <p>Finbar Maginn</p>
        </article>
        <article>
          <h3>Date of Birth:</h3>
          <p>20-09-1990</p>
        </article>
        <article>
          <h3>Current Age:</h3>
          <p>{getAge('1990-09-20')}</p>
        </article>
      </section>
      <style jsx>{`
        section.profile {
          display: flex;
          gap: 20px;
        }
      `}</style>
    </div>
  )

  function getAge(dateString) {
    const ageInMillis = new Date() - new Date(dateString);
    return Math.floor(ageInMillis/1000/60/60/24/365)
  }
}