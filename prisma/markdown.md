# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/lib/email.ts:33
- POST
- Users/$userId/email
- creates email address
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/lib/email.ts:135
- GET
- Users/$userId/email
- gets all emails
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/lib/email.ts:151
- GET
- Users/$userId/email
- get user email


# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/+layout.server.ts:15
- GET
- Users/$userId/profile-img
- returns user profile picture data

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(account-utils)/password-reset/+page.server.ts:20
- GET
- User/$userId
- retrieves user data

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/brand-edit-profile/[user]/+page.server.js:11
- GET
- Brands/$userId
- get brand profile by their userID
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/brand-edit-profile/[user]/+page.server.js:43
- GET
- Brand/$userId
- return brand(user) objects
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/brand-edit-profile/[user]/+page.server.js:106
- POST ?
- Brand/$userId
- update brand profile


# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/brand-profile/[user]/+page.server.js:9
- GET
- Brand/$userId
- get brand (user) profile
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/brand-profile/[user]/+page.server.js:37
- GET
- Brand/
- ?

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/+page.server.js:11
- GET
- Brands/$userId/deals/$dealId
- get published deals
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/+page.server.js:23
- GET
- Brands/$userId/deals/$dealId
- get unpublished deals
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/+page.server.js:35
- GET
- Brands/$userId/deals/$dealId
- get completed deals
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/+page.server.js:60
- GET
- Brands/$userId/deals/$dealId
- get deal
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/+page.server.js:70
- DELETE
- Brands/$userId/deals/$dealId
- delete deal
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/+page.server.js:84
- PUT
- Brands/$userId/deals/$dealId
- update deal

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/brand-create-offer/+page.server.js:12
- GET
- Brands/$userId/deals/$dealId
- get deal
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/brand-create-offer/+page.server.js:87
- GET
- Brands/$userId
- get company name
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/brand-create-offer/+page.server.js:123
- PUT
- Brands/$userId/deals/$dealId
- update deal
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/brand-create-offer/+page.server.js:132
- POST
- Brands/$userId/deals/$dealId
- creates a deals

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/deal/[deal]/+page.server.js:20
- GET
- Brands/$userId/deals/$dealId
- get deal
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/deal/[deal]/+page.server.js:23
- GET
- Brands/$userId/deals/$dealId
- get interested user data
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/deal/[deal]/+page.server.js:36
- GET
- Brands/$userId/deals/$dealId
- get confirmed user data
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/deal/[deal]/+page.server.js:49
- GET
- Brands/$userId/deals/$dealId
- get brand finalized data
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/deal/[deal]/+page.server.js:62
- GET
- Brands/$userId/deals/$dealId
- get completed user data
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/deal/[deal]/+page.server.js:75
- GET
- Brands/$userId/deals/$dealId/images/
- get deal images
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/deal/[deal]/+page.server.js:106
- PUT 
- Brands/$userId/deals/$dealId/status
- update deal status

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center/view-contract/+page.server.js:14
- GET
- Brands/$userId/deals/$dealId
- get deal info

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center-clone/+page.server.js:11
- GET
- Brands/$userId/deals/$dealId/publishedDeals
- get published deals
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center-clone/+page.server.js:23
- GET
- Brands/$userId/deals/$dealId/unpublishedDeals
- get unpublished deals
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center-clone/+page.server.js:35
- GET
- Brands/$userId/deals/$dealId/completed
- get completed deals
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center-clone/+page.server.js:60
- GET
- Brands/$userId/deals/$dealId
- get specific deal
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center-clone/+page.server.js:70
- DELETE
- Brands/$userId/deals/$dealId
- delete deal 
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center-clone/+page.server.js:84
- PUT
- Brands/$userId/deals/$dealId
- update deal

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center-clone/brand-create-offer/+page.server.js:16
- GET
- Brands/$userId/deals/$dealId
- get user deal
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center-clone/brand-create-offer/+page.server.js:88
- GET
- Brands/$userId/name
- get company name
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center-clone/brand-create-offer/+page.server.js:124
- PUT
- Brands/$userId/deals/$dealId
- update deal
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/creation-center-clone/brand-create-offer/+page.server.js:133
- POST
- Brands/$userId/deals/$dealId
- insert new deal

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/suggest/[deal]/+page.server.js:16
- ?
- ?
- matching deals
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/suggest/[deal]/+page.server.js:23
- ?
- ?
- matching deals
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/suggest/[deal]/+page.server.js:35
- ?
- ?
- ?
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/suggest/[deal]/+page.server.js:62
- ?
- ?
- ?
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/suggest/[deal]/+page.server.js:64
- ?
- ?
- ?
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(brand-pages)/suggest/[deal]/+page.server.js:67
- ?
- ?
- ?

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(sign-up)/athlete-signup/+page.server.ts:126
- POST
- Users/$userId
- creates new athlete user 

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(sign-up)/brand-signup/+page.server.ts:128
- POST
- Brands/$userId
- creates new brand user

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(user-pages)/deals/+page.server.ts:17
- GET
- Brands/$userId/deals/$dealId
- get next deals

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(user-pages)/deals/+server.js:10
- GET
- Brands/$userId/deals/$dealId
- get next deals
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(user-pages)/deals/+server.js:36
- GET
- Brands/$userId/deals/$dealId/status
- get deal status

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(user-pages)/deals/view-contract/+page.server.js:14
- GET
- Brands/$userId/deals/$dealId
- get deal

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(user-pages)/edit-profile/[user]/+page.server.js:11
- GET
- Users/$userId
- get user profile
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(user-pages)/edit-profile/[user]/+page.server.js:39
- GET 
- Users/$userId
- get user object
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(user-pages)/edit-profile/[user]/+page.server.js:122
- PUT
- Users/$userId
- update user profile

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(user-pages)/matches/+page.server.js:11
- GET
- ?
- ?
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(user-pages)/matches/+page.server.js:25
- GET
- ?
- ?
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(user-pages)/matches/+page.server.js:39
- GET
- ?
- ?

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(user-pages)/user-profile/[user]/+page.server.js:9
- GET
- Users/$userId
- get user profile
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(user-pages)/user-profile/[user]/+page.server.js:36
- GET
- ?
- get user? objects
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/(user-pages)/user-profile/[user]/+page.server.js:44
- ?
- ?
- ?

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/admin/+page.server.ts:32
- GET
- Users/$userId/email
- get user email

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/admin/approve-brands/+page.server.js:9
- GET
- Brands/
- get all brands
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/admin/approve-brands/+page.server.js:22
- GET
- ?
- ?
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/admin/approve-brands/+page.server.js:50
- PUT
- ?
- ?

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/admin/approve-users/+page.server.js:9
- GET
- Users/
- get all users
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/admin/approve-users/+page.server.js:22
- GET
- Users/status
- get 
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/admin/approve-users/+page.server.js:50
- PUT
- ?
- Update user verification


# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/admin/deal-contracts/+page.server.js:11
- GET
- ?
- get deals with contracts

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/admin/email/[email_id]/+page.server.ts:21
- DELETE
- ?
- delete someones email?

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/api/s3object/[id]/+server.js:67
- GET
- ?
- get exisiting image
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/api/s3object/[id]/+server.js:79
- DELETE
- ?
- delete images
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/api/s3object/[id]/+server.js:83
- POST
- ?
- create images
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/api/s3object/[id]/+server.js:94
- GET
- ?
- get deal status
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/api/s3object/[id]/+server.js:109
- DELETE
- ?
- delete contract
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/api/s3object/[id]/+server.js:114
- POST
- ?
- create contract
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/api/s3object/[id]/+server.js:123
- PUT
- ?
- update user deal status
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/api/s3object/[id]/+server.js:141
- GET
- ?
- get existing image
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/api/s3object/[id]/+server.js:156
- DELETE
- ?
- delete existing image
# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/api/s3object/[id]/+server.js:160
- POST
- ?
- create existing image object

# /Users/alexguzman/Desktop/DapUp/EmailAuth/src/routes/login/+page.server.ts:22
- GET
- Users/$userId/email
- get user by email

