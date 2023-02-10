function Header()
{
  return(
    <div style={{
      display:"flex",
      flexDirection:"row",
      alignItems:"center"
    }}>
      <div style={{
        display:"flex",
        flexDirection:"row"
      }}>
        <img src="/logo.42a58a0d.png" alt="Logo" width="60" height="40"/>
        <span style={{margin:"6px"}}></span>
        <div>
          <span>Toffeeshare</span>
          <br />
          <span>Making sharing sweets</span>
        </div>
      </div>

      <span style={{flexGrow:1}}></span>
      <div>
        <a className="links" href="">Transfer</a>
        <a className="links" href="">About</a>
        <a className="links" href="">Blog</a>
        <a className="links" href="">FAQ</a>
        <a className="links" href="">Privacy</a>
      </div>
      <span style={{margin:"10px"}}></span>
      <div style={{
        display:"flex",
        flexDirection:"row"
      }}>
        <div className="button">Download</div>
        <span style={{margin:"6px"}}></span>
        <div className="button">Nearby Devices</div>
      </div>
    </div>
  )
}

export default Header;