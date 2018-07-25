import { withRouter } from 'react-router'
import { Component } from 'react'
import '../../stylesheets/PatternsDetail.scss'

class PatternsDetail extends Component {
    render() {
        const { history, match } = this.props
        return (
                <div className={` patternsDetailC ${match.params.pattern}`}
                        onClick={() => history.goBack()}>
                </div>
        )
    }
}
export default withRouter(PatternsDetail)