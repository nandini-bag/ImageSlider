import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useGlobalContext } from "../Hooks/Context";
    
export const ImageSlider =()=>{
    const {handleNextBtn,handlePrevBtn} = useGlobalContext();

    const imgArr = [
        {
            src: '../../public/images/mathura.jpg',
            title: 'Mathura',
            description: 'Mathura is a sacred city in Uttar Pradesh, northern India. The deity Lord Krishna is said to have been born on the site of Sri Krishna Janma Bhoomi, a Hindu temple.'
        },
        {
            src: '../../public/images/amritsar-goldenTemple.jpg',
            title: 'Amritsar',
            description: 'Amritsar is a city in the northwestern Indian state of Punjab, 28 kilometers from the border with Pakistan. At the center of its walled old town, the gilded Golden Temple is the holiest gurdwara of the Sikh religion.'
        },
        {
            src: '../../public/images/kerala.jpg',
            title: 'Kerala',
            description: 'Kerala, a state situated on the tropical Malabar Coast of southwestern India,is one of the most popular tourist destinations in the. Kerala is famous especially for its ecotourism initiatives and beautiful backwaters.'
        },
        {
            src: '../../public/images/hawa-mahal-jaipur.jpg',
            title: 'hawa mahal',
            description: 'The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India.Also known as the “ palace of winds “ has one of the best architecture in Jaipur.'
        },
        {
            src: '../../public/images/da-lake-kashmir.jpg',
            title: 'Mathura',
            description: 'Mathura is a sacred city in Uttar Pradesh, northern India. The deity Lord Krishna is said to have been born on the site of Sri Krishna Janma Bhoomi, a Hindu temple.'
        },
        {
            src: '../../public/images/red-fort-delhi.jpg',
            title: 'red-fort',
            description: 'Mathura is a sacred city in Uttar Pradesh, northern India. The deity Lord Krishna is said to have been born on the site of Sri Krishna Janma Bhoomi, a Hindu temple.'
        },
        {
            src: '../../public/images/ram-mandir-ayodhya.jpg',
            title: 'ram-mandir',
            description: 'Mathura is a sacred city in Uttar Pradesh, northern India. The deity Lord Krishna is said to have been born on the site of Sri Krishna Janma Bhoomi, a Hindu temple.'
        },
        {
            src: '../../public/images/rajastan.jpg',
            title: 'rajasthan',
            description: 'Mathura is a sacred city in Uttar Pradesh, northern India. The deity Lord Krishna is said to have been born on the site of Sri Krishna Janma Bhoomi, a Hindu temple.'
        },
        {
            src: '../../public/images/konark-odisha.jpg',
            title: 'konark-temple',
            description: 'Mathura is a sacred city in Uttar Pradesh, northern India. The deity Lord Krishna is said to have been born on the site of Sri Krishna Janma Bhoomi, a Hindu temple.'
        },
    ];
    
    return(
        <>
            <div className="container">
            <div className="slide">
            {   imgArr.map((celm, index) => (
                     <div className="item" key={index} style={{backgroundImage:`url(${celm.src})`}}>
                        <div className="item-content">
                            <h2 className="common-heading">{celm.title}</h2>
                            <p>{celm.description}</p>
                            <button className="btn">explore</button>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className="slide-button">
                <button className="btn prev" onClick={handlePrevBtn}><FaArrowLeft /></button>
                <button className="btn next" onClick={handleNextBtn}><FaArrowRight/></button>
            </div>
            </div>
        </>
    );
}