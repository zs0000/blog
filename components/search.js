import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import styles from './search.module.css'

export default function Search() {

  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = (query) => `/api/search?q=${query}`

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query.toLowerCase())
    if (query.length) {
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })
    } else {
      setResults([])
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div
      className="container flex justify-start items-start w-full"
      ref={searchRef}
    >
      <input
        className="border border-gray-600 text-center border-opacity-40 w-10/12 py-2 rounded-xl bg-gray-200"
        onChange={onChange}
        onFocus={onFocus}
        placeholder='Search Posts..'
        type='text'
        value={query}
        maxLength="30"
      />
      { active && results.length > 0 && (
        
        <ul className={styles.results}>
          {results.map(({ id, title }) => (
            <li className="py-4 bg-gray-900 bg-opacity-90 hover:bg-opactity-100 hover:bg-green-800 hover:transition-colors hover:duration-200 text-yellow-100 md:text-center md:text-xl px-2 font-bold border-b border-gray-600 border-opacity-60s" key={id}>
              <Link href={`/posts/${id}`} >
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) }
    </div>
  )
}