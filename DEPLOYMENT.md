# Deployment checklist

This file covers how each portfolio project could be hosted. **Nothing here has been deployed.** No accounts were created and no credentials were used. Free-tier limits change, so check each provider's current pricing before signing up.

## Summary

| Project | Ready to host? | Suggested hosting | Blockers |
|---|---|---|---|
| Portfolio (this repo) | **Yes** | Vercel | Set `RESEND_API_KEY` |
| MERK Establishments | **Nearly** | Render (web service) + managed PostgreSQL | Email backend, media storage, secrets cleanup |
| HR Management System | Not yet | Render + managed MySQL | Needs a WSGI server, a shared DB and a public-demo plan. Team repo, so agree with the team first |
| KGL Grocery | Not yet | Render + PostgreSQL | Hard-coded secret, `DEBUG = True`, SQLite only, no WSGI server |
| QuickMed | Partly (website already live) | Firebase Hosting (web) or an Android APK on GitHub Releases | Team repo; web build can't run local notifications |
| MediGo | No (in development) | Firebase Hosting (web) later | Unfinished features; check Firestore rules |

---

## Portfolio (Next.js 16)

- **Host:** Vercel (zero-config for Next.js). Domain: `preciousatwiine.is-a.dev`.
- **Environment variables:**
  - `RESEND_API_KEY`: the contact form returns an error without it. The build no longer needs it.
- **Checklist**
  - [ ] Add `RESEND_API_KEY` in Vercel → Project → Settings → Environment Variables.
  - [ ] The sender is `onboarding@resend.dev`, which can only deliver to the Resend account's own address. The recipient is `preciousinshuti3@gmail.com`, so that address must own the Resend account, or else verify a domain in Resend and update `from` in `app/api/send/route.ts`.
  - [ ] Run `npm run build` locally, then push.
  - [ ] After deploying, check `/sitemap.xml` and `/robots.txt`, and test the contact form.

## MERK Establishments (Django 5.1)

Repo: https://github.com/PreciousAtwiine/MERK-Establishments

- **Already in place:** `gunicorn`, `whitenoise`, `dj-database-url`, `psycopg2-binary`. `SECRET_KEY`, `DEBUG` and `ALLOWED_HOSTS` are read from the environment.
- **Host:** Render web service. Build: `pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate`. Start: `gunicorn merk.wsgi`.
- **Database:** Render PostgreSQL or Neon. Note that Render's free Postgres instances expire, so check the current terms.
- **Environment variables:** `SECRET_KEY`, `DEBUG=False`, `ALLOWED_HOSTS=<your-app>.onrender.com`, `DATABASE_URL`, plus SMTP settings (below).
- **Checklist**
  - [ ] **Email:** `EMAIL_BACKEND` is the console backend, so password-reset codes are printed, not sent. Configure SMTP through environment variables (`EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_HOST_USER`, `EMAIL_HOST_PASSWORD`, `EMAIL_USE_TLS`).
  - [ ] **Media:** profile pictures are saved to the local `media/` folder, which Render wipes on each deploy. Use a persistent disk or object storage (e.g. Cloudinary or S3) for uploads.
  - [ ] Add `CSRF_TRUSTED_ORIGINS = ["https://<your-app>.onrender.com"]`.
  - [ ] **Security:** `merk/settings.py` still contains an old `django-insecure-…` key in comments, and the repo has `db.sqlite3` and `db.json` committed. Delete the commented key, and check whether those files contain real user data. If they do, remove them from the repo and its history.
  - [ ] Create an admin user with `python manage.py createsuperuser` from the Render shell.

## HR Management System (Flask + SQLAlchemy, team repo)

Repo: https://github.com/mervyn-iconic/HR_SYSTEM- (app is in `hrms/`)

