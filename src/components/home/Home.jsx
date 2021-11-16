import Header from '../header/Header'
import SearchFilter from '../searchFilter/SearchFilter'
import CountryList from '../countryList/CountryList';

const Home = () => {
    return (
      <>
        <Header />
        <SearchFilter />
        <CountryList />
      </>
    )
}

export default Home