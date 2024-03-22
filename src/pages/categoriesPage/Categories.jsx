import './styles.css'
import Hero from "../../components/hero-section/Hero"
import Button from "../../components/button/Button"
import { categories, categoriesTag } from "../../constants"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import arrowSvg from '../../assets/svg/arrow.svg'

const Categories = () => {

    const [activeTag, setActiveTag] = useState(0)

    // const handleActiveTag () => {

    // }

  return (
    <>
        <div id="top"></div>
        <section className="cate-page">
            <Hero/>

            <div className="tags-wrapper padding-y">
                <div className={`tags ${activeTag === 0 ? 'active ' : ''}`} onClick={() => setActiveTag(0)}>
                        All Categories
                </div>
                {categoriesTag.map((item) => (
                    <Link to={`/categories/${item.id}`} key={item.id} className={`tags ${activeTag  === item.id ? 'active' : ''}`} onClick={() => setActiveTag(item.id)}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </section>

        {/* heading/intro */}
        <section className='all-cate-intro'>
            <h2>
                All Categories
            </h2>
            <div>
                <p>
                Get Handy and Talented professionals in every area to get your work done easier and faster. We are here to  to ease you of the stress of searching for Service Providers
                </p>
            </div>
        </section>

        {/* categories */}
        <section className='each-cate'>
            {categories.map((category) => (
                <div key={category.id} >
                    <div className='cate-nav-area'>
                        <h2>{category.id}</h2>
                        <Link to={`/categories/${category.id}`} className='see-more'>View More <img src={arrowSvg} alt="" /></Link>
                    </div>
                    <div className='providers'>
                    {category.providers.slice(0, 3).map((detail, index) => (
                        <div key={index} className='provider-card'>
                            <div className="img-container">
                            <img src={detail.imgUrl} alt="business image" />
                            </div>
                            <h3 className='h3'>{detail.name}</h3>
                            <p>{detail.intro}</p>
                            <div className='detail-btn'>
                                <Link to="/"><Button text="View Details"/></Link>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            ))}
        </section>
        
    </>
  )
}

export default Categories