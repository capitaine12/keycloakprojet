# Click&Eat Food Delivery Application

A modern food delivery application with Keycloak authentication integration, built with React and Django.

## Features

- User authentication with Keycloak
- Browse restaurants and menu items
- Food ordering system
- Shopping cart functionality
- User profile management
- Responsive design

## Tech Stack

### Frontend
- React with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Zustand for state management
- Keycloak.js for authentication
- Lucide React for icons

### Backend
- Django REST Framework
- SQLite database (development)
- Mozilla Django OIDC for Keycloak integration

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- Python (v3.8 or later)
- Keycloak server

### Setting up the Frontend

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

### Setting up the Backend

1. Navigate to the backend directory:
   ```
   cd src/backend
   ```

2. Create a virtual environment:
   ```
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Navigate to the Django project:
   ```
   cd django_project
   ```

5. Run migrations:
   ```
   python manage.py migrate
   ```

6. Start the development server:
   ```
   python manage.py runserver
   ```

### Setting up Keycloak

1. Create a new realm named "click-and-eat"
2. Create two clients:
   - click-and-eat-client (for React frontend)
   - click-and-eat-django (for Django backend)
3. Configure the clients with appropriate redirect URIs and web origins
4. Create test users or enable user registration

## Project Structure

- `/src`: Frontend source code
  - `/components`: Reusable UI components
  - `/contexts`: React context providers
  - `/pages`: Application pages
  - `/services`: API services
- `/src/backend`: Django backend
  - `/django_project`: Django project root
  - `/food_delivery`: Main application

## License

MIT