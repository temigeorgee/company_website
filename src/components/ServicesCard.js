import React from 'react'
import {Link} from 'react-router-dom'

function ServicesCard({ label, Img, text}) {
    return (
        <>
            <li className="cards__items">
                <Link className="cards__item__link">
                <figure className="cards__item__pic-wrapper" data-category={label}>
                    <img src={Img} alt="services-img" className="cards__item__img"/>
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">
                        {text}
                    </h5>
                </div>
                </Link>

            </li>
        </>
    )
}

export default ServicesCard
