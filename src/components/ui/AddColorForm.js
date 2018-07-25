import { Component } from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/AddColorForm.scss'

class AddColorForm extends Component {

    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(e) {
        const { _title, _color } = this.refs
        const { onNewColor } = this.props
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    render() {
        return (
            <div className="add-color-contrainer">
            <form className="add-color" onSubmit={this.submit}>
                <input ref="_title"
                       type="text"
                       placeholder=" 颜色名称..." required/>
                <input ref="_color"
                        placeholder=" #000000" 
                       type="color" required/>
                <button>添加颜色</button>
            </form>
            </div>
        )
    }

}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

AddColorForm.defaultProps = {
    onNewColor: f=>f
}

export default AddColorForm
