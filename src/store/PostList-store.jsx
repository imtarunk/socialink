import { createContext, useReducer } from "react";




export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DeletePost") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postid
    ) //filter: those post list is equal got del and not equal is savede
  } else if (action.type === "AddPost") {
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
};



// Main function : 

const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );




  const addPost = (userId, postTitle, postBody, tags) => {


    dispatchPostList({
      type: "AddPost",
      payload: {
        id: Date.now(),
        title: postTitle,
        content: postBody,
        // reactions: reactions,
        userId: userId,
        tag: tags,
      },
    });
  };

  const deletePost = (postid) => {
    console.log("clicked")
    dispatchPostList({
      type: "DeletePost",
      payload: { postid, }
    },
    )
  };


  return <>
    <PostList.Provider value={{ postList, addPost, deletePost }}>{children}

    </PostList.Provider>
  </>
}
const DEFAULT_POST_LIST = [{
  id: "88",
  title: "Post 1",
  content: "Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career.",
  reactions: 78,
  userID: "@jaiShreeRam",
  tag: ['go', 'run', 'jump', 'fuck'],
},
{
  id: "888",
  title: "Post2",
  content: "state of northern Brazil on the Atlantic and south of the Amazon; capital Belém area 481, 836 square miles(1, 247, 955 square kilometers), population 7, 581,051",
  reactions: 4,
  userID: "@kalihai620",
  tag: ['go', 'run', 'jump', 'fuck'],
},
{
  id: "99",
  title: "Post 3",
  content: "involving substitution at or characterized by two opposite positions in the benzene ring that are separated by two carbon atoms",
  reactions: 222,
  userID: "@HarhsRaiBW",
  tag: ['go ', 'run ', 'jump ', 'fuck '],
}
];



export default PostListProvider;