- **Current state:** designed as a local administrator app. Its README says production hosting isn't implemented. It binds to `127.0.0.1`, defaults to SQLite, and the login rate limiter lives in process memory.
- **Host:** Render web service (root directory `hrms`). Start: `gunicorn app:app`. **`gunicorn` must be added to `requirements.txt`.**
- **Database:** managed MySQL 8 (e.g. Aiven or Railway), connected as `DATABASE_URL=mysql+pymysql://USER:PASSWORD@HOST:PORT/hr_management`. Most managed MySQL providers require TLS, so the engine will need `connect_args` for SSL. That is a small code change. SQLite isn't suitable on Render because the disk is reset on every deploy.
- **Environment variables:** `DATABASE_URL`, `SECRET_KEY`, `HR_ADMIN_PASSWORD`.
- **Checklist**
  - [ ] **Agree with the team** before deploying their repository.
  - [ ] Add `gunicorn`; add SSL `connect_args` for the managed MySQL host.
  - [ ] Decide on a public demo. Anyone with the admin password gets full read/write access. For a portfolio, seed **fictional** data and either share a demo password that resets regularly or add a read-only mode.
  - [ ] For more than one worker, replace the in-memory login limiter with a shared store.
  - [ ] Tables are created on first start. Alternatively, import `mysql_schema.sql` into an empty database.

## KGL Grocery Management System (Django)

Repo: https://github.com/PreciousAtwiine/KGLdjango

- **Current state:** SQLite. `requirements.txt` lists only `django`, unpinned. `kgl/kgl/settings.py` has a **hard-coded `SECRET_KEY`**, `DEBUG = True` and `ALLOWED_HOSTS = []`.
- **Host:** Render web service plus PostgreSQL, using the same approach as MERK.
- **Checklist**
  - [ ] **Security:** the secret key is public in the repo. Generate a new one, read it from an environment variable, and remove the old one from the file.
  - [ ] Read `DEBUG` and `ALLOWED_HOSTS` from environment variables.
  - [ ] Pin dependencies and add `gunicorn`, `whitenoise`, `dj-database-url` and `psycopg2-binary`.
  - [ ] Set `STATIC_ROOT` and add WhiteNoise middleware.
  - [ ] Switch `DATABASES` to `dj_database_url.config(...)`. Remove `db.sqlite3` from the repo if it contains real data.

## QuickMed (Flutter, team repo)

Repos: https://github.com/PreciousAtwiine/QuickMed (fork), https://github.com/joelkabanda/QuickMed (upstream). The project website is already live at https://joelkabanda.github.io/quickmed-website/.

- **Options**
  1. **Android APK on GitHub Releases.** Shows the app as intended. Needs a release signing key, and that key's SHA-1 added to Firebase and to the Google Maps API key restrictions.
  2. **Flutter web on Firebase Hosting.** `firebase.json` already has a hosting section for `build/web`, and a Dockerfile/nginx alternative also exists.
- **Web limitations:** `flutter_local_notifications` doesn't support web, so reminders, the app's core feature, won't work there. Maps on web also need the Maps JavaScript API key in `web/index.html`, and calling the Routes API from a browser needs checking.
- **Environment / config:** `GOOGLE_MAPS_API_KEY` is passed with `--dart-define`. Restrict the key to the app's package name, SHA-1 and/or web domain.
- **Checklist**
  - [ ] **Agree with the team** before publishing builds.
  - [ ] **Fix `.firebaserc`:** it points to `campusbites-af75b`, not the app's Firebase project (`quickmed-12152`).
  - [ ] Add the hosting domain to Firebase Auth → Authorized domains.
  - [ ] The README says an API key was once exposed in chat. Confirm it has been rotated.

## MediGo (Flutter, in development)

Repo: https://github.com/PreciousAtwiine/MediGo

- **Not recommended yet.** The map, ordering and delivery features aren't built. A web build was compiled locally to take the screenshots and works for onboarding and sign-in.
- **When ready:** Firebase Hosting for web (`flutter build web --release`), or an APK on GitHub Releases.
- **Checklist**
  - [ ] `lib/firebase_options.dart` is gitignored, as it should be. Any CI build must recreate it (e.g. `flutterfire configure`) from secrets.
  - [ ] **Check Firestore security rules in the Firebase console.** The repo has no rules file, and test-mode rules allow anyone to read and write.
  - [ ] Add the hosting domain to Firebase Auth → Authorized domains (needed for Google sign-in on web).
  - [ ] Add the Maps JavaScript API key to `web/index.html` once the map screen exists.
