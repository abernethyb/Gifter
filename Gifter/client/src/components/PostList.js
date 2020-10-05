import React, { useContext, useEffect, useState, useRef } from "react";
import { PostContext } from "../providers/PostProvider";
import Post from "./Post";

const PostList = () => {
    const { posts, getAllPosts } = useContext(PostContext);
    const [search, setSearch] = useState("")


    useEffect(() => {
        getAllPosts(search);
    }, [search]);

    return (
        <div className="container">
            <div className="search">
                <input type="text" placeholder="Search for posts" onChange={event => setSearch(event.target.value)} required autoFocus ></input>


            </div>




            <div className="row justify-content-center">
                <div className="cards-column">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostList;