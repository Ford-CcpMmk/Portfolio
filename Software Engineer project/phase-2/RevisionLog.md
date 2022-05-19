# Revision Log

## Functional Requirements

### Add functional requirement include,

- **Number 18**, This system has a reminder for controlling time in tourist’s trips
- **Number 19**, Tourists can give rating and feedback to the guide system
- **Number 20**,The system has the ability to shake tourist’s mobile phones to unlock the place
- **Number 21**, Users can follow travel stories of other users
- **Number 22**, Tourists can check travel history
- **Number 23**, Guides can customize their trip in the system
- **Number 25**, Writing Journey Diary feature for Tourists writing their trip
- **Number 26**,  Every user can change ID and password or update personal information

from non-functional to functional of phase 1 : It has been changed because of their specific functionality which has in the system.

### Remove the functional requirement

- This system has a reminder for controlling time in tourist’s trips. The security system uses cloud private to store credit number, password, id card to protect from hackers, viruses

to non-functional to functional of phase 1 : It has been changed because it does not interact with the user but it has the backend system.

## Non-Functional Requirements

### Delete non-requirement include,

- **Number 1** ,This system has a reminder for controlling time in tourist’s trips
- **Number 2**,Tourists can give rating and feedback to the guide system
- **Number 3**,The system has the ability to shake tourist’s mobile phones to unlock the place
- **Number 7**,Users can follow travel stories of other users
- **Number 8**,Tourists can check travel history
- **Number 9**,Guides can customize their trip in the system
- **Number 10**, Writing Journey Diary feature for Tourists writing their trip
- **Number 11**, Every user can change ID and password or update personal information

and changed them to functional of phase 1 : It has been changed because of their specific functionality which has in the system.

### Add the non-functional requirement

 number 1, 2, 3, 7, 8, 9, and 10 in phase1 because it does not complete 10 functions according to the order.

## Requirement prioritization

we remove some requirements that are not necessary. And add new non-functional requirements then order the requirement that we add in sequence.

## Identifying actors

We add a police system to check criminal records and change the name of the local guide to guide, local business owner to business owner, and administrator to admin for easy to understand.

## Use case diagram

We add the police system actor to bring the information of a guide and business Owner criminal record, and add use cases of admin to be able to remove, edit promotion, update issues, and evaluate guide performance.

## Use case narrative

In creating trips, we changed the description of exceptions.

## Data flow Lv.0

1. Add Selected payment method, encrypted credit card information, Tourist information sent out to the Tourist entity of dfd0: This flow has been added because we required them to be used in the system.
2. Add Selected trip journal template, Trip journal detail, video, picture sent out to the Tourist entity of dfd0: This flow has been added because we required them to create easier.
3. Add Selected trip option, selected trip, selected recommended place, selected guide, trip information, trip member, tourist chat message sent to the Tourist entity of dfd0: This flow has been added because we required them to make it flexible.
4. Add Subscription status, tourist information sent out to the Tourist entity of dfd0: This flow has been added because we require them to separate between tourists that buy and not buy a subscription.
5. Add Username, password sent out to the Tourist entity of dfd0: This flow has been added because we require them to store in the system.
6. Add trip ID, trip name, promotion ID, updated promotion sent out to the Admin entity of dfd0: This flow has been added because we require them to update detail about the trip.
7. Delete customer info in the human resource entity of dfd0: This flow has been added because the customer info are stored in the user account.
8. Delete verification of registration in the human resource entity of dfd0: This flow has been added because we require to change it more specifically.
9. Add Criminal record, certificates sent out to the human resource entity of dfd0: This flow has been added because we require them to check the attribute of tourist and business owner.
10. Delete chat data in the guide entity of dfd0: This flow has been added because we add guide chat messages.
11. Delete Guide info in the guid entity of dfd0: This flow has been added because we store the information of the guide in the user account.
12. Delete verification of registration in the guid entity of dfd0: This flow has been added because HR will check criminal record and certificate in the police system.
13. Delete Updated issues in the guid entity of dfd0: This flow has been added because we changed it into an issue port.
14. Delete feedback in the guide entity of dfd0: This flow has been added because we have to change it into Evaluated guide performance feedback that is sent from admin.
15. Add Profile setting, selected profile template, updated profile information sent out to the guid entity of dfd0: This flow has been added because we require them to help guid create the profile easier.
16. Add Username, password sent out to the guid entity of dfd0: This flow has been added because we require them to store in the system.
17. Add Guide chat message sent out to the guid entity of dfd0: This flow has been added because we require them to help guide to talk with tourists.
18. Add Issue report sent out to the guid entity of dfd0: This flow has been added because guides can report the problem in the system.
19. Add Trip setting, selected trip template, updated profile information sent out to the guid entity of dfd0: This flow has been added because we require them to help guid create the trips easier.
20. Add Evaluated guide performance feedback to the guid entity of dfd0: This flow has been added because we require them to use it to send the feedback to improve your work.
21. Add Tourist chat message to the guid entity of dfd0: This flow has been added because guide can talk with tourist by using chat message
22. Add Confirmation to the payment gateway entity of dfd0: This flow has been added because we require them to confirm their payment of tourists.
23. Add Admin chat message to the business owner entity of dfd0: This flow has been added because we required.
24. Add Storytelling, picture, business detail, business owner chat sent out to the business owner entity of dfd0: This flow has been added because we require them to create the unique profile of the business owner.
25. Add Username, password sent out to the business owner entity of dfd0: This flow has been added because we require them to store in the system.
26. Delete customer requesting in the admin entity of dfd0: This flow has been added because we add the guide and issue system for tourist reports or requests.
27. Delete updated recommend trip in the admin entity of dfd0: This flow has been added because the system generates the trip by matching the question.
28. Add admin chat message sent out to the admin entity of dfd0: This flow has been added because we required them to be the channel to answer the question form Business owner.
29. Add Evaluated guide performance feedback sent out to the admin entity of dfd0: This flow has been added because We want them to check on how satisfied travelers are with the guides they buy the trip.
30. Add Guide and system issue to the admin entity of dfd0: This flow has been added because we require them for tourist report issues of guide and system to admin.
31. Add issue report to the admin entity of dfd0: This flow has been added because we required them to receive the issue from guides.
32. Add a business owner chat message to the admin entity of dfd0: This flow has been added because we require them to answer the question from the business owner.
33. Add guide and system issue sent out to the Tourist entity of dfd0: This flow has been added because we required them to send the problem into the system.
34. Add criminal record sent out to the Police entity of dfd0: This flow has been added because we require them to check the criminal history of the guide and business owner.
35. Add ID card to the police entity of dfd0: This flow has been added because we require them to send ID card to check in the police system.
36. Add Answer sent out to the Tourist entity of dfd0: This flow has been added because we required them to prepare a trip to correspond to their answers.
37. Add username and password sent out to the Admin entity of dfd0: This flow has been added because we required them for admin to login into the system.