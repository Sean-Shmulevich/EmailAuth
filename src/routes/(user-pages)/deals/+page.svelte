<script>
	import SwipeCard from './SwipeCard.svelte';
	let offers = [
		{
			id: 'DealID',
			title: 'Deal Title',
			description: 'Deal Description',
			sportPreference: 'Sport Preference',
			genderPreference: 'Male',
			shortDescription: 'Campaign Short Description',
			inPersonOrVirtual: 'In Person or Virtual',
			location: 'iowa',
			dateTime: '2021-10-10',
			duration: '1 hour',
			mainGoal: 'main goal',
			estimatedPayment: '100',
			recommendedDeliverables: ['deliverable1', 'deliverable2'],
			athleteCount: 1,
			singleOrMultiple: 'single',
			publishDate: 'DateTime.now()',
			isCampaign: true,
			singleEvent: {},
			usersAccepted: [],
			usersRejected: []
		}
	];
	//     model Deal {
	//   id                      String    @id @unique
	//   title                   String
	//   description             String
	//   sportPreference         String
	//   genderPreference        String
	//   shortDescription        String
	//   location                String
	//   dateTime                String
	//   duration                String
	//   mainGoal                String
	//   estimatedPayment        String
	//   recommendedDeliverables String[]
	//   athleteCount            Int
	//   singleOrMultiple        String
	//   publishDate             DateTime?
	//   authUser                AuthUser  @relation(fields: [authUserId], references: [id])
	//   authUserId              String
	//   isCampaign              Boolean
	//   usersAccepted           String[]
	//   usersRejected           String[]
</script>

<SwipeCard bind:offers />
