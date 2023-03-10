import Head from 'next/head';
import { useRef } from 'react';
import classes from './NewPost.module.css';

const NewPost: React.FC<{ onAddPost: ({}) => void }> = (props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLTextAreaElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredName: string = nameInputRef.current!.value;
    const enteredTitle: string = titleInputRef.current!.value;
    const enteredText: string = textInputRef.current!.value;
    let enteredImage: string = imageInputRef.current!.value;

    if (enteredImage.trim() === '') {
      enteredImage =
        'https://kinsta.com/wp-content/uploads/2017/11/how-to-start-a-travel-blog.png';
    }

    const postData: {} = {
      name: enteredName,
      title: enteredTitle,
      text: enteredText,
      image: enteredImage,
      date: new Date().toLocaleString(),
    };

    props.onAddPost(postData);
  }

  return (
    <>
      <Head>
        <title>New Post</title>
      </Head>
      <div className={classes.newPost}>
        <div className={classes.card}>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="name">Name</label>
              <input type="text" required id="name" ref={nameInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="title">Title</label>
              <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="text">Text</label>
              <textarea
                id="text"
                required
                rows={10}
                ref={textInputRef}
              ></textarea>
            </div>
            <div className={classes.control}>
              <label htmlFor="image">Image URL</label>
              <input type="url" id="image" ref={imageInputRef} />
            </div>
            <div className={classes.actions}>
              <button>Add Post</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPost;
