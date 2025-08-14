 const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>More than just<br></br> shorter links</h2>
        <p>Build your brand’s recognition and get detailed<br></br> insights on how your links are performing.</p>
        <button className="get-started" style={{backgroundColor: 'hsl(180, 66%, 49%)', borderRadius:20, padding:3}}>Get Started</button>
      </div>
      <div className="hero-image">
        <img src="/src/assets/illustration-working.svg" alt="Working illustration" style={{ width: '300px', height: 'auto'}}/>
      </div>
    </section>
  );
}
export default Hero;