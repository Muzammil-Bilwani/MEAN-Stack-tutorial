# Lets Learn Git

<img src="https://miro.medium.com/v2/resize:fit:600/0*VcMPr1unIjAIHw2j.jpg" />

## What is Git?

Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for source code management in software development, but it can be used to keep track of changes in any set of files. As a distributed revision control system it is aimed at speed, data integrity, and support for distributed, non-linear workflows.

## What is GitHub?

GitHub is a web-based hosting service for version control using Git. It is mostly used for computer code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.

## What is Git used for?

Git is a version control system that is used for tracking changes in source code during software development. It allows developers to collaborate on the same codebase, keep track of changes made to the code over time, and easily revert back to previous versions if necessary. Git is also used to manage project workflows and to facilitate communication between team members.

Here's an example of how Git might be used in real life:

Imagine a team of developers working on a web application. They use Git to keep track of all changes made to the codebase, which is stored on a central repository. Each developer works on their own local copy of the codebase and pushes their changes to the central repository when they are ready to be shared.

If a developer makes a mistake or introduces a bug into the code, they can use Git to easily revert back to a previous version of the code to fix the issue. Git also allows developers to collaborate on the same codebase without overwriting each other's changes. This means that multiple developers can work on different features of the application simultaneously, without interfering with each other's work.

Overall, Git is an essential tool for software development teams, helping to improve collaboration, productivity, and code quality.

<br/>
<img src="https://miro.medium.com/v2/resize:fit:348/1*_n16mieVkVFP0YazJVARPw.png" />
<br/>

## Lets start learning Git

### 1. Install Git

- [Download Git](https://git-scm.com/downloads)
- Install Git and check the version

```bash
git --version
```

### 2. Configure Git

- Configure your name and email

```bash
git config --global user.name "Your Name"
git config --global user.email "
```

- Check the configuration

```bash
git config --list
```

### 3. Create a repository

- Create a new directory

```bash
mkdir git-test
```

- Change the current working directory to the newly created directory

```bash
cd git-test
```

- Initialize an empty Git repository

```bash
git init
```

- Create a new file

```bash
touch README.md
```

- Add some content to the file

```bash
echo "# Git Test" >> README.md
```

- Check the status of the repository

```bash
git status
```

- Add the file to the staging area

```bash
git add README.md
```

- Commit the file

```bash
git commit -m "Add README.md"
```

- Check the log

```bash
git log
```

### 4. Clone a repository

- Clone a repository

```bash
git clone <REPO_URL>
```

- Change the current working directory to the newly created directory

```bash
cd <REPO_NAME>
```

### 5. Add a remote

- Add a remote

```bash
git remote add origin <REPO_URL>
```

- Check the remote

```bash
git remote -v
```

### 6. Push to remote

- Push to remote

```bash
git push origin master
```

### 7. Pull from remote

- Pull from remote

```bash
git pull origin master
```

### 8. Branching

- Create a new branch

```bash
git branch <BRANCH_NAME>
```

- Switch to the newly created branch

```bash
git checkout <BRANCH_NAME>
```

- Create a new branch and switch to it

```bash
git checkout -b <BRANCH_NAME>
```

- Merge a branch

```bash
git merge <BRANCH_NAME>
```

- Delete a branch

```bash
git branch -d <BRANCH_NAME>
```

### 9. Stashing

- Stash changes

```bash
git stash
```

- List stashed changes

```bash
git stash list
```

- Apply stashed changes

```bash
git stash apply
```

- Delete a stash

```bash
git stash drop
```

## Git Cheat Sheet

[Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

## Git Commands

[Git Commands](https://git-scm.com/docs)

## GIT Tutorial

- [Git Tutorial](https://www.tutorialspoint.com/git/index.htm)
- [Muzammil Bilwani - Git Tutorial](https://gitgoahead.muzammilbilwani.com/)
