import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { showRequest } from '../actions/shows'

class ShowPage extends PureComponent {
  constructor (props) {
    super(props)

    this.props.showRequest(this.props.match.params.id)
  }

  renderPersons (cast) {
    return (
      <section className="results">
        {
          cast.map(({ person }) => (
            <article className="results-item" key={person.name}>
              <h4>{person.name}</h4>
              {person.image &&
              <img src={person.image.original} alt={person.name} />}
            </article>
          ))
        }
      </section>
    )
  }

  render () {
    const { isFetching, film } = this.props

    return (
      <div className="ShowPage">
        {isFetching
          ? <p>Поиск...</p>
          : <div className="film" key={film.id}>
              <h3>{film.name}</h3>
              {film.image && <img src={film.image.original} alt={film.name} />}
              <div dangerouslySetInnerHTML={{ __html: film.summary }} />
              {film._embedded && film._embedded.cast && this.renderPersons(film._embedded.cast)}
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.shows.isFetching,
  film: state.shows.film
})

const mapDispatchToProps = {
  showRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage)