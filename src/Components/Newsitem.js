import React from 'react'

const Newsitem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3' style={{ width: '19rem' }}>
        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: '1' }}>
            {source}
          </span>
          <img src={!imageUrl?"https://images.thequint.com/thequint%2F2023-02%2F7e6a0e05-b9da-4d4e-813a-9369c02476b2%2F4AAFCA46_A5A1_4843_BA78_D41A2E58B27A.JPG?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default Newsitem
