import NavBar from './NavBar.js'

const PageTemplate = ({children}) =>
    <div className="app">
        <NavBar />
        {children}
    </div>

export default PageTemplate