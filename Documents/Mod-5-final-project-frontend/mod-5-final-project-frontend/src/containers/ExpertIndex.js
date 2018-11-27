
import React from "react"
import ExpertPreviewContainer from "./ExpertPreviewContainer"
const ExpertsURL = "http://localhost:3000/experts/"

class ExpertIndex extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      experts: null
    }
  }
  componentDidMount(){
    fetch(ExpertsURL)
    .then(resp => resp.json())
    .then(data => this.setState({experts:data}))
  }
  render(){
    return(
      <div>
        {this.state.experts ? <ExpertPreviewContainer experts = {this.state.experts}/> : null}
      </div>
    )


  }
}

export default ExpertIndex
