# 📰 Blog Viewer - Next.js Assignment

The goal was to build a simple blog post viewer in **Next.js** and perform testing.
![image](https://github.com/user-attachments/assets/3dc57616-4554-4bae-a732-6065ff9c68ff)


---

## 🛠️ Tech Stack

- **Next.js** (Pages Router)
- **Tailwind CSS**
- **Jest & React Testing Library**
- **JavaScript**

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MohitNamdev22/blog-viewer
cd blog-viewer
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm run dev
```

### 3️⃣ Start the Development Server
```bash
npm run dev
```
Then open your browser at:
🌐 http://localhost:3000/posts

Also added a Redirection configuration to redirect / to /posts

---

## 🌀View Fallback/Loading UI
To simulate and view the loading spinner:

1. Go to /pages/posts/index.js

2. Temporarily comment out the API call and set posts = null; manually inside getServerSideProps like this:

```bash
export async function getServerSideProps() {
  return {
    props: {
      posts: null, // simulate loading
    },
  };
}
```

3. Refresh the page → You’ll see the spinner with "Loading...".
![image](https://github.com/user-attachments/assets/d70b968f-56a8-479a-8cee-a7a3ab21f71d)


4. Revert the code after checking.

## 🧪 Running Tests

### Run all test cases:

```bash
npm run test
```

### Run with coverage report:

```bash
npm run test:coverage
```

## 📁 Folder Structure

```bash
/pages
  ├── api/posts.js            → API route with mock data
  └── posts/index.js          → Blog viewer page (with SSR)
  
/components
  ├── PostList.js             → List of clickable post cards
  └── PostInformation.js      → Modal with post content

/src/__test__
  ├── PostList.test.js        → Tests list render & click
  ├── PostInformation.test.js → Tests modal render & close
  └── posts.test.js           → Tests SSR data fetching
```

## 📦 Scripts in package.json
```bash
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:coverage": "jest --coverage"
  },
```
