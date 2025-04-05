import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
export function Layout() {
    return (
        <div className="app">

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="/image/logo_nav.png" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>
                                <Link to="/" className="d-block">Strona g³ówna</Link>
                            </Nav.Link>
                            <NavDropdown
                                title="Zwierzêta"
                                id={`zwierzeta`}
                            >
                                <NavDropdown.Item>
                                    <Link to="/zwierzeta/koty" className="d-block">Wszystkie</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/zwierzeta/koty" className="d-block">Koty</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/zwierzeta/psy" className="d-block">Psy</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/zwierzeta/psy" className="d-block">Pozosta³e</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Adopcje"
                                id={`adopcje`}
                            >
                                <NavDropdown.Item>
                                    <Link to="/zwierzeta/koty" className="d-block">Oczekujace</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/zwierzeta/koty" className="d-block">Zatwierdzone</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/zwierzeta/psy" className="d-block">Wszystkie</Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link>
                                <Link to="/" className="d-block">Dodaj zwierzê</Link>
                            </Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success"></Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
}