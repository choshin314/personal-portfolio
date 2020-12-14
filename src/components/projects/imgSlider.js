import React, {useState} from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

const ImgSlider = ({images}) => {
    const [activeImg, setActiveImg] = useState(0);
    function prevImg() {
        activeImg === 0 ? 
        setActiveImg(images.length - 1) : 
        setActiveImg(activeImg - 1);
    }
    function nextImg() {
        activeImg === images.length - 1 ? 
        setActiveImg(0) : 
        setActiveImg(activeImg + 1);
    }
    const imgStyle = {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
    }
    return (
        <ImgBox className="modal-img-box">
            {images.map((img, i) => <Img 
                key={img.title} 
                fluid={img.fluid} 
                alt={img.description} 
                style={imgStyle}
                className={activeImg === i ? "active-img" : ""}
            />)}
            <button id="prev" aria-label="previous image" onClick={prevImg}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button id="next" aria-label="next image" onClick={nextImg}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </ImgBox>
    )
}

export default ImgSlider;

const ImgBox = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    .gatsby-image-wrapper {
        opacity: 0;
        transition: opacity .3s ease-in;
    }
    .gatsby-image-wrapper.active-img {
        opacity: 1;
    }

    button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2rem;
        color: var(--navy);
        background: rgba(255,255,255,.3);
        border: none;
        cursor: pointer;
        &#next {
            right: 0;
        }
    }
`