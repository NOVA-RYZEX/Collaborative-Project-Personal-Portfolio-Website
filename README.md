<h1 align="center">Collaborative Project: Personal Portfolio Website</h1>

**Hey everyone!**

To kick off our collaborative journey, let’s start with a fun and practical project: creating a **Personal Portfolio Website**! This project is perfect for showcasing your skills, projects, and achievements while learning and working together.

---

<h2 align="center">Project Overview</h2>

We'll develop a personal portfolio website where each member can customize their page to highlight their unique talents. The project will include:
- **Home Page**: An introduction with a brief bio and a summary of your skills.
- **Projects Page**: A gallery showcasing your best projects with descriptions and links.
- **Blog Page**: A section to share your thoughts, tutorials, or experiences.
- **Contact Page**: A form or contact details for people to reach out to you.
- **more** as you like
- **_feel free  to use your own designs_**

---

<h2 align="center">Technologies</h2>

- **HTML/CSS**: For structuring and styling the website.
- **JavaScript**: For interactive elements and dynamic content.
- **Bootstrap/Tailwind CSS**: For responsive design and easy styling.
- **Git/GitHub**: For version control and collaboration.
- **Optional**: You can use any web development framework you like (e.g., React, Vue.js, Angular) but **remember to only push the build site files**
- **_Use what you are confortable with 👌_**

---

<h2 align="center">Recommendation</h2>

Creating a branch with your username is more beneficial for boosting your collaboration techniques and skills. It helps you learn how to manage branches, handle merge conflicts, and collaborate more effectively within a shared repository. This approach mimics real-world team projects and enhances your ability to work collaboratively on code.

---

<h2 align="center">Getting Started</h2>

1. **Fork the Repository (Optional)**: If you prefer working independently at first, fork the repository to your GitHub account.
2. **Create a Branch**: **(recommended)**
   - Clone the repository: <code>https://github.com/NOVA-RYZEX/Collaborative-Project-Personal-Portfolio-Website.git</code>
   - Create a branch with your username: `git checkout -b your-username`
   - Create Your Folder: `mkdir your-username`
   - Work on your portfolio in your branch.
      - Develop your portfolio: Use frameworks and tools you prefer (React, Vue, etc..)
         - _**If you use a framework and Bundlers for building (eg Vue,React,Webpack)**_
            - **_Example using vue_**
              1. `git checkout -b your-username`
              2. `npm create vite@latest`
              3. `name your project` **(This is what you will add to .gitignore)**__
              4. **complete your portfolio project**
              5. **Now build:** `npm run build` => `dist` dir **(specific to frameworks)**
              6. **Copy the generated static files one level-up and rename:**
                 - `cp -r dist ../your-username` **or**
                 - `mv dist ../your-username`
              7. **Create a .gitignore** and add the **_name-of-your-project/_**
              8. `git add .`, `git commit -m "your message"`, `git push -u your-username`
      - **__Already have a portfolio?__**
          - JUST create your branch: `git checkout -b your-username`
          - Copy your portfolio and rename to your username: `cp -r path/to/folder your-username`
          - `git add .`, `git commit -m "your message"`, `git push -u your-username`
      - **Make sure your portfolio is a **static site** (only push the build files)**
3. **Push Your Branch**:
   - Push your changes to your branch: `git push -u origin your-username`
4. **Collaborate**:
   - Share your branch and collaborate with others. Review and discuss changes before merging.
5. **Pull Requests**:
   - Once your portfolio is ready, submit a pull request to merge your branch into the main repository.

**By following this approach, we can foster a collaborative environment where everyone learns and grows together. Let’s get started!**

---

<h2 align="center">Additional Tips</h2>

- Customization: Feel free to customize your portfolio to reflect your unique style and skills.
- Responsive Design: Ensure your portfolio is responsive and looks great on all devices.
- Minimal Dependencies: Keep your project lightweight by minimizing dependencies.

<h2 align="center">Next Steps</h2>

- [Discussions here](https://github.com/NOVA-RYZEX/Collaborative-Project-Personal-Portfolio-Website/discussions)
- Feel free to share your ideas and suggestions for the project.
- Excited to see what you come up with! **Let’s make our mark with these awesome portfolio websites.**

---

<details>
  <summary>members.json</summary>

  ```json

[
  // Add your information below in the following format:
  {
     "name": "Your Name",
     "avatar": "URL to your avatar image",
     "role": "Your Role",
     "portfolio": "Link to your portfolio",
     "location": "Your Location",
     "bio": "A brief bio about yourself",
     "skills": ["Your", "Skills", "Separated", "By", "Commas"],
     "social_links": {
       "linkedin": "https://linkedin.com/in/your-profile",
       "github": "https://github.com/your-username",
       "twitter": "https://twitter.com/your-username"
     }
  },
]

```

</details>

---

**Cheers,**  
**Gideon-Yebei**
