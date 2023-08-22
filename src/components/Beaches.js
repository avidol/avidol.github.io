import React from "react";
import BeachesData from "../data/beaches";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// import Button from 'react-bootstrap/Button';
// import { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import $ from 'jquery';



function Beaches() {
    const imagePath = "/images/";


    // const [setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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


    return (
        <>
            <CardGroup>
                {
                    BeachesData.map((item) => {
                        return (


                            <Card style={{ width: '22rem' }} >
                                <img src={`${imagePath}${item.pictureName}`} alt='Avijits Travel Blog' width="560" height="300" />
                                <Card.Body>
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

                        );
                    })
                }
            </CardGroup>

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
export default Beaches;