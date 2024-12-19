const SignInPage = ({ params }: { params: { "sign-in": string[] } }) => {
  console.log(params["sign-in"][1]);
  return <div>Sign-In Page : {params["sign-in"][1]}</div>;
};
export default SignInPage;
