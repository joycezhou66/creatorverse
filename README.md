# Creatorverse

About this web app: **👉🏿 Creatorverse is a React-based web application that allows users to manage a list of their favorite content creators. Users can create, read, update, and delete (CRUD) content creators. Each content creator entry includes their name, URL, description, and an optional image URL.**

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [X] **A logical component structure in React is used to create the frontend of the app**
- [X] **At least five content creators are displayed on the homepage of the app**
- [X] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [X] **API calls use the async/await design pattern via Axios or fetch()**
- [X] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [X] **Each content creator has their own unique URL**
- [X] **The user can edit a content creator to change their name, url, or description**
- [X] **The user can delete a content creator**
- [X] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [X] Picocss is used to style HTML elements
- [X] The content creator items are displayed in a creative format, like cards instead of a list
- [X] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

- [X]  Search Functionality: Added a search bar to filter content creators by name.
- [X]  Responsive Design: Ensured the application is fully responsive and works well on both desktop and mobile devices.


## Video Walkthrough

Here's a walkthrough of implemented required features:

![Video Walkthrough](https://github.com/joycezhou66/creatorverse/blob/main/GIFWalkthrough.gif)


## Notes

1. **State Management**:
   - Managing the state of content creators and ensuring that updates, additions, and deletions were reflected correctly across the app required careful planning and implementation.
   - Learning to effectively use hooks such as `useState` and `useEffect` to manage and synchronize state was crucial.

2. **Navigation and Routing**:
   - Implementing smooth and intuitive navigation between different pages, especially ensuring that users were correctly redirected after performing actions like adding, editing, or deleting a creator.
   - Using `react-router-dom` effectively to handle dynamic routes and navigation.

3. **Supabase Integration**:
   - Integrating with Supabase for backend services, including setting up the database, handling authentication, and performing CRUD operations.
     
## License

Copyright [👉🏿 2024] [👉🏿 Joyce Zhou]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
