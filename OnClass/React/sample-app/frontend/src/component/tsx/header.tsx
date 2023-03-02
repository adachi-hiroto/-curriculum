import React from 'react'

const header = () => {
  return (
    <header>
        <div className='logo'>
            <h1>news</h1>
        </div>

        <nav>
            <ul>
                <li>
                    <a href="#">TOP</a>
                </li>
                <li>
                    <a href="#">NEW</a>
                </li>
                <li>
                    <a href="#">BEST</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default header