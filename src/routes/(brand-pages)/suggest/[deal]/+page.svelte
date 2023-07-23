<script>
	export let data;
	console.log(data);
	// 	model Profile {
	//   user_id   String    @id
	//   name      String
	//   sport     String
	//   college   String
	//   year      String
	//   bio       String
	//   auth_user AuthUser? @relation(fields: [user_id], references: [id], onDelete: Cascade)

	//   @@map("profile")
	// }
</script>

<!-- Show the athlete reccomendations and options to approve -->
<!-- just dump their full profiles on this page basically  -->
<!-- post request must contain email and userId -->
