import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SvgXml } from "react-native-svg"; // Import from react-native-svg

const svgImage = `<svg width="306" height="71" viewBox="0 0 306 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.05" d="M28.8346 20.3636V29.4119H0.30016V20.3636H28.8346ZM7.3449 8.47159H19.0431V55.0703C19.0431 56.643 19.28 57.8494 19.754 58.6896C20.2495 59.5083 20.8958 60.0684 21.6929 60.37C22.49 60.6716 23.3733 60.8224 24.3428 60.8224C25.0753 60.8224 25.7431 60.7686 26.3463 60.6609C26.9711 60.5531 27.445 60.4562 27.7682 60.37L29.7394 69.5153C29.1147 69.7307 28.2206 69.9677 27.0573 70.2262C25.9155 70.4847 24.5151 70.6355 22.8563 70.6786C19.9263 70.7648 17.2873 70.3232 14.939 69.3537C12.5908 68.3627 10.7272 66.8331 9.34846 64.7649C7.99121 62.6967 7.32336 60.1115 7.3449 57.0092V8.47159ZM38.2847 70V20.3636H49.9829V70H38.2847ZM44.1661 13.3189C42.3134 13.3189 40.7192 12.7049 39.3835 11.4769C38.0478 10.2274 37.3799 8.73011 37.3799 6.98508C37.3799 5.21851 38.0478 3.72123 39.3835 2.49325C40.7192 1.24372 42.3134 0.618961 44.1661 0.618961C46.0404 0.618961 47.6346 1.24372 48.9488 2.49325C50.2845 3.72123 50.9524 5.21851 50.9524 6.98508C50.9524 8.73011 50.2845 10.2274 48.9488 11.4769C47.6346 12.7049 46.0404 13.3189 44.1661 13.3189ZM83.3302 70.9695C78.3752 70.9695 74.1204 69.8815 70.5657 67.7056C67.0325 65.5297 64.3073 62.5244 62.3899 58.6896C60.4941 54.8333 59.5461 50.3954 59.5461 45.3757C59.5461 40.3345 60.5156 35.8858 62.4545 32.0295C64.3934 28.1516 67.1295 25.1355 70.6626 22.9812C74.2173 20.8053 78.4183 19.7173 83.2656 19.7173C87.2942 19.7173 90.8597 20.4606 93.962 21.9471C97.0858 23.412 99.5741 25.491 101.427 28.1839C103.28 30.8553 104.335 33.9792 104.594 37.5554H93.4126C92.9602 35.1641 91.883 33.1713 90.1811 31.5771C88.5007 29.9613 86.2494 29.1534 83.4272 29.1534C81.0358 29.1534 78.9353 29.7997 77.1257 31.0923C75.316 32.3634 73.9049 34.1946 72.8924 36.5859C71.9014 38.9773 71.4059 41.8426 71.4059 45.1818C71.4059 48.5642 71.9014 51.4725 72.8924 53.907C73.8834 56.3198 75.2729 58.1834 77.061 59.4975C78.8707 60.7901 80.9927 61.4364 83.4272 61.4364C85.1507 61.4364 86.691 61.1133 88.0483 60.467C89.4271 59.7991 90.5796 58.8404 91.506 57.5909C92.4324 56.3414 93.0679 54.8226 93.4126 53.0344H104.594C104.314 56.546 103.28 59.6591 101.491 62.3736C99.7033 65.0665 97.2689 67.1778 94.1882 68.7074C91.1075 70.2154 87.4881 70.9695 83.3302 70.9695ZM124.53 54.424L124.498 40.3022H126.372L144.21 20.3636H157.88L135.938 44.794H133.514L124.53 54.424ZM113.866 70V3.81818H125.564V70H113.866ZM145.018 70L128.86 47.4116L136.745 39.1712L159.011 70H145.018ZM185.273 70.9695C180.296 70.9695 175.998 69.9354 172.379 67.8672C168.781 65.7775 166.013 62.826 164.074 59.0128C162.135 55.178 161.166 50.6647 161.166 45.4727C161.166 40.3668 162.135 35.8858 164.074 32.0295C166.034 28.1516 168.77 25.1355 172.282 22.9812C175.794 20.8053 179.919 19.7173 184.659 19.7173C187.718 19.7173 190.605 20.2128 193.319 21.2038C196.055 22.1733 198.468 23.6813 200.558 25.728C202.669 27.7746 204.328 30.3814 205.535 33.5483C206.741 36.6937 207.344 40.4422 207.344 44.794V48.381H166.659V40.4961H196.131C196.109 38.2556 195.625 36.2628 194.677 34.5178C193.729 32.7512 192.404 31.3616 190.702 30.3491C189.021 29.3365 187.061 28.8303 184.82 28.8303C182.429 28.8303 180.329 29.4119 178.519 30.5753C176.709 31.7171 175.298 33.2251 174.286 35.0994C173.295 36.9522 172.788 38.988 172.767 41.207V48.0902C172.767 50.977 173.295 53.4545 174.35 55.5227C175.406 57.5694 176.882 59.142 178.777 60.2408C180.673 61.3179 182.892 61.8565 185.434 61.8565C187.136 61.8565 188.677 61.6196 190.056 61.1456C191.434 60.6501 192.63 59.9284 193.643 58.9805C194.655 58.0326 195.42 56.8584 195.937 55.4581L206.859 56.6861C206.17 59.5729 204.856 62.0935 202.917 64.2479C201 66.3807 198.544 68.0395 195.549 69.2244C192.555 70.3878 189.129 70.9695 185.273 70.9695ZM241.693 20.3636V29.4119H213.159V20.3636H241.693ZM220.204 8.47159H231.902V55.0703C231.902 56.643 232.139 57.8494 232.613 58.6896C233.108 59.5083 233.755 60.0684 234.552 60.37C235.349 60.6716 236.232 60.8224 237.201 60.8224C237.934 60.8224 238.602 60.7686 239.205 60.6609C239.83 60.5531 240.304 60.4562 240.627 60.37L242.598 69.5153C241.973 69.7307 241.079 69.9677 239.916 70.2262C238.774 70.4847 237.374 70.6355 235.715 70.6786C232.785 70.7648 230.146 70.3232 227.798 69.3537C225.449 68.3627 223.586 66.8331 222.207 64.7649C220.85 62.6967 220.182 60.1115 220.204 57.0092V8.47159ZM261.678 3.81818L276.252 28.0547H276.77L291.408 3.81818H305.078L284.687 36.9091L305.401 70H291.505L276.77 45.9251H276.252L261.517 70H247.686L268.594 36.9091L247.944 3.81818H261.678Z" fill="white"/>
</svg>
`;

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <View style={styles.container}>
      <SvgXml xml={svgImage} width="100%" height={100} />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Register</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Name"
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Email"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Phone Number"
          onChangeText={setPhoneNumber}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="white"
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  svgContainer: {
    marginVertical: 20, // Add a top margin
  },
  titleContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  titleText: {
    color: "white",
    fontSize: 24,
    marginTop: 50,
  },
  formContainer: {
    marginTop: 30, // Adjust margin here
  },
  input: {
    backgroundColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    height: 69,
    marginBottom: 10,
    padding: 10,
    color: "white",
    fontSize: 16,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 69,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
  },
});
