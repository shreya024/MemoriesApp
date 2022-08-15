import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  FormHelperText
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import css from "./Form.module.css";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: {
      name: "",
      content: ""
    },
    touchedCreator: false,
    touchedTitle: false,
    touchedMessage: false,
    touchedTags: false,
    touchedFile: false
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: {
        name: "",
        content: ""
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      (postData.creator !== "" ||
        postData.creator.match(/^[0-9]+$/) == null ||
        postData.creator.length < 30) &&
      (postData.message !== "" ||
        postData.message.match(/^[0-9]+$/) == null ||
        postData.message.length < 200) &&
      postData.selectedFile.name.match(
        /\.(jpg|jpeg|png|gif|mov|mp4|webm|m4v)$/
      ) &&
      postData.tags !== "" &&
      (postData.title !== "" ||
        postData.title.match(/^[0-9]+$/) == null ||
        postData.title.length < 70)
    ) {
      setPostData({ ...postData, tags: postData.tags.split(",") });
      if (currentId === 0) {
        dispatch(createPost(postData));
        clear();
      } else {
        dispatch(updatePost(currentId, postData));
        clear();
      }
    } else {
      setPostData({
        ...postData,
        touchedCreator: true,
        touchedTitle: true,
        touchedMessage: true,
        touchedTags: true,
        touchedFile: true
      });
    }
  };

  return (
    <Paper className={css.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${css.root} ${css.form}`}
        onSubmit={handleSubmit}>
        <Typography variant="h6" className={css.head}>
          {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
        </Typography>
        {/* <div className={css.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div> */}
        <TextField
          className={css.other}
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          error={
            (postData.touchedCreator && postData.creator === "") ||
            postData.creator.match(/^[0-9]+$/) != null ||
            postData.creator.length > 30
          }
          helperText={
            postData.touchedCreator && postData.creator === ""
              ? "Enter a creator!"
              : postData.creator.match(/^[0-9]+$/) != null
              ? "Only Numbers are not accepted"
              : postData.creator.length > 30
              ? "Creator name should be less than 30 characters"
              : " "
          }
          required
          onChange={(e) =>
            setPostData({
              ...postData,
              creator: e.target.value,
              touchedCreator: true
            })
          }
        />
        <TextField
          className={css.other}
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          error={
            (postData.touchedTitle && postData.title === "") ||
            postData.title.match(/^[0-9]+$/) != null ||
            postData.title.length > 50
          }
          helperText={
            postData.touchedTitle && postData.title === ""
              ? "Enter a title!"
              : postData.title.match(/^[0-9]+$/) != null
              ? "Only Numbers are not accepted"
              : postData.title.length > 50
              ? "Title should be less than 50 characters"
              : " "
          }
          required
          onChange={(e) =>
            setPostData({
              ...postData,
              title: e.target.value,
              touchedTitle: true
            })
          }
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
          error={
            (postData.touchedMessage && postData.message === "") ||
            postData.message.match(/^[0-9]+$/) != null ||
            postData.message.length > 200
          }
          helperText={
            postData.touchedMessage && postData.message === ""
              ? "Enter a message!"
              : postData.message.match(/^[0-9]+$/) != null
              ? "Only Numbers are not accepted"
              : postData.message.length > 200
              ? "Message should be less than 200 characters"
              : " "
          }
          required
          onChange={(e) =>
            setPostData({
              ...postData,
              message: e.target.value,
              touchedMessage: true
            })
          }
        />
        <TextField
          className={css.other}
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          error={postData.touchedTags && postData.tags === ""}
          helperText={
            postData.touchedTags && postData.tags === ""
              ? "Enter some tags!"
              : " "
          }
          required
          onChange={(e) =>
            setPostData({
              ...postData,
              tags: e.target.value,
              touchedTags: true
            })
          }
        />
        <div className={css.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            required
            onDone={(uploadedFile) => {
              console.log(uploadedFile);
              setPostData({
                ...postData,
                selectedFile: {
                  name: uploadedFile.name,
                  content: uploadedFile.base64
                },
                touchedFile: true
              });
            }}
          />
          <FormHelperText
            error={
              postData.touchedFile &&
              !postData.selectedFile.name.match(
                /\.(jpg|jpeg|png|gif|mov|mp4|webm|m4v)$/
              )
            }>
            {postData.touchedFile &&
            (postData.selectedFile.content === "" ||
              !postData.selectedFile.name.match(
                /\.(jpg|jpeg|png|gif|mov|mp4|webm|m4v)$/
              ))
              ? "Enter a valid file!"
              : " "}
          </FormHelperText>
        </div>
        <Button
          className={css.buttonSubmit}
          variant="contained"
          color="primary"
          size="small"
          type="submit">
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
