# Project Code Explained: Task Manager

This file explains the actual code and logic used in our project, step by step, for every main file and component. Each section includes code snippets and clear explanations.

---

## 1. `src/main.jsx` (Entry Point)

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```
**Explanation:**
- This is the entry point for your React app.
- `StrictMode` is a tool for highlighting potential problems in an application.
- `createRoot` attaches your React app to the `#root` element in `index.html`.
- The `App` component is the root of your UI.

---

## 2. `src/App.jsx` (Root Component)

```jsx
import './App.css';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}
```
**Explanation:**
- Imports global styles and the main page (`Dashboard`).
- Wraps the dashboard in a `Layout` component, so the sidebar and layout are always present.
- You can swap out `Dashboard` for other pages as your app grows.

---

## 3. `src/components/Layout.jsx` (Layout Wrapper)

```jsx
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <>
      {/* Static Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-64 z-20">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="lg:ml-64 flex flex-col min-h-screen bg-[#FAFAF9]">
        {children}
      </div>
    </>
  );
}
```
**Explanation:**
- Renders the `Sidebar` as a fixed element on the left.
- The main content (`children`) is pushed right by the sidebar width (`ml-64`).
- This keeps the sidebar static and only the main content scrolls.

---

## 4. `src/components/Sidebar.jsx` (Sidebar Navigation)

```jsx
import { useState } from 'react';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('DASHBOARD');
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [ ... ]; // Array of menu items with icons

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    setIsOpen(false); // Close sidebar after selection on mobile
  };

  return (
    <>
      {/* Sidebar code here (see file for full code) */}
    </>
  );
}
```
**Explanation:**
- Uses React `useState` to track which menu item is active and if the sidebar is open (for mobile).
- `menuItems` is an array of navigation options, each with a label and icon.
- Clicking a menu item sets it as active and closes the sidebar on mobile.
- The sidebar is responsive: fixed on desktop, slides in/out on mobile.
- Uses Tailwind CSS for all styling.

---

## 5. `src/components/Topbar.jsx` (Top Navigation Bar)

```jsx
export default function Topbar() {
  return (
    <header className="w-full h-16 bg-white flex items-center justify-between px-6 border-b border-gray-200">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 w-80">
        <svg ... />
        <input type="text" placeholder="Search" ... />
      </div>
      {/* Notification and Profile */}
      <div className="flex items-center space-x-4">
        <button ...>...</button>
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src="..." alt="Profile" ... />
        </div>
      </div>
    </header>
  );
}
```
**Explanation:**
- Renders a top bar with a search input, notification bell, and user avatar.
- Uses Tailwind for layout and styling.

---

## 6. `src/pages/Dashboard.jsx` (Dashboard Page)

```jsx
import Topbar from '../components/Topbar';
import Calender from '../components/Calender';
import ProjectCard from '../components/ProjectCard';
import SlackProjectCard from '../components/SlackProjectCard';
import TaskList from '../components/TaskList';
import TaskManagementCard from '../components/TaskManagementCard';
import MessageListCard from '../components/MessageListCard';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#FAFAF9]">
      <div className="flex-1 flex flex-col min-w-0 min-h-0">
        <Topbar />
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2 md:p-6 xl:p-12 auto-rows-fr min-w-0">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 w-full">
            <ProjectCard />
            <SlackProjectCard />
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-6 w-full">
            <TaskList />
            <TaskManagementCard />
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-6 w-full">
            <Calender />
            <MessageListCard />
          </div>
        </div>
      </div>
    </div>
  );
}
```
**Explanation:**
- Imports all the main dashboard widgets as components.
- Uses a responsive grid to lay out the dashboard cards.
- Each card is a separate component for modularity.

---

## 7. `src/components/ProjectCard.jsx` (Project Card)

```jsx
import { FiCalendar } from "react-icons/fi";

export default function ProjectCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 max-w-md">
      {/* ...content... */}
    </div>
  );
}
```
**Explanation:**
- Shows project info, progress, tags, and team members.
- Uses icons and avatars for a modern look.
- Uses Tailwind for all styling.

---

## 8. `src/components/SlackProjectCard.jsx` (Slack Project Card)

- Similar to `ProjectCard`, but for a Slack project.
- Uses React state for star/favorite and dropdown menu.
- Shows team members as emoji avatars.
- Progress bar and due date are calculated and displayed.

---

## 9. `src/components/TaskList.jsx` (Task List)

- Uses `useState` to manage a list of tasks.
- Lets you add, complete, and delete tasks.
- Each task shows its title, comments, attachments, and completion status.
- Uses Tailwind for styling and layout.

---

## 10. `src/components/TaskManagementCard.jsx` (Task Management)

- Uses `useState` and `useEffect` for timer logic.
- Lets you start/pause timers for tasks.
- Dropdown menu for each task (edit, duplicate, delete).
- Uses icons for play/pause and clock.

---

## 11. `src/components/Calender.jsx` (Calendar)

- Uses MUI's `DateCalendar` for a modern calendar UI.
- Uses `useState` to track the selected date.
- Customizes the calendar with the `sx` prop for colors and sizing.

---

## 12. `src/components/MessageListCard.jsx` (Message List)

- Uses `useState` to track the selected message.
- Renders a list of messages with avatars, names, and message previews.
- Highlights the selected message.

---

**React Concepts Used:**
- **Components:** Reusable building blocks of UI.
- **Props:** Data passed to components (e.g., `children` in `Layout`).
- **State:** Data that changes over time, managed with `useState`.
- **Effects:** Side effects like timers, managed with `useEffect`.
- **JSX:** HTML-like syntax for describing UI.
- **Tailwind CSS:** Utility classes for styling.

---

If you want a deeper explanation of any specific file, line, or concept, just ask! 