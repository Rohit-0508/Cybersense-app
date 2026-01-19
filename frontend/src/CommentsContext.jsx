import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
const CommentContext = createContext();

const CommentProvider = ({ children }) => {

    const [comments, setComments] = useState([])
    const { user } = useContext(AuthContext);
    const[comment,setComment]=useState('')

    useEffect(() => {
        if (user) {
            fetchComments();
        }
    }, [user]);

    



    const handleSubmit = async (content) => {
        if (!user) {
            alert('User not logged in');
            return;
        }
        const response = await axios.post('http://localhost:3000/comment', { content, user });
        try {
            if (response.status === 200) {
                setComments([...comments, response.data]);
            }
        } catch (error) {
            console.log('Some Error occured');
        }
    }

    const fetchComments = async () => {
        try {
            const response = await axios.get('http://localhost:3000/comment');
            setComments(response.data);
        } catch (error) {
            console.log('Error fetching comments', error);
        }
    };



    const deleteComment = async (commentId) => {
        const userData = JSON.parse(localStorage.getItem('user'));
        const username = userData._id
       
        try {

            await axios.delete(`http://localhost:3000/comment/${commentId}?username=${username}`);

            const response = await axios.get('http://localhost:3000/comment');
            setComments(response.data);
        } catch (error) {
            console.log('Error', error)
        }
    }

    const addReply=async(commentId,replyContent,userId,originalCommentAuthor)=>{

        const userData = JSON.parse(localStorage.getItem('user'));
        const name=userData.username;
        try{

            const response=  await axios.post(`http://localhost:3000/comment/${commentId}/replies`,{content:replyContent,user:userId,name:name,originalCommentAuthor});
            setComments(prevComments => {
                return prevComments.map(comment => {
                    if (comment._id === commentId) {
                        // Create a new comment object with updated replies array
                        return { ...comment, replies: response.data.replies };
                    }
                    return comment; // Return unchanged if not the updated comment
                });
            });
        }catch(error){
            console.log('Error adding reply');
        }
    }


    const deleteReply=async(commentId,replyId)=>{
        console.log(replyId);
        const response= await axios.delete(`http://localhost:3000/comment/${commentId}/replies/${replyId}`);
        fetchComments();
        
    }

    return (
        <CommentContext.Provider value={{ handleSubmit, comments, deleteComment,comment,setComment,addReply,deleteReply }}>
            {children}
        </CommentContext.Provider>
    )
}

export { CommentContext, CommentProvider };