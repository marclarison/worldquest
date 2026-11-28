VEXILLUM ARCHITECTURE

Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI

Backend

- Supabase

Database

- PostgreSQL (via Supabase)

Authentication

- Supabase Auth

Hosting

- Vercel

Main Project Structure

VEXILLUM/

- docs/
- public/
- src/
- supabase/
- assets/
- datasets/

Main Application Pages

- Home
- Explore Countries
- Country Details
- Quiz
- Dashboard
- Profile

Core Database Tables

- countries
- profiles
- user_country_progress
- quiz_attempts
- flag_features

Data Flow

User
↓
Frontend (Next.js)
↓
Supabase
↓
PostgreSQL Database

Development Approach

1. Build country explorer
2. Build authentication
3. Build progress tracking
4. Build quiz system
5. Launch MVP
6. Improve based on feedback

Architecture Goal

Keep the system simple, fast and easy to maintain while supporting future growth.