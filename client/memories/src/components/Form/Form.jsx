import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
// import Carousel from "react-simply-carousel";
import css from "./Form.module.css";
import { createPost, updatePost } from "../../actions/posts";
import { Carousel } from "react-carousel-minimal";

const Form = ({ currentId, setCurrentId }) => {
  const [cdata,setCdata]=useState([])
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFiles: [],
  });

  useEffect(()=>{
     CarouselImg();
  },[postData.selectedFiles])

  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) 
    {setPostData(post)};
    if (postData.selectedFiles){
    CarouselImg();
    }
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFiles: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

   const CarouselImg=()=>{
    const ddata=[]
    for (let i=0;i< postData.selectedFiles.length;i++ ) {
      
        ddata.push({ image: postData.selectedFiles[i].base64,caption: postData.title })
     
    }
    setCdata(ddata);
   

   }

  return (
    <Paper className={CSSKeyframeRule.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${css.root} ${css.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" className={css.head}>
          {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
        </Typography>
        <div className={css.fileInput}></div>
        <TextField
          className={css.other}
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          className={css.other}
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          className={css.other}
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          className={css.other}
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />

        <div className={css.fileInput}>
          <FileBase
            type="file"
            multiple={true}
            onDone={(base64) => {
              setPostData({ ...postData, selectedFiles: base64 });
            }}
          />
        </div>

        { cdata.length>0 ? ( 
          <Carousel
            data={cdata}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        ) : (
          <></>
        )}

        <Button
          className={css.buttonSubmit}
          variant="contained"
          color="primary"
          size="small"
          type="submit"
        >
          Submit
        </Button>
        <Button
          className={css.buttonClear}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          //fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
