# Requirements Specification
This application allows users to better plan and manage their tasks using multiple to-do lists.

## Functionalities
### List creation
* **Requirement 1 -** Users can have multiple Lists
* **Requirement 2 -** A new List can be added with a simple form consisting of a text input field for its name, and an `Add` button
* **Requirement 3 -** Newly added Lists have no List Items
* **Requirement 4 -** List names are unique

### List removal
* **Requirement 5 -** A List can be removed using an `X` button in the List header
* **Requirement 6 -** A List can be removed regardless of the status of the List Items that it contains

### List Item creation
* **Requirement 7 -** A List can contain multiple List Items
* **Requirement 8 -** A List Item can be added to a List with a simple form (one per List), consisting of an input field for a label, and an `Add` button
* **Requirement 9 -** List Item labels are unique in scope of a List

### List Item completion
* **Requirement 10 -** A List Item is described by its label and status (complete or not) represented as a checkbox
* **Requirement 11 -** A List Item status can be changed by clicking the associated checkbox

### List Item removal
* **Requirement 12 -** Only complete List Items can be removed

## Non-functional requirements
### Performance
* **Requirement 13 -** All remote requests should complete within 200ms

### Security
* **Requirement 14 -** Application should not be vulnerable to XSS attacks

### Multi-device access
* **Requirement 15 -** Application should allow for parallel access from multiple devices
* **Requirement 16 -** Data modifications made on one device should be reflected on other devices
* **Requirement 17 -** The modifications do not have to be synced across devices in real time (e.g. using HTTP Push, or WebSockets):
reloading the page manually is an acceptable solution

### User Experience
* **Requirement 18 -** Application should follow industry standards for usability

## Architecture
Structure | Front-End | Back-End | Communication | Data Persistence
:--- | :--- | :--- | :--- | :---
Single-Page Application (SPA) | ReactJS | Ruby | HTTP REST/JSON | Static `json` file stored in the server
