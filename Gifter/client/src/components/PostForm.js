import React, { useContext, useRef, useEffect } from "react"
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";


export const PostForm = (props) => {
    const { addPost } = useContext(PostContext);


    //Title, Caption, DateCreated, ImageUrl, UserProfileId
    const title = useRef(null)
    const caption = useRef(null)
    const dateCreated = useRef(null)
    const imageUrl = useRef(null)
    const userProfileId = useRef(null)

    const constructNewPost = () => {

        addPost({
            title: title.current.value,
            caption: caption.current.value,
            dateCreated: dateCreated.current.value,
            imageUrl: imageUrl.current.value,
            userProfileId: 2
        })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Post Title: </label>
                    <input type="text" id="Caption" ref={title} required autoFocus className="form-control" placeholder="Post Title" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="caption">Caption: </label>
                    <input type="text" id="Caption" ref={caption} required autoFocus className="form-control" placeholder="Caption" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="dateCreated">DateCreated: </label>
                    <input type="text" id="DateCreated" ref={dateCreated} required autoFocus className="form-control" placeholder="DateCreated" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="imageUrl">ImageUrl: </label>
                    <input type="text" id="ImageUrl" ref={imageUrl} required autoFocus className="form-control" placeholder="ImageUrl" />
                </div>
            </fieldset>
            <fieldset>
                {/* <div className="form-group">
                    <label htmlFor="userProfileId">UserProfileId: </label>
                    <input type="" id="UserProfileId" ref={userProfileId} required autoFocus className="form-control" placeholder="UserProfileId" />
                </div> */}
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewPost()
                }}
                className="btn btn-primary">
                Add Post
            </button>
        </form>
    )
}
