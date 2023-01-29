import { connect } from 'react-redux/es/exports.js'
import Navbar from './Navbar'

const mapStateToProps = (state) => {
  return {
    pageElements: state.navbar.pages,
  }
}

const mapDispatchToProps = () => {
  return {}
}

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default NavbarContainer
