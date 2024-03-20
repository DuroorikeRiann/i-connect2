import './styles.css'
import Hero from "../../components/hero-section/Hero"
import { categories } from "../../constants"
import { useState } from 'react'

const Categories = () => {

    const [activeTag, setActiveTag] = useState(0)

    // const handleActiveTag () => {

    // }

  return (
    <>
        <section className="cate-page">
            <Hero/>
            <div className="tags-wrapper padding-y">
                <div className={`tags ${activeTag === 0 ? 'active ' : ''}`} onClick={() => setActiveTag(0)}>
                        All Categories
                </div>
                {categories.map((item) => (
                    <div key={item.id} className={`tags ${activeTag  === item.id ? 'active' : ''}`} onClick={() => setActiveTag(item.id)}>
                        {item.name}
                    </div>
                ))}
            </div>
        </section>
    </>
  )
}

export default Categories