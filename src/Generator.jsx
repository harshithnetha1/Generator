import React from 'react'
import Button from 'react-bootstrap/Button';
import style from './CSS/quote.module.css';
import { Col, Form, Row } from 'react-bootstrap';


export default function Generator(props) {
  return (
    <>
    <div className={style.background}>
        <Form>
        <Row>
            <Col>
            <h3>{props.quote}</h3>
            <h5>{props.author}</h5>
            </Col>
        </Row>
   
     <Row>
        <Col>
        <Button onClick={props.rq}>New Quote</Button>
        </Col>
    </Row>

        </Form>
        
       
    
    </div>
   
    </>
  )
}
