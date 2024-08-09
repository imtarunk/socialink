import { useContext, useRef } from "react";
import style from "./LoginForm.module.css";
import { PostList } from "../store/PostList-store";





const LoginForm = () => {

  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postbodyElement = useRef();
  const tagsElement = useRef();
  // const reactionElement = useRef();

  const handldPost = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postbody = postbodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    // const reaction = reactionElement.current.value;

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postbodyElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postbody, tags);


  }

  return (
    <form className={style.form} onSubmit={handldPost}>
      <span className={style.inputSpan}>
        <label htmlFor="Used-ID" className={style.label}>
          User ID
        </label>
        <input
          type="text"
          name="userid"
          id="title"
          placeholder="@thebodBoy"
          ref={userIdElement} />
      </span>
      <span className={style.inputSpan}>
        <label htmlFor="title" className={style.label}>
          Post Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="This is title"
          ref={postTitleElement}
        />
      </span>
      <span className={style.inputSpan}>
        <label htmlFor="Post" className={style.label}>
          Post{" "}
        </label>
        <input
          type="text"
          name="Post"
          id={style.post}
          placeholder="How you are felling today ?"
          ref={postbodyElement}
        />
      </span>
      <span className={style.inputSpan}>
        <label htmlFor="tag" className={style.label}>
          Trending tags for your post
        </label>
        <input
          type="text"
          name="tag"
          id="tag"
          placeholder="#traveling #cooking #studing #hagging"
          ref={tagsElement}
        />
      </span>
      <input className={style.submit} type="submit" />
      <span className={style.span}>
        <a href="#">reset </a>this page{" "}
      </span>
    </form>
  );
};
export default LoginForm;
