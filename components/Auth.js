import { Box, Button, Link, Text } from "@chakra-ui/react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaMoon, FaSun } from "react-icons/fa";
import { auth } from "@/firebase";
import useAuth from "@/hooks/useAuth";

const Auth = () => {
  const { isLoggedIn, user } = useAuth();
  const handleAuth = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;

        const user = res.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credental = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <Box position="fixed" top="5%" right="5%">
      {isLoggedIn && (
        <Box>
          <Text color="green.500">{user.email}</Text>
          <Link color="red.500" onClick={() => auth.signOut()}>
            Logout
          </Link>
        </Box>
      )}
      {!isLoggedIn && (
        <Button leftIcon={<FaGoogle />} onClick={() => handleAuth()}>
          Login with Google
        </Button>
      )}
    </Box>
  );
};
export default Auth;
