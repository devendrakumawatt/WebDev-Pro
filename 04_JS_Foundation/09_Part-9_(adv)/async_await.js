function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: "dev", url: "https://www.dev.in" });
      }, 3000);
    });
  }
  
  async function getUserData() {
    try {
      console.log("fetching user data...");
      const userData = await fetchUserData();
      console.log("user data fetched successfully");
  
      console.log("user data: ", userData);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }
  
  getUserData();
  