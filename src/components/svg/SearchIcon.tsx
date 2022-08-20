import React from 'react'

const SearchIcon: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<svg id="search-normal" xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} fill="currentColor" viewBox="0 0 16 16">
			<path id="Vector" d="M6.827,13.654a6.827,6.827,0,1,1,6.827-6.827A6.836,6.836,0,0,1,6.827,13.654ZM6.827,1a5.828,5.828,0,1,0,5.828,5.828A5.834,5.834,0,0,0,6.827,1Z" transform="translate(0.838 0.838)" fill="currentColor" />
			<path id="Vector-2" data-name="Vector" d="M1.842,2.345A.5.5,0,0,1,1.487,2.2L.146.856A.5.5,0,0,1,.856.146L2.2,1.487a.506.506,0,0,1,0,.711A.5.5,0,0,1,1.842,2.345Z" transform="translate(12.817 12.817)" fill="currentColor" />
			<path id="Vector-3" data-name="Vector" d="M0,0H16V16H0Z" fill="none" opacity="0" />
		</svg>
	)
}

export default SearchIcon