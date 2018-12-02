import React from "react"
import { FaEdit } from "react-icons/fa";
import {IoIosStar, IoIosStarOutline } from "react-icons/io";

class ProfileTopInfo extends React.Component{
  render(){
    return(
    <React.Fragment>
    <div className = "row">
      {this.props.canEdit ? <div onClick = {this.props.handleEdit} className = "edit-top-info-button">
        <FaEdit/>
      </div>:null}
      <div className = "profile-picture-container offset-2">
        <img className = "profile-picture" alt = "profile" src = "https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com"/>
      </div>
      <div className = "profile-header-info">
        <div className = "row">
          <div className = "">
            <span className = "rating">{this.renderRating()}</span>
          </div>
        </div>
        <div className = "row">
          <div className = "profile-name" >
            <h4>{this.props.fullName}</h4>
          </div>
        </div>
        <div className = "row">
          <div className = "profile-subtitle">
            {this.props.jobTitle} @ {this.props.company}
          </div>
        </div>
      </div>

    </div>
    <div className = "row center-text">
      <div className = "offset-2 col-7">
        {this.props.about}
      </div>
    </div>

    </React.Fragment>
  )
}
  renderRating(){
    let stars = []
    for(let i = 0; i < this.props.averageRating; i++){
      stars.push(<IoIosStar/>)
    }
    return stars
  }
}


export default ProfileTopInfo
