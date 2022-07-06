import { Dropdown } from 'react-bootstrap'

const Navbar = () => {

  return (
    <nav class='nav sticky-top' id="nav">
      <div class='container-fluid'>
        <div class='row justify-content-between align-items-center mt-3'>

          {/* D R O P D O W N */}
          <div class="col-1">
            
            <Dropdown>
              <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    margin: 0,
                    padding: 0,
                    background: 'none',
                    border: 'none',
                    color: 'transparent',
                    fontSize:'1px'
                  }}>
                <lord-icon
                  src="https://cdn.lordicon.com/jtqpkhoh.json"
                  trigger="none"
                  colors="primary:#ffffff, secondary:#08a88a"
                  style={{
                    width: '45px',
                    height: '45px',
                    }}>
                </lord-icon>
              </Dropdown.Toggle>

              <Dropdown.Menu
                id="menuDropdown"
                style={{
                  background: 'rgba(145, 145, 145, 0.19)',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10.2px)',
                  borderRadius: 0,
                  // margin: -10,
                  marginTop: 1,
                  fontSize: '1.8vmax',
                  fontFamily: 'roboto',
                  letterSpacing:2
                }}>
                <Dropdown.Item
                  id="menuItem"
                  href="#hero"
                  style={{
                    padding: '4vmin',
                    color: '#EDEDED',
                  }}>
                    Home
                </Dropdown.Item>

                <Dropdown.Item
                  id="menuItem"
                  href="#about"
                  style={{
                    padding: '4vmin',
                    color: '#EDEDED',
                  }}>
                    About
                </Dropdown.Item>

                <Dropdown.Item
                  id="menuItem"
                  href="#skills"
                  style={{
                    padding: '4vmin',
                    color: '#EDEDED',
                  }}>
                    Skills
                </Dropdown.Item>

                <Dropdown.Item
                  id="menuItem"
                  href="#portfolio"
                  style={{
                    padding: '4vmin',
                    color: '#EDEDED',
                  }}>
                    Portfolio
                </Dropdown.Item>

                <Dropdown.Item
                  id="menuItem"
                  href="#contact"
                  style={{
                    padding: '4vmin',
                    color: '#EDEDED',
                  }}>
                    Contact me
                </Dropdown.Item>

              </Dropdown.Menu>

            </Dropdown>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
