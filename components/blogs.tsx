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
    <div className="bg-red-700">
      <h1>hey Blog</h1>
      
    </div>
  );
};

export default Blogs;



