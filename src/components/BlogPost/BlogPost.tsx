import React from "react";

import TextBlock from "../TextBlock/TextBlock";
import Button from "../Button/Button";

import "./BlogPost.scss";

interface BlogPostProps {
  photo: string;
  date: string;
  title: string;
  description: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  photo,
  date,
  title,
  description,
}) => {
  return (
    <div className="blogpost">
      <img src={photo} alt="Blog Preview Image" />
      <p>{date}</p>
      <TextBlock level="h6" headingText={title} description={description} />
      <Button
        className="body2"
        text="Read More"
        variant="arrowSecondary"
        withArrow={true}
      />
    </div>
  );
};

export default BlogPost;
