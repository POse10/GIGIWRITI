# Overview

GIGI WRITI is a professional academic writing service platform that connects students with expert writers. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, providing services like assignment writing, essay composition, report generation, and dissertation support. The platform features multilingual support (English/Vietnamese), real-time user interactions, pricing calculations, and comprehensive service management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: React Router for client-side navigation and page management
- **State Management**: TanStack React Query for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui component system for consistent design
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Development**: Hot module replacement (HMR) and middleware-based development server
- **Storage**: Flexible storage interface with in-memory implementation for development

## Database Design
- **Primary Database**: PostgreSQL with Neon serverless configuration
- **Schema Management**: Drizzle migrations for version control and deployment
- **Current Schema**: User management with username/password authentication
- **Connection**: Pool-based connections with WebSocket support for serverless environments

## Authentication & Authorization
- **User Model**: Username/password based authentication system
- **Session Management**: Express sessions with PostgreSQL storage using connect-pg-simple
- **Security**: Prepared for secure credential handling and session persistence

## Internationalization
- **Language Support**: English and Vietnamese with context-based translation system
- **Implementation**: Custom React Context for language switching and translation functions
- **Flexibility**: Inline translation definitions for maintainable multilingual content

## Development Workflow
- **Hot Reloading**: Vite development server with Express middleware integration
- **Type Checking**: Comprehensive TypeScript configuration across client, server, and shared modules
- **Code Organization**: Monorepo structure with shared types and schemas between frontend and backend

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with WebSocket support for edge deployments
- **Connection Pooling**: @neondatabase/serverless for optimized database connections

## UI Framework & Components
- **Radix UI**: Comprehensive primitive components for accessibility and interaction patterns
- **Lucide React**: Icon library for consistent visual elements
- **Embla Carousel**: Touch-friendly carousel implementation for content sliders

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment support
- **Build Process**: ESBuild for server bundling and Vite for client optimization
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

## Utility Libraries
- **Date Handling**: date-fns for consistent date manipulation and formatting
- **Styling Utilities**: clsx and tailwind-merge for conditional CSS class management
- **Schema Validation**: Zod for runtime type validation and Drizzle schema integration