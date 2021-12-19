import './navbar.css'

function Navbar() {
    return <div className='navbar'>
        <Navitem text='Test'/>
        <Navitem text='Test'/>
        <Navitem text='Test'/>
    </div>
}

function Navitem(prop) {
    return <div className='navitem'>
        <h1>{prop.text}</h1>
    </div>
}

export {Navbar}