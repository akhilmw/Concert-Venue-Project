import React from 'react'

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.3353149208988!2d77.03523438885668!3d28.609656248638228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05dd375e5a13%3A0x108adaa3abe4bd07!2sNetaji%20Subhas%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1714318123745!5m2!1sen!2sin" 
            width="100%" height="500px" style={{border : "0px"}} title='maps' allowFullScreen>
            </iframe>'

            <div className='location_tag'>
                <div>
                    Location
                </div>
            </div>
        </div>

    )
}

export default Location
