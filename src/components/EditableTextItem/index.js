import {Component} from 'react'
import './index.css'

class EditableTextItem extends Component {
  state = {isClicked: false, text: ''}

  edit = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  save = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {isClicked, text} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="header">Editable Text Input</h1>
          <div className="input">
            {isClicked === true ? (
              <div className="result">
                <p className="para">{text}</p>
                <button type="button" className="button" onClick={this.edit}>
                  Edit
                </button>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  value={text}
                  className="input-text"
                  onChange={this.save}
                />
                <button type="button" className="button" onClick={this.edit}>
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextItem
