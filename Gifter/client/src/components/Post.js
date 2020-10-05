import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";

const Post = ({ post }) => {
    return (
        <Card className="m-4">
            <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
            <CardImg top src={post.imageUrl} alt={post.title} />
            <CardBody>
                <p>
                    <strong>{post.title}</strong>
                </p>
                <p>{post.caption}</p>
                {post.comments.map((comment) => (
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    by: {comment.userProfile.name}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    comment: {comment.message}
                                </td>
                            </tr>
                        </tbody>
                    </table>


                ))}



            </CardBody>
        </Card>
    );
};

export default Post;