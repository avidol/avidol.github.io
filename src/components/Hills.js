import React from "react";
import HillsData from "../data/hills";
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function Hills() {
    const imagePath = "/images/";
    const columnsPerRow = 4;

    const imgArr = [

        {
            className: 'img-size',
            src:
                'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1391&q=80',
            alt: 'Third slide'
        },
        {
            className: 'img-size',
            src:
                'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            alt: 'Third slide'
        },
        {
            className: 'img-size',
            src:
                'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            alt: 'Third slide'
        }
    ];

    


    const getColumnsForRow = () => {
        let items = HillsData.map((item, index) => {
            return (
                <Col md={4}>
                    <Card key={item.id} sx={{ height: "100%" }}>
                        <Card.Body>
                            <img src={`${imagePath}${item.pictureName}`} alt='Avijits Travel Blog' width="500" height="300" />
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <div class='row mb-4'>
                                <div class='col text-center'>
                                    <button
                                        type='button'
                                        className='btn btn-primary '
                                        data-toggle='modal'
                                        data-target='#largeModal'
                                    >
                                        More on {item.name}
                                    </button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            );

        });
        return items;
    };

    return (
        <>

            <Container fluid >
                <Row xs={1} md={columnsPerRow}>
                    {getColumnsForRow()}
                </Row>
            </Container>
            );

            <div
                className='modal fade'
                id='largeModal'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='basicModal'
                aria-hidden='true'
            >
                <div className='modal-dialog modal-lg'>
                    <div className='modal-content'>
                        <div className='modal-body'>
                            {/* Carousel */}
                            <div
                                id='myCarousel'
                                className='carousel slide'
                                data-ride='carousel'
                            >
                                <ol className='carousel-indicators'>
                                    <li
                                        data-target='#myCarousel'
                                        data-slide-to='0'
                                        className='active'
                                    ></li>
                                    <li data-target='#myCarousel' data-slide-to='1'></li>
                                    <li data-target='#myCarousel' data-slide-to='2'></li>
                                </ol>
                                <div className='carousel-inner'>
                                    {imgArr.map((item, index) => (
                                        <div
                                            key={index}
                                            className={
                                                index === 0 ? 'carousel-item active' : 'carousel-item'
                                            }
                                        >
                                            <img
                                                className={item.className}
                                                src={item.src}
                                                alt={item.alt}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <a
                                    className='carousel-control-prev'
                                    href='#myCarousel'
                                    role='button'
                                    data-slide='prev'
                                >
                                    <span
                                        className='carousel-control-prev-icon'
                                        aria-hidden='true'
                                    >
                                        {' '}
                                    </span>
                                    <span className='sr-only'>Previous</span>
                                </a>
                                <a
                                    className='carousel-control-next'
                                    href='#myCarousel'
                                    role='button'
                                    data-slide='next'
                                >
                                    <span
                                        className='carousel-control-next-icon'
                                        aria-hidden='true'
                                    ></span>
                                    <span className='sr-only'>Next</span>
                                </a>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-default'
                                data-dismiss='modal'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );

}
export default Hills;