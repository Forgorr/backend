# Functionality

## Setup Drizzle

- [x] Create tables: `users`, `vaults`, `credentials` and `audit logs`.

## Users:

- [ ] Handle user authentication
- [ ] Handle user registration
- [ ] Handle user login
- [ ] Handle user logout
- [ ] Handle user updates
- [ ] Handle user deletion

### Handle user authentication

- [ ] Implement traditional username/password system with JWT using RSA or ECDSA
- [ ] Implement OAuth with with JWT using RSA or ECDSA
- [ ] Implement MFA with with JWT using RSA or ECDSA
- [ ] Verify user authentication (Can be done later)

### Handle user registration

- [ ] Input Username, Full Name, Email, Password
- [ ] Encrypt password using `bcrypt`
- [ ] Store user information in `users` table
- [ ] Generate a JWT token using RSA or ECDSA

### Handle user login

- [ ] Able to login using either username, email or oauth
- [ ] Check if user exists
- [ ] Check if password is correct
- [ ] Generate a JWT token using RSA or ECDSA

### Handle user logout

- [ ] Invalidate JWT token
- [ ] Delete JWT token

### Handle user updates

- [ ] Update user full name
- [ ] Update user username
- [ ] Update user email
- [ ] Update user password

### Handle user deletion

- [ ] Delete user from `users` table
- [ ] Delete all passwords associated with user from the `passwords` table. (Can be done later)

## Passwords

- [ ] Figure out two way encryption
- [ ] Generate and store sasswords
