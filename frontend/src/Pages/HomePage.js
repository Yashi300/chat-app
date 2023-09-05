import React, { useEffect } from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import ChatPage from "./Pages/ChatPage";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/Signup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        background={"rgba(255, 255, 255, 0.2)"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
      >
        <Text
          zIndex={1}
          fontSize="2xl"
          fontFamily="cursive"
          textAlign="center"
          fontWeight="bold"
          color={"black"}
        >
          <div className="talk">TAKE-A-TALK</div>
        </Text>
      </Box>
      <Box bg="rgba(255, 255, 255, 0.2)" w="100%" p={4} borderRadius="lg">
        <Tabs variant="soft-rounded">
          <TabList color={"white"} mb="1em">
            <Tab width="50%">
              <div className="login">Login</div>
            </Tab>
            <Tab width="50%">
              <div className="signup">Sign Up</div>
            </Tab>
          </TabList>
          <div className="talkbox">
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </div>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
