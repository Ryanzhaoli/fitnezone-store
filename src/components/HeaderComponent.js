import React, { useState } from 'react'
import '../style/Header.css'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { useStateValue } from '../context/StateProvider'

function Header() {
  const [{ basket }] = useStateValue()

  const [isNavOpen, setNav] = useState(false)

  const [isModalOpen, setModal] = useState(false)

  const toggleNav = () => setNav(!isNavOpen)

  const toggleAccountModal = () => setModal(!isModalOpen)

  const handleLogin = (e) => {
    alert('Welcome Back !')
    toggleAccountModal()
    e.preventDefault()
  }

  return (
    <React.Fragment>
      <Navbar dark sticky='top' expand='lg'>
        <div className='container'>
          <NavbarBrand className='navbarBrand' href='#'>
            <img
              src='https://raw.githubusercontent.com/jijizaza999/fitnezone-store/master/public/assets/images/logo.png'
              height='50px'
              width='60px'
              alt='Fitnezone Logo'
            />
            <span className='brandName d-none d-md-block'>Fitnezone</span>
          </NavbarBrand>

          <span className='nav-text order-lg-last'>
            <span className='customBtn' onClick={toggleAccountModal}>
              <i className='fa fa-sign-in fa-lg' />
              In
            </span>
          </span>

          <Link className='order-lg-last' to='/basket'>
            <span className='customBtn mr-2'>
              <span className='cartItemCount'> {basket?.length}</span>
              <AddShoppingCartIcon className='cartIcon' />
            </span>
          </Link>

          <NavbarToggler className='bg-dark' onClick={toggleNav} />
          <Collapse navbar isOpen={isNavOpen}>
            <Nav navbar className='mx-auto'>
              <NavItem className='nav-item'>
                <NavLink className='nav-link' to='/home'>
                  <i className='fa fa-home fa-lg text-dark' /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/aboutus'>
                  <i className='fa fa-info fa-lg text-dark' /> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav-link' to='/contact'>
                  <i className='fa fa-address-card fa-lg text-dark' /> Contact
                  Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>

      <Modal isOpen={isModalOpen} toggle={toggleAccountModal}>
        <ModalHeader toggle={toggleAccountModal}>Account</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <Label htmlFor='username'>Username</Label>
              <Input type='text' id='username' name='username' />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='password'>Password</Label>
              <Input type='password' id='password' name='password' />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='checkbox' name='remember' />
                Remember me
              </Label>
            </FormGroup>
            <Button
              className='offset'
              type='submit'
              value='submit'
              color='primary'
            >
              Login
            </Button>
            <br />
            Not a member ? {' '}
            <Link to=''>Register</Link>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  )
}

export default Header
