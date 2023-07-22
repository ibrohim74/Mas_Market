import React, {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Context} from "../index";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
const NavbarX = () => {
    const {user} = useContext(Context);
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link style={{color:'white'}} to={SHOP_ROUTE}>КупиДевайс</Link>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button
                                variant={"outline-light"}
                                onClick={() => history(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>
                            <Button
                                variant={"outline-light"}
                                onClick={() => logOut()}
                                className="ml-2"
                            >
                                Выйти
                            </Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>

        </div>
    );
};

export default NavbarX;
