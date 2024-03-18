import './style.css'
import searchIcon from '../../assets/svg/search-icon.svg'

const SearchBar = () => {
  return (
    <>
        <div className="search">
            <img src={searchIcon} alt="" />
            <input type="text" name="" id="" placeholder='What do you need help with?' />
        </div>
    </>
  )
}

export default SearchBar