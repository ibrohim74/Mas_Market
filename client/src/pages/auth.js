import React from 'react';
import  {Container,Card} from "react-bootstrap";

const Auth = () => {
    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54}}
            >
<Card>
<Form></Form>
</Card>
            </Container>
        </div>
    );
};

export default Auth;
