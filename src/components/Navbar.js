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
                  background: '#000',
                  border: 'none',
                  borderRadius: 0,
                  margin: -10,
                  marginTop: 1,
                  fontSize: '1.6em',
                  fontFamily: 'anton',
                  letterSpacing: 4
                }}>
                <Dropdown.Item
                  id="menuItem"
                  href="#hero"
                  style={{
                    padding: '1em',
                    color: '#EDEDED',
                  }}>
                    Home
                </Dropdown.Item>

                <Dropdown.Item
                  id="menuItem"
                  href="#about"
                  style={{
                    padding: '1em',
                    color: '#EDEDED',
                  }}>
                    About
                </Dropdown.Item>

                <Dropdown.Item
                  id="menuItem"
                  href="#skills"
                  style={{
                    padding: '1em',
                    color: '#EDEDED',
                  }}>
                    Skills
                </Dropdown.Item>

                <Dropdown.Item
                  id="menuItem"
                  href="#portfolio"
                  style={{
                    padding: '1em',
                    color: '#EDEDED',
                  }}>
                    Portfolio
                </Dropdown.Item>

                <Dropdown.Item
                  id="menuItem"
                  href="#contact"
                  style={{
                    padding: '1em',
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
