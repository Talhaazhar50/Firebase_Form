import { Button, Center, Paper, Text, TextInput, Title } from "@mantine/core";
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAITk3Z_rfLyY_pxEfza1OZMhXUeNAuuCY",

  authDomain: "dknob-c368f.firebaseapp.com",

  databaseURL: "https://dknob-c368f-default-rtdb.firebaseio.com",

  projectId: "dknob-c368f",

  storageBucket: "dknob-c368f.appspot.com",

  messagingSenderId: "971347726509",

  appId: "1:971347726509:web:2c8ffc32643e6f87c3f624",

  measurementId: "G-J62LJ7J040",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const App = () => {
  const fontStyles = {
    fontFamily: "RINGS, sans-serif",
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const phoneNumber = event.target.phoneNumber.value;
    const emailAddress = event.target.emailAddress.value;
    const comments = event.target.comments.value;
    const companyName = event.target.companyName.value; // New field

    const contactInfo = {
      firstName: firstName,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
      comments: comments,
      companyName: companyName, // New field
    };

    const contactInfoRef = ref(database, "ContactInfo"); // Reference to the "ContactInfo" path

    push(contactInfoRef, contactInfo)
      .then(() => {
        console.log("Data saved successfully");
        console.log(contactInfo);
        event.target.reset();
      })
      .catch((error) => {
        console.log("Error saving data:", error);
      });
  };

  return (
    <Center>
      <Paper shadow="sm" padding="lg" radius="md">
        <form onSubmit={handleFormSubmit}>
          <Title order={1} style={fontStyles}>
            kreate-contact           </Title>
          <TextInput
            id="firstName"
            label="First Name"
            required
            radius="md"
            style={{ marginBottom: "10px" }}
          />
          <TextInput
            id="phoneNumber"
            label="Phone Number"
            type="tel"
            required
            radius="md"
            style={{ marginBottom: "10px" }}
          />
          <TextInput
            id="emailAddress"
            label="Email Address"
            type="email"
            required
            radius="md"
            style={{ marginBottom: "10px" }}
          />
          <TextInput
            id="companyName"
            label="Company Name" // New field
            required
            radius="md"
            style={{ marginBottom: "10px" }}
          />
          <TextInput
            id="comments"
            label="Comments"
            required
            radius="md"
            style={{ marginBottom: "10px" }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" radius="md" style={{ marginTop: "10px" }}>
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    </Center>
  );
};

export default App;
export { database };