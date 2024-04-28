import React from 'react'
import MyButton from '../utils/MyButton'
import { Zoom } from 'react-awesome-reveal'


const Pricing = () => {

    const priceState = {
        prices: [100, 150, 200],
        position: ['Balcony', 'Medium', 'Star'],
        desc: [
            ' Elevate your experience with our exclusive Balcony tickets, offering premium views and a heightened perspective of the event.',
            'Our Medium tickets strike the perfect balance, providing just the right blend of affordability and amenities for an enjoyable event experience.',
            'Step into the spotlight with our Star tickets, granting you VIP access and unparalleled perks for a truly stellar event outing.'
        ],
        linkto: ['http://sales.b', 'http://sales/m', 'http://sales.s'],
        delay: [500, 0, 500]
    }

    const showBoxes = () => (
        priceState.prices.map((box, index) => (
            <Zoom key={index} className="pricing_item" delay={priceState.delay[index]}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${priceState.prices[index]}</span>
                        <span>{priceState.position[index]}</span>
                    </div>
                    <div className="pricing_description">
                        {priceState.desc[index]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            style={{
                                color: '#ffffff'
                            }}
                            link={priceState.linkto[index]}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    )


    return (
        <div className='bck_black'>
            <div className='center_wrapper pricing_section'>
                <h2>Pricing</h2>
                <div className="pricing_wrapper">
                    {showBoxes()}
                </div>
            </div>
        </div>
    )
}

export default Pricing
