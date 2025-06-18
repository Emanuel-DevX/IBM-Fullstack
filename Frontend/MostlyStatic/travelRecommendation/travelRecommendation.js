async function fetchAndDisplayResults(keyword) {
  const resultDiv = document.getElementById("resultContainer");
  resultDiv.innerHTML = "";

  try {
    const response = await fetch("travel_recommendation_api.json");
    const data = await response.json();

    keyword = keyword.toLowerCase();

    const matches = [];

    // Search countries
    for (const country of data.countries) {
      if (country.name.toLowerCase().includes(keyword)) {
        for (const city of country.cities) {
          matches.push({ ...city });
        }
      }
    }

    // Search beaches
    if (keyword.includes("beach")) {
      matches.push(...data.beaches);
    }

    // Search temples
    if (keyword.includes("temple")) {
      matches.push(...data.temples);
    }

    if (matches.length === 0) {
      resultDiv.innerHTML = `<p class="text-red-400">No results found for: <strong>${keyword}</strong></p>`;
      return;
    }

    // Render results
    for (const place of matches) {
      const localTime = getLocalTime(
        place.timezone || inferTimezone(place.name)
      );
      const card = document.createElement("div");
      card.className =
        "bg-black/60 rounded-lg overflow-hidden shadow-lg mb-6 p-4";

      card.innerHTML = `
          <img src="${place.imageUrl}" alt="${
        place.name
      }" class="w-full h-64 object-cover rounded" />
          <h3 class="text-2xl font-bold mt-4 mb-2 text-white">${place.name}</h3>
          <p class="text-gray-300 mb-2">${place.description}</p>
          <p class="text-blue-400"><strong>Best Season:</strong> ${
            place.bestSeason || "TBD"
          }</p>
          <p class="text-green-400"><strong>Local Time:</strong> ${localTime}</p>
        `;

      resultDiv.appendChild(card);
    }
  } catch (err) {
    console.error("Error fetching or parsing data:", err);
    resultDiv.innerHTML = "An error occurred while fetching travel data.";
  }
}

function getLocalTime(timezone) {
  try {
    const options = {
      timeZone: timezone,
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(new Date());
  } catch {
    return "Timezone not available";
  }
}

function inferTimezone(cityName) {
  const map = {
    Sydney: "Australia/Sydney",
    Melbourne: "Australia/Melbourne",
    Tokyo: "Asia/Tokyo",
    Kyoto: "Asia/Tokyo",
    "Rio de Janeiro": "America/Sao_Paulo",
    "São Paulo": "America/Sao_Paulo",
    "Angkor Wat": "Asia/Phnom_Penh",
    "Taj Mahal": "Asia/Kolkata",
    "Bora Bora": "Pacific/Tahiti",
    "Copacabana Beach": "America/Sao_Paulo",
  };

  for (const key in map) {
    if (cityName.includes(key)) {
      return map[key];
    }
  }

  return "UTC";
}
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("btnSearch");
const clearBtn = document.getElementById("btnClear");

function handleSearchTrigger() {
  const keyword = searchInput.value.trim();
  if (keyword !== "") {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    fetchAndDisplayResults(keyword);
  }
}

searchBtn.addEventListener("click", handleSearchTrigger);

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearchTrigger();
  }
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  document.getElementById("resultContainer").innerHTML = "";
});

document.getElementById("btnClear").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("resultContainer").innerHTML = "";
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();
  const response = document.getElementById("formResponse");

  // Basic validation
  if (!name || !email || !message) {
    response.textContent = "Please fill in all fields.";
    response.className = "text-red-400 mt-2";
    return;
  }

  if (!validateEmail(email)) {
    response.textContent = "Please enter a valid email address.";
    response.className = "text-yellow-400 mt-2";
    return;
  }

  // Simulate success
  response.textContent = `Thank you, ${name}! Your message has been received.`;
  response.className = "text-green-400 mt-2";

  // Clear form fields
  document.getElementById("contactName").value = "";
  document.getElementById("contactEmail").value = "";
  document.getElementById("contactMessage").value = "";
});

// Simple email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
