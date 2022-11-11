# Siuu

## overview

Siuu is a 'reverse job board' for front-end developers and designers. Siuu enables them to create their profile and showcase their portfolio on a dedicated page. On the other end, recruiters are able to browse these profiles and contact them with work-related inquiries.

## basic features

-   user (developers/designers) abilities:
    -   create their profile.
        -   basic info
        -   socials
        -   profile picture
        -   background picture
    -   showcase their projects. each project has:
        -   an image
        -   a link (to repo or design)
        -   a description
-   recruiters/public abilites:
    -   browse profiles
    -   make contact

## technical overview

-   The main technology I'll use to build this is SvelteKit, the self proclaimed 'fastest way to build web apps'.
-   If the project grows significantly, I'll consider the necessity of a dedicated backend.
-   For authentication, storage and db, I'll use Firebase.

-   Front-End
    -   UI - Svelte
    -   Backend components - SvelteKit endpoints
    -   Styles - TailwindCSS
-   Back-End
    -   User authentication - Firebase Auth
    -   Database - Firebase Firestore
    -   Store user images - Firebase Cloud Storage
    -   Hosting - Vercel

## action plan

-   I'm building the project in three major phases:
    1. Static UI
        - [ ] Build out all ui components
    2. Backend and Integration
        - [ ] Add firebase and other backend components
    3. Fine-tuning and testing
        - [ ] Ensure that everything is working as it should be

## file structure
