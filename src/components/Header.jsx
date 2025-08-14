const HeaderPage = () => {
  
  return (
    <header style={{ padding: '2rem', fontFamily: 'sans-serif', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Shortly</h1>
      <nav>
        <a href="/features" style={{ margin: '0 1rem',marginRight: 200}}>Features</a>
        <a href="/pricing" style={{ margin: '0 1rem',marginRight: 180 }}>Pricing</a>
        <a href="/resources" style={{ margin: '0 1rem', marginRight: 150 }}>Resources</a>
        <a href="/login" style={{ margin: '0 1rem' }}>Login</a>
        <button style={{ marginLeft: '1rem', borderRadius: 20,backgroundColor:'hsl(180, 66%, 49%)',padding:4, }}> <a href="/signup">Sign Up</a>
        </button>
      </nav>
    </header>
  );
};

export default HeaderPage;