
 const StatsSection = () => {
  return (
    <section className="stats">
      <h3>Advanced Statistics</h3>
      <p>
        Track how your links are performing across the web with <br></br>our advanced statistics dashboard.
      </p>
      <div className="cards">
        <div className="card">
          <img className="img" src="/src/assets/icon-brand-recognition.svg" alt="image"/><br></br>
          <h4>Brand Recognition</h4>
          <p>Boost your brand recognition with each click.
             Generic links don’t mean a thing.
             Branded links help instill confidence in your content.
          </p>
        </div>
        <div className="card">
          <img className="img" src="/src/assets/icon-detailed-records.svg" alt="image"/><br></br>
          <h4>Detailed Records</h4>
          <p>Gain insights into who is clicking your links.
             Knowing when and where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="card">
           <img className="img" src="/src/assets/icon-fully-customizable.svg" alt="image"/><br></br>
          <h4>Fully Customizable</h4>
          <p>Improve brand awareness and content discoverability through customizable links,
             supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
export default StatsSection;
