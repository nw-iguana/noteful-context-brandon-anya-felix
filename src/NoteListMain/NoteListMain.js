import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import './NoteListMain.css'
import AppContext from '../AppContext'

 class NoteListMain extends React.Component {
  // static defaultProps = {
  //   notes: [],
  // }
  static contextType = AppContext;
  render() {
    console.log(this.context, this.props)
    return (
      <section className='NoteListMain'>
      <AppContext.Consumer> 
        {(value) => (
        <div>
          <ul>
            {this.context.notes.map(note =>
              <li key={note.id}>
                <Note
                  id={note.id}
                  name={note.name}
                  modified={note.modified}
                />
              </li>
            )}
          </ul>
          <div className='NoteListMain__button-container'>
            <CircleButton
              tag={Link}
              to='/add-note'
              type='button'
              className='NoteListMain__add-note-button'
            >
              <FontAwesomeIcon icon='plus' />
              <br />
              Note
            </CircleButton>
          </div>
        </div>  
        )}
        </AppContext.Consumer>
      </section>
  )

  }
}
export default NoteListMain