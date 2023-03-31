import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Blog.css";

const Blog = ({ title, summary, content, image, imageF }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMore = () => {
    setShowFullContent(true);
    document.body.style.overflow = "hidden"; // disable scrolling
  };

  const handleClose = () => {
    setShowFullContent(false);
    document.body.style.overflow = "auto"; // enable scrolling
  };

  return (
    <div className="blog">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-summary">{summary}</p>
      <img className="blog-image" src={imageF} alt="Blog Image" />

      {!showFullContent && (
        <button className="blog-read-more" onClick={handleReadMore}>
          Read More
        </button>
      )}
      {showFullContent && (
        <div className="blog-full-content">
          <button className="blog-close" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div
            className="blog-content"
            style={{ height: "400px", overflowY: "auto" }}
          >
            <p>{content}</p>
            <img className="blog-image" src={image} alt="Blog Image" />
          </div>
        </div>
      )}
    </div>
  );
};

const blogs = [
  {
    title: "Blog Title 1",
    summary: "Blog summary 1",
    content: "Blog content 1",
    image:
      "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg",
    imageF:
      "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg",
  },
  {
    title: "Blog Title 2",
    summary: "Blog summary 2",
    content: "Blog content 2",
    image:
      "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg",
      imageF:
      "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg",
  },

  // Add more blog objects here
];

const BlogList = () => {
  return (
    <div>
      {blogs.map((blog, index) => (
        <Blog
          key={index}
          title={blog.title}
          summary={blog.summary}
          content={blog.content}
          image={blog.image}
          imageF={blog.imageF}
        />
      ))}
    </div>
  );
};

export default BlogList;
// original