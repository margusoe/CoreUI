import React, { useState, useEffect } from 'react'
const axios = require('axios')

const Banner = () => {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    const fetchBanners = async () => {
      const result = await axios.get('http://localhost:5000/banner')
      const data = result.data.banners

      setBanners(data)
    }

    fetchBanners()
  }, [])

  return (
    <>
      <div>
        {banners &&
          banners.map((banner, index) => (
            <div key={`banner${index}`}>
              <h1>{banner.bannerName}</h1>
            </div>
          ))}
      </div>
    </>
  )
}

export default Banner
