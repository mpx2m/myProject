import React from 'react'
import '../../stylesheets/ProjectCard.scss'

const ProjectCard = ({ imgurl, title, type, introduction, buttonurl }) => {
  return (
    <a className="carlink" href={buttonurl}>
      <div className="card cardhover">
        <img class="card-img-top cardimgtrans" top width="100%" src={'/assets/img/' + imgurl} alt={title} />
        <div className="card-body">
          <h5 className="card-title" >{title}</h5>
          <p className="card-text">{introduction}</p>
          {(type === "HTML5") ?
            <button className="btn btn-outline-secondary btn-sm" href={buttonurl}>
              {type}
            </button> :
            (type === "CSS" || type === "Redux" || type === "reactstrap") ?
              <button className="btn btn-outline-primary btn-sm" href={buttonurl}>
                {type}
              </button> :
              (type === "MongoDB") ?
                <button className="btn btn-outline-success btn-sm" href={buttonurl}>
                  {type}
                </button> :
                (type === "Elasticsearch") ?
                  <button className="btn btn-outline-info btn-sm" href={buttonurl}>
                    {type}
                  </button> :
                  <button className="btn btn-outline-dark btn-sm" href={buttonurl}>
                    {type}
                  </button>
          }
        </div>
      </div>
    </a>
  )
}
export default ProjectCard;
