<!-- <div
  class="bg-white shadow-lg m-10 flex flex-col items-center rounded-xl overflow-hidden lg:flex-row lg:w-2/3 2xl:w-1/2"
>
  form
  <div class="p-8 lg:w-1/2 sm:p-8">
    <h2 class="text-2xl font-semibold mt-0 mb-6 text-gray-700">Sign Up</h2>
    {#if message.success !== null}
      {#if message.success}
        <div class="text-green-500 mb-4">{message.display}</div>
      {:else}
        <div class="text-red-500 mb-4">{message.display}</div>
      {/if}
    {/if}
    <form class="flex flex-col" on:submit|preventDefault={handleSignup}>
      <div class="flex flex-col mb-4 relative">
        <i class="fi fi-rr-envelope absolute top-11 right-5 text-zinc-400" />
        <label for="email" class="mb-2 text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="youremail@gmail.com"
          class="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:border-blue-500 focus:outline-none"
          bind:value={email}
        />
      </div>
      <div class="flex flex-col mb-4 relative">
        <i class="fi fi-rr-envelope absolute top-11 right-5 text-zinc-400" />
        <label for="confirm-email" class="mb-2 text-gray-700"
          >Confirm Email:</label
        >
        <input
          type="email"
          id="confirm-email"
          name="confirm-email"
          placeholder="confirm your email"
          class="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:border-blue-500 focus:outline-none"
          bind:value={confirmEmail}
        />
      </div>
      <div class="flex flex-col mb-4 relative">
        <i class="fi fi-rr-lock absolute top-11 right-5 text-zinc-400" />
        <label for="password" class="mb-2 text-gray-700">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="your password"
          class="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:outline-none focus:border-blue-500"
          bind:value={password}
        />
      </div>
      <div class="flex flex-col mb-4 relative">
        <i class="fi fi-rr-lock absolute top-11 right-5 text-zinc-400" />
        <label for="confirm-password" class="mb-2 text-gray-700"
          >Confirm Password:</label
        >
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          placeholder="confirm your password"
          class="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:outline-none focus:border-blue-500"
          bind:value={confirmPassword}
        />
      </div>
      <div class="flex flex-col mb-4 relative">
        <label for="name" class="mb-2 text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="your name"
          class="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:outline-none focus:border-blue-500"
          bind:value={name}
        />
      </div>
      <div class="flex flex-col mb-4 relative">
        <label for="school" class="mb-2 text-gray-700">School:</label>
        <input
          type="text"
          id="school"
          name="school"
          placeholder="your school"
          class="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:outline-none focus:border-blue-500"
          bind:value={school}
        />
      </div>
      <div class="flex flex-col mb-4 relative">
        <label for="sport" class="mb-2 text-gray-700">Sport:</label>
        <input
          type="text"
          id="sport"
          name="sport"
          placeholder="your sport"
          class="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:outline-none focus:border-blue-500"
          bind:value={sport}
        />
      </div>
      <button
        type="submit"
        class="my-6 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-4 py-2 rounded-md"
      >
        Sign Up
      </button>
    </form>
    <p class="text-gray-500">
      Already have an account? <a
        href="#"
        class="text-blue-500 font-semibold underline">Log In</a
      >
    </p>
  </div> -->
  <!-- image -->
  <!-- <div class="w-1/2">
    <img
      src="https://login-tailwind-aluizamendes.vercel.app/assets/login.jpeg"
      alt=""
      class="h-full lg:block hidden"
    />
  </div>
</div> -->
