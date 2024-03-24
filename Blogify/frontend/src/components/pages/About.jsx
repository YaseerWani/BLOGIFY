import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        {/* <h2>About</h2> */}
        <p>
          This is a MERN Stack Blogging Web Application I've created. Welcome to my MERN Stack Blogging Web Application! In this project, I've leveraged the power of modern web development technologies to create a robust platform for blogging enthusiasts. Let's take a closer look at the architecture and features that make this application stand out.
        </p>
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
            <li>User Registration and Authentication: Users can register for an account and log in securely using JWT-based authentication.</li>
            <li>Create, Read, Update, Delete (CRUD) Operations: Authenticated users can create, edit, and delete their blog posts. They can also view all blogs or filter them based on categories.</li>
            <li>User Profiles: Users have their own profiles where they can manage their personal information, including profile picture, contact details, and educational background.</li>
            <li>Image Upload: Support image upload functionality for blog posts, utilizing cloudinary for efficient image management.</li>
            <li>Error Handling: Implemented robust error handling mechanisms to ensure smooth operation of the application and provide informative error messages to users.</li>
          </ul>
        </div>
        <div className="conclusion">
          <h3>Conclusion:</h3>
          <p>
            My MERN Stack Blogging Web Application provides a powerful platform for bloggers to create, publish, and manage their content with ease. With its intuitive user interface, efficient backend architecture, and key features, my application aims to streamline the blogging experience for users. Whether you're a seasoned blogger or just getting started, I invite you to explore my platform and unleash your creativity through the art of blogging. Happy Writing!
          </p>
        </div>
      </div>
    </article>
  );
};

export default About;
