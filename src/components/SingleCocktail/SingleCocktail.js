import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import ReactModal from '../ReactModal/ReactModal';

const SingleCocktail = (props) => {
    // console.log(props)
    const { cocktail } = props;
    const { strDrink, strDrinkThumb, strCategory, strInstructions, strAlcoholic, strGlass } = cocktail;
    // console.log(strDrink)
    const { handleOrder} = props;
    
    return (
        <div className="col-md-4 mb-5">
            <Card className='h-100'>
                <Card.Img variant="top" src={strDrinkThumb} />
                <Card.Body className='text-start'>
                    <Card.Title>{strDrink}</Card.Title>
                    <Card.Title>{strCategory}</Card.Title>
                    <Card.Title>{strAlcoholic}</Card.Title>
                    <Card.Title>{strGlass}</Card.Title>
                    <Card.Text>{strInstructions.slice(0, 50)}</Card.Text>

                </Card.Body>
                <Card.Footer>
                    <Button onClick={() => handleOrder(cocktail)} className='fw-bold' variant="warning">Have A Drink</Button>
                    {/* <Button onClick={() => handleDetail(cocktail)} className='fw-bold' variant="warning">Drink Details</Button> */}
                    <ReactModal details={cocktail}></ReactModal>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default SingleCocktail;