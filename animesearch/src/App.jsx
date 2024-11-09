import { useState, useEffect } from 'react'
import axios from 'axios'
import Content from '/Components/Content'
import Filter from './Components/Filter'
import 'style.css'

const App = () => {
	const [animes, setAnimes] = useState([])
	const [allAnimes, setAllAnimes] = useState([])
	const [Filter, setNewFilter] = useState('')

	useEffect(() => {
		axios
		.get('https://api.jikan.moe/v4/anime')
		.then((response) => {
			console.log('Fetch successful')
			setAllAnimes(response.data)
		})
	}, [])

	const handleFilterChange = (event) => {
		const filter = event.target.value
		setNewFilter(filter)

		if (filter){
			const regex = new RegExp(filter, 'i')
			const filteredAnimes = allAnimes.filter((country) => {
				country.name.common.match(regex)
			})
			setAnimes(filteredAnimes)
		} else {
			setAnimes([])
		}
	}
}