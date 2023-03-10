import classes from './PostItem.module.css';

const PostItem: React.FC<{
  title: string;
  name: string;
  date: string;
  text: string;
  image: string;
}> = (props) => {
  return (
    <div className={classes.item}>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <h4>Published by: {props.name}</h4>
      <p>{props.date}</p>
      <p>{props.text}</p>
    </div>
  );
};

export default PostItem;
