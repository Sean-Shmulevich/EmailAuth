const load = async ({ locals }) => {
  const { user } = await locals.auth.validateUser();
  if (!user) {
    return { msg: "not authenticated", user: null };
  }
  if (!user.adminVerified) {
    return {
      msg: "email authenticated",
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
