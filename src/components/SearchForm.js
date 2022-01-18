import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setsearchTerm } = useGlobalContext()
  const searchValue = useRef("")
  const handleChange = () => { setsearchTerm(searchValue.current.value) }

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search your favourite cocktail</label>
          <input type="text" id="name" ref={searchValue} onChange={handleChange} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
