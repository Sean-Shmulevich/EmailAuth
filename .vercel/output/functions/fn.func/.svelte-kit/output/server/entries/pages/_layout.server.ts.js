const load = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (!user || !user.emailVerified) {
    return { msg: "not authenticated", user: null };
  }
  if (!user.adminVerified) {
    return {
      msg: "email authenticated",
      // !!! returning user might be dangerous
      user
    };
  }
  return {
    msg: "fully authenticated",
    user
  };
};
export {
  load
};
