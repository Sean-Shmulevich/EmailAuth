## Background/setup
- Package.json
- middleware.js + hooks.server.ts.
- app.html
- app.css
## Homepage
- Change the splash page first.
- Brand guide video.
- components:
    - Athlete Guide
    - Brand Guide
    - PrivacyPolicy modal
        - NOTE: should be on all pages.
    - FounderCard - Default founder card component
- layout.svelte
    - Handles the presentation of the menubar based off logged in state
- layout.server.ts
    - Handles the logic for the menu-bar (because its on all pages)

- New user
    - Create athlete account.

## Animations? 

## login directory
- page.svelte
- page.server.ts
    - on load: redirect to

## login verify issues
- Solution- fix phone numbers

#waiting on verification 
- View profile: what should it look like.
    - Create a sample profile.
- Edit profile user, better UX layouts.

## admin verified
- Discover
    - Images that you can tap through them
    - Title on top or underneath the image?
    - Overview, whatever is on the main page now.
    - Buttons at the bottom to like or not
    - possibly send message.
    - Be able to see a companies profile from discover page.
- Viewing of profiles
    - User profile is okay I think
    - Brand profile needs to be more robust.

## FONT.

## Brand sign up.
- Why is it like a survey.
- Model it after the one for the athlete.
- Double password.
- lets save in localStorage.
-
## Waiting on verification
- Profile
    - Maybe it should look different on laptops.
    - Metrics for businesses.
- Creation center
    - if there's no deals then put a create offer button instead of text
- Create offer
    - Make one sample offer that is super constructed.
    - Automatically create an offer for a business.
    - Have templates, samples. pre constructed offers. 
    - Broad categories of offers, but you would still need to input the dates.
    - Making the offer cards less binding and less specific.
    - Find out a solution for being able to very quickly launch a boilerplate offer.
    - Show them a template, they see what the user would see while swiping, to edit something, they click on it.
        - The form is confusing, just let them see it and pick what they want to edit.
    - They gotta pay to create their own custom deal?
    - Have a metric to see if the templates are being edited or not.

- Admin ability to create deal.
## Verified
- Create deal
    - See user activity and end offer buttons
    - Optimize for desktop and mobile.
    - Flex row on desktops for creation center flat page
- See user activity deal
- Redundant to show all the information on the deal
    - Completed, confirmed, and interested.
    - Doesn't show the deal nearly as much, show the athlete more
    - Dropdown to pick if you see full profile or just emails.
    - Dropdown to filter the users.
    - Remove double confirm.
    - No waiting for confirm from user.

## User matches is ugly, lets make it look more like the creation center

## Deal is accepted.
- We have a standard contract, have them fill out certain fields on the website that populate in the contract,
- They should be able to download it and edit it and reuplod. docx or pdf. generact docx.
- Generate a docx, get the admin to write the contract.
- A fee for trying to upload non standard contract
- Make more bold text in other places.
- A chat that ends in a contract upload.
- Incorporate user checking off the deliverables.
- They need to agree on the deliverables.
- They get the contract then they get the deliverables.
- The deliverables are in the contract
    - What if they have a custom contract
    - What do they do about the deliverables then?
    - What do you do about the deliverables with the custom contract, the admin will input the final deliverables for the custom contract.
    - They should have to do custom, and put in their own deliverables as well as the contract.



