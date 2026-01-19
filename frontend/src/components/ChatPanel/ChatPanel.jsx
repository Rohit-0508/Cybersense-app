import React, { useContext, useState } from 'react';
import './Comment.css';
import { CommentContext } from '../../CommentsContext';
import del from '../../assets/delete.png';
import send from '../../assets/paper-plane.png';

const Comment = () => {
    const { deleteComment, handleSubmit, comments, comment, setComment, addReply, deleteReply } = useContext(CommentContext);
    const [showReply, setShowReply] = useState(null);
    const [reply, setReply] = useState('');
    const userData = JSON.parse(localStorage.getItem('user'));
    const storedUserName = userData._id;
    const us = userData.username;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(comment);
        setComment('');
    };

    const handleReplySubmit = (e, commentId, originalCommentAuthor) => {
        e.preventDefault();
        addReply(commentId, reply, userData._id, originalCommentAuthor);
        setReply('');
    };

    return (
        <>
            <h1 className='c'>comments : </h1>
            <div className='comment'>
                <div className="box">
                    <div className="comment-container">
                        {comments && comments.length > 0 ? (comments.map((comment, index) => (
                            
                            <div key={index} className='content-form'>
                                <div className="comment-reply-form">
                                    <div className='content-form-div'>
                                        <div className="content-reply-div">
                                            <div className='content-delete-pair'>
                                                <span className={`content-data ${comment?.user?.username === 'rohit' ? 'rohit' : ''}`}>
                                                    <h2>{`${comment.user.username}:`}</h2>
                                                    <p>{comment.content}</p>
                                                </span>
                                                {comment.user.username === us && (
                                                    <button className='del' onClick={() => deleteComment(comment._id)}>
                                                        <img src={del} alt="" />
                                                    </button>
                                                )}
                                            </div>
                                            <div>
                                                <button onClick={() => setShowReply(showReply === index ? null : index)} className='reply-btn'>
                                                    {showReply === index ? 'Hide Replies' : 'Replies >'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        showReply === index && (
                                            <div className="reply-container">
                                                <form action="submit" onSubmit={(e) => handleReplySubmit(e, comment._id, comment.user._id)}>
                                                    <textarea placeholder='Enter Your Reply' value={reply} onChange={(e) => setReply(e.target.value)}></textarea>
                                                    <button className='send' type='submit'><img src={send} alt="" /></button>
                                                </form>
                                                <div className="replies">
                                                    {comment.replies && comment.replies.map((reply, replyIndex) => (
                                                        <div key={replyIndex} className='reply'>
                                                            <h5>{`Replied by: ${reply.name}`}</h5>
                                                            <p>{reply.content}</p>

                                                            {reply.name === us && (
                                                                <button className='del' onClick={() => deleteReply(comment._id, reply._id)}>
                                                                    <img src={del} alt="" />
                                                                </button>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))) : (<p>No Comments yet.</p>)}
                    </div>
                    <div className="input-comment">
                        <form action="submit" className='input-form' onSubmit={handleFormSubmit}>
                            <textarea placeholder='Enter Your Comment' value={comment} onChange={e => { setComment(e.target.value) }}></textarea>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </>
            );
        
}

export default Comment;
