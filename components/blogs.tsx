"use client";
import React, { useState, useEffect } from "react";

const Blogs = () => {
  const [articles, setArticles] = useState<any[]>([]);

//   const Secret_KEY = process.env.MY_DEV_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.hashnode.com/v1/me/articles",
          {
            headers: {
              Authorization: `a078b66b - af02 - 4085 - a24c - f1e451004973`,
            },
          }
        );
        const data = await response.json();
        setArticles(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {articles.map((article: any) => (
        <div key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>
            <a href={article.url}>Read more</a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
