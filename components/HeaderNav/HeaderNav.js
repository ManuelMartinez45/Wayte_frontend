import { useState } from 'react'
import * as Styles from './HeaderNav.module.scss'
import { 
    Navbar,
    Container, 
    Nav, 
    Modal, 
    Form, 
    FormControl, 
    Button,
} from "react-bootstrap"
import { useAuth } from '../../context/AuthContext'

export default function HeaderNav(){ 
    const { user, signup, login, logout } = useAuth()
    const [show, setShow] = useState(false);
    const [formSubmit, setFormSubmit] = useState('Login')
    const [searchInput, setSearchInput] = useState({ searchterm: ''})

    const [ data, setData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogin = async (e) => {
        e.preventDefault()
        if(data.email.includes('@') && data.email.includes('.com') && data.password.length > 8){
            try{ 
                await login(data.email, data.password)
            } catch(err){
                console.error(err)
            }
            
            handleClose()
        }
    }

    const handleSignup = async (e) => {
        e.preventDefault()

        if(data.email.includes('@') && data.email.includes('.com') && data.password.length > 8 && data.password === data.confirmPassword){
            try{ 
                await signup(data.email, data.password)
            } catch(err){
                console.error(err)
            }
            
            handleClose()
        } 
    }

    const setFormType = (form) => {
        setFormSubmit(form)
    }

        return (
            <>
              <Navbar id={Styles.Navbar} expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/" id={Styles.logo}>Wayte</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/exercises/all" className={Styles.navLink}>
                            Exercise
                        </Nav.Link>
                        <Nav.Link href="/nutrition" className={Styles.navLink}>
                            Health &#38; Nutrition
                        </Nav.Link>
                        
                        <Nav.Item className={Styles.auth}>
                            <Nav.Item>
                                {user ? (
                                    <div onClick={logout}>
                                        Logout
                                    </div>
                                ) : 

                                <div onClick={handleShow}>
                                    Login
                                </div>
                                }
                            </Nav.Item>
                        </Nav.Item>
                    </Nav>

                    <Form action="/search" method='GET' className="d-flex">
                        <FormControl
                        onChange={(e) => setSearchInput({
                            ...searchInput,
                            searchterm: e.target.value
                        })}
                        type="search"
                        placeholder="Search"
                        className={Styles.searchBar}
                        aria-label="Search"
                        name="search"
                        id="search"
                        />
                        <Button type="submit" variant="outline-light"
                        id={Styles.searchBtn}>Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                <Modal show={show} id={Styles.modal} onHide={handleClose}>

                    <Modal.Body id={Styles.modalBody}>
                    <div id={Styles.modalHeader}>
                                <button 
                                    onClick={() => setFormType('Login')}
                                    className={formSubmit === 'Login' ? Styles.selected : ''}
                                >Login</button>
                                 <button 
                                    onClick={() => setFormType('Sign Up')}
                                    className={formSubmit === 'Sign Up' ? Styles.selected : ''}
                                 >Sign Up</button>
                            </div>
                        <Form.Group className={Styles.inputGroup}controlId='formEmail'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                onChange={(e) => setData({
                                    ...data,
                                    email: e.target.value
                                })}
                                value={data.email}
                                required
                                type='email'
                                placeholder='Email'
                            />
                        </Form.Group>
                        <Form.Group className={Styles.inputGroup} controlId='formPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={(e) => setData({
                                    ...data,
                                    password: e.target.value
                                })}
                                value={data.password}
                                required
                                type='password'
                                placeholder='Password'
                            />
                        </Form.Group>

                        {formSubmit === 'Sign Up' ? 
                        <Form.Group className={Styles.inputGroup} controlId='formConfirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            onChange={(e) => setData({
                                ...data,
                                confirmPassword: e.target.value
                            })}
                            value={data.confirmPassword}
                            required
                            type='password'
                            placeholder='Confirm Password'
                            minLength="6"
                        />
                    </Form.Group> : ''   
                    }
                    </Modal.Body>

                    <Modal.Footer id={Styles.modalFooter}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={ formSubmit === 'Sign Up' ? handleSignup : handleLogin}>
                    {formSubmit}
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
}
