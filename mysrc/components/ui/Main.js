import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../../stylesheets/Main.scss'

import ProjectCard from './ProjectCard.js'


const Main = ({projects=[]}) =>
    <Container className="conspace">
        <Row>
            {projects.map((project,i)=>
                <Col key={i} className="colspace" sm="6" md="4" xl="3"><ProjectCard {...project}/></Col>
            )}
        </Row>
    </Container>

export default Main